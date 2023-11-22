import React, { useEffect, useState } from "react";
import TeacherHomeworkTable from "../../components/HomeWorkView/TeacherHomeworkTable";
import axios from "axios";
import { server } from "../../server";
import Header from "../../components/header/Header";
const TeacherView = () => {
  const [homeworkData, setHomeworkData] = useState([]);

  useEffect(() => {
    // Fetch homework data from your API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/api/v1/test`);
        setHomeworkData(response.data);
      } catch (error) {
        console.error("Error fetching homework data:", error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (homeworkId) => {
    // Implement the logic to approve homework
    // You may need to make an API call to update the status
  };

  const handleDeny = async (homeworkId, denialReason) => {
    try {
      console.log(denialReason);
      // Make an API call to update the status of the homework to "denied"
      await axios.put(`${server}/api/v1/homework/1`, {
        status: "denied",
        denialReason: denialReason,
      });

      // Optionally, you can refetch the homework data after denying
      const response = await axios.get(`${server}/api/v1/test`);
      setHomeworkData(response.data);

      // Log denialReason or perform any other action in the parent component
      console.log("Denial Reason in Parent Component:", denialReason);
    } catch (error) {
      console.error("Error denying homework:", error);
    }
  };

  return (
    <div>
      <Header />
      <TeacherHomeworkTable
        data={homeworkData}
        onApprove={handleApprove}
        onDeny={handleDeny}
      />
    </div>
  );
};

export default TeacherView;
