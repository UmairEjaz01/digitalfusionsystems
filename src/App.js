import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import SectionTitle from "./components/SectionTitle";

const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  { title: "Digital Transformation", description: "Web, app, and software development with cutting-edge UX/UI." },
  { title: "Business Applications", description: "Dynamics 365 ERP, CRM, Power Apps, and Salesforce solutions." },
  { title: "Emerging Technologies", description: "Metaverse, AR, Blockchain, Gen AI, and advanced Data Analytics." },
  { title: "Staff Augmentation", description: "Skilled professionals integrated seamlessly with your teams." },
  { title: "Quality Assurance", description: "Reliable testing and QA for high-quality product delivery." },
  { title: "DevOps", description: "CI/CD, infrastructure automation, and cloud-native operations." },
  { title: "Cybersecurity", description: "Enterprise-grade security and compliance services." },
  { title: "SaaS", description: "End-to-end SaaS product development and scaling." },
  { title: "E-commerce", description: "Design, development, automation, and support for online businesses." },
  { title: "Gaming", description: "Web3, AR/VR/XR, and immersive art & design experiences." },
  { title: "Cloud", description: "Cloud applications, migration, and integration services." },
  { title: "Data Analytics", description: "Unlock insights with BI dashboards, reporting, and AI-driven analytics." },
];

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-turquoise-600 to-cyan-400" />
            <div>
              <div className="text-lg font-bold leading-tight">Digital Fusion Systems</div>
              <div className="text-xs text-slate-500">digitalfusionsystems.com</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm hover:text-turquoise-600">{n.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-turquoise-600 text-white shadow">
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm py-2" onClick={() => setOpen(false)}>{n.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-turquoise-600 text-white shadow" onClick={() => setOpen(false)}>
                Start a project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-turquoise-600 via-cyan-500 to-sky-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Transform. Innovate. Scale.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="max-w-2xl mt-6 text-lg text-white/90">
            We help businesses drive digital transformation, cloud adoption, and next‑gen technology innovation.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Capabilities" title="Our Expertise" subtitle="From digital transformation to data analytics and cloud innovation." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md">
                <h3 className="text-lg font-semibold text-turquoise-600">{cap.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
