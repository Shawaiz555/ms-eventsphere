// ImageUpload.js
"use client";
export default function ImageUpload({ onUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file); // Pass the file back to the parent component
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="block w-full text-sm text-gray- 500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
    />
  );
}