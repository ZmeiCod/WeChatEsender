import play from "../../public/assets/play.svg";
import { FaTelegramPlane } from "react-icons/fa";
import pause from "../../public/assets/pause.svg";
import replay from "../../public/assets/replay.svg";

export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const CUSINES = [
  {
    number: "01.",

    title: "Официальный представитель",
    description:
      "Мы предоставляем услуги напрямую, с гарантией качества и поддержкой на русском языке.",
  },
  {
    number: "02.",

    title: "Гибкая оплата",
    description:
      "Принимаем разные способы оплаты — банковские карты, электронные кошельки и другие варианты.",
  },
  {
    number: "03.",

    title: "Помощь в оплате и продлении",
    description:
      "Мы сопровождаем клиента на всём протяжении действия номера: от месяца до пяти лет. Если нужен продлённый срок — всё решается быстро и без проблем.",
  },
  {
    number: "04.",

    title: "Прозрачность и отзывы",
    description:
      "У нас более 290 отзывов на Авито. Ознакомьтесь с реальными отзывами, чтобы убедиться в нашей надёжности и профессионализме.",
  },
];

export const LINKS = [
  { text: "Главная", targetId: "preview" },
  { text: "Услуги", targetId: "Services" },
  { text: "Преимущества", targetId: "advantages" },
  // { text: "Партнеры", targetId: "partners" },
  { text: "Контакты", targetId: "contact" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://t.me/WeChatEsender",
    icon: <FaTelegramPlane fontSize={40} className="hover:opacity-80" />,
  },
];
