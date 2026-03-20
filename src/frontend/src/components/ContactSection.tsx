import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 fade-in-up">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto fade-in-up">
            Have questions about admissions, programs, or campus life? We're
            here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="fade-in-up">
            <h3 className="text-navy font-bold text-xl mb-6">
              Reach Out to Us
            </h3>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Address</div>
                  <div className="text-gray-500 text-sm mt-0.5">
                    248002, Dehradun Road, Clement Town,
                    <br />
                    Dehradun, Uttarakhand, India
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Phone</div>
                  <div className="text-gray-500 text-sm mt-0.5">
                    +91-135-261-2000
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Email</div>
                  <div className="text-gray-500 text-sm mt-0.5">
                    veermadhosinghbhandariuniversity@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-semibold text-navy mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { icon: SiFacebook, label: "Facebook", href: "#" },
                  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
                  { icon: SiInstagram, label: "Instagram", href: "#" },
                  { icon: SiX, label: "Twitter", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-light-bg rounded-2xl p-8 fade-in-up">
            <h3 className="text-navy font-bold text-xl mb-6">Send a Message</h3>
            {sent && (
              <div
                className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium"
                data-ocid="contact.success_state"
              >
                ✓ Message sent successfully! We'll get back to you within 24
                hours.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="contact-name"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="contact-email"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-navy text-sm font-semibold mb-1.5"
                  htmlFor="contact-subject"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  placeholder="Enquiry about admissions"
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  className="block text-navy text-sm font-semibold mb-1.5"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold py-3 rounded-lg transition-colors duration-200"
                data-ocid="contact.submit_button"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
