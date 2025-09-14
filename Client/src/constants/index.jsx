import replay from "../../public/assets/replay.svg";
import play from "../../public/assets/play.svg";
import pause from "../../public/assets/pause.svg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

import mission22 from "../../public/assets/preview22.mp4";

export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: mission22,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: mission22,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: mission22,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: mission22,
    videoDuration: 3.63,
  },
];

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
  { text: "Услуги", targetId: "highlights" },
  { text: "Преимущества", targetId: "advantages" },
  { text: "Партнеры", targetId: "partners" },
  { text: "Контакты", targetId: "contact" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
