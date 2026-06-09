export default function Instructions({ type, condition }) {
  if (!type) return null;

  const getInstructions = () => {
    if (type === "phone") {
      return condition === "working"
        ? [
            "Turn off the phone",
            "Remove SIM and external parts",
            "Open back panel carefully",
            "Disconnect battery safely",
            "Extract PCB and screen",
          ]
        : [
            "Wear gloves (damaged device)",
            "Avoid puncturing battery",
            "Remove battery carefully",
            "Separate PCB and screen",
            "Place hazardous parts safely",
          ];
    }

    if (type === "laptop") {
      return condition === "working"
        ? [
            "Shut down laptop",
            "Remove battery",
            "Unscrew back panel",
            "Detach RAM and storage",
            "Extract motherboard",
          ]
        : [
            "Ensure device is not powered",
            "Handle battery carefully",
            "Remove damaged parts slowly",
            "Avoid sharp edges",
            "Separate materials safely",
          ];
    }

    if (type === "charger") {
      return [
        "Cut outer insulation",
        "Separate copper wires",
        "Remove plastic casing",
        "Collect metal parts",
        "Sort materials",
      ];
    }

    return [];
  };

  const steps = getInstructions();

  return (
    <div className="card">
      <h3>📋 Dismantling Instructions</h3>

      <ul className="clean-list instruction-list">
        {steps.map((step, i) => (
          <li key={i}>• {step}</li>
        ))}
      </ul>
    </div>
  );
}