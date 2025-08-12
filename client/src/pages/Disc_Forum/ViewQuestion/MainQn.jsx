
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
import { Avatar } from "@mui/material";
import ReactQuill from "react-quill";
import ReactHtmlParser from "html-react-parser";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "react-quill/dist/quill.snow.css";
import { message, Modal } from "antd";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";

dayjs.extend(relativeTime);

function MainQn() {
  const [show, setShow] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [comments, setComments] = useState("");

  const { forumUser } = useSelector((state) => state.users);
  const id = new URLSearchParams(window.location.search).get("q");

  const hasIncrementedView = useRef(false);

  const getQuestionDetails = async () => {
    try {
      const res = await axiosInstance.get(`/forum/questions/${id}`);
      setQuestionData(Array.isArray(res.data) ? res.data[0] : res.data);
    } catch (err) {
      console.error("Error fetching question details:", err);
    }
  };

  useEffect(() => {
    getQuestionDetails();
    if (!hasIncrementedView.current) {
      fetch(`/api/v1/forum/questions/${id}/view`, { method: "PUT" }).catch((err) =>
        console.error("Error updating views", err)
      );
      hasIncrementedView.current = true;
    }
  }, [id]);

  const handleQuillChange = (value) => setAnswer(value);

  const handleSubmit = async () => {
    if (!answer || !forumUser) return;

    const body = {
      question_id: id,
      answer,
      user: forumUser._id,
    };

    try {
      await axiosInstance.post("/forum/answers", body);
      message.success("Answer added successfully!");
      setAnswer("");
      getQuestionDetails();
    } catch (err) {
      console.error("Error submitting answer:", err);
      message.error("Failed to add answer");
    }
  };

  const handleComments = async () => {
    if (!comments || !forumUser) return;

    const body = {
      question_id: id,
      comment: comments,
      user: forumUser._id,
    };

    try {
      await axiosInstance.post(`/forum/comments/${id}`, body);
      message.success("Comment added successfully!");
      setComments("");
      setShow(false);
      getQuestionDetails();
    } catch (err) {
      console.error("Error submitting comment:", err);
      message.error("Failed to add comment");
    }
  };

  const handleVote = async (type, targetId, isAnswer = false) => {
    if (!forumUser?._id) return message.error("Please log in to vote");

    const endpoint = isAnswer
      ? `/forum/answers/${targetId}/vote`
      : `/forum/questions/${targetId}/vote`;

    try {
      await axiosInstance.post(endpoint, {
        voteType: type,
        userId: forumUser._id,
      });
      getQuestionDetails();
    } catch (err) {
      console.error("Vote failed:", err.response?.data || err);
      message.error(err.response?.data?.message || "Failed to vote.");
    }
  };

  const handleDeleteComment = (commentId) => {
    Modal.confirm({
      title: "Delete Comment",
      content: "Are you sure you want to delete this comment?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: async () => {
        try {
          await axiosInstance.delete(`/forum/comments/${commentId}`, {
            data: { userId: forumUser?._id }
          });
          message.success("Comment deleted");
          getQuestionDetails();
        } catch (err) {
          console.error("Delete comment failed:", err);
          message.error("Failed to delete comment");
        }
      },
    });
  };

  const handleDeleteAnswer = (answerId) => {
    Modal.confirm({
      title: "Delete Answer",
      content: "Are you sure you want to delete this answer?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: async () => {
        try {
          await axiosInstance.delete(`/forum/answers/${answerId}`, {
            data: { userId: forumUser?._id }
          });
          message.success("Answer deleted");
          getQuestionDetails();
        } catch (err) {
          console.error("Delete answer failed:", err);
          message.error("Failed to delete answer");
        }
      },
    });
  };

  const getLastActivityTime = () => {
    if (!questionData) return "Unknown";
    const timestamps = [];

    if (questionData.createdAt) timestamps.push(new Date(questionData.createdAt));
    questionData.answerDetails?.forEach((a) => a.createdAt && timestamps.push(new Date(a.createdAt)));
    questionData.comments?.forEach((c) => c.createdAt && timestamps.push(new Date(c.createdAt)));

    const lastActivity = new Date(Math.max(...timestamps.map((t) => t.getTime())));
    return dayjs(lastActivity).fromNow();
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 break-words max-w-full">
          {questionData?.title}
        </h2>
        <Link to="/add-question">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Ask Question
          </button>
        </Link>
      </div>

      <div className="mb-4 flex flex-wrap gap-6 text-sm text-gray-700 dark:text-gray-300">
        <p>{new Date(questionData?.createdAt).toLocaleString()}</p>
        <p>
          Active <span className="font-semibold">{getLastActivityTime()}</span>
        </p>
        <p>
          Viewed <span className="font-semibold">{questionData?.views || 0} times</span>
        </p>
      </div>

      {/* QUESTION BOX */}
      <div className="w-full mb-8 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex gap-4 overflow-x-auto break-words">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <Tooltip title="Upvote" arrow>
            <ThumbUpAltOutlinedIcon
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={() => handleVote("upvote", questionData?._id)}
            />
          </Tooltip>
          <p className="text-lg font-medium">{questionData?.votes || 0}</p>
          <Tooltip title="Downvote" arrow>
            <ThumbDownAltOutlinedIcon
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={() => handleVote("downvote", questionData?._id)}
            />
          </Tooltip>
        </div>

        <div className="flex-1 w-full max-w-full overflow-x-auto break-words whitespace-pre-wrap">
          {questionData?.body ? ReactHtmlParser(questionData.body) : "Loading..."}
          <div className="mt-4 flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
            <small>📅 Posted on {new Date(questionData?.createdAt).toLocaleString()}</small>
            <div className="flex items-center gap-2 mt-1">
              <Avatar src={questionData?.userDetails?.photoURL} />
              <p>{questionData?.userDetails?.displayName || "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMMENTS */}
      <div className="mb-6">
        {questionData?.comments?.map((c) => (
          <div key={c._id} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md mb-2 text-sm break-words">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="mr-1">{c.comment}</span>
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 font-medium px-1.5 py-0.5 rounded">
                  - {c.userDetails?.displayName || "Anonymous"}
                </span>
                <small className="ml-2">
                  {new Date(c.created_at).toLocaleString()}
                  {forumUser?._id === c.user && (
                    <Tooltip title="Delete comment" arrow>
                      <DeleteOutlineIcon
                        className="text-red-500 cursor-pointer ml-2 text-sm"
                        onClick={() => handleDeleteComment(c._id)}
                      />
                    </Tooltip>
                  )}
                </small>
              </div>
            </div>
          </div>
        ))}

        <p onClick={() => setShow(!show)} className="text-blue-600 cursor-pointer text-sm">Add a comment</p>
        {show && (
          <div className="mt-2">
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Add your comment"
            ></textarea>
            <button
              className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleComments}
            >
              Add comment
            </button>
          </div>
        )}
      </div>

      {/* ANSWERS */}
      <div>
        <p className="text-xl font-medium mb-4">{questionData?.answerDetails?.length} Answer(s)</p>
        {questionData?.answerDetails?.map((a) => (
          <div key={a._id} className="mb-4 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 p-4 flex gap-4 overflow-x-auto">
            <div className="flex flex-col items-center gap-2 shrink-0">
              <Tooltip title="Upvote" arrow>
                <ThumbUpAltOutlinedIcon
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  onClick={() => handleVote("upvote", a._id, true)}
                />
              </Tooltip>
              <p className="text-lg font-medium">{a?.votes || 0}</p>
              <Tooltip title="Downvote" arrow>
                <ThumbDownAltOutlinedIcon
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  onClick={() => handleVote("downvote", a._id, true)}
                />
              </Tooltip>
            </div>
            <div className="flex-1 w-full max-w-full overflow-x-auto break-words whitespace-pre-wrap">
              <p>{ReactHtmlParser(a.answer)}</p>
              <div className="mt-4 flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                <small>💡 Answered on {new Date(a.created_at).toLocaleString()}</small>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar src={a.userDetails?.photoURL} />
                  <p>{a.userDetails?.displayName || "Unknown"}</p>
                  {forumUser?._id === a.user && (
                    <Tooltip title="Delete answer" arrow>
                      <DeleteOutlineIcon
                        className="text-red-500 cursor-pointer text-sm"
                        onClick={() => handleDeleteAnswer(a._id)}
                      />
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ANSWER INPUT */}
      <div className="mt-10">
        <h3 className="text-xl font-medium mb-2">Your Answer</h3>
        <ReactQuill
          value={answer}
          onChange={handleQuillChange}
          className="bg-white dark:bg-gray-900 "
          theme="snow"
          style={{ height: "200px" }}
        />
        <button
          className="mt-20 md:mt-12 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Post your Answer
        </button>
      </div>
    </div>
  );
}

export default MainQn;
