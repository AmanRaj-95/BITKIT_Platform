
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import parse from "html-react-parser";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import { Modal, message } from "antd"; // Add Modal here


function AllQuestions({ question, onDelete }) {
  const { forumUser } = useSelector((state) => state.users);
  // const navigate = useNavigate();

  const handleDeleteQuestion = () => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you really want to delete this question? This action cannot be undone.",
      okText: "Yes, delete it",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await axiosInstance.delete(`/forum/questions/${question._id}`, {
            data: { userId: forumUser?._id },
          });
          message.success("Question deleted successfully.");
          if (onDelete) onDelete(question._id);
        } catch (err) {
          console.error("Delete failed:", err);
          message.error("You are not authorized to delete this question.");
        }
      },
    });
  };


  const truncateString = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  const tags = Array.isArray(question?.tags) ? question.tags : [];

  return (
    <div className="w-full py-6 border-b border-gray-200 dark:border-gray-700 bg-[#fafbfc] hover:bg-[#f0f2f6] dark:bg-gray-900 dark:hover:bg-gray-800 transition duration-200 text-black dark:text-white">
  <div className="flex flex-col md:flex-row justify-between w-full gap-5 md:gap-7 items-start px-4 md:px-0">

    {/* Votes / Answers / Views Column */}
    <div className="flex flex-row md:flex-col items-center justify-between md:items-center md:min-w-[90px] md:pr-7 rounded-md px-2 py-2 shadow-sm w-full md:w-auto">
      {forumUser?._id === question?.userDetails?._id && (
        <button
          onClick={handleDeleteQuestion}
          className="text-blue-900 hover:text-red-800 mb-2 md:mb-4"
          title="Delete this question"
        >
          <DeleteOutlineIcon />
        </button>
      )}

      <div className="flex flex-row md:flex-col items-center text-sm gap-3 md:gap-2 w-full justify-around">
        {/* Votes */}
        <div className="flex flex-col items-center mb-0 md:mb-2 rounded-md px-2 md:px-3 py-1 md:py-2 min-w-[60px] shadow-sm">
          <p className="text-base md:text-lg font-semibold text-blue-600 m-0">
            {question?.votes}
          </p>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            votes
          </span>
        </div>

        {/* Answers */}
        <div className="flex flex-col items-center mb-0 md:mb-2 rounded-md px-2 md:px-3 py-1 md:py-2 min-w-[60px] shadow-sm">
          <p className="text-base md:text-lg font-semibold text-blue-600 m-0">
            {question?.answerDetails?.length || 0}
          </p>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            answers
          </span>
        </div>

        {/* Views */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {question?.views || 0} Views
        </div>
      </div>
    </div>

    {/* Main Content Column */}
    <div className="flex flex-col w-full gap-2 mt-4 md:mt-0">
      <Link
        to={`/view-question?q=${question?._id}`}
        className="text-blue-600 text-lg md:text-xl font-bold mb-1 hover:text-blue-800 dark:hover:text-blue-400 break-words"
      >
        {question?.title}
      </Link>

      <div className="w-full text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed break-words">
        {parse(truncateString(question?.body, 200))}
      </div>

      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <p
            key={`${tag}-${index}`}
            className="m-1 px-3 py-1 bg-[#007cd446] dark:bg-[#007cd41a] text-[#004d80] dark:text-blue-300 rounded text-xs md:text-sm"
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Posted By Section */}
      <div className="flex flex-row md:flex-col justify-between md:ml-auto text-right gap-2 md:gap-1 mt-4 px-1">
        <small className="text-gray-500 dark:text-gray-400 text-xs">
          📅 Posted on {new Date(question?.created_at).toLocaleString()}
        </small>
        <div className="flex items-center gap-2 justify-end px-2">
          <Avatar
            src={question?.userDetails?.photoURL || ""}
            className="w-6 h-6 md:w-8 md:h-8 text-xs md:text-sm bg-blue-600 text-white"
          />
          <div className="font-medium text-gray-800 dark:text-gray-100 text-xs md:text-sm">
            {question?.userDetails?.displayName || "Unknown User"}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default AllQuestions;
