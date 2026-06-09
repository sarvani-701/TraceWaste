import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [credits, setCredits] = useState(0);

  const name = user?.email?.split("@")[0] || "";
  const displayName =
    name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const data =
      JSON.parse(localStorage.getItem(`records_${user.email}`)) || [];

    setRecords(data);

    const total = data.reduce(
      (sum, r) => sum + (r.credits || 0),
      0
    );

    setCredits(total);
  }, [user, navigate]);


  // const redeemCredits = () => {
  //   if (credits < 100) {
  //     alert("Minimum 100 credits required");
  //     return;
  //   }

  //   alert("🎉 Coupon unlocked: EWASTE10");

  //   const data =
  //     JSON.parse(localStorage.getItem(`records_${user.email}`)) || [];

  //   let remaining = 100;

  //   const updated = data.map((r) => {
  //     if (remaining <= 0) return r;

  //     const used = Math.min(r.credits || 0, remaining);
  //     remaining -= used;

  //     return {
  //       ...r,
  //       credits: (r.credits || 0) - used,
  //     };
  //   });

  //   localStorage.setItem(
  //     `records_${user.email}`,
  //     JSON.stringify(updated)
  //   );

  //   // update UI
  //   const newCredits = updated.reduce(
  //     (sum, r) => sum + (r.credits || 0),
  //     0
  //   );

  //   setRecords(updated);
  //   setCredits(newCredits);
  // };
    const redeemCredits = () => {
    if (credits < 100) {
      alert("Minimum 100 credits required");
      return;
    }

    // 🚧 No deduction for now
    alert("🚧 Rewards redemption coming soon!");
  };
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="profile-card">

        <div className="profile-close" onClick={goBack}>
          ✕
        </div>

        <div className="profile-avatar">
          {user?.email?.[0]?.toUpperCase()}
        </div>

        <h2>{displayName || "User"}</h2>

        <p className="profile-email">{user?.email}</p>

        <div className="profile-stats">
          <div className="stat-box">
            <h3>{records.length}</h3>
            <p>Total Items</p>
          </div>

          <div className="stat-box">
            <h3>{credits}</h3>
            <p>Total Credits</p>
          </div>
        </div>

        <button className="redeem-btn" onClick={redeemCredits}>
          Redeem Credits 🎁
        </button>

        <button className="logout-btn profile-logout" onClick={logout}>
          Logout
        </button>

        <div className="profile-info">
          <h4>How rewards work</h4>
          <p>
            Dispose e-waste responsibly and earn credits.
            Redeem credits for discounts on future purchases.
          </p>
        </div>

      </div>
    </div>
  );
}