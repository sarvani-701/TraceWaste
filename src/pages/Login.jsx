// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const users =
//       JSON.parse(localStorage.getItem("users")) || [];

//     const user = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!user) {
//       alert("Invalid email or password");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("✅ Login successful!");

//     // 🔥 force refresh so App re-renders with user
//     window.location.href = "/";
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h3>🔐 Login</h3>

//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login</button>

//         <p style={{ marginTop: "10px" }}>
//           New user?{" "}
//           <span
//             style={{ color: "#22c55e", cursor: "pointer" }}
//             onClick={() => navigate("/signup")}
//           >
//             Signup
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ CLEAR INPUTS WHEN PAGE LOADS
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("✅ Login successful!");

    // ✅ clear before redirect (extra safety)
    setEmail("");
    setPassword("");

    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="card">
        <h3>🔐 Login</h3>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "10px" }}>
          New user?{" "}
          <span
            style={{ color: "#22c55e", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}