import React, { useState } from "react";

export default function Contact() {
  const REACT_APP_API_URL = 'http://localhost:3000';
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Для сообщений об ошибках

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage(""); // Сбрасываем сообщение об ошибках

    // Устанавливаем таймаут на 3 секунды перед отправкой запроса
    await new Promise((resolve) => setTimeout(resolve, 3000));

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
      setIsSuccess(true);
    } catch (error) {
      console.error("Ошибка:", error);
      setErrorMessage("Ошибка при отправке данных: " + error.message);
    } finally {
      setIsLoading(false);
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              "Отправить"
            )}
          </button>
        </div>
      </form>
      {isSuccess && <div className="success-message">Запрос успешно отправлен!</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="privacy-notice">
        Нажимая на кнопку "Отправить", вы даете согласие на обработку
        персональных данных и соглашаетесь на политику конфиденциальности.
      </div>
    </div>
  );
}