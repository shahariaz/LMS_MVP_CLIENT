import React from "react";
import html2canvas from "html2canvas";

const ImageModal = ({ imageUrl, onDownload, onClose }) => {
  const handleDownload = () => {
    const node = document.getElementById("image-modal");

    html2canvas(node)
      .then(function (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "screenshot.png";
        link.click();

        if (onDownload) {
          onDownload();
        }
      })
      .catch(function (error) {
        console.error("Error generating image: ", error);
      });
  };

  return (
    <div
      id="image-modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-4 rounded">
        <img
          src={imageUrl}
          alt="Screenshot"
          className="max-w-full max-h-full"
        />
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleDownload}
          >
            Download
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
