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

const StomachPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-lime-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stomach Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced treatments for stomach conditions, including acid peptic disease, ulcers, and gastric cancer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-teal-600 font-semibold shadow-lg hover:bg-gray-100 transition"
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
              alt="Stomach Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-teal-600 mb-6">
              Specialized Stomach Care
            </h2>
            <p className="mb-4 text-lg">
              We offer comprehensive treatments for stomach disorders, from acid peptic disease to gastric cancer, using advanced surgical and non-surgical techniques for optimal recovery.
            </p>
            <ul className="space-y-3">
              {[
                "Acid Peptic Disease Treatment",
                "TV+GJ Procedure",
                "Radical Gastrectomy",
                "Sleeve Gastrectomy",
                "Corrosive Stricture Surgery",
                "Gastric Cancer Surgery",
                "Peptic Ulcer Surgery",
                "Gastric Bypass Surgery",
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
            className="text-3xl font-bold text-center text-teal-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Stomach Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Detailed evaluations and personalized treatment plans for stomach-related conditions.",
              },
              {
                icon: Activity,
                title: "Advanced Surgical Techniques",
                desc: "Minimally invasive and open surgeries for ulcers, strictures, and gastric cancer.",
              },
              {
                icon: HeartPulse,
                title: "Post-Treatment Care",
                desc: "Tailored recovery plans with nutritional and lifestyle guidance for optimal healing.",
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

      {/* Stomach Treatment Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-teal-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Stomach Treatments
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Symptoms Indicating Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Persistent stomach pain or burning",
                  "Nausea or vomiting",
                  "Difficulty swallowing or bloating",
                  "Unexplained weight loss",
                  "Blood in stool or vomit",
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
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Benefits of Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from chronic pain and discomfort",
                  "Prevention of complications like bleeding ulcers",
                  "Improved digestion and appetite",
                  "Reduced risk of gastric cancer progression",
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
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                How Treatments Work
              </h3>
              <p className="text-gray-600">
                Stomach treatments range from medical management for acid peptic disease to complex surgeries like gastrectomy for cancer. Minimally invasive techniques, such as laparoscopic surgery, are used to reduce recovery time and complications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stomach Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-teal-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Stomach Treatment Options
          </motion.h2>
          {[
            {
              title: "Acid Peptic Disease Treatment",
              desc: "Management of acid peptic disorders with medications, dietary changes, and lifestyle adjustments to reduce acid production and heal ulcers.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "TV+GJ Procedure",
              desc: "Truncal vagotomy and gastrojejunostomy to reduce acid secretion and improve gastric drainage for severe peptic ulcer disease.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Radical Gastrectomy",
              desc: "Surgical removal of part or all of the stomach for gastric cancer, often combined with lymph node removal for comprehensive treatment.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "Sleeve Gastrectomy",
              desc: "A minimally invasive procedure to remove a portion of the stomach, often used for weight loss or to treat severe gastric conditions.",
              image: "/images/treatment-4.jpg",
            },
            {
              title: "Corrosive Stricture Surgery",
              desc: "Surgical correction of esophageal or gastric strictures caused by corrosive ingestion, restoring normal passage and function.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Gastric Cancer Surgery",
              desc: "Comprehensive treatment for gastric cancer, including gastrectomy, chemotherapy, and radiation, tailored to the patient’s condition.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Peptic Ulcer Surgery",
              desc: "Surgical intervention for complicated peptic ulcers, such as perforation or bleeding, using techniques like vagotomy or partial gastrectomy.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Gastric Bypass Surgery",
              desc: "A procedure to reroute the digestive system, reducing stomach size and aiding in weight loss or treatment of severe gastric disorders.",
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
                  <h3 className="text-xl font-semibold text-teal-600 mb-4">
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
            className="text-3xl font-bold text-center text-teal-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Shilpa M.",
                review:
                  "I underwent sleeve gastrectomy here in Hyderabad and it was truly a life-changing experience. The doctors and staff supported me throughout, and my recovery was very smooth.",
                rating: 5,
              },
              {
                name: "Rahul V.",
                review:
                  "I was struggling with severe peptic ulcer pain, but after surgery here I got complete relief. The doctors were very caring and explained everything clearly.",
                rating: 5,
              },
              {
                name: "Fatima S.",
                review:
                  "I came for treatment of a gastric condition and the care I received was excellent. The team guided me at every step and my recovery was much faster than expected.",
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
                <p className="text-teal-600 font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-lime-400 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Stomach Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-teal-600 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default StomachPage;