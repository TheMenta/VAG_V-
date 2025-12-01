import { useState } from "react";

export default function Auth() {
 
  const [email, setEmail] = useState("");      
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState("");   

  
  const handleLogin = (e) => {
    e.preventDefault(); // ne toltse ujra az oldalt

    // proba
    if (email === "teszt@pelda.com" && password === "123456") {
      setMessage("Sikeres bejelentkezés!");
    } else {
      setMessage("Hibás email vagy jelszó.");
    }
  };

  return (
    <div>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}                 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <div>
          <label>Jelszó:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Bejelentkezés</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
