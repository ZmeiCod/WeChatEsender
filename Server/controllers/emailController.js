const fs = require("fs");
const path = require("path");

// Получаем путь к папке для логов
const logDir = path.join(__dirname, "..", "logs");

// Убедимся, что папка для логов существует, если нет, создаем ее
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

class emailController {
  async create(req, res) {
    try {
      const { name, phone, message } = req.body;
      const timestamp = new Date().toISOString();
      
      // Записываем в лог файл
      const logEntry = `${timestamp} - Имя: ${name}, Телефон: ${phone}, Сообщение: ${message}\n`;
      fs.appendFile(path.join(logDir, "request.log"), logEntry, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Ошибка при записи в лог" });
        }
      });

      return res.status(201).json({ message: "Данные успешно сохранены" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new emailController();
