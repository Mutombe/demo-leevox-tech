import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  WhatsappLogo,
  Rocket,
  Lock,
  Briefcase,
  Users,
  Eye,
  ShieldCheck,
  CheckCircle,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}

const ICON_MAP = { Rocket, Lock, Briefcase, Users, Eye, ShieldCheck };


/* ================================================================
   1. HERO — Dark with blue matrix/code aesthetic
   ================================================================ */
function HeroSection() {
  const { hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-navy-950">
      {/* BG carousel */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt={hero.backgroundImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/92 via-navy-950/75 to-navy-950/95 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/50 z-[1]" />
      </motion.div>

      {/* Circuit pattern */}
      <div className="absolute inset-0 bg-pattern-circuit text-gold-500/[0.04] z-[2]" />

      {/* Animated code rain effect — subtle */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden opacity-[0.04]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400 font-mono text-[10px] leading-tight whitespace-pre"
            style={{ left: `${12 + i * 12}%`, top: '-20%' }}
            animate={{ y: ['0%', '140%'] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
          >
            {`const\nawait\nasync\nfetch\nreturn\nexport\nimport\nclass\nwhile\nfor\ntry\ncatch\nnull\nvoid`}
          </motion.div>
        ))}
      </div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Blue accent line */}
      <div className="absolute top-[20%] left-0 w-20 sm:w-28 h-[2px] bg-gold-500 z-20" />

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-500 ${
              i === currentSlide ? 'h-8 bg-gold-500' : 'h-4 bg-white/15 hover:bg-white/30'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[3px] bg-gold-500 mb-6 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 bg-gold-500 animate-pulse" />
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] font-mono">
            {hero.badge}
          </span>
        </motion.div>

        {/* Giant stacked text */}
        <div className="overflow-hidden">
          {['TECHNOLOGY', '/', 'WITHOUT', '/', 'LIMITS.'].map((word, i) => (
            <motion.div
              key={`${word}-${i}`}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.88] tracking-tight ${
                  word === 'LIMITS.' ? 'text-gold-500' : word === '/' ? 'text-white/5 font-light' : 'text-white'
                }`}
                style={{ fontSize: word === '/' ? 'clamp(1rem, 4vw, 3rem)' : 'clamp(2.5rem, 7vw, 4.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold-500 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/25"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 border border-white/20 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:border-gold-500/40 hover:text-gold-400"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-gold-500/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   2. TECH MARQUEE
   ================================================================ */
function MarqueeTicker() {
  const items = ['REACT', 'NODE.JS', 'PYTHON', 'AWS', 'AZURE', 'KUBERNETES', 'TERRAFORM', 'TYPESCRIPT', 'GRAPHQL'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-navy-900 border-y border-gold-500/10 py-4 sm:py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="text-gold-500 font-mono text-sm sm:text-lg font-bold uppercase tracking-wider">
              {item}
            </span>
            <span className="text-gold-500/20 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-gold-500 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              BUILT BY<br />
              <span className="text-gold-500">ENGINEERS.</span><br />
              FOR THE BOLD.
            </h2>
            <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Leevox Tech was born in 2018 from a simple observation: Zimbabwean businesses were
              choosing between overpriced international consultancies and unreliable local freelancers.
              We built the middle ground — world-class engineering, delivered locally, at fair prices.
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-lg">
              Three developers became 25 engineers. One client became 300+ deployed projects.
              Today we build platforms for Zimbabwe's largest banks, telecoms, and government agencies.
              When the project is too important to get wrong, they call Leevox.
            </p>

            <div className="w-full h-px bg-white/5 my-8" />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">2018</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Founded</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">300+</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">25+</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Engineers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden border border-gold-500/10">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                  alt="Leevox Tech engineering workspace"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border border-gold-500/10 shadow-2xl bg-navy-950">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
                  alt="Technology infrastructure"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gold-500 text-white p-4 sm:p-6 shadow-2xl">
                <div className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl font-bold leading-none">99.9%</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold mt-1 text-white/80">
                    Uptime<br />SLA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES — Icon cards on dark bg
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;
  const iconNames = ['Rocket', 'Lock', 'Briefcase', 'Users', 'Eye', 'ShieldCheck'];

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-gold-500 mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              WHAT WE <span className="text-gold-500">BUILD</span>
            </h2>
            <Link
              to="/services"
              className="group text-white/30 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-gold-500 transition-colors"
            >
              All Solutions
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesPreview.map((service, i) => {
            const IconComp = ICON_MAP[iconNames[i]] || Rocket;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
              >
                <Link
                  to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                  className="group block bg-navy-950 border border-white/5 p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden h-full"
                >
                  <span className="absolute top-4 right-4 text-gold-500/[0.05] font-mono text-5xl font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-500">
                    <IconComp size={24} weight="duotone" className="text-gold-500" />
                  </div>

                  <h3 className="font-heading text-white text-lg font-bold uppercase tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-5 font-light">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-gold-500 text-xs uppercase tracking-wider font-heading font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Learn More
                    <ArrowRight size={12} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. STATS BAND
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const stats = siteData.stats;

  return (
    <section ref={ref} className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-circuit text-gold-500/[0.02]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                {stat.suffix && <span className="text-gold-500">{stat.suffix}</span>}
              </div>
              <div className="text-white/25 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. TECH STACK / PROCESS — How We Work
   ================================================================ */
function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { num: '01', title: 'Discovery', desc: 'Technical requirements analysis, architecture planning, and sprint backlog creation. We understand before we build.' },
    { num: '02', title: 'Build', desc: 'Agile development in 2-week sprints. CI/CD pipelines, code reviews, and weekly demos. You see progress constantly.' },
    { num: '03', title: 'Test & Deploy', desc: 'Automated testing, security audits, performance benchmarking. Then zero-downtime deployment to production.' },
    { num: '04', title: 'Support', desc: '24/7 monitoring, incident response, and ongoing maintenance. We do not disappear after launch.' },
  ];

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="w-10 h-[3px] bg-gold-500 mx-auto mb-6" />
          <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            HOW WE <span className="text-gold-500">SHIP</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative"
            >
              <div className="bg-navy-950 border border-white/5 p-6 sm:p-8 h-full hover:border-gold-500/20 transition-colors duration-500">
                <span className="text-gold-500/15 font-mono text-5xl font-bold leading-none">{step.num}</span>
                <h3 className="font-heading text-white text-base sm:text-lg font-bold uppercase tracking-wide mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gold-500/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6b. CLIENT TRUST BAND — Sectors served
   ================================================================ */
function ClientTrustBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sectors = [
    { name: 'Banking & Finance', count: '8+ clients' },
    { name: 'Telecommunications', count: '5+ clients' },
    { name: 'Government & Public', count: '12+ clients' },
    { name: 'Mining & Resources', count: '6+ clients' },
    { name: 'Startups & SMEs', count: '50+ clients' },
    { name: 'Healthcare', count: '4+ clients' },
  ];

  return (
    <section ref={ref} className="bg-navy-950 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-gold-500/40 text-xs uppercase tracking-[0.3em] font-mono mb-2">Trusted Across Sectors</p>
          <h3 className="font-heading text-white/60 text-lg sm:text-xl font-semibold">
            200+ Organisations. Every Industry That Matters.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="border border-white/5 p-4 text-center hover:border-gold-500/20 transition-colors duration-500"
            >
              <div className="text-white/50 text-sm font-heading font-semibold mb-1">{sector.name}</div>
              <div className="text-gold-500/40 text-[10px] uppercase tracking-wider font-mono">{sector.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quotes size={40} weight="fill" className="text-gold-500/15 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] bg-gold-500 mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/35 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-gold-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/25 transition-colors" aria-label="Previous">
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[3px] transition-all duration-300 ${i === active ? 'w-8 bg-gold-500' : 'w-3 bg-white/10 hover:bg-white/20'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/25 transition-colors" aria-label="Next">
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   8. CTA
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={homeCta.backgroundImage} alt={homeCta.backgroundAlt} className="w-full h-[130%] object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-navy-950/85" />
      </motion.div>
      <div className="absolute inset-0 bg-pattern-circuit text-gold-500/[0.02] z-[1]" />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            BUILD<br /><span className="text-gold-500">FASTER.</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">{homeCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/25"
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/30 text-green-400 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/50"
            >
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <StatsBand />
      <ProcessSection />
      <ClientTrustBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
