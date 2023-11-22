import React, { useState } from "react";
import { useTable } from "react-table";
import ImageModal from "../../components/imageModel/imageModel";

const TeacherHomeworkTable = ({ data, onApprove, onDeny }) => {
  const [showDenyModal, setShowDenyModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedHomeworkId, setSelectedHomeworkId] = useState(null);
  const [denialReason, setDenialReason] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDenyModal = () => {
    setShowDenyModal(true);
    setShowImageModal(false);
  };

  const handleImageModal = (homeworkId, imageUrl) => {
    console.log(homeworkId, imageUrl);
    setSelectedHomeworkId(homeworkId);
    setSelectedImage(imageUrl);
    setShowImageModal(true);
    setShowDenyModal(false);
  };

  const handleDenyConfirm = () => {
    // Check if denialReason is not empty
    if (!denialReason.trim()) {
      alert("Please provide a denial reason.");
      return;
    }
    console.log(denialReason);
    // Perform the denial action with the selectedHomeworkId and denialReason
    onDeny(selectedHomeworkId, denialReason);

    // Reset state
    setSelectedHomeworkId(null);
    setDenialReason("");
    setShowDenyModal(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Student",
        accessor: "student.name",
      },
      {
        Header: "Course",
        accessor: "lesson.unit.course.title",
      },
      {
        Header: "Lesson",
        accessor: "lesson.title",
      },
      {
        Header: "Screenshot",
        accessor: "picture",
        Cell: ({ cell }) => (
          <div>
            <img
              src={cell.value}
              alt="Screenshot"
              className="w-12 h-12 object-cover cursor-pointer"
              onClick={() =>
                handleImageModal(cell.row.original._id, cell.value)
              }
            />
          </div>
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="space-x-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              onClick={() => onApprove(row)}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => handleDenyModal(row.original._id)}
            >
              Deny
            </button>
          </div>
        ),
      },
    ],
    [onApprove]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="pt-10">
      <table
        {...getTableProps()}
        className="w-full border-collapse border rounded-lg overflow-hidden pt-10"
      >
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 text-center font-bold border-b "
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-gray-300 items-center justify-center"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-2 px-4 text-center border-b  " // Add flex and items-center
                  >
                    {cell.column.id === "picture" ? (
                      <img
                        src={cell.value}
                        alt="Screenshot"
                        className="w-12 h-12 object-cover cursor-pointer flex items-center justify-center"
                        onClick={() =>
                          handleImageModal(cell.row.original._id, cell.value)
                        }
                      />
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showDenyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 min-w-full ">
          <div className="bg-white p-4 rounded sm:w-96 md:w-128 lg:w-250">
            <label className="block mb-2 font-bold text-gray-800">
              Denial Reason:
            </label>
            <textarea
              value={denialReason}
              onChange={(e) => setDenialReason(e.target.value)}
              className="w-full h-30 w-15 p-2 border border-gray-300 rounded"
            ></textarea>
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleDenyConfirm}
              >
                Confirm Denial
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
                onClick={() => setShowDenyModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showImageModal && (
        <ImageModal
          imageUrl={selectedImage}
          onDownload={() => {
            // Handle download action here
            // You can use the download logic or trigger the download button click event
            alert("Download");
          }}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
};

export default TeacherHomeworkTable;
