import { useState } from "react";

export default function UploadProof() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Select a file");

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("Login first");

    const reader = new FileReader();

    reader.onload = () => {
      const key = `records_${user.email}`;

      let records =
        JSON.parse(localStorage.getItem(key)) || [];

      if (records.length === 0) {
        alert("No records found");
        return;
      }

      // attach proof to latest record
      records[records.length - 1].proof = {
        name: file.name,
        data: reader.result,
      };

      localStorage.setItem(key, JSON.stringify(records));

      // refresh dashboard
      window.dispatchEvent(new Event("storage"));

      alert("Uploaded successfully!");

      setFile(null);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="card upload-card">
      <h3>📂 Upload Disposal Proof</h3>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="file-name">
          {file.name}
        </p>
      )}

      <button
        className="upload-btn"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}