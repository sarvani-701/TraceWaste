// import { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function TrackingDashboard() {
//   const [records, setRecords] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   const loadRecords = () => {
//     if (!user) return;

//     const stored =
//       JSON.parse(
//         localStorage.getItem(`records_${user.email}`)
//       ) || [];

//     setRecords(stored);
//   };

//   useEffect(() => {
//     loadRecords();
//     window.addEventListener("storage", loadRecords);

//     return () => {
//       window.removeEventListener("storage", loadRecords);
//     };
//   }, []);

//   const deleteRecord = (id) => {
//     const key = `records_${user.email}`;
//     const updated = records.filter((r) => r.id !== id);

//     localStorage.setItem(key, JSON.stringify(updated));
//     setRecords(updated);
//   };

//   const clearAll = () => {
//     if (window.confirm("Clear all records?")) {
//       const key = `records_${user.email}`;
//       localStorage.removeItem(key);
//       setRecords([]);
//     }
//   };

//   const totalCredits = records.reduce(
//     (sum, r) => sum + (r.credits || 0),
//     0
//   );

//   const chartData = ["phone", "laptop", "charger"].map(
//     (type) => ({
//       name: type.toUpperCase(),
//       count: records.filter((r) => r.item === type).length,
//     })
//   );

//   return (
//     <>
//       <div className="card dashboard-card">
//         {/* HEADER */}
//         <div className="dashboard-header">
//           <h3>📊 Tracking Dashboard</h3>

//           <div className="stats">
//             <span>Total Items: {records.length}</span>
//             <span>🎁 Credits: {totalCredits}</span>
//           </div>

//           {records.length > 0 && (
//             <button
//               onClick={clearAll}
//               className="clear-btn"
//             >
//               Clear All Records
//             </button>
//           )}
//         </div>

//         {/* REWARD */}
//         {totalCredits >= 100 && (
//           <div className="reward-box">
//             🎉 You unlocked a reward!
//             <p>
//               Use code: <b>EWASTE10</b>
//             </p>
//           </div>
//         )}

//         {/* CHART */}
//         <div className="chart-box">
//           <ResponsiveContainer>
//             <BarChart data={chartData}>
//               <XAxis dataKey="name" stroke="#94a3b8" />
//               <YAxis stroke="#94a3b8" />
//               <Tooltip />
//               <Bar
//                 dataKey="count"
//                 fill="#22c55e"
//                 radius={[6, 6, 0, 0]}
//                 barSize={65}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* RECORDS */}
//         {records.length === 0 ? (
//           <p style={{ marginTop: "10px" }}>
//             No records yet...
//           </p>
//         ) : (
//           <div className="record-list">
//             {records.map((r) => (
//               <div key={r.id} className="record-row">
//                 {/* LEFT */}
//                 <div className="record-info">
//                   <div className="title">
//                     {r.item.toUpperCase()}

//                     <span
//                       className={
//                         r.condition === "damaged"
//                           ? "badge red"
//                           : "badge green"
//                       }
//                     >
//                       {r.condition}
//                     </span>
//                   </div>

//                   <div className="meta">{r.date}</div>

//                   <div className="credits">
//                     🎁 +{r.credits} credits
//                   </div>

//                   <div className="vendor">{r.vendor}</div>

//                   {/* ✅ PROOF IMAGE */}
//                   {r.proof && r.proof.data && (
//                     <div className="proof">
//                       <p className="file-name">
//                         {r.proof.name}
//                       </p>

//                       <img
//                         src={r.proof.data}
//                         alt="proof"
//                         onClick={() =>
//                           setSelectedImage(r.proof.data)
//                         }
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* RIGHT */}
//                 <button
//                   onClick={() => deleteRecord(r.id)}
//                   className="delete-btn"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ✅ MODAL */}
//       {selectedImage && (
//         <div
//           className="modal"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <span
//               className="close-btn"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✖
//             </span>

//             <img src={selectedImage} alt="proof" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TrackingDashboard() {
  const [records, setRecords] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadRecords = () => {
    if (!user) return;

    const stored =
      JSON.parse(
        localStorage.getItem(`records_${user.email}`)
      ) || [];

    setRecords(stored);
  };

  useEffect(() => {
    loadRecords();
    window.addEventListener("storage", loadRecords);

    return () => {
      window.removeEventListener("storage", loadRecords);
    };
  }, []);

  const deleteRecord = (id) => {
    const key = `records_${user.email}`;
    const updated = records.filter((r) => r.id !== id);

    localStorage.setItem(key, JSON.stringify(updated));
    setRecords(updated);
  };

  const clearAll = () => {
    if (window.confirm("Clear all records?")) {
      const key = `records_${user.email}`;
      localStorage.removeItem(key);
      setRecords([]);
    }
  };

  const totalCredits = records.reduce(
    (sum, r) => sum + (r.credits || 0),
    0
  );

  const chartData = ["phone", "laptop", "charger"].map(
    (type) => ({
      name: type.toUpperCase(),
      count: records.filter((r) => r.item === type).length,
    })
  );

  return (
    <>
      <div className="card dashboard-card">
        {/* HEADER */}
        <div className="dashboard-header">
          <h3>📊 Tracking Dashboard</h3>

          <div className="stats">
            <span>Total Items: {records.length}</span>
            <span>🎁 Credits: {totalCredits}</span>
          </div>

          {records.length > 0 && (
            <button
              onClick={clearAll}
              className="clear-btn"
            >
              Clear All Records
            </button>
          )}
        </div>

        {/* REWARD */}
        {totalCredits >= 100 && (
          <div className="reward-box">
            🎉 You unlocked a reward!
            <p>
              Use code: <b>EWASTE10</b>
            </p>
          </div>
        )}

        {/* CHART */}
        <div className="chart-box">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#22c55e"
                radius={[6, 6, 0, 0]}
                barSize={65}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* RECORDS */}
        {records.length === 0 ? (
          <p style={{ marginTop: "10px" }}>
            No records yet...
          </p>
        ) : (
          <div className="record-list">
            {records.map((r) => (
              <div key={r.id} className="record-row">
                <div className="record-info">
                  <div className="title">
                    {r.item.toUpperCase()}

                    <span
                      className={
                        r.condition === "damaged"
                          ? "badge red"
                          : "badge green"
                      }
                    >
                      {r.condition}
                    </span>
                  </div>

                  <div className="meta">{r.date}</div>

                  <div className="credits">
                    🎁 +{r.credits} credits
                  </div>

                  <div className="vendor">{r.vendor}</div>

                  {r.proof && r.proof.data && (
                    <div className="proof">
                      <p className="file-name">
                        {r.proof.name}
                      </p>

                      <img
                        src={r.proof.data}
                        alt="proof"
                        onClick={() =>
                          setSelectedImage(r.proof.data)
                        }
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={() => deleteRecord(r.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🆕 VENDOR SECTION */}
      <div className="card coming-soon">
        <h4>🏪 Local Vendor Support</h4>
        <p>
          Connect with certified recycling vendors near you.
          Sell recovered components and earn additional rewards.
        </p>

        <button disabled>Coming Soon</button>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </span>

            <img src={selectedImage} alt="proof" />
          </div>
        </div>
      )}
    </>
  );
}