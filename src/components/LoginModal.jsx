import React, { useState } from "react";
import '../styles/components/LoginModal.css'

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost/hackwebsite/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(result.message || "Connexion réussie !");
        setEmail("");
        setPassword("");
        onClose(); // Fermer la modal après succès
      } else {
        setError(result.message || "Échec de la connexion !");
      }
    } catch (err) {
      setError("Erreur réseau. Veuillez réessayer.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Connexion</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
