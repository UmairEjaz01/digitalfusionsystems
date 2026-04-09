import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Mail, Globe, Clock, Award, Database, Cloud, Shield, Zap, Brain, Server, Layers, CheckCircle, Users, TrendingUp, Star, Calendar, ChevronDown } from "lucide-react";

// Section title component
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-16">
    {eyebrow && (
      <p className="text-brand-teal font-bold text-xs mb-4 uppercase tracking-widest font-inter">
        {eyebrow}
      </p>
    )}
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight font-montserrat">
      {title}
    </h2>
    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-inter">
      {subtitle}
    </p>
  </div>
);

const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Digital Transformation",
    icon: Zap,
    description: "We've helped 50+ companies reduce operational costs by 30% through custom automation and modernization strategies.",
    features: ["Legacy System Modernization", "Process Automation & Optimization", "Digital Strategy Consulting", "Change Management Support"],
    deliverables: "8-12 week implementation",
    roi: "30% cost reduction guaranteed",
  },
  {
    title: "Enterprise Applications",
    icon: Layers,
    description: "Our React applications handle 1M+ daily users for enterprise clients in banking and healthcare sectors.",
    features: ["Custom Enterprise Software", "ERP & CRM Solutions", "API Integration & Development", "Mobile Enterprise Apps"],
    deliverables: "Scalable, secure applications",
    roi: "99.9% uptime SLA",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent solutions that have helped healthcare clients improve diagnostic accuracy by 40% and reduce processing time by 60%.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions", "Intelligent Automation"],
    deliverables: "Custom AI models",
    roi: "40% accuracy improvement",
  },
  {
    title: "DevOps & Infrastructure",
    icon: Server,
    description: "Our DevOps solutions have reduced deployment time from hours to minutes for major banking institutions.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
    deliverables: "90% faster deployments",
    roi: "24/7 monitoring included",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Successfully migrated 100+ applications to cloud platforms, reducing infrastructure costs by 45% on average.",
    features: ["Cloud Migration Strategy", "Multi-Cloud Architecture", "Serverless Computing", "Cloud Security & Compliance"],
    deliverables: "Complete cloud migration",
    roi: "45% cost savings average",
  },
  {
    title: "Data Analytics & Engineering",
    icon: Database,
    description: "Transform raw data into actionable insights with our experienced data analysts and engineers who deliver measurable business intelligence.",
    features: ["Data Pipeline Development", "Business Intelligence Dashboards", "Predictive Analytics", "Data Warehouse Solutions"],
    deliverables: "Custom analytics solutions",
    roi: "Data-driven decision making",
  },
];

const industries = [
  { name: "Banking & Fintech", projects: "25+ projects", highlight: true },
  { name: "Healthcare & Pharmaceuticals", projects: "30+ projects", highlight: true },
  { name: "Public Sector", projects: "15+ projects", highlight: true },
  { name: "Travel & Hospitality", projects: "20+ projects" },
  { name: "Telecommunication", projects: "18+ projects" },
  { name: "Oil, Gas, and Energy", projects: "12+ projects" },
  { name: "E-commerce", projects: "35+ projects" },
  { name: "Retail & CPG", projects: "22+ projects" },
  { name: "Startups", projects: "40+ projects" },
  { name: "Gaming", projects: "8+ projects" },
];

