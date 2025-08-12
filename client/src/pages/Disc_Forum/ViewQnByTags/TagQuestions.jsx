

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AllQuestions from "../LandingPg/AllQuestions";
import axiosInstance from "../../../utils/axiosInstance";

const TagQuestions = () => {
  const { tag } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestionsByTag = async () => {
      try {
        const res = await axiosInstance.get(`/forum/questions/tag/${tag}`);
        setQuestions(res.data || []);
      } catch (err) {
        console.error("Error fetching questions by tag:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionsByTag();
  }, [tag]);

  return (
    <div className="px-5 py-10 max-w-6xl mx-auto dark:bg-gray-900 dark:text-gray-200">
      <h2 className="text-3xl font-semibold mb-8 text-blue-800 dark:text-blue-300 text-center">
        Questions tagged with <span className="italic">"{tag}"</span>
      </h2>

      {loading ? (
        <div className="text-center text-gray-600 dark:text-gray-400">Loading questions...</div>
      ) : questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((question) => (
            <div
              key={question._id}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
            >
              <AllQuestions question={question} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
          No questions found with the tag <strong>{tag}</strong>.
        </p>
      )}
    </div>
  );
};

export default TagQuestions;
