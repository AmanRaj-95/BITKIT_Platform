import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Index() {
  const [questions, setQuestions] = useState([]);
  const { forumUser } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axiosInstance.get("/forum/questions");
        setQuestions(res.data.reverse());
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  const handleDeleteFromState = (id) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  return (
    <div className="stack-index dark:bg-gray-900 dark:text-white min-h-screen w-full">
      {/* ✅ Wrap sidebar and main together */}
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Main questions={questions} onDelete={handleDeleteFromState} />
        </div>
      </div>
    </div>
  );
}

export default Index;
