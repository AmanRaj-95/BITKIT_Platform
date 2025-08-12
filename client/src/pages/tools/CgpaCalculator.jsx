import React, { useState, useEffect } from "react";

const CgpaCalculator = () => {
  const [selectedSemesters, setSelectedSemesters] = useState(1);
  const [credits, setCredits] = useState(Array(8).fill(""));
  const [gpas, setGpas] = useState(Array(8).fill(""));
  const [displayedCgpa, setDisplayedCgpa] = useState(null);

  const handleSemesterChange = (e) => {
    setSelectedSemesters(parseInt(e.target.value));
    setDisplayedCgpa(null);
  };

  const handleCreditChange = (index, value) => {
    const newCredits = [...credits];
    newCredits[index] = value;
    setCredits(newCredits);
  };

  const handleGpaChange = (index, value) => {
    const newGpas = [...gpas];
    newGpas[index] = value;
    setGpas(newGpas);
  };

  const calculateCgpa = () => {
    let totalCredit = 0;
    let weightedGpa = 0;

    for (let i = 0; i < selectedSemesters; i++) {
      const credit = parseFloat(credits[i]);
      const gpa = parseFloat(gpas[i]);
      if (!isNaN(credit) && !isNaN(gpa)) {
        totalCredit += credit;
        weightedGpa += credit * gpa;
      }
    }

    if (totalCredit > 0) {
      const result = (weightedGpa / totalCredit).toFixed(2);
      animateCgpa(result);
    }
  };

  const animateCgpa = (targetValue) => {
    let start = 0;
    const end = parseFloat(targetValue);
    const step = (end - start) / 30;
    let current = start;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setDisplayedCgpa(current.toFixed(2));
    }, 20);
  };

  const clearInputs = () => {
    setCredits(Array(8).fill(""));
    setGpas(Array(8).fill(""));
    setDisplayedCgpa(null);
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-8 bg-slate-800 text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">CGPA Calculator</h1>

        <div className="mb-6 text-center">
          <label className="mr-2 text-lg">Select number of semesters:</label>
          <select
            className="p-2 rounded-lg text-black"
            value={selectedSemesters}
            onChange={handleSemesterChange}
          >
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Upto Semester {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(selectedSemesters)].map((_, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-600 p-4 rounded-lg shadow flex flex-col"
            >
              <h3 className="font-semibold mb-2">Semester {index + 1}</h3>
              <input
                type="number"
                placeholder="Credit"
                value={credits[index]}
                onChange={(e) => handleCreditChange(index, e.target.value)}
                className="mb-2 p-2 rounded text-black"
              />
              <input
                type="number"
                placeholder="GPA"
                step="0.01"
                value={gpas[index]}
                onChange={(e) => handleGpaChange(index, e.target.value)}
                className="p-2 rounded text-black"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={calculateCgpa}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg mr-4"
          >
            Calculate CGPA
          </button>
          <button
            onClick={clearInputs}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>

        {displayedCgpa && (
          <div className="mt-8 text-center text-xl font-bold text-yellow-400">
            Overall CGPA: {displayedCgpa}
          </div>
        )}
      </div>
    </div>
  );
};

export default CgpaCalculator;
