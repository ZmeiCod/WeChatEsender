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


export const LINKS = [
  { text: "Главная", targetId: "preview" },
  { text: "Услуги", targetId: "highlights" },
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
