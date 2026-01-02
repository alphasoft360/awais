import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import data from "../../Data/data.json";

/* =========================
   COMPONENT
========================= */
const ContactUs = () => {
  const whatsappNumber = data.profile.contact.phone.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-light py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN - ADDITIONAL DETAILS */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {data.contact.whyWorkWithMe.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  {data.contact.whyWorkWithMe.description}
                </p>
              </div>

              {/* EXPERTISE AREAS */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {data.contact.coreExpertise.title}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {data.contact.coreExpertise.items.map((expertise, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-secondary">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH STACK */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {data.contact.techStack.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.contact.techStack.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-orange-light text-accent-orange rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="bg-secondary-gradient rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  {data.contact.availability.title}
                </h4>
                <div className="space-y-2">
                  {data.contact.availability.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECT TYPES */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {data.contact.projectTypes.title}
                </h4>
                <ul className="space-y-2 text-secondary">
                  {data.contact.projectTypes.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN - CONTACT DETAILS */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-3">
                  {data.contact.letsDiscuss.title}
                </h2>
                <p className="text-secondary leading-relaxed">
                  {data.contact.letsDiscuss.description}
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-6 pt-4">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Address</p>
                    <p className="text-primary font-medium">
                      {data.profile.contact.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a
                      href={`mailto:${data.profile.contact.email}`}
                      className="text-primary font-medium hover:text-accent transition-colors"
                    >
                      {data.profile.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-medium hover:text-accent transition-colors"
                    >
                      {data.profile.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 pt-6">
                <a
                  href={data.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-secondary hover:bg-accent hover:border-accent rounded-lg flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-accent group-hover:text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;