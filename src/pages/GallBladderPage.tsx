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

const GallBladderPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallbladder Care & Surgery
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expert diagnosis and advanced laparoscopic treatments for gallstones,
            infections, and other gallbladder disorders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-lg hover:bg-gray-100 transition"
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
              alt="Gallbladder Treatment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-6">
              Specialized Gallbladder Care
            </h2>
            <p className="mb-4 text-lg">
              We provide advanced treatment for gallstones, infections, and
              gallbladder polyps using minimally invasive laparoscopic
              procedures. Our goal is to ensure faster recovery, minimal pain,
              and long-term relief.
            </p>
            <ul className="space-y-3">
              {[
                "Laparoscopic Gallbladder Surgery",
                "Gallstones & Blockage Removal",
                "Infection & Inflammation Treatment",
                "Post-Surgery Care & Nutrition Guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-600" size={20} />
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
            className="text-3xl font-bold text-center text-emerald-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Gallbladder Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Expert Consultation",
                desc: "Detailed diagnosis and personalized treatment plans for gallbladder problems.",
              },
              {
                icon: Activity,
                title: "Advanced Laparoscopy",
                desc: "Minimally invasive surgeries ensuring quick recovery and minimal pain.",
              },
              {
                icon: HeartPulse,
                title: "Post-Surgery Care",
                desc: "Guided recovery programs with diet and lifestyle support.",
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
                  className="text-emerald-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgery Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-emerald-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understanding Gallbladder Surgery
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Symptoms Indicating Surgery
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Severe abdominal pain, especially after meals",
                  "Nausea or vomiting",
                  "Fever or chills from infection",
                  "Jaundice (yellowing of skin or eyes)",
                  "Persistent bloating or digestive issues",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={20} />
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
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Benefits of Surgery
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Relief from chronic pain and discomfort",
                  "Prevention of complications like pancreatitis",
                  "Improved digestion and quality of life",
                  "Low risk with minimally invasive techniques",
                  "Quick recovery, often within 1-2 weeks",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={20} />
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
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                How the Surgery Works
              </h3>
              <p className="text-gray-600">
                Laparoscopic cholecystectomy, the most common gallbladder surgery,
                involves small incisions to insert a camera and tools to remove the
                gallbladder. Performed under general anesthesia, the procedure
                typically takes 1-2 hours, with patients often discharged the same
                day or within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallbladder Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-emerald-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Gallbladder Treatment Options
          </motion.h2>
          {[
            {
              title: "Gallbladder Stones Treatment",
              desc: "Gallstones are treated with medication to dissolve small stones or surgery (cholecystectomy) for larger or symptomatic stones. Lifestyle changes, such as a low-fat diet, may also help manage symptoms.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
            },
            {
              title: "Polyps Removal",
              desc: "Gallbladder polyps, if large or suspicious, are removed via cholecystectomy to prevent potential cancer risk. Small, benign polyps may be monitored with regular imaging.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509735/stomach-polyp-removal-pikovit-science-photo-library_ze0za9.jpg",
            },
            {
              title: "Laparoscopic Cholecystectomy",
              desc: "A minimally invasive surgery to remove the gallbladder using small incisions and a camera. It’s the standard treatment for gallstones and other gallbladder issues, offering quick recovery.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
            },
            {
              title: "Radical Cholecystectomy",
              desc: "Performed for gallbladder cancer, this surgery removes the gallbladder, nearby lymph nodes, and parts of the liver or bile ducts to ensure complete cancer removal.",
              image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
            },
            {
              title: "CBD Exploration",
              desc: "Common Bile Duct (CBD) exploration removes stones or blockages from the bile duct, often done during cholecystectomy using endoscopic or surgical techniques.",
              image: "/images/treatment-5.jpg",
            },
            {
              title: "Whipple’s Procedure",
              desc: "A complex surgery for pancreatic or bile duct cancers affecting the gallbladder, removing parts of the pancreas, duodenum, gallbladder, and bile duct, followed by reconstruction.",
              image: "/images/treatment-6.jpg",
            },
            {
              title: "Choledochal Cyst Excision",
              desc: "Surgical removal of cysts in the bile ducts to prevent complications like infections or cancer. The procedure often includes bile duct reconstruction.",
              image: "/images/treatment-7.jpg",
            },
            {
              title: "Hepaticojejunostomy",
              desc: "A procedure to reconnect the hepatic bile duct to the small intestine, often performed after bile duct injury or to treat blockages, ensuring proper bile flow.",
              image: "/images/treatment-8.jpg",
            },
          ].map((treatment, i) => (
            <div key={i} className="mb-12">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
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
                  <h3 className="text-xl font-semibold text-emerald-700 mb-4">
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
            className="text-3xl font-bold text-center text-emerald-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Patients Say
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                review:
                  "The laparoscopic surgery was quick, and I was back to normal in just a week! The team was incredibly supportive throughout.",
                rating: 5,
              },
              {
                name: "John D.",
                review:
                  "I had severe gallstone pain, but the expert consultation and surgery changed my life. Highly recommend their care!",
                rating: 5,
              },
              {
                name: "Emily R.",
                review:
                  "The post-surgery care and diet guidance helped me recover smoothly. The staff was professional and caring.",
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
                <p className="text-emerald-700 font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Need Expert Gallbladder Treatment?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default GallBladderPage;