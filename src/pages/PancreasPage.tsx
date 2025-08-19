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

const PancreasPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-violet-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pancreas Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced treatments for pancreatitis, pancreatic cysts, and pancreatic cancer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:bg-gray-100 transition"
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
              alt="Pancreas Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              Specialized Pancreas Care
            </h2>
            <p className="mb-4 text-lg">
              We provide cutting-edge treatments for pancreatic conditions, including acute and chronic pancreatitis, cysts, and cancer, using minimally invasive techniques for optimal recovery.
            </p>
            <ul className="space-y-3">
              {[
                "Acute Pancreatitis Treatment",
                "Necrosectomy",
                "Chronic Pancreatitis Management",
                "Frey's LPJ Procedure",
                "Whipple's Procedure",
                "Distal Pancreatico Splenectomy",
                "Pancreatic Cyst Treatment",
                "Pancreatic Cancer Surgery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-600" size={20} />
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
            className="text-3xl font-bold text-center text-purple-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Pancreas Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Detailed evaluations and personalized treatment plans for pancreatic disorders.",
              },
              {
                icon: Activity,
                title: "Advanced Surgical Options",
                desc: "Minimally invasive and complex surgeries for pancreatitis and pancreatic cancer.",
              },
              {
                icon: HeartPulse,
                title: "Post-Treatment Care",
                desc: "Comprehensive recovery plans with nutritional and lifestyle support.",
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
                  className="text-purple-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pancreas Treatment Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-purple-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Pancreas Treatments
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Symptoms Indicating Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Severe abdominal pain radiating to the back",
                  "Nausea or vomiting",
                  "Unexplained weight loss",
                  "Jaundice (yellowing of skin or eyes)",
                  "Chronic digestive issues or diarrhea",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-purple-600" size={20} />
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
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Benefits of Treatment
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from chronic pain and discomfort",
                  "Prevention of complications like pancreatic failure",
                  "Improved digestion and nutrient absorption",
                  "Reduced risk of cancer progression",
                  "Enhanced quality of life and energy",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-purple-600" size={20} />
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
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                How Treatments Work
              </h3>
              <p className="text-gray-600">
                Treatments range from medical management for acute pancreatitis to complex surgeries like Whipple’s procedure for cancer. Minimally invasive techniques are used when possible to reduce recovery time and complications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pancreas Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-purple-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Pancreas Treatment Options
          </motion.h2>
          {[
            {
              title: "Acute Pancreatitis Treatment",
              desc: "Medical management with fluids, pain relief, and dietary adjustments to treat inflammation and prevent complications.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "Necrosectomy",
              desc: "Surgical removal of necrotic pancreatic tissue to treat severe pancreatitis or infections, often using minimally invasive techniques.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Chronic Pancreatitis Management",
              desc: "Long-term care with pain management, enzyme supplements, and lifestyle changes to improve quality of life and prevent flare-ups.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "Frey's LPJ Procedure",
              desc: "A surgery combining pancreatic duct drainage and partial resection to relieve chronic pancreatitis pain while preserving pancreatic function.",
              image: "/images/treatment-4.jpg",
            },
            {
              title: "Whipple's Procedure",
              desc: "Complex surgery for pancreatic cancer, removing parts of the pancreas, duodenum, gallbladder, and bile duct, followed by reconstruction.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Distal Pancreatico Splenectomy",
              desc: "Removal of the tail of the pancreas and spleen for tumors or cysts, often performed laparoscopically for faster recovery.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Pancreatic Cyst Treatment",
              desc: "Drainage or surgical removal of pancreatic cysts to prevent complications, guided by imaging and diagnostic tests.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Pancreatic Cancer Surgery",
              desc: "Surgical resection of pancreatic tumors, combined with chemotherapy or radiation for comprehensive cancer treatment.",
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
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
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
            className="text-3xl font-bold text-center text-purple-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Kiran R.",
                review:
                  "I had to undergo the Whipple procedure and was very nervous initially, but the doctors here in Hyderabad handled it so smoothly. I’m recovering well now, thanks to their expertise.",
                rating: 5,
              },
              {
                name: "Swapna G.",
                review:
                  "I was struggling with chronic pancreatitis for a long time, but the treatment here gave me my life back. The doctors’ care and guidance were truly exceptional.",
                rating: 5,
              },
              {
                name: "Mohammed F.",
                review:
                  "I went through treatment for a pancreatic cyst and the staff were very supportive throughout. My recovery was much quicker than I expected.",
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
                <p className="text-purple-700 font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-violet-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Pancreas Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PancreasPage;