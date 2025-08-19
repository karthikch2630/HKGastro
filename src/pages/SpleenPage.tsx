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

const SpleenPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00B9B0] via-teal-600 to-[#00B9B0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Spleen Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced treatments for splenic conditions, including trauma, tumors, and hypersplenism.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#00B9B0] font-semibold shadow-lg hover:bg-gray-100 transition"
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
              src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509091/da8c0e98-444e-4a83-82b6-4353982dc519_esmjut.jpg"
              alt="Spleen Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#00B9B0] mb-6">
              Specialized Spleen Care
            </h2>
            <p className="mb-4 text-lg">
              We offer advanced treatments for spleen conditions, from trauma and cysts to tumors and hypersplenism, using minimally invasive and emergency surgical techniques for optimal outcomes.
            </p>
            <ul className="space-y-3">
              {[
                "Splenic Trauma Surgery",
                "Splenic Tumor Removal",
                "Splenic Cyst Treatment",
                "Splenectomy (Open & Laparoscopic)",
                "Splenic Artery Aneurysm",
                "Hypersplenism Treatment",
                "Emergency Spleen Surgery",
                "Minimally Invasive Procedures",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-600" size={20} />
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
            className="text-3xl font-bold text-center text-[#00B9B0] mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Spleen Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Comprehensive evaluations and tailoteal treatment plans for spleen-related conditions.",
              },
              {
                icon: Activity,
                title: "Advanced Surgical Techniques",
                desc: "Minimally invasive and open surgeries for splenic trauma, tumors, and cysts.",
              },
              {
                icon: HeartPulse,
                title: "Post-Treatment Care",
                desc: "Personalized recovery plans with lifestyle and health monitoring support.",
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
                  className="text-teal-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spleen Treatment Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-[#00B9B0] mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Spleen Treatments
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-[#00B9B0] mb-4">
                Symptoms Indicating Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Abdominal pain or fullness in the left upper abdomen",
                  "Frequent infections due to low white blood cells",
                  "Easy bruising or bleeding",
                  "Fatigue or weakness",
                  "Swelling or enlarged spleen (splenomegaly)",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-600" size={20} />
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
              <h3 className="text-xl font-semibold text-[#00B9B0] mb-4">
                Benefits of Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from pain and discomfort",
                  "tealuced risk of splenic rupture",
                  "Improved immune function",
                  "Prevention of complications like anemia",
                  "Enhanced quality of life",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-600" size={20} />
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
              <h3 className="text-xl font-semibold text-[#00B9B0] mb-4">
                How Treatments Work
              </h3>
              <p className="text-gray-600">
                Spleen treatments range from conservative management for mild conditions to surgical interventions like splenectomy for trauma or tumors. Minimally invasive techniques are prioritized to reduce recovery time and complications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spleen Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-[#00B9B0] mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Spleen Treatment Options
          </motion.h2>
          {[
            {
              title: "Splenic Trauma Surgery",
              desc: "Emergency or planned surgery to repair or remove a damaged spleen due to trauma, preventing life-threatening internal bleeding.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Splenic Tumor Removal",
              desc: "Surgical resection of benign or malignant tumors in the spleen, often performed laparoscopically for faster recovery.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "Splenic Cyst Treatment",
              desc: "Drainage or surgical removal of splenic cysts to prevent rupture or infection, using minimally invasive techniques when possible.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "Splenectomy (Open & Laparoscopic)",
              desc: "Complete or partial removal of the spleen for severe trauma, tumors, or hypersplenism, using open or laparoscopic methods.",
              image: "/images/treatment-4.jpg",
            },
            {
              title: "Splenic Artery Aneurysm",
              desc: "Surgical or endovascular treatment to repair or remove aneurysms in the splenic artery to prevent rupture.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Hypersplenism Treatment",
              desc: "Management of an overactive spleen through medication or splenectomy to address low blood cell counts and related symptoms.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Emergency Spleen Surgery",
              desc: "Rapid surgical intervention for life-threatening conditions like splenic rupture or severe trauma, prioritizing patient stabilization.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Minimally Invasive Procedures",
              desc: "Laparoscopic techniques for spleen surgeries, offering smaller incisions, less pain, and quicker recovery times.",
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
                  <h3 className="text-xl font-semibold text-[#00B9B0] mb-4">
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
            className="text-3xl font-bold text-center text-[#00B9B0] mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Venkatesh K.",
                review:
                  "After an accident, I had to undergo emergency spleen surgery. The doctors acted quickly and professionally — I truly owe my life to their care.",
                rating: 5,
              },
              {
                name: "Meena R.",
                review:
                  "I had a laparoscopic splenectomy done here in Hyderabad. The procedure was smooth and I was back to normal within a short time. Excellent care by the team.",
                rating: 5,
              },
              {
                name: "Arif S.",
                review:
                  "I came here for splenic cyst treatment. The doctors explained everything clearly and my recovery was much faster than I expected. Very satisfied with the care.",
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
                <p className="text-[#00B9B0] font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#00B9B0] to-teal-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Spleen Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#00B9B0] font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default SpleenPage;