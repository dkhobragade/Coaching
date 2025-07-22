import styled from "@emotion/styled";

export const BASEURL = "http://localhost:5001/api/";

export const ListItems = [
  {
    key: "1",
    text: "Structured courses for Pre + Mains",
  },
  {
    key: "2",
    text: "Daily practice tests & analysis",
  },
  {
    key: "3",
    text: "Personalized doubt-clearing sessions",
  },
];

export const cartPageDeliveryList = [
  {
    key: "1",
    img: "/cart/bike.png",
    alt: "Bike",
    width: 60,
    height: 60,
    text: "Fast Delivery",
    desc: "DTDC courier Service",
    color: "Sugarwinkle",
  },
  {
    key: "2",
    img: "/cart/payment.png",
    alt: "Bike",
    width: 40,
    height: 40,
    text: "Pay safely with UPI",
    desc: "Payment assurance",
    color: "OrangeGlow",
  },
  {
    key: "3",
    img: "/cart/support.png",
    alt: "Bike",
    width: 30,
    height: 30,
    text: "24×7 help",
    desc: "We offer chat support",
    color: "BreezeofGreen",
  },
  {
    key: "4",
    img: "/cart/track.png",
    alt: "Bike",
    width: 50,
    height: 50,
    text: "Courier tracking",
    desc: "Truck or GPS pin icon",
    color: "Milan",
  },
];

export const ScrollItems1 = [
  "📱 Learn Anytime, Anywhere",
  "🧾 Weekly Test Reviews",
  "📅 Batch Timings That Fit You",
  "⚡ Rapid Revision Techniques",
  "💬 Live Strategy Sessions",
  "📣 Latest MPSC Updates",
  "🗓️ Smart Study Plans",
  "📈 Daily Progress Tracking",
  "🏆 MPSC Toppers’ Tips",
  "📝 Mock Test Evaluations",
  "🧠 Personal Mentorship",
];

export const ScrollItems2 = [
  "📘 Books are your silent mentors — always available, never tired, and filled with answers. Open one, and you open your path to success.",
  "📖 Books don’t just prepare you for exams — they prepare you for life. One page at a time, one step closer to your goal.",
  "📗 Every great topper once turned a page. In the quiet of a book lies the loudest path to victory.",
];

export const coursesData = [
  {
    label: "Prelims",
  },
  {
    label: "Mains",
  },
];

export const pyqData = [
  {
    label: "Download",
  },
  {
    label: "Test",
  },
];

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
