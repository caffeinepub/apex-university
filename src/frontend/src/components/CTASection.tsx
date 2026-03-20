import { Rocket } from "lucide-react";

interface CTASectionProps {
  onApplyClick: () => void;
}

export default function CTASection({ onApplyClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5 bg-gold" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-5 bg-gold" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Join 50,000+ Apex Alumni
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Start Your Journey Today
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward a transformative academic experience.
            Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onApplyClick}
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-10 py-3.5 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              data-ocid="cta.primary_button"
            >
              <Rocket size={20} /> Apply Now — 2026
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-white/30 text-white hover:border-gold hover:text-gold font-semibold px-8 py-3.5 rounded-md transition-all duration-200"
              data-ocid="cta.secondary_button"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
