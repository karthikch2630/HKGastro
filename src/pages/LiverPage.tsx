import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const LiverPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Liver Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced treatments for liver conditions, including hepatitis, cirrhosis, and liver cancer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1755579889/Benefits-of-improving-liver-health-and-function_tgrgmn.jpg"
              alt="Liver Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">
              Specialized Liver Care
            </h2>
            <p className="mb-4 text-lg">
              We offer comprehensive treatment for liver conditions using advanced diagnostics and minimally invasive procedures. Our team focuses on personalized care for faster recovery and long-term liver health.
            </p>
            <ul className="space-y-3">
              {[
                "Hydatid Cyst Treatment",
                "Laparoscopic Deroofing",
                "Liver Cancer Resection",
                "Hemangioma Resection",
                "Liver Biopsy",
                "Hepatitis Management",
                "Cirrhosis Treatment",
                "Liver Transplant Consultation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-indigo-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Liver Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Comprehensive evaluations and tailored treatment plans for liver diseases.",
              },
              {
                icon: Activity,
                title: "Minimally Invasive Surgery",
                desc: "Advanced laparoscopic techniques for liver cyst and tumor removal.",
              },
              {
                icon: HeartPulse,
                title: "Post-Treatment Care",
                desc: "Personalized recovery plans with lifestyle and nutritional guidance.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <service.icon
                  className="text-indigo-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liver Treatment Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Liver Treatments
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Symptoms Indicating Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Persistent fatigue or weakness",
                  "Jaundice (yellowing of skin or eyes)",
                  "Abdominal pain or swelling",
                  "Nausea or loss of appetite",
                  "Dark urine or pale stools",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600" size={20} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Benefits of Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from chronic symptoms",
                  "Prevention of liver failure",
                  "Improved liver function and energy",
                  "Reduced risk of complications",
                  "Enhanced quality of life",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600" size={20} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                How Treatments Work
              </h3>
              <p className="text-gray-600">
                Liver treatments range from medication for hepatitis and cirrhosis to minimally invasive surgeries like laparoscopic deroofing for cysts or resection for tumors. Procedures are tailored to the condition, with recovery plans to support long-term liver health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Liver Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Liver Treatment Options
          </motion.h2>
          {[
            {
              title: "Hydatid Cyst Treatment",
              desc: "Surgical or medical treatment to remove or manage hydatid cysts in the liver, preventing complications like rupture or infection.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Laparoscopic Deroofing",
              desc: "Minimally invasive procedure to remove the top of liver cysts, allowing drainage and preventing recurrence with small incisions.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "Liver Cancer Resection",
              desc: "Surgical removal of cancerous liver tissue, often combined with imaging and targeted therapies for optimal outcomes.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "Hemangioma Resection",
              desc: "Surgical removal of benign liver hemangiomas if they cause symptoms or complications, using minimally invasive techniques.",
              image: "/images/treatment-4.jpg",
            },
            {
              title: "Liver Biopsy",
              desc: "A diagnostic procedure to collect liver tissue samples for analysis, aiding in the diagnosis of liver diseases like hepatitis or cirrhosis.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Hepatitis Management",
              desc: "Comprehensive care for viral hepatitis, including antiviral medications, lifestyle changes, and regular monitoring to prevent liver damage.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Cirrhosis Treatment",
              desc: "Management of cirrhosis through medications, dietary adjustments, and monitoring to slow progression and manage complications.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Liver Transplant Consultation",
              desc: "Evaluation and preparation for liver transplantation for patients with end-stage liver disease, including donor matching and post-transplant care.",
              image: "/images/treatment-8.jpg",
            },
          ].map((treatment, i) => (
            <div key={i} className="mb-12">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="rounded-2xl shadow-lg w-60 h-60 object-cover mx-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600">{treatment.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rajesh M.",
                review:
                  "I had liver cyst surgery here in Hyderabad and the whole process was very smooth. I recovered much faster than I expected, thanks to the amazing team.",
                rating: 5,
              },
              {
                name: "Priya S.",
                review:
                  "The treatment and management plan for my hepatitis has been life-changing. The doctors explained everything clearly and were very supportive throughout.",
                rating: 5,
              },
              {
                name: "Ahmed K.",
                review:
                  "I had to undergo a liver biopsy and was quite nervous, but the staff here made me feel very comfortable. The procedure was quick and handled with professionalism.",
                rating: 4,
              },

            ].map((review, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{review.review}"</p>
                <p className="text-indigo-700 font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Liver Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default LiverPage;