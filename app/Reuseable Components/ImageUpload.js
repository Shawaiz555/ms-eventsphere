"use client";
import { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md ">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative w-full h-64 py-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        {!selectedImage ? (
          <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 16l6-6m0 0l6 6m-6-6v12M21 21H3"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              Drag & Drop or{' '}
              <span className="text-blue-500 underline">Browse Files</span>
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-cover w-full h-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 px-2 py-1 text-sm text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
