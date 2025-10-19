const fs = require("fs");
const path = require("path");
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const BotToken = process.env.BOT_TOKEN;
const BotGroupId = process.env.BOT_GROUP_ID;
const bot = new TelegramBot(BotToken);

// Получаем путь к папке для логов
const logDir = path.join(__dirname, "..", "logs");

// Убедимся, что папка для логов существует, если нет, создаем ее
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

class EmailController {
  async create(req, res) {
    try {
      const { name, phone, message } = req.body;
      if (!name || !phone || !message) {
        return res.status(400).json({ error: "Не заполнено обязательное поле" });
      }

      const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();
        
        return `${day}.${month}.${year}`;
      };

      const telegramTime = formatDate(new Date());
      const telegramMessage = `${telegramTime}\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}\n`;

      try {
        // Отправляем сообщение в Telegram
        await bot.sendMessage(BotGroupId, telegramMessage);
        console.log('Сообщение отправлено');
      } catch (sendError) {
        // Записываем ошибку в лог файл
        const errorTimestamp = new Date().toISOString();
        const errorLogMessage = `${errorTimestamp} - Ошибка при отправке сообщения в Telegram: ${sendError.message}\n`;
        fs.appendFileSync(path.join(logDir, "error.log"), errorLogMessage);
        return res.status(500).json({ message: "Ошибка при отправке сообщения" });
      }

      // Логируем информацию
      const timestamp = new Date().toISOString();
      const logMessage = `${timestamp} - Имя: ${name} - Телефон: ${phone} - Сообщение: ${message}\n`;
      fs.appendFileSync(path.join(logDir, "request.log"), logMessage);

      return res.status(201).json({ message: "Данные успешно сохранены" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new EmailController();
