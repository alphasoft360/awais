import { ArrowUp } from "lucide-react";
import AwaisImage2 from "../../assets/awais-2.jpeg";
import data from "../../Data/data.json";

const Biography = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-secondary-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Senior Software Engineer
              <br />
              Full-Stack & Backend Specialist
            </h1>

            <div className="space-y-4 text-secondary text-sm sm:text-base leading-relaxed max-h-[380px] overflow-y-auto pr-2">
              {data.biography.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[450px] md:w-[380px] md:h-[520px] hidden md:block rounded-3xl overflow-hidden shadow-xl bg-light">
                <img
                  src={AwaisImage2}
                  alt="Muhammad Awais"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent-hover text-white p-3 sm:p-4 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
};

export default Biography;
