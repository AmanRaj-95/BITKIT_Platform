
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axiosInstance.get("/forum/tags");
        if (Array.isArray(res.data)) {
          setTags(res.data);
          setFilteredTags(res.data);
        } else {
          throw new Error("Invalid data format received.");
        }
      } catch (err) {
        console.error("Error fetching tags:", err);
        setError("Failed to load tags. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    const filtered = tags.filter((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTags(filtered);
  }, [searchTerm, tags]);

  if (loading)
    return (
      <div className="px-5 py-10 max-w-6xl mx-auto dark:bg-gray-900 dark:text-gray-200">
        Loading tags...
      </div>
    );

  if (error)
    return (
      <div className="px-5 py-10 max-w-6xl mx-auto text-red-500 dark:text-red-400 dark:bg-gray-900">
        {error}
      </div>
    );

  return (
    <div className="px-5 py-10 max-w-6xl mx-auto mt-5 dark:bg-gray-900">
      {/* Header and Search */}
      <div className="flex flex-row items-center justify-center mb-10 relative">
        <h2 className="text-3xl font-semibold text-[#19376d] dark:text-gray-200 text-center">
          Explore Tags
        </h2>
        <input
          type="text"
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="absolute right-0 w-[300px] px-4 py-2.5 text-base border border-gray-300 rounded-lg bg-white shadow-sm outline-none transition-all duration-200 focus:border-[#19376d] focus:ring-2 focus:ring-[#19376d]/10 placeholder:text-gray-500 placeholder:italic dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
        />
      </div>

      {/* Tag List */}
      <div className="flex flex-wrap gap-5 justify-center">
        {filteredTags.length > 0 ? (
          filteredTags.map((tag, index) => (
            <div
              key={`${tag}-${index}`}
              className={`inline-flex items-center justify-center px-4 py-3 bg-[#e6f0ff] text-[#0b2447] font-medium text-sm rounded-lg cursor-pointer transition-all duration-200 shadow-sm flex-shrink-0 hover:bg-[#cce0ff] hover:scale-105 hover:shadow-md dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 ${
                index % 8 === 5 || index % 8 === 6 || index % 8 === 7
                  ? "min-w-[120px]"
                  : "min-w-fit"
              }`}
              onClick={() => navigate(`/tags/${tag}`)}
            >
              {tag}
            </div>
          ))
        ) : (
          <div className="text-lg text-gray-500 dark:text-gray-400 text-center py-5 w-full">
            No matches found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Tags;
