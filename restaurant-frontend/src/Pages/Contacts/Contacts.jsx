import React, { useState } from "react";
 
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis";
    if (!formData.email.trim()) newErrors.email = "Email requis";
    if (!formData.message.trim()) newErrors.message = "Message requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Données envoyées :", formData);
      alert("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contactez-nous</h2>
        <p>Besoin d'informations ? Envoyez-nous un message !</p>

        <div className="contact-info">
          <p>📍 Adresse : 123 Rue du Gourmet, Lomé</p>
          <p>📞 Téléphone : +228 90 00 00 00</p>
          <p>📧 Email : contact@gourmetbites.com</p>
        </div>

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
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contacts;
