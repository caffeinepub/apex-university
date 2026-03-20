import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/Uttarakhand_Technical_University_logo-1.png"
                alt="Veer Madho Singh Bhandari Uttarakhand Technical University"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="text-white font-bold text-lg">VMSBTU</div>
                <div className="text-gold text-xs font-medium leading-tight">
                  Veer Madho Singh Bhandari
                  <br />
                  Uttarakhand Technical University
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Established by Act No. 415/2005 by Uttarakhand Government. A
              premier technical university shaping engineers and innovators.
            </p>
            <div className="flex gap-3">
              {(
                [
                  { icon: SiFacebook, label: "Facebook" },
                  { icon: SiLinkedin, label: "LinkedIn" },
                  { icon: SiInstagram, label: "Instagram" },
                  { icon: SiX, label: "Twitter" },
                ] as const
              ).map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://www.uktech.ac.in"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-gold transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Academics",
                "Admissions",
                "Examinations",
                "Facilities",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-150 flex items-center gap-1"
                  >
                    <span className="text-gold/40 text-xs">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Academic Programs
            </h4>
            <ul className="space-y-2">
              {[
                "B.Tech",
                "M.Tech",
                "MBA",
                "B.Pharm",
                "MCA",
                "B.Arch",
                "Ph.D Research",
              ].map((prog) => (
                <li key={prog}>
                  <a
                    href="#courses"
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-150 flex items-center gap-1"
                  >
                    <span className="text-gold/40 text-xs">›</span> {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Sudhowala, Dehradun, Uttarakhand – 248007</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>+91-135-2770-137</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>veermadhosinghbhandariuniversity@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">
            © {year} Veer Madho Singh Bhandari Uttarakhand Technical University.
            All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
