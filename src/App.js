import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Mail, Globe, Clock, Award, Code, Database, Cloud, Shield, Smartphone, Zap, Brain, Settings, Server, Layers } from "lucide-react";
import SectionTitle from "./components/SectionTitle";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { 
    title: "Digital Transformation", 
    icon: Zap,
    description: "Comprehensive modernization strategies that leverage emerging technologies to optimize workflows, enhance customer experiences, and drive competitive advantage.",
    features: ["Legacy System Modernization", "Process Automation & Optimization", "Digital Strategy Consulting", "Change Management Support"]
  },
  { 
    title: "Enterprise Applications", 
    icon: Layers,
    description: "Scalable, secure business applications built with enterprise-grade architecture to streamline operations and enhance productivity across your organization.",
    features: ["Custom Enterprise Software", "ERP & CRM Solutions", "API Integration & Development", "Mobile Enterprise Apps"]
  },
  { 
    title: "AI & Machine Learning", 
    icon: Brain,
    description: "Intelligent solutions that harness the power of artificial intelligence and machine learning to automate processes, predict outcomes, and drive data-driven decisions.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions", "Intelligent Automation"]
  },
  { 
    title: "DevOps & Infrastructure", 
    icon: Server,
    description: "Robust development operations and infrastructure solutions that ensure rapid deployment, high availability, and seamless scalability for your applications.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"]
  },
  { 
    title: "Cloud Solutions", 
    icon: Cloud,
    description: "Comprehensive cloud migration and optimization services that leverage leading platforms to deliver scalable, cost-effective, and secure infrastructure solutions.",
    features: ["Cloud Migration Strategy", "Multi-Cloud Architecture", "Serverless Computing", "Cloud Security & Compliance"]
  },
  { 
    title: "Cybersecurity", 
    icon: Shield,
    description: "Advanced security solutions and consulting services that protect your digital assets, ensure compliance, and maintain business continuity in today's threat landscape.",
    features: ["Security Assessment & Auditing", "Penetration Testing", "Compliance Management", "Incident Response Planning"]
  },
];

const industries = [
  "Travel & Hospitality",
  "Telecommunication", 
  "Oil, Gas, and Energy",
  "E-commerce",
  "Healthcare & Pharmaceuticals",
  "Public Sector",
  "Retail & CPG",
  "Startups",
  "Banking & Fintech",
  "Gaming"
];

const technologies = [
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Azure", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Git", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("");
  const [formData, setFormData] = React.useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    position: "",
    enquiryDetails: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
    
    try {
      const response = await fetch('https://formspree.io/f/mdklbnwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.businessEmail,
          company: formData.companyName,
          position: formData.position,
          message: formData.enquiryDetails
        }),
      });
      
      if (response.ok) {
        setFormStatus("success");
        setFormData({
          fullName: "",
          businessEmail: "",
          companyName: "",
          position: "",
          enquiryDetails: ""
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/95 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/DF.png" alt="Digital Fusion Systems Logo" className="h-12 w-12" />
            <div>
              <div className="text-3xl font-bold leading-tight text-white">Digital Fusion Systems</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-12">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-lg text-slate-200 hover:text-purple-300 transition-colors font-semibold">{n.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg">
              Get Started
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-600" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-lg py-2 text-slate-300 font-semibold" onClick={() => setOpen(false)}>{n.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-white" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Transform. Innovate. Scale.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-3xl mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
            We help businesses drive digital transformation, cloud adoption, and next‑gen technology innovation.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Services" title="Our Expertise" subtitle="From digital transformation to data analytics and cloud innovation." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: idx * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 hover:border-purple-400"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-base">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-base text-slate-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Industries" subtitle="We serve clients across diverse sectors with tailored solutions." />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center text-lg text-slate-300 hover:text-purple-400 transition-colors cursor-pointer py-4"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technologies" className="py-20 md:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Cutting-Edge Technology Stack" subtitle="We leverage the latest technologies and frameworks to build robust, scalable, and future-ready solutions for your business." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 hover:border-purple-400"
              >
                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center p-2">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
                <h4 className="font-bold text-white text-xl">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 mb-12 text-xl leading-relaxed">
                Partner with us to unlock the full potential of digital transformation. 
                Our expert team is ready to help you achieve your strategic objectives with innovative, scalable solutions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-blue-100 text-lg">info@digitalfusionsystems.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                    <p className="text-blue-100 text-lg">Serving clients worldwide with 24/7 support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Response Time</h3>
                    <p className="text-blue-100 text-lg">Within 4 hours during business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Certifications</h3>
                    <p className="text-blue-100 text-lg">ISO 27001, SOC 2 Type II Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-6">Start Your Digital Transformation</h3>
              
              {/* Form Status Messages */}
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg">
                  <p className="text-green-100 font-medium">✅ Thank you for your enquiry! We'll get back to you within 4 hours during business days.</p>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg">
                  <p className="text-red-100 font-medium">❌ Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium mb-2">Business Email *</label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">Your Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g. CTO, IT Director, etc."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryDetails" className="block text-sm font-medium mb-2">Enquiry Details *</label>
                  <textarea
                    id="enquiryDetails"
                    name="enquiryDetails"
                    value={formData.enquiryDetails}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Please describe your project requirements, challenges, and objectives..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Digital Fusion Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
