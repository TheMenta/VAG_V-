import { useState } from "react";

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState(""); // Melyikre nyom
  const [message, setMessage] = useState(""); // uzenet fizetes utan
//pelda
  const plans = [
    { name: "Havi", price: 5 },
    { name: "Éves", price: 50 },
    { name: "Lifetime", price: 150 }
  ];

  const handlePurchase = (plan) => {
    setSelectedPlan(plan.name);
    setMessage(`Sikeres vásárlás: ${plan.name} előfizetés!`);
  };

  return (
    <div>
      <h2>Premium előfizetés</h2>
      <p>Válassz előfizetési csomagot a fórumhoz és extra funkciókhoz:</p>
      <p>Miért éri meg előfizetni?</p>
      <ul>
        <li>Profilkép feltöltés</li>
        <li>Animált fórum kép</li>
        <li>Tuning fájlokhoz hozzáférés</li>
      </ul>

      <div style={{ display: "flex", gap: "20px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: selectedPlan === plan.name ? "#cce5ff" : "white"
            }}
            onClick={() => handlePurchase(plan)}
          >
            <h3>{plan.name}</h3>
            <p>Ár: ${plan.price}</p>
          </div>
        ))}
      </div>

      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
}
