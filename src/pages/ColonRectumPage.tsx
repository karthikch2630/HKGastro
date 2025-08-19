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

const ColonRectumPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-lime-400 via-cyan-400 to-sky-500 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Colon & Rectum Care & Surgery
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg md:text-xl mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Expert diagnosis and advanced treatments for colon and rectal conditions, including IBD, colorectal cancer, and more.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link
                            to="/appointments"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-lime-600 font-semibold shadow-lg hover:bg-gray-100 transition"
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
                            alt="Colon & Rectum Treatment"
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-lime-600 mb-6">
                            Specialized Colon & Rectum Care
                        </h2>
                        <p className="mb-4 text-lg">
                            We provide comprehensive treatments for colon and rectal disorders, from inflammatory bowel disease to colorectal cancer, using advanced surgical and non-surgical techniques for optimal outcomes.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "IBD Management",
                                "Total Colectomy",
                                "Right Hemicolectomy",
                                "Left Hemicolectomy",
                                "Rectal Cancer Surgery",
                                "Segmental Colectomy",
                                "Colostomy Procedures",
                                "Colorectal Cancer Treatment",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-lime-600" size={20} />
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
                        className="text-3xl font-bold text-center text-lime-600 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Colon & Rectum Services
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Stethoscope,
                                title: "Expert Consultation",
                                desc: "Detailed evaluations and personalized treatment plans for colon and rectal conditions.",
                            },
                            {
                                icon: Activity,
                                title: "Advanced Surgical Techniques",
                                desc: "Minimally invasive and open surgeries for IBD, colorectal cancer, and other disorders.",
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
                                    className="text-lime-600 mx-auto mb-4"
                                    size={40}
                                />
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Colon & Rectum Treatment Information Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center text-lime-600 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Understanding Colon & Rectum Treatments
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div
                            className="p-8 bg-white rounded-2xl shadow-md"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h3 className="text-xl font-semibold text-lime-600 mb-4">
                                Symptoms Indicating Treatment
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Persistent abdominal pain or cramping",
                                    "Changes in bowel habits (diarrhea or constipation)",
                                    "Blood in stool",
                                    "Unexplained weight loss",
                                    "Chronic fatigue or weakness",
                                ].map((symptom, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-lime-600" size={20} />
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
                            <h3 className="text-xl font-semibold text-lime-600 mb-4">
                                Benefits of Treatment
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Relief from chronic pain and discomfort",
                                    "Reduced risk of colorectal cancer progression",
                                    "Improved bowel function and digestion",
                                    "Prevention of complications like obstruction",
                                    "Enhanced quality of life",
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-lime-600" size={20} />
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
                            <h3 className="text-xl font-semibold text-lime-600 mb-4">
                                How Treatments Work
                            </h3>
                            <p className="text-gray-600">
                                Treatments range from medical management for IBD to complex surgeries like colectomy for cancer. Minimally invasive techniques, such as laparoscopic surgery, are used to reduce recovery time and complications.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Colon & Rectum Treatments Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center text-lime-600 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Colon & Rectum Treatment Options
                    </motion.h2>
                    {[
                        {
                            title: "IBD Management",
                            desc: "Comprehensive care for inflammatory bowel diseases like Crohn’s and ulcerative colitis, using medications and lifestyle adjustments.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755509517/What-Are-Gallbladder-Stones_b8xnaf.jpg",
                        },
                        {
                            title: "Total Colectomy",
                            desc: "Surgical removal of the entire colon for severe IBD or cancer, often followed by reconstruction or colostomy.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517670/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__81260_nefvvc.png",
                        },
                        {
                            title: "Right Hemicolectomy",
                            desc: "Removal of the right side of the colon for cancer or other conditions, using minimally invasive techniques when possible.",
                            image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755517717/radial_cholecystectomy_gkhrx7.jpg",
                        },
                        {
                            title: "Left Hemicolectomy",
                            desc: "Surgical removal of the left side of the colon to treat cancer or diverticulitis, prioritizing minimal invasiveness.",
                            image: "/images/treatment-4.jpg",
                        },
                        {
                            title: "Rectal Cancer Surgery",
                            desc: "Surgical resection of rectal tumors, often combined with radiation or chemotherapy for comprehensive cancer treatment.",
                            image: "/images/treatment-5.jpg",
                        },
                        {
                            title: "Segmental Colectomy",
                            desc: "Removal of a specific segment of the colon to treat localized disease, preserving as much healthy tissue as possible.",
                            image: "/images/treatment-6.jpg",
                        },
                        {
                            title: "Colostomy Procedures",
                            desc: "Creation of a colostomy to reroute the colon to an external bag, used in cases of cancer or severe bowel obstruction.",
                            image: "/images/treatment-7.jpg",
                        },
                        {
                            title: "Colorectal Cancer Treatment",
                            desc: "Comprehensive care including surgery, chemotherapy, and radiation, tailored to the stage and location of colorectal cancer.",
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
                                    <h3 className="text-xl font-semibold text-lime-600 mb-4">
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
                        className="text-3xl font-bold text-center text-lime-600 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        What Our Patients Say
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Sowmya R.",
                                review:
                                    "I underwent colorectal surgery here in Hyderabad and the doctors really took care of me like family. Very thankful for their expertise and support.",
                                rating: 5,
                            },
                            {
                                name: "Ravi K.",
                                review:
                                    "I was struggling with IBD for years, but after coming here my health has improved so much. The doctors are very patient and explain everything clearly.",
                                rating: 5,
                            },
                            {
                                name: "Ayesha S.",
                                review:
                                    "I had to go through a colostomy procedure and honestly I was scared at first. But the team guided me well and my recovery was much easier than I expected.",
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
                                <p className="text-lime-600 font-semibold">{review.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-lime-400 to-sky-500 text-white text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Need Expert Colon & Rectum Treatment?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <Link
                        to="/appointments"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-lime-600 font-semibold shadow-lg hover:bg-gray-100 transition"
                    >
                        Book Appointment <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default ColonRectumPage;