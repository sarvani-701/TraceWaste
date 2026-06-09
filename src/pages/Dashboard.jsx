import TrackingDashboard from "../components/TrackingDashboard";
import UploadProof from "../components/UploadProof";

export default function Dashboard() {
  return (
    <div className="container">
      <TrackingDashboard />
      <UploadProof />
    </div>
  );
}