const clientLogos = [
  { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Amazon AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
];

const testimonials = [
  {
    quote: "Digital Fusion Systems transformed our legacy banking infrastructure, reducing transaction processing time by 70% and saving us $2M annually.",
    author: "Sarah Chen",
    title: "CTO, Regional Bank",
    result: "$2M annual savings",
  },
  {
    quote: "Their AI solution improved our diagnostic accuracy by 40% and reduced patient wait times significantly. Outstanding technical expertise.",
    author: "Dr. Michael Rodriguez",
    title: "Chief Medical Officer",
    result: "40% accuracy improvement",
  },
  {
    quote: "The cloud migration was seamless. We achieved 99.9% uptime and reduced our infrastructure costs by 50% within six months.",
    author: "James Thompson",
    title: "IT Director, Government Agency",
    result: "50% cost reduction",
  },
];

const caseStudies = [
  {
    title: "Banking Digital Transformation",
    sector: "Banking",
    challenge: "Legacy system modernization for 50-year-old regional bank",
    solution: "Complete digital transformation with React-based customer portal and AI-powered fraud detection",
    results: ["70% faster transaction processing", "$2M annual cost savings", "Zero security incidents"],
    timeline: "12 weeks",
    icon: "🏦",
  },
  {
    title: "Healthcare AI Implementation",
    sector: "Healthcare",
    challenge: "Improve diagnostic accuracy and reduce patient wait times",
    solution: "Custom AI/ML models for medical imaging and patient triage automation",
    results: ["40% improvement in diagnostic accuracy", "60% reduction in processing time", "500+ patients served daily"],
    timeline: "16 weeks",
    icon: "🏥",
  },
  {
    title: "Government Cloud Migration",
    sector: "Public Sector",
    challenge: "Migrate critical government services to secure cloud infrastructure",
    solution: "Multi-cloud architecture with government-grade security and compliance",
    results: ["99.9% uptime achieved", "50% infrastructure cost reduction", "SOC 2 compliance maintained"],
    timeline: "20 weeks",
    icon: "🏛️",
  },
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

const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "4.9/5", label: "Client Satisfaction" },
];

