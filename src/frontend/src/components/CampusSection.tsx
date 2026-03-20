import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    avatar: "/assets/generated/student-avatar1.dim_100x100.jpg",
    name: "Priya Sharma",
    program: "B.Tech CSE, 2024",
    quote:
      "Veer Madho Singh Bhandari Uttarakhand Technical University gave me the perfect launchpad. The faculty, infrastructure, and placement support are unmatched. I landed a ₹28 LPA package at Microsoft!",
    rating: 5,
  },
  {
    avatar: "/assets/generated/student-avatar2.dim_100x100.jpg",
    name: "Rohit Verma",
    program: "MBA, 2024",
    quote:
      "The MBA program here is truly transformative. Real-world case studies, industry mentors, and a global perspective. I couldn't have asked for a better experience.",
    rating: 5,
  },
  {
    avatar: "/assets/generated/student-avatar3.dim_100x100.jpg",
    name: "Anjali Singh",
    program: "BBA, 2023",
    quote:
      "Campus life at UTU is vibrant and enriching. From cultural fests to sports championships, every experience here shaped my personality and leadership skills.",
    rating: 5,
  },
];

export default function CampusSection() {
  return (
    <section id="campus" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
            Campus Life
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 fade-in-up">
            Experience Campus Life
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto fade-in-up">
            200 acres of vibrant campus life — where learning meets adventure,
            culture, and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Campus image */}
          <div className="fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/campus-life.dim_800x600.jpg"
                alt="Campus Life at Veer Madho Singh Bhandari Uttarakhand Technical University"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sports & Fitness",
                    "Cultural Fests",
                    "Research Labs",
                    "Student Clubs",
                    "Modern Hostels",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Campus highlights grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: "50+", label: "Student Clubs" },
                { value: "15+", label: "Sports Facilities" },
                { value: "10,000", label: "Seat Library" },
              ].map((h) => (
                <div
                  key={h.label}
                  className="bg-white rounded-xl p-4 text-center shadow-card border border-gray-100"
                >
                  <div className="text-xl font-bold text-navy">{h.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-card border border-gray-100 card-lift fade-in-up"
                style={{ transitionDelay: `${i * 100}ms` }}
                data-ocid={`campus.item.${i + 1}`}
              >
                <div className="flex items-start gap-2 mb-3">
                  <Quote
                    size={24}
                    className="text-gold/40 flex-shrink-0 mt-1"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gold/30"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-navy text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-400 text-xs">{t.program}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }, (_, j) => (
                      <Star
                        key={`star-${t.name}-${j}`}
                        size={14}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
