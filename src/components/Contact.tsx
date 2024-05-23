import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Mensaje:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
