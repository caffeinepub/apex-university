import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";
import { useState } from "react";

const programs = [
  "B.Tech Computer Science",
  "B.Tech Mechanical Engineering",
  "B.Tech Electronics & Communication",
  "M.Tech",
  "MBA",
  "BBA",
  "MCA",
  "Diploma in Engineering",
  "Ph.D Research",
];

interface AdmissionModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ open, onClose }: AdmissionModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", program: "", message: "" });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-lg w-full p-0 overflow-hidden rounded-2xl border-0 shadow-2xl"
        data-ocid="admission.dialog"
      >
        {/* Header */}
        <div className="bg-navy px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              Admission Inquiry 2026
            </DialogTitle>
            <DialogDescription className="text-white/60 text-sm mt-1">
              Fill in your details and our admissions team will contact you
              within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          {submitted ? (
            <div
              className="text-center py-8"
              data-ocid="admission.success_state"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <title>Success checkmark</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-navy font-bold text-xl mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Thank you for your interest in Veer Madho Singh Bhandari
                Uttarakhand Technical University. Our admissions counselor will
                reach out to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-2.5 rounded-lg transition-colors"
                data-ocid="admission.close_button"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="modal-name"
                  >
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    required
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    data-ocid="admission.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="modal-email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    required
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    data-ocid="admission.input"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="modal-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    data-ocid="admission.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-navy text-sm font-semibold mb-1.5"
                    htmlFor="modal-program"
                  >
                    Program of Interest *
                  </label>
                  <select
                    id="modal-program"
                    value={form.program}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, program: e.target.value }))
                    }
                    required
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all bg-white"
                    data-ocid="admission.select"
                  >
                    <option value="">Select program...</option>
                    {programs.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-navy text-sm font-semibold mb-1.5"
                  htmlFor="modal-message"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Any specific queries or questions..."
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                  data-ocid="admission.textarea"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold py-2.5 rounded-lg text-sm transition-colors"
                  data-ocid="admission.cancel_button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
                  data-ocid="admission.submit_button"
                >
                  <Send size={15} /> Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
