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

const HerniaPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-400 via-green-400 to-yellow-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hernia Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced treatments for all types of hernias, including inguinal, umbilical, and ventral hernias.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-600 font-semibold shadow-lg hover:bg-gray-100 transition"
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
              alt="Hernia Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-sky-600 mb-6">
              Specialized Hernia Care
            </h2>
            <p className="mb-4 text-lg">
              We provide advanced treatments for all hernia types, using minimally invasive and open surgical techniques to ensure quick recovery and lasting relief.
            </p>
            <ul className="space-y-3">
              {[
                "Inguinal Hernia Repair",
                "Laparoscopic TAPP",
                "Umbilical Hernia Repair",
                "Incisional Hernia Repair",
                "Open & Laparoscopic Repair",
                "Diaphragmatic Hernia Surgery",
                "Ventral Hernia Repair",
                "Complex Hernia Surgery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-sky-600" size={20} />
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
            className="text-3xl font-bold text-center text-sky-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Hernia Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Comprehensive evaluations and tailored treatment plans for all hernia types.",
              },
              {
                icon: Activity,
                title: "Advanced Surgical Techniques",
                desc: "Minimally invasive and open surgeries for inguinal, umbilical, and complex hernias.",
              },
              {
                icon: HeartPulse,
                title: "Post-Treatment Care",
                desc: "Personalized recovery plans with lifestyle and activity guidance for optimal healing.",
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
                  className="text-sky-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hernia Treatment Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-sky-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Hernia Treatments
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                Symptoms Indicating Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Bulge or lump in the abdomen or groin",
                  "Pain or discomfort during movement",
                  "Burning or aching sensation at the bulge",
                  "Feeling of heaviness in the abdomen",
                  "Nausea or vomiting in severe cases",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-sky-600" size={20} />
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
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                Benefits of Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from pain and discomfort",
                  "Prevention of complications like strangulation",
                  "Improved mobility and activity levels",
                  "Reduced risk of hernia recurrence",
                  "Enhanced quality of life",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-sky-600" size={20} />
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
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                How Treatments Work
              </h3>
              <p className="text-gray-600">
                Hernia treatments range from watchful waiting for asymptomatic cases to surgical repair for symptomatic or complex hernias. Minimally invasive techniques, like laparoscopic TAPP, are used to reduce recovery time and complications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hernia Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-sky-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Hernia Treatment Options
          </motion.h2>
          {[
            {
              title: "Inguinal Hernia Repair",
              desc: "Surgical correction of inguinal hernias using open or laparoscopic techniques to strengthen the abdominal wall.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "Laparoscopic TAPP",
              desc: "Transabdominal preperitoneal repair, a minimally invasive procedure to fix inguinal hernias with small incisions.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Umbilical Hernia Repair",
              desc: "Surgical repair of hernias near the navel, often using mesh to reinforce the abdominal wall and prevent recurrence.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "Incisional Hernia Repair",
              desc: "Correction of hernias at previous surgical incision sites, using open or laparoscopic methods for durable repair.",
              image: "/images/treatment-4.jpg",
            },
            {
              title: "Open & Laparoscopic Repair",
              desc: "Both traditional open surgery and minimally invasive laparoscopic techniques for various hernia types, tailored to patient needs.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Diaphragmatic Hernia Surgery",
              desc: "Surgical correction of hernias in the diaphragm, often involving minimally invasive techniques to restore function.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Ventral Hernia Repair",
              desc: "Surgical treatment of hernias in the abdominal wall, using mesh or suture techniques to ensure lasting repair.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Complex Hernia Surgery",
              desc: "Advanced surgical solutions for recurrent or large hernias, often requiring specialized techniques and multidisciplinary care.",
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
                  <h3 className="text-xl font-semibold text-sky-600 mb-4">
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
            className="text-3xl font-bold text-center text-sky-600 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Ramesh V.",
                review:
                  "I had laparoscopic hernia repair done here in Hyderabad. The procedure was quick and almost painless — I was back to my routine in no time.",
                rating: 5,
              },
              {
                name: "Deepthi S.",
                review:
                  "My umbilical hernia surgery went very smoothly. The doctors explained everything clearly and their care was outstanding.",
                rating: 5,
              },
              {
                name: "Imran A.",
                review:
                  "I underwent incisional hernia repair. The entire process was explained well and my recovery was much faster than expected. Very thankful to the team.",
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
                <p className="text-sky-600 font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-400 to-yellow-400 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Hernia Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-600 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HerniaPage;