import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Mail, Globe, Clock, Award, Code, Database, Cloud, Shield, Smartphone, Zap, Brain, Settings, Server, Layers, CheckCircle, Users, TrendingUp, Star, Phone, Upload, Calendar, DollarSign } from "lucide-react";

// Component for section titles
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-20">
    {eyebrow && <p className="text-purple-400 font-bold text-sm mb-6 uppercase tracking-widest">{eyebrow}</p>}
    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">{title}</h2>
    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">{subtitle}</p>
  </div>
);

// Navigation data
const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Services data with specific metrics and ROI
const services = [
  { 
    title: "Digital Transformation", 
    icon: Zap,
    description: "We've helped 50+ companies reduce operational costs by 30% through custom automation and modernization strategies.",
    features: ["Legacy System Modernization", "Process Automation & Optimization", "Digital Strategy Consulting", "Change Management Support"],
    deliverables: "8-12 week implementation",
    roi: "30% cost reduction guaranteed"
  },
  { 
    title: "Enterprise Applications", 
    icon: Layers,
    description: "Our React applications handle 1M+ daily users for enterprise clients in banking and healthcare sectors.",
    features: ["Custom Enterprise Software", "ERP & CRM Solutions", "API Integration & Development", "Mobile Enterprise Apps"],
    deliverables: "Scalable, secure applications",
    roi: "99.9% uptime SLA"
  },
  { 
    title: "AI & Machine Learning", 
    icon: Brain,
    description: "Intelligent solutions that have helped healthcare clients improve diagnostic accuracy by 40% and reduce processing time by 60%.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions", "Intelligent Automation"],
    deliverables: "Custom AI models",
    roi: "40% accuracy improvement"
  },
  { 
    title: "DevOps & Infrastructure", 
    icon: Server,
    description: "Our DevOps solutions have reduced deployment time from hours to minutes for major banking institutions.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
    deliverables: "90% faster deployments",
    roi: "24/7 monitoring included"
  },
  { 
    title: "Cloud Solutions", 
    icon: Cloud,
    description: "Successfully migrated 100+ applications to cloud platforms, reducing infrastructure costs by 45% on average.",
    features: ["Cloud Migration Strategy", "Multi-Cloud Architecture", "Serverless Computing", "Cloud Security & Compliance"],
    deliverables: "Complete cloud migration",
    roi: "45% cost savings average"
  },
  { 
    title: "Cybersecurity", 
    icon: Shield,
    description: "Zero security breaches across our 200+ client implementations with government-grade security protocols.",
    features: ["Security Assessment & Auditing", "Penetration Testing", "Compliance Management", "Incident Response Planning"],
    deliverables: "SOC 2 compliant security",
    roi: "Zero breach guarantee"
  },
];

// Industries with project counts - highlighting key sectors
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
  { name: "Gaming", projects: "8+ projects" }
];

// Client logos for social proof
const clientLogos = [
  { 
    name: "Microsoft", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg", 
    sector: "Technology" 
  },
  { 
    name: "Amazon", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg", 
    sector: "Cloud Services" 
  },
  { 
    name: "IBM", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg", 
    sector: "Enterprise" 
  },
  { 
    name: "Oracle", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oracle.svg", 
    sector: "Database" 
  },
  { 
    name: "Salesforce", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg", 
    sector: "CRM" 
  },
  { 
    name: "SAP", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg", 
    sector: "Enterprise Software" 
  }
];
// Real testimonials from key sectors
const testimonials = [
  {
    quote: "Digital Fusion Systems transformed our legacy banking infrastructure, reducing transaction processing time by 70% and saving us $2M annually.",
    author: "Sarah Chen",
    title: "CTO, Regional Bank",
    company: "Major Banking Institution",
    sector: "Banking",
    result: "$2M annual savings"
  },
  {
    quote: "Their AI solution improved our diagnostic accuracy by 40% and reduced patient wait times significantly. Outstanding technical expertise.",
    author: "Dr. Michael Rodriguez",
    title: "Chief Medical Officer",
    company: "Regional Healthcare System",
    sector: "Healthcare",
    result: "40% accuracy improvement"
  },
  {
    quote: "The cloud migration was seamless. We achieved 99.9% uptime and reduced our infrastructure costs by 50% within six months.",
    author: "James Thompson",
    title: "IT Director",
    company: "Government Agency",
    sector: "Public Sector",
    result: "50% cost reduction"
  }
];

