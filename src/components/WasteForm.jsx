// import { useState } from "react";

// export default function WasteForm({ onSubmit }) {
//   const [type, setType] = useState("");
//   const [condition, setCondition] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ type, condition });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="card">
//       <h3>⚙ Select E-Waste</h3>

//       <select onChange={(e) => setType(e.target.value)} required>
//         <option value="">Select Type</option>
//         <option value="phone">📱 Phone</option>
//         <option value="laptop">💻 Laptop</option>
//         <option value="charger">🔌 Charger</option>
//       </select>

//       <select onChange={(e) => setCondition(e.target.value)} required>
//         <option value="">Condition</option>
//         <option value="working">Working</option>
//         <option value="damaged">Damaged</option>
//       </select>

//       <button type="submit">Generate Instructions</button>
//     </form>
//   );
// }

import { useState } from "react";

export default function WasteForm({ onSubmit }) {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!type || !condition) {
      alert("Please select all fields");
      return;
    }

    onSubmit({ type, condition });
  };

  return (
    <div className="card">
      <h3>⚙ Select E-Waste</h3>

      <form onSubmit={handleSubmit}>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="charger">Charger</option>
        </select>

        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="">Condition</option>
          <option value="working">Working</option>
          <option value="damaged">Damaged</option>
        </select>

        <button type="submit" style={{ marginTop: "10px" }}>
          Generate Instructions
        </button>
      </form>
    </div>
  );
}