const teamMembers = [
  {
    name: "Steve Masood",
    title: "Principal Architect / DevOps",
    credentials: "Azure, AWS, GCP — 10+ years",
    image: "/Steve.png",
  },
  {
    name: "Marcus Ejaz",
    title: "Principal Architect / DevOps",
    credentials: "Azure, AWS, GCP — 10+ years",
    image: "/Marcus.jpeg",
  },
  {
    name: "Mo Shameri",
    title: "Principal DevOps Engineer",
    credentials: "AWS Certified — 7+ years",
    image: "/Shameri.jpg",
  },
];

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => setShowFloatingCTA(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/mdklbnwr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">

      {/* Floating CTA */}
      {showFloatingCTA && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
        >
          <a
            href="#contact"
            className="bg-brand-teal hover:bg-brand-teal-dark text-white px-4 py-14 rounded-l-xl shadow-xl transition-colors flex items-center justify-center"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            <span className="font-bold text-xs tracking-widest font-inter">Let's Talk Business</span>
          </a>
        </motion.div>
      )}

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-full mx-auto px-6 md:px-12 py-3 flex items-center">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img src="/DF5.png" alt="Digital Fusion Systems" className="h-12 w-12 object-contain mt-2" />
            <span className="text-2xl font-black text-brand-teal font-montserrat tracking-tight">
              Digital Fusion Systems
            </span>
          </a>

          {/* Nav — centered */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-base font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors font-inter"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a href="#contact" className="px-5 py-2.5 bg-brand-teal text-white text-sm font-bold rounded-full hover:bg-brand-teal-dark transition-colors font-inter">
              Free Assessment
            </a>
            <a href="#contact" className="px-5 py-2.5 border-2 border-brand-teal text-brand-teal text-sm font-bold rounded-full hover:bg-brand-teal hover:text-white transition-colors font-inter">
              Let's Talk Business
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden ml-auto p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-5 h-5 text-brand-teal" /> : <Menu className="w-5 h-5 text-brand-teal" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-brand-teal font-bold py-1 font-inter" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="text-center px-5 py-2.5 bg-brand-teal text-white text-sm font-bold rounded-full font-inter" onClick={() => setOpen(false)}>
                Free Assessment
              </a>
              <a href="#contact" className="text-center px-5 py-2.5 border-2 border-brand-teal text-brand-teal text-sm font-bold rounded-full font-inter" onClick={() => setOpen(false)}>
                Let's Talk Business
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(14,186,177,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-brand-teal/20 border border-brand-teal/30 rounded-full px-5 py-2 mb-8">
              <Star className="w-4 h-4 text-brand-teal" />
              <span className="text-brand-teal text-sm font-semibold font-inter">Trusted by 200+ Enterprise Clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 font-montserrat">
              Building at the<br />
              <span className="text-brand-teal">Speed of Innovation</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed font-inter">
              We help banks, healthcare systems, and government agencies modernize legacy systems with zero downtime.{" "}
              <strong className="text-white">ROI guaranteed or your money back.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-bold rounded hover:bg-brand-teal-dark transition-colors font-inter">
                <Calendar className="w-5 h-5" />
                Schedule Free Assessment
              </a>
              <a href="#results" className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-bold rounded hover:bg-white/10 transition-colors font-inter">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-16"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className={`text-center py-4 ${idx < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                <div className="text-4xl md:text-5xl font-black text-brand-teal mb-2 font-montserrat">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium font-inter">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT LOGOS MARQUEE ── */}
      <section className="py-14 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <p className="text-xs text-gray-400 text-center uppercase tracking-widest font-semibold font-inter mb-8">
          Trusted by leading organizations
        </p>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
              <img src={client.logo} alt={client.name} className="h-8 w-auto object-contain" />
              <span className="text-gray-700 font-semibold text-sm font-inter">{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="results" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle eyebrow="Case Studies" title="Proven Results" subtitle="Real outcomes from our enterprise clients across banking, healthcare, and government sectors." />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{study.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-montserrat">{study.title}</h3>
                    <p className="text-brand-teal text-sm font-semibold font-inter">{study.sector}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-inter">Challenge</h4>
                    <p className="text-gray-600 text-sm font-inter">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-inter">Solution</h4>
                    <p className="text-gray-600 text-sm font-inter">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-inter">Results</h4>
                    <ul className="space-y-1.5">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700 font-inter">
                          <CheckCircle className="w-4 h-4 mr-2 text-brand-teal flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-inter">Timeline</span>
                    <span className="text-brand-teal font-bold text-sm font-inter">{study.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic font-inter">"{t.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900 text-sm font-inter">{t.author}</div>
                  <div className="text-gray-500 text-xs font-inter">{t.title}</div>
                  <div className="text-brand-teal text-xs font-bold mt-1 font-inter">{t.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle eyebrow="Services" title="Enterprise Solutions That Deliver" subtitle="Proven methodologies with guaranteed ROI and measurable outcomes." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-teal transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-inter">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 font-inter">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-inter">Delivery</span>
                    <span className="text-brand-teal font-semibold text-xs font-inter">{service.deliverables}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-inter">ROI</span>
                    <span className="text-emerald-600 font-semibold text-xs font-inter">{service.roi}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm font-inter">ROI Guarantee or Your Money Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle eyebrow="Industries" title="Industries We Serve" subtitle="Specialized expertise across sectors with deep domain knowledge and compliance requirements." />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className={`relative p-5 rounded-xl text-center cursor-pointer transition-all duration-300 group ${
                  industry.highlight
                    ? 'bg-brand-teal/5 border-2 border-brand-teal hover:bg-brand-teal'
                    : 'bg-gray-50 border border-gray-200 hover:border-brand-teal hover:bg-brand-teal/5'
                }`}
              >
                {industry.highlight && (
                  <div className="absolute -top-2 -right-2 bg-brand-teal text-white text-xs px-2 py-0.5 rounded-full font-bold font-inter">
                    Featured
                  </div>
                )}
                <h3 className={`text-sm font-bold mb-1.5 font-inter transition-colors ${industry.highlight ? 'text-gray-900 group-hover:text-white' : 'text-gray-800'}`}>
                  {industry.name}
                </h3>
                <p className={`text-xs font-semibold font-inter transition-colors ${industry.highlight ? 'text-brand-teal group-hover:text-white/80' : 'text-gray-400'}`}>
                  {industry.projects}
                </p>
                <ArrowRight className={`w-4 h-4 mx-auto mt-2 transition-all ${industry.highlight ? 'text-brand-teal group-hover:text-white' : 'text-gray-300 group-hover:text-brand-teal'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="about" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle eyebrow="Our Team" title="Expert Team" subtitle="Industry veterans with proven track records at Fortune 500 companies." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all duration-300"
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-5 mx-auto ring-4 ring-brand-teal/20" />
                ) : (
                  <div className="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center mb-5 mx-auto">
                    <span className="text-white font-bold text-2xl font-montserrat">{member.name.charAt(0)}</span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">{member.name}</h3>
                <p className="text-brand-teal font-semibold text-sm mb-2 font-inter">{member.title}</p>
                <p className="text-gray-500 text-sm font-inter">{member.credentials}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Award, label: "ISO 27001", sub: "Security Certified" },
                { icon: Shield, label: "SOC 2 Type II", sub: "Compliance Ready" },
                { icon: Clock, label: "24/7 Support", sub: "Always Available" },
                { icon: TrendingUp, label: "99.9% SLA", sub: "Uptime Guarantee" },
              ].map(({ icon: Icon, label, sub }, idx) => (
                <div key={idx}>
                  <Icon className="w-7 h-7 text-brand-teal mx-auto mb-3" />
                  <div className="text-xl font-bold text-gray-900 mb-1 font-montserrat">{label}</div>
                  <div className="text-gray-500 text-sm font-inter">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ── */}
      <section id="technologies" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle eyebrow="Technology" title="Enterprise-Grade Technology Stack" subtitle="Cutting-edge technologies proven at scale with Fortune 500 companies." />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-brand-teal hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center p-1.5 shadow-sm">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm font-inter">{tech.name}</h4>
                <p className="text-gray-400 text-xs mt-0.5 font-inter">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-4 font-inter">Contact Us</p>
              <h2 className="text-4xl md:text-5xl font-black mb-5 font-montserrat leading-tight">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-inter">
                Join 200+ enterprise clients who have achieved measurable ROI through our proven digital transformation approach.
              </p>

              <div className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-sm font-inter">ROI Guarantee</span>
                </div>
                <p className="text-emerald-200/70 text-sm font-inter">30% cost reduction guaranteed or your money back.</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", body: "info@digitalfusionsystems.com" },
                  { icon: Clock, title: "Response Time", body: "Within 4 hours during business days", note: "Emergency response: 30 minutes" },
                  { icon: Globe, title: "Australia & Asia-Pacific", body: "Serving clients across Australia and regional markets", note: "Local expertise with remote delivery" },
                ].map(({ icon: Icon, title, body, note }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-0.5 font-inter">{title}</h3>
                      <p className="text-gray-400 text-sm font-inter">{body}</p>
                      {note && <p className="text-gray-500 text-xs mt-0.5 font-inter">{note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Schedule Your Free Consultation</h3>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm font-inter">Message sent successfully!</span>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm font-inter">Failed to send. Please try again.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Full Name *</label>
                    <input type="text" name="fullName" placeholder="Your full name" required className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal font-inter" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Business Email *</label>
                    <input type="email" name="businessEmail" placeholder="your@company.com" required className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal font-inter" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+61 123 456 789" className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal font-inter" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Company Name *</label>
                    <input type="text" name="companyName" placeholder="Your company" required className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal font-inter" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Your Position</label>
                  <input type="text" name="position" placeholder="e.g. CTO, IT Director" className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal font-inter" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-inter">Project Details *</label>
                  <textarea name="enquiryDetails" rows={4} placeholder="Describe your project requirements..." required className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none font-inter" />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full py-3.5 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 font-inter transition-colors ${formStatus === 'loading' ? 'bg-gray-600 cursor-not-allowed text-gray-300' : 'bg-brand-teal hover:bg-brand-teal-dark text-white'}`}
                >
                  {formStatus === 'loading' ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Calendar className="w-4 h-4" />Schedule Consultation</>
                  )}
                </button>
                <p className="text-center text-gray-500 text-xs font-inter">Your information is secure and will never be shared.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/DF5.png" alt="Digital Fusion Systems" className="h-9 w-9" />
                <span className="text-white font-black text-base font-montserrat">Digital Fusion Systems</span>
              </div>
              <p className="text-sm leading-relaxed font-inter">Transforming enterprises through innovative technology solutions with guaranteed ROI.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 font-inter">Services</h4>
              <ul className="space-y-2 text-sm font-inter">
                {["Digital Transformation", "Enterprise Applications", "AI & Machine Learning", "Cloud Solutions"].map((s) => (
                  <li key={s}><a href="#services" className="hover:text-brand-teal transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 font-inter">Industries</h4>
              <ul className="space-y-2 text-sm font-inter">
                {["Banking & Fintech", "Healthcare", "Public Sector", "Enterprise"].map((s) => (
                  <li key={s}><a href="#industries" className="hover:text-brand-teal transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 font-inter">Contact</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li>info@digitalfusionsystems.com</li>
                <li>Response time: 4 hours</li>
                <li>Australia & Asia-Pacific</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-inter">&copy; 2024 Digital Fusion Systems. All rights reserved.</p>
            <div className="flex gap-6 text-sm font-inter">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <a key={l} href="#" className="hover:text-brand-teal transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
