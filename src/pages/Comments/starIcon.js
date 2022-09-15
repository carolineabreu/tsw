import { FaStar } from "react-icons/fa";
export function Star({ filled, onClick }) {
  return <FaStar color={filled ? "orange" : "black"} onClick={onClick} />;
}
