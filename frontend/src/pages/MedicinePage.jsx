import React, { useState } from 'react';

const MedicinePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      alert(`Uploaded: ${selectedFile.name}`);
      // Add logic to handle file submission (e.g., API call)
    } else {
      alert('Please upload a file');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Upload Prescription Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="border border-gray-300 rounded p-2"
          />
          {selectedFile && (
            <div className="text-sm text-gray-500">
              Selected file: {selectedFile.name}
            </div>
          )}
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Take Loose Medicine Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Take Loose Medicine</h2>
        <p className="text-gray-700 mb-4">
          Need specific medicines in loose quantities? Click below to proceed.
        </p>
        <button
          className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
          onClick={() => alert('Take Loose Medicine functionality coming soon!')}
        >
          Take Loose Medicine
        </button>
      </div>
    </div>
  );
};

export default MedicinePage;

