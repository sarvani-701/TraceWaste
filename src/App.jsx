// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Home from "./pages/Home";
// import Process from "./pages/Process";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";

// import "./App.css";

// function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <Router>
//       {user && <Navbar />}

//       <Routes>
//         {!user && <Route path="*" element={<Login />} />}

//         {user && (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/process" element={<Process />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </>
//         )}

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         <Route
//           path="*"
//           element={<Navigate to={user ? "/" : "/login"} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Process from "./pages/Process";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile"; // 👈 ADD
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} /> {/* 👈 ADD */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;