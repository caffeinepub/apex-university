import { ChevronRight, Clock, Users } from "lucide-react";
import { useState } from "react";

const allCourses = [
  {
    category: "Bachelors",
    name: "B.Tech Computer Science",
    image: "/assets/generated/course-btech.dim_400x300.jpg",
    duration: "4 Years",
    students: "1,200+",
    desc: "AI, Data Science, Cybersecurity, Cloud Computing specializations.",
  },
  {
    category: "Bachelors",
    name: "B.Tech Mechanical",
    image: "/assets/generated/course-btech.dim_400x300.jpg",
    duration: "4 Years",
    students: "800+",
    desc: "Automotive, Robotics, Thermal Engineering specializations.",
  },
  {
    category: "Bachelors",
    name: "BBA",
    image: "/assets/generated/course-bba.dim_400x300.jpg",
    duration: "3 Years",
    students: "950+",
    desc: "Business strategy, marketing, finance, and entrepreneurship.",
  },
  {
    category: "Masters",
    name: "MBA",
    image: "/assets/generated/course-mba.dim_400x300.jpg",
    duration: "2 Years",
    students: "600+",
    desc: "Finance, Marketing, Operations, HR specializations.",
  },
  {
    category: "Masters",
    name: "M.Tech",
    image: "/assets/generated/course-btech.dim_400x300.jpg",
    duration: "2 Years",
    students: "400+",
    desc: "Advanced research in specialized engineering domains.",
  },
  {
    category: "Masters",
    name: "MCA",
    image: "/assets/generated/course-btech.dim_400x300.jpg",
    duration: "2 Years",
    students: "350+",
    desc: "Advanced computer applications and software development.",
  },
  {
    category: "Diploma",
    name: "Diploma in Engineering",
    image: "/assets/generated/course-btech.dim_400x300.jpg",
    duration: "3 Years",
    students: "500+",
    desc: "Practical engineering skills for immediate industry entry.",
  },
  {
    category: "Diploma",
    name: "Diploma in Management",
    image: "/assets/generated/course-bba.dim_400x300.jpg",
    duration: "1 Year",
    students: "300+",
    desc: "Executive management fundamentals for working professionals.",
  },
];

type Filter = "All" | "Bachelors" | "Masters" | "Diploma";

export default function CoursesSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === filter);

  return (
    <section id="courses" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
            Academic Programs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 fade-in-up">
            Explore Our Courses
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto fade-in-up">
            Discover a wide range of programs designed to meet global standards
            and industry demands.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex justify-center gap-3 mb-10 fade-in-up"
          data-ocid="courses.tab"
        >
          {(["All", "Bachelors", "Masters", "Diploma"] as Filter[]).map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-navy/10 border border-gray-200"
              }`}
              data-ocid="courses.tab"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <div
              key={course.name}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 card-lift fade-in-up"
              style={{ transitionDelay: `${i * 60}ms` }}
              data-ocid={`courses.item.${i + 1}`}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-navy/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy text-base mb-1.5">
                  {course.name}
                </h3>
                <p className="text-gray-500 text-sm leading-snug mb-3">
                  {course.desc}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {course.students}
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-1 bg-gold/10 hover:bg-gold text-gold hover:text-white text-sm font-semibold py-2 rounded-md transition-all duration-200"
                >
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
