import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#courses" },
  { label: "Admissions", href: "#admissions" },
  { label: "Examinations", href: "#placements" },
  { label: "Results", href: "#results" },
  { label: "Facilities", href: "#campus" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/Uttarakhand_Technical_University_logo-1.png"
            alt="Veer Madho Singh Bhandari Uttarakhand Technical University"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <div className="text-white font-bold text-sm tracking-wide">
              VMSBTU
            </div>
            <div className="text-gold text-xs font-medium tracking-wide leading-tight max-w-[240px]">
              Veer Madho Singh Bhandari Uttarakhand Technical University
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link text-xs font-medium text-white/90 pb-1 ${
                  active === link.href ? "active" : ""
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2 rounded-md transition-colors duration-200"
            data-ocid="nav.primary_button"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-white/90 hover:text-gold py-2 text-sm font-medium transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onApplyClick();
                  setMenuOpen(false);
                }}
                className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2 rounded-md transition-colors"
                data-ocid="nav.primary_button"
              >
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
