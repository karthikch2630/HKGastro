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

const EsophagusPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#FFD24C] via-yellow-400 to-orange-400 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Esophagus Care & Surgery
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Expert diagnosis and advanced treatments for esophageal conditions, including GERD, achalasia, and esophageal cancer.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link
                            to="/appointments"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FFD24C] font-semibold shadow-lg hover:bg-gray-100 transition"
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
                            alt="Esophagus Treatment"
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-[#FFD24C] mb-6">
                            Specialized Esophagus Care
                        </h2>
                        <p className="mb-4 text-lg">
                            We provide advanced treatments for esophageal disorders, from GERD and hiatus hernia to esophageal cancer, using minimally invasive techniques for faster recovery and improved outcomes.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "GERD Treatment",
                                "Hiatus Hernia Repair",
                                "Laparoscopic Fundoplication",
                                "Esophagectomy",
                                "Colon Pull-up Surgery",
                                "Esophageal Cancer Treatment",
                                "Achalasia Treatment",
                                "Barrett's Esophagus Management",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-[#FFD24C]" size={20} />
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
                        className="text-3xl font-bold text-center text-[#FFD24C] mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Esophagus Services
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Stethoscope,
                                title: "Expert Consultation",
                                desc: "Comprehensive evaluations and personalized treatment plans for esophageal conditions.",
                            },
                            {
                                icon: Activity,
                                title: "Advanced Surgical Techniques",
                                desc: "Minimally invasive and complex surgeries for esophageal disorders like achalasia and cancer.",
                            },
                            {
                                icon: HeartPulse,
                                title: "Post-Treatment Care",
                                desc: "Tailored recovery plans with dietary and lifestyle support for optimal healing.",
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
                                    className="text-[#FFD24C] mx-auto mb-4"
                                    size={40}
                                />
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Esophagus Treatment Information Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center text-[#FFD24C] mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Understanding Esophagus Treatments
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div
                            className="p-8 bg-white rounded-2xl shadow-md"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h3 className="text-xl font-semibold text-[#FFD24C] mb-4">
                                Symptoms Indicating Treatment
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Persistent heartburn or acid reflux",
                                    "Difficulty swallowing (dysphagia)",
                                    "Chest pain or discomfort",
                                    "Chronic cough or hoarseness",
                                    "Unexplained weight loss",
                                ].map((symptom, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#FFD24C]" size={20} />
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
                            <h3 className="text-xl font-semibold text-[#FFD24C] mb-4">
                                Benefits of Treatment
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Relief from chronic reflux and pain",
                                    "Reduced risk of esophageal damage",
                                    "Improved swallowing and digestion",
                                    "Prevention of complications like cancer",
                                    "Enhanced quality of life",
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#FFD24C]" size={20} />
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
                            <h3 className="text-xl font-semibold text-[#FFD24C] mb-4">
                                How Treatments Work
                            </h3>
                            <p className="text-gray-600">
                                Esophageal treatments range from medical management for GERD to complex surgeries like esophagectomy for cancer. Minimally invasive procedures, such as laparoscopic fundoplication, are used to reduce recovery time and complications.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Esophagus Treatments Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center text-[#FFD24C] mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Esophagus Treatment Options
                    </motion.h2>
                    {[
                        {
                            title: "GERD Treatment",
                            desc: "Management of gastroesophageal reflux disease with medications, lifestyle changes, or surgery to prevent acid reflux and esophageal damage.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
                        },
                        {
                            title: "Hiatus Hernia Repair",
                            desc: "Surgical correction of a hiatus hernia to restore the stomach’s position and prevent acid reflux, often performed laparoscopically.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
                        },
                        {
                            title: "Laparoscopic Fundoplication",
                            desc: "A minimally invasive procedure to wrap the stomach around the esophagus, strengthening the valve to prevent acid reflux.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
                        },
                        {
                            title: "Esophagectomy",
                            desc: "Surgical removal of part or all of the esophagus, typically for esophageal cancer, followed by reconstruction using stomach or colon tissue.",
                            image: "/images/treatment-4.jpg",
                        },
                        {
                            title: "Colon Pull-up Surgery",
                            desc: "A procedure to replace the esophagus with a segment of the colon, often used after esophagectomy for cancer or severe damage.",
                            image: "/images/treatment-5.jpg",
                        },
                        {
                            title: "Esophageal Cancer Treatment",
                            desc: "Comprehensive care including surgery, chemotherapy, and radiation to treat esophageal cancer, tailored to the patient’s condition.",
                            image: "/images/treatment-6.jpg",
                        },
                        {
                            title: "Achalasia Treatment",
                            desc: "Management of achalasia with medications, dilation, or surgery (Heller myotomy) to improve esophageal motility and swallowing.",
                            image: "/images/treatment-7.jpg",
                        },
                        {
                            title: "Barrett's Esophagus Management",
                            desc: "Monitoring and treatment of Barrett’s esophagus to prevent progression to cancer, using endoscopic procedures or surgery when needed.",
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
                                    <h3 className="text-xl font-semibold text-[#FFD24C] mb-4">
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
                        className="text-3xl font-bold text-center text-[#FFD24C] mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        What Our Patients Say
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Lakshmi N.",
                                review:
                                    "I had laparoscopic fundoplication for my GERD and it really changed my life. The doctors here in Hyderabad were very caring and professional throughout the process.",
                                rating: 5,
                            },
                            {
                                name: "Arjun P.",
                                review:
                                    "I was struggling with achalasia and swallowing was very difficult. The treatment here made a huge difference, and the doctors guided me with patience and support.",
                                rating: 5,
                            },
                            {
                                name: "Farheen A.",
                                review:
                                    "I came for treatment of Barrett’s esophagus. The way the doctors explained everything clearly and made the process smooth gave me a lot of confidence. Truly thankful.",
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
                                <p className="text-[#FFD24C] font-semibold">{review.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#FFD24C] to-orange-400 text-white text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Need Expert Esophagus Treatment?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <Link
                        to="/appointments"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FFD24C] font-semibold shadow-lg hover:bg-gray-100 transition"
                    >
                        Book Appointment <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default EsophagusPage;