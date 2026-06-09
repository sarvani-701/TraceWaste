export default function ComponentList({ components, disposal }) {
  return (
    <div className="card">
      <h3>🧩 Components & Disposal</h3>
      <ul>
        {components.map((comp, index) => (
          <li key={index}>
            <b>{comp}</b> → {disposal[comp]}
          </li>
        ))}
      </ul>
    </div>
  );
}