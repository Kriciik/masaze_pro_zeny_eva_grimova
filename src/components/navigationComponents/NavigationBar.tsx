import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/logo_bile.webp";
const navigation_items = [
  { name: "Co dělám", id: "co_delam" },
  { name: "Typy masáží", id: "masaze" },
  { name: "Ceník", id: "cenik" },
  { name: "Mé studio", id: "studio" },
  { name: "Kontakt", id: "kontakt" },
];

export default function NavigationBar() {
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`from-golden-linear-01 to-golden-linear-02 fixed top-0 left-0 z-30 max-h-fit min-h-20 w-full bg-linear-to-bl ${isVisible ? "translate-y-0" : "-translate-y-full"} shadow-md transition-all duration-300 ease-in-out`}
    >
      <div className={`flex flex-col md:h-20`}>
        <div className="flex h-20 w-full items-center justify-end gap-4 p-4 md:hidden">
          <Menu
            size={50}
            color="white"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>

        <div
          className={`grid h-full transition-[grid-template-rows,opacity] duration-200 ease-in-out ${
            isMenuOpen
              ? "grid-rows-[1fr] pb-10 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          } md:grid-rows-[1fr] md:opacity-100`}
        >
          <ul className="md:center flex h-full w-full flex-col gap-4 overflow-hidden text-center md:flex-row md:items-center md:justify-start md:gap-6">
            <div className="hidden h-full w-20 md:block">
              <img
                src={logo}
                alt="logo bílé"
                className="max-h-20 object-cover"
              />
            </div>
            {navigation_items.map((item, index) => (
              <li
                key={index}
                className="p-2 text-[1.4rem] text-white underline underline-offset-5 md:text-[1.7rem] md:no-underline"
              >
                <a href={"#" + item.id} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
