import React from "react";
import { Link } from "react-router-dom";

const SeeHomeworkButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/homework" className="bg-blue-500 text-white p-6 rounded-md">
        See Student Homework
      </Link>
    </div>
  );
};

export default SeeHomeworkButton;
