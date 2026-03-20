import { BookOpen, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-campus.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(60,10,10,0.92) 0%, rgba(60,10,10,0.65) 50%, rgba(60,10,10,0.15) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Established 2005 · State Technical University
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6 fade-in-up">
            Shape Your Future
            <br />
            <span className="text-gold">with Technology & Innovation</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 fade-in-up">
            Join Uttarakhand's premier technical university — world-class
            engineering, management, and research programs designed to prepare
            tomorrow's leaders.
          </p>

          <div className="flex flex-wrap gap-4 fade-in-up">
            <button
              type="button"
              onClick={onApplyClick}
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
              data-ocid="hero.primary_button"
            >
              Apply Now <ChevronRight size={18} />
            </button>
            <a
              href="#courses"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3 rounded-md transition-all duration-200"
              data-ocid="hero.secondary_button"
            >
              <BookOpen size={18} /> Explore Courses
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 fade-in">
            {[
              { value: "20+", label: "Years of Excellence" },
              { value: "100K+", label: "Alumni Worldwide" },
              { value: "200+", label: "Industry Partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-gold text-2xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
