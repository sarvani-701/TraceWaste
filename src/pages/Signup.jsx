// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//     const handleSignup = () => {
//     if (!email || !password)
//         return alert("Fill all fields");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email))
//         return alert("Invalid email");

//     if (password.length < 6)
//         return alert("Password must be at least 6 characters");

//     const users =
//         JSON.parse(localStorage.getItem("users")) || [];

//     if (users.find((u) => u.email === email))
//         return alert("User already exists");

//     const newUser = { email, password };

//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("user", JSON.stringify(newUser));

//     alert("✅ Signup successful!");

//     // 🔥 force redirect
//     window.location.href = "/";
//     };

//   return (
//     <div className="container">
//       <div className="card">
//         <h3>📝 Signup</h3>

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

//         <button onClick={handleSignup}>
//           Create Account
//         </button>

//         <p style={{ marginTop: "10px" }}>
//           Already have an account?{" "}
//           <span
//             style={{ color: "#22c55e", cursor: "pointer" }}
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // ✅ Basic validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return;
    }

    // ✅ Password condition
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      alert("User already exists");
      return;
    }

    // ✅ Save user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Set current user
    localStorage.setItem("user", JSON.stringify({ email }));

    alert("Signup successful 🎉");

    // ✅ CLEAR INPUTS (important fix)
    setEmail("");
    setPassword("");

    // ✅ Redirect to home
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>📝 Signup</h3>

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

        <button className="login-btn" onClick={handleSignup}>
          Create Account
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#22c55e", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}