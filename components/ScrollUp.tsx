import { useState, useEffect } from "react";
import { IoTriangleOutline } from "react-icons/io5";

export default function ScrollUp() {
  const [backToTheTop, setBackToTheTop] = useState(false);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTheTop(true);
      } else {
        setBackToTheTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="z-0">
      {backToTheTop && (
        <div
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "5px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              background: "#000000",
              padding: "0.5rem",
              borderRadius: "4px",
              border: 0,
            }}
          >
            <IoTriangleOutline size={20} color="#ffffff" />
          </button>
        </div>
      )}
    </div>
  );
}
