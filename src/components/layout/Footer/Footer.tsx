import { motion } from "framer-motion";
import { useRef } from "react";

const items = [
  { name: "EMAIL US", icon: "assets/images/icons/email.png" },
  { name: "CONTACT US", icon: "assets/images/icons/Contact.svg" },
  { name: "TIKTOK", icon: "assets/images/icons/Tiktok.svg" },
  { name: "INSTAGRAM", icon: "assets/images/icons/instagram.svg" },
  { name: "LINKEDIN", icon: "assets/images/icons/Linkedin.svg" },
  { name: "THREADS", icon: "assets/images/icons/Threads.svg" },
];

export default function Footer() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4 text-white" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="flex w-max mt-6 py-3 gap-6 animate-scroll hover:[animation-play-state:paused]">
        {[...Array(3)].flatMap(() =>
          items.map((items, index) => (
            <motion.div
              key={`${items.name}-${index}`}
              whileHover={{ scale: 1.15 }}
              className="group relative flex items-center justify-center px-6 py-2 text-white border border-gray-500 rounded-full cursor-pointer transition-all duration-300"
            >
              <span className="transition-all duration-300 group-hover:pr-6 mx-auto flex items-center gap-2">
                {items.name}
                <img
                  src={items.icon}
                  alt={`${items.name} icon`}
                  className="block sm:hidden w-5 h-5"
                />
              </span>

              <img
                src={items.icon}
                alt={`${items.name} icon`}
                className="hidden sm:block absolute right-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))
        )}
      </div>
      <div className="mt-8 ml-[9%] pb-8">
        <p className="text-gray-400 text-sm">Apt-1135, 77 Quebec Ave, Toronto, Ontario, M6P 2T4</p>
        <p className="text-gray-400 text-sm mt-1">design@borderlesscreatives.ca</p>
      </div>
    </div>
  );
}
