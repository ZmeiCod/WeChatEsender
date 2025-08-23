import React, { useState } from "react";

export default function Contact() {
  const REACT_APP_API_URL = 'http://localhost:3000';
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    try {
      const response = await fetch(`${REACT_APP_API_URL}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }

      const data = await response.json();
      console.log("Данные успешно отправлены:", data);
      // Здесь можно добавить уведомление пользователю о успешной отправке
    } catch (error) {
      console.error("Ошибка:", error);
      // Обработка ошибок
    }
  };

  return (
    <div className="contact-form">
      <h3>Мы как можно скорее свяжемся с вами</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Имя Фамилия"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Телефон"
            maxLength={15}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Отправить</button>
        </div>
      </form>
      <div className="privacy-notice">
        Нажимая на кнопку "Отправить", вы даете согласие на обработку
        персональных данных и соглашаетесь на политику конфиденциальности.
      </div>
    </div>
  );
}