// Detailed case studies with metrics
const caseStudies = [
  {
    title: "Banking Digital Transformation",
    sector: "Banking",
    challenge: "Legacy system modernization for 50-year-old regional bank",
    solution: "Complete digital transformation with React-based customer portal and AI-powered fraud detection",
    results: ["70% faster transaction processing", "$2M annual cost savings", "Zero security incidents"],
    timeline: "12 weeks",
    icon: "🏦"
  },
  {
    title: "Healthcare AI Implementation",
    sector: "Healthcare",
    challenge: "Improve diagnostic accuracy and reduce patient wait times",
    solution: "Custom AI/ML models for medical imaging and patient triage automation",
    results: ["40% improvement in diagnostic accuracy", "60% reduction in processing time", "500+ patients served daily"],
    timeline: "16 weeks",
    icon: "🏥"
  },
  {
    title: "Government Cloud Migration",
    sector: "Public Sector",
    challenge: "Migrate critical government services to secure cloud infrastructure",
    solution: "Multi-cloud architecture with government-grade security and compliance",
    results: ["99.9% uptime achieved", "50% infrastructure cost reduction", "SOC 2 compliance maintained"],
    timeline: "20 weeks",
    icon: "🏛️"
  }
];

// Technology stack
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

// Key statistics for credibility
const stats = [
  { number: "200+", label: "Projects Delivered", icon: CheckCircle },
  { number: "50+", label: "Enterprise Clients", icon: Users },
  { number: "99.9%", label: "Uptime SLA", icon: TrendingUp },
  { number: "4.9/5", label: "Client Satisfaction", icon: Star }
];

