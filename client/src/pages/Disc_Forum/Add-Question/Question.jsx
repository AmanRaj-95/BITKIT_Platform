
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance"; // Adjust the import based on your project structure

function Question() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);

  const navigate = useNavigate();
  const { forumUser } = useSelector((state) => state.users);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!forumUser?._id) {
      message.error("You must be logged in to ask a question.");
      return;
    }

    if (title.trim() === "" || body.trim() === "") {
      message.warning("Title and body cannot be empty.");
      return;
    }

    const questionData = {
      title,
      body,
      tags: tag,
      user: forumUser._id,
    };

    try {
      await axiosInstance.post("/forum/questions", questionData);
      message.success("Question added successfully!");
      navigate("/disc_forum_homepage");
    } catch (err) {
      console.error(err);
      message.error("Failed to post question. Please try again.");
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen p-5 bg-gray-100 text-gray-800 dark:bg-[#0f172a] dark:text-gray-100">
      <div className="w-full max-w-4xl p-6 flex flex-col gap-6 bg-white dark:bg-[#1e293b] rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Ask a public question
        </h1>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Title</h3>
          <small className="text-gray-500 dark:text-gray-400">
            Be specific and imagine you’re asking a question to another person
          </small>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="e.g. Write your question or query here. Be respectful - avoid rude or irrelevant comments "
            className="p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Body</h3>
          <small className="text-gray-500 dark:text-gray-400">
            Include all the information someone would need to answer your question
          </small>
          <ReactQuill
            value={body}
            onChange={setBody}
            theme="snow"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600"
            style={{ minHeight: "200px" }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-2 mt-12 md:mt-4">
          <h3 className="text-lg font-medium">Tags</h3>
          <small className="text-gray-500 dark:text-gray-400">
            Add up to 5 tags to describe what your question is about
          </small>
          <TagsInput
            value={tag}
            onChange={(newTags) => {
              const normalized = newTags.map((t) => t.trim().toLowerCase());
              setTag(normalized);
            }}
            name="tags"
            placeHolder="Press enter to add new tag"
            classNames={{
              input:
                "p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100",
              tag: "bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1 dark:bg-blue-800 dark:text-white",
            }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-200"
          >
            Add your question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
