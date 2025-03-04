import React, { useState } from "react";
import "./Reserves.css";

const Reserves = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis";
    if (!formData.phone.trim()) newErrors.phone = "Numéro requis";
    if (!formData.date.trim()) newErrors.date = "Date requise";
    if (!formData.time.trim()) newErrors.time = "Heure requise";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Réservation confirmée :", formData);
      alert("Réservation envoyée !");
      setFormData({ name: "", phone: "", date: "", time: "", guests: "1" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="reservation">
      <div className="container">
        <h2>Réserver une table</h2>
        <p>Réservez votre table en quelques clics.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div className="input-group">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </div>

          <div className="input-group">
            <select name="guests" value={formData.guests} onChange={handleChange}>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "personne" : "personnes"}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-reserve">
            Réserver
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reserves;