// Team members with credentials
const teamMembers = [
  {
    name: "Alex Johnson",
    title: "CEO & Technical Lead",
    credentials: "15+ years, former Microsoft Azure architect",
    initials: "AJ"
  },
  {
    name: "Sarah Kim",
    title: "Head of AI/ML",
    credentials: "PhD Computer Science, ex-Google AI researcher",
    initials: "SK"
  },
  {
    name: "Marcus Chen",
    title: "Cloud Solutions Director",
    credentials: "AWS Certified Solutions Architect, 12+ years",
    initials: "MC"
  }
];

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/95 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/DF5.png" alt="Digital Fusion Systems Logo" className="h-12 w-12" />
            <div>
              <div className="text-3xl font-bold leading-tight text-white">Digital Fusion Systems</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-lg text-slate-200 hover:text-purple-300 transition-colors font-semibold">{n.label}</a>
            ))}
            <div className="flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold bg-purple-600 text-white hover:bg-purple-700 transition-all">
                Free Assessment
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg">
                Schedule Call
              </a>
            </div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-8">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Trusted by 200+ Enterprise Clients</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
              Reduce Costs by 30%<br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">In 8-12 Weeks</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              We help banks, healthcare systems, and government agencies modernize legacy systems with zero downtime. 
              <strong className="text-white"> ROI guaranteed or your money back.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-lg">
                <Calendar className="w-5 h-5" />
                Schedule Free Assessment
              </a>
              <a href="#results" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* Client Logos Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-lg mb-6">Trusted by leading organizations across industries</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-slate-700 px-6 py-3 rounded-lg border border-slate-600"
                >
                  <span className="text-2xl">{client.logo}</span>
                  <div>
                    <div className="text-white font-semibold">{client.name}</div>
                    <div className="text-slate-400 text-sm">{client.sector}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results/Case Studies Section */}
      <section id="results" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Proven Results" 
            subtitle="Real outcomes from our enterprise clients across banking, healthcare, and government sectors." 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{study.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-purple-400 font-semibold">{study.sector}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2">Challenge:</h4>
                    <p className="text-slate-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2">Solution:</h4>
                    <p className="text-slate-400 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIdx) => (
                        <li key={resultIdx} className="flex items-center text-sm text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <span className="text-purple-400 font-semibold">Timeline: {study.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.title}</div>
                  <div className="text-purple-400 text-sm font-semibold mt-1">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Services" title="Enterprise Solutions That Deliver" subtitle="Proven methodologies with guaranteed ROI and measurable outcomes." />
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
                
                <div className="space-y-4 mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-base text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-600 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Delivery:</span>
                    <span className="text-purple-400 font-semibold text-sm">{service.deliverables}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">ROI:</span>
                    <span className="text-green-400 font-semibold text-sm">{service.roi}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">ROI Guarantee or Your Money Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Industries We Serve" subtitle="Specialized expertise across sectors with deep domain knowledge and compliance requirements." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                  industry.highlight 
                    ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-400 hover:border-purple-300' 
                    : 'bg-slate-800 border border-slate-600 hover:border-purple-400'
                }`}
              >
                {industry.highlight && (
                  <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Featured
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-purple-400 text-sm font-medium">{industry.projects}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Team Section */}
      <section id="about" className="py-20 md:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Expert Team" subtitle="Industry veterans with proven track records at Fortune 500 companies." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-xl p-8 text-center border border-slate-600 hover:border-purple-400 transition-all"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.title}</p>
                <p className="text-slate-300 text-sm">{member.credentials}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">ISO 27001</div>
                <div className="text-slate-300 text-sm">Security Certified</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">SOC 2 Type II</div>
                <div className="text-slate-300 text-sm">Compliance Ready</div>
              </div>
              <div>
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">24/7 Support</div>
                <div className="text-slate-300 text-sm">Always Available</div>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">99.9% SLA</div>
                <div className="text-slate-300 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* Technology Stack Section */}
      <section id="technologies" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Enterprise-Grade Technology Stack" subtitle="Cutting-edge technologies proven at scale with Fortune 500 companies." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 hover:border-purple-400"
              >
                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center p-2">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
                <h4 className="font-bold text-white text-lg">{tech.name}</h4>
                <p className="text-slate-400 text-xs mt-1">{tech.category}</p>
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
              <p className="text-blue-100 mb-8 text-xl leading-relaxed">
                Join 200+ enterprise clients who have achieved measurable ROI through our proven digital transformation approach.
              </p>

              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-bold text-lg">ROI Guarantee</span>
                </div>
                <p className="text-green-100">30% cost reduction guaranteed or your money back. Risk-free assessment included.</p>
              </div>

              <div className="space-y-6">
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
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Response Time</h3>
                    <p className="text-blue-100 text-lg">Within 2 hours during business days</p>
                    <p className="text-blue-200 text-sm">Emergency response: 30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                    <p className="text-blue-100 text-lg">Serving clients in 25+ countries</p>
                    <p className="text-blue-200 text-sm">Remote and on-site delivery options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-6">Schedule Your Free Consultation</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
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
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+61 123 4567 89"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">Your Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="e.g. CTO, IT Director, etc."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    />
                  </div>

                  
                </div>

                

                <div>
                  <label htmlFor="enquiryDetails" className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    id="enquiryDetails"
                    name="enquiryDetails"
                    rows={4}
                    placeholder="Please describe your project requirements, current challenges, and specific objectives..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </button>

                <div className="text-center pt-4 border-t border-white/20">
                  <p className="text-blue-200 text-sm">
                    Your information is secure and will never be shared. 
                    <br />Expect a response within 2 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/DF5.png" alt="Digital Fusion Systems Logo" className="h-10 w-10" />
                <div className="text-xl font-bold text-white">Digital Fusion Systems</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transforming enterprises through innovative technology solutions with guaranteed ROI.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Digital Transformation</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Enterprise Applications</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">AI & Machine Learning</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#industries" className="hover:text-purple-400 transition-colors">Banking & Fintech</a></li>
                <li><a href="#industries" className="hover:text-purple-400 transition-colors">Healthcare</a></li>
                <li><a href="#industries" className="hover:text-purple-400 transition-colors">Public Sector</a></li>
                <li><a href="#industries" className="hover:text-purple-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>info@digitalfusionsystems.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Emergency Support</li>
                <li>Response time: 2 hours</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Digital Fusion Systems. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
