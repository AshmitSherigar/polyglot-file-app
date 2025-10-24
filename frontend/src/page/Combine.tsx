import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";

const Combine = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-[92vh] w-full flex flex-col items-center justify-center">
      <label
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        htmlFor="input-file"
        className={`w-[500px] h-[300px] p-[20px] bg-white text-center rounded-2xl transition-all ${
          isDragging ? "bg-blue-100 border-blue-400 border-4" : "bg-white border-2 border-gray-300"
        }`}
      >
        <input
          id="input-file"
          multiple
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-gray-600 text-lg">
          {isDragging ? "Drop files here..." : "Drag & drop or click to upload"}
        </p>
      </label>

      {files.length > 0 && (
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          {files.map((file, i) => (
            <div
              key={i}
              className="w-[150px] h-[180px] bg-white shadow-md rounded-xl flex flex-col items-center justify-center border relative"
            >
              <button
                onClick={() => handleRemove(i)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
              >
                <MdOutlineDelete />
              </button>

              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-[80px] h-[80px] object-cover rounded-md"
                />
              ) : (
                <div className="w-[80px] h-[80px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                  <IoDocumentOutline />
                </div>
              )}
              <p className="text-sm font-medium mt-2 truncate w-[120px] text-center">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Combine;
