import { useState } from "react";
import WasteForm from "../components/WasteForm";
import Instructions from "../components/Instructions";
import ComponentList from "../components/ComponentList";
import rules from "../data/disposalRules";

export default function Process() {
  const [data, setData] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = ({ type, condition }) => {
    setSelectedType(type);
    setCondition(condition);
    setData(rules[type]);
  };

  const getCredits = (type, condition) => {
    const map = {
      phone: { working: 50, damaged: 30 },
      laptop: { working: 80, damaged: 50 },
      charger: { working: 20, damaged: 10 },
    };
    return map[type]?.[condition] || 0;
  };

  const markAsDisposed = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;


    const credits = getCredits(selectedType, condition);

    const record = {
      id: Date.now(),
      item: selectedType,
      condition,
      status: "Disposed",
      date: new Date().toLocaleString(),
      credits,
      vendor: "EcoRecycle Partner",
    };

    const existing =
      JSON.parse(localStorage.getItem(`records_${user.email}`)) || [];

    localStorage.setItem(
      `records_${user.email}`,
      JSON.stringify([...existing, record])
    );

    alert(`+${credits} credits added 🎁`);
  };

  return (
    <div className="container process-layout">
      <div className="left">
        <WasteForm onSubmit={handleSubmit} />
      </div>

      {data && (
        <div className="right">
          <Instructions
            type={selectedType}
            condition={condition}
          />

          <ComponentList
            components={data.components}
            disposal={data.disposal}
          />

          <button
            className="dispose-btn"
            onClick={markAsDisposed}
          >
            Mark as Disposed & Earn Rewards 🎁
          </button>
        </div>
      )}
    </div>
  );
}