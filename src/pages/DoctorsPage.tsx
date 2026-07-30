import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import AnimatedCount from "@/components/AnimatedCount";

export default function DoctorsPage() {
  return (
    <>
      <PageBanner
        title="Our Doctor"
        subtitle="Meet the specialist behind Advance Speech and Hearing Clinic"
        breadcrumb={[{ label: "Doctors" }]}
      />

      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            {/* Doctor card */}
            <div
              className="flex flex-col items-center text-center p-10 text-white"
              style={{ backgroundColor: "#2D3748" }}
            >
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-7 shadow-lg"
                style={{ backgroundColor: "#A93539" }}
              >
                <span className="text-5xl sm:text-6xl font-bold text-white tracking-wide">NM</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Dr. Naim A. Mansuri</h2>
              <p className="text-white/60 mt-2 text-base">Consultant Audiologist</p>
              <div className="w-12 h-0.5 my-5" style={{ backgroundColor: "#A93539" }} />
              <div className="grid grid-cols-2 gap-6 w-full text-center">
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#A93539" }}>
                    <AnimatedCount value={7} />
                  </div>
                  <div className="text-xs text-white/50 mt-1">Days a Week</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#A93539" }}>
                    <AnimatedCount value={1200} suffix="+" />
                  </div>
                  <div className="text-xs text-white/50 mt-1">Patients Treated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#A93539" }}>
                    <AnimatedCount value={4} />
                  </div>
                  <div className="text-xs text-white/50 mt-1">Clinic Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#A93539" }}>
                    <AnimatedCount value={20} suffix="+" />
                  </div>
                  <div className="text-xs text-white/50 mt-1">Specialists</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">Our Lead Specialist</p>
            <h2 className="text-3xl font-bold text-[#1A202C] mb-4">Dr. Naim A. Mansuri</h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Dr. Naim A. Mansuri is the lead Consultant Audiologist at Advance Speech and Hearing
              Clinic, providing specialist clinical care in audiology and hearing
              rehabilitation across Gujarat.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              He specialises in comprehensive audiological diagnostics, personalised digital hearing
              aid fitting, cochlear implant candidacy assessment, tinnitus management, and paediatric
              audiology — serving patients from newborns through to seniors.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Dr. Mansuri's approach combines state-of-the-art diagnostic equipment with a
              compassionate, patient-centred ethos that has made the clinic the most trusted hearing
              care destination across Gujarat.
            </p>
            <h3 className="font-bold text-[#1A202C] mb-3">Areas of Expertise</h3>
            <ul className="space-y-2 mb-7">
              {[
                "Comprehensive Hearing Assessments (PTA, ABR, OAE, ASSR)",
                "Digital Hearing Aid Fitting & Verification",
                "Cochlear Implant Candidacy & Post-Op Mapping",
                "Paediatric Audiology & Early Intervention",
                "Tinnitus Assessment & Management",
                "Speech Therapy Oversight",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#54595F]">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/appointment" className="btn-primary">
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#A93539" }} className="py-12">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-1 text-white">Consult with Dr. Mansuri</h3>
            <p className="text-white/80 text-sm">Available at all 4 Gujarat locations</p>
          </div>
          <Link to="/appointment" className="btn-navy shrink-0">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
