'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

/* ─── Directional Scroll Reveal ─── */
function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { y: 0, x: -35 },
    right: { y: 0, x: 35 },
    scale: { y: 0, x: 0, scale: 0.9 },
  }

  const from = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      initial={{ opacity: 0, ...from }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Royal Ornamental Divider ─── */
function RoyalDivider({ className = '' }) {
  return (
    <div className={`royal-divider ${className}`}>
      <span className="royal-divider-line" />
      <span className="royal-divider-diamond">❖</span>
      <span className="royal-divider-line" />
    </div>
  )
}

/* ─── Countdown Timer ─── */
function Countdown() {
  const [mounted, setMounted] = useState(false)
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    setMounted(true)
    const target = new Date('2026-12-16T15:30:00')
    const tick = () => {
      const diff = target - new Date()
      if (diff <= 0) return
      setT({
        d: Math.floor(diff / 864e5),
        h: Math.floor((diff / 36e5) % 24),
        m: Math.floor((diff / 6e4) % 60),
        s: Math.floor((diff / 1e3) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return <div className="countdown-grid" style={{ minHeight: 90 }} />

  const items = [
    { val: t.d, label: 'Jours' },
    { val: t.h, label: 'Heures' },
    { val: t.m, label: 'Minutes' },
    { val: t.s, label: 'Secondes' },
  ]

  return (
    <div className="countdown-grid">
      {items.map((item) => (
        <div key={item.label} className="countdown-item">
          <span className="countdown-number">
            {String(item.val).padStart(2, '0')}
          </span>
          <span className="countdown-unit">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════
   MAIN INVITATION
   ═══════════════════════════════════════ */
export default function Invitation() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        "Salle des fêtes EL HANI, 7, Route De Chéraga, Dely Brahim, Alger 16002"
      )
      setCopied(true)
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(30)
      }
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <motion.div
      className="invitation-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      {/* ── 1. HERO SECTION ── */}
      <section className="hero-section">
        <Image
          src="/hero-bg-palace.jpg"
          alt="Palais des Fêtes"
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-gold-glow" />

        <div className="hero-content">
          {/* Royal Crest Motif */}
          <motion.div
            className="hero-crest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="crest-star">✦</span>
            <span className="crest-initials">MB</span>
            <span className="crest-star">✦</span>
          </motion.div>

          {/* Quranic Verse */}
          <motion.p
            className="hero-verse"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </motion.p>

          <RoyalDivider className="hero-divider" />

          {/* Groom's Name */}
          <motion.h1
            className="hero-names shimmer-gold"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Mohamed Boubker
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            Vous invite cordialement à célébrer son mariage
          </motion.p>

          {/* Date & Time Badge */}
          <motion.div
            className="hero-date-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.05 }}
          >
            <div className="badge-item">
              <span className="badge-label">DATE</span>
              <span className="badge-val">Mercredi 16 Décembre 2026</span>
            </div>
            <span className="badge-dot">•</span>
            <div className="badge-item">
              <span className="badge-label">HORAIRE</span>
              <span className="badge-val">À partir de 15h30</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="scroll-chevron">↓</span>
        </motion.div>
      </section>

      {/* Floating GPS / Location shortcut */}
      <a href="#location" className="rsvp-float">
        <span className="rsvp-float-icon">📍</span>
        <span className="rsvp-float-text">Lieu &amp; Accès</span>
        <span className="rsvp-float-arrow">↓</span>
      </a>

      {/* ── 2. QUOTE SECTION ── */}
      <section className="quote-section">
        <div className="royal-container">
          <ScrollReveal direction="scale">
            <div className="royal-card quote-card">
              <div className="royal-card-inner">
                <span className="quote-marks">&ldquo;</span>

                <h2 className="quote-title">Une Parenthèse de Bonheur</h2>
                <p className="quote-title-ar">لحظات من السعادة والسرور</p>

                <RoyalDivider />

                <div className="quote-content-body">
                  <p className="quote-text">
                    Nous avons le plaisir de vous convier à un moment spécial,
                    pensé avec le cœur et préparé avec soin.
                    Une belle occasion de partager, de célébrer et de créer des
                    souvenirs inoubliables ensemble.
                  </p>
                  <p className="quote-text-ar">
                    يسرّنا دعوتكم لمشاركتنا لحظات مميزة نابعة من صميم القلب ومُعدّة بكل عناية،
                    لنتشارك الفرحة ونحتفل معاً ونصنع أجمل الذكريات.
                  </p>
                </div>

                <div className="quote-content-body highlight">
                  <p className="quote-text">
                    Votre présence serait pour nous la plus belle des touches à
                    cette journée d&#39;exception.
                  </p>
                  <p className="quote-text-ar">
                    وحضوركم هو أجمل ما يكتمل به بهاء هذا اليوم المبارك
                  </p>
                </div>

                <span className="quote-marks end">&rdquo;</span>

                <div className="quote-poem-box">
                  <p className="location-poem">
                    Nous serons honorés de vous accueillir dans ce cadre prestigieux
                    pour célébrer ensemble ce jour mémorable.
                  </p>
                  <p className="location-poem-ar">
                    يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة هذا اليوم المبارك
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. DETAILS / LOCATION SECTION ── */}
      <section className="details-section" id="location">
        <div className="royal-container">
          <ScrollReveal>
            <div className="details-header">
              <span className="details-subheading">Lieu de la Célébration</span>
              <h2 className="details-heading">Salle des Fêtes El Hani</h2>
              <p className="details-arabic-name">قاعة حفلات الهاني</p>
              <RoyalDivider />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="royal-card location-card">
              <div className="royal-card-inner">
                <div className="location-card-header">
                  <div className="location-badge">🏛️</div>
                  <h3 className="location-card-title">Salle des Fêtes El Hani</h3>
                  <p className="location-card-subtitle">Dely Brahim • Alger</p>
                </div>

                <div className="location-info-grid">
                  <div className="location-info-box">
                    <span className="location-info-icon">📍</span>
                    <div className="location-info-text">
                      <strong>Adresse</strong>
                      <span>7, Route De Chéraga, Dely Brahim, Alger</span>
                    </div>
                  </div>

                  <div className="location-info-box">
                    <span className="location-info-icon">📅</span>
                    <div className="location-info-text">
                      <strong>Date</strong>
                      <span>Mercredi 16 Décembre 2026</span>
                    </div>
                  </div>

                  <div className="location-info-box">
                    <span className="location-info-icon">🕒</span>
                    <div className="location-info-text">
                      <strong>Accueil &amp; Cérémonie</strong>
                      <span>À partir de 15h30</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Interactive Map */}
                <div className="map-frame">
                  <iframe
                    title="Localisation Salle des Fêtes El Hani"
                    src="https://maps.google.com/maps?q=Salle+des+f%C3%AAtes+EL+HANI+7+Route+De+Ch%C3%A9raga+Dely+Brahim+Alger&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="230"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Action Buttons */}
                <div className="location-actions">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Salle+des+f%C3%AAtes+EL+HANI,+7+Route+De+Ch%C3%A9raga,+Dely+Brahim,+Alger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direction-btn primary"
                  >
                    <span className="direction-icon">🗺️</span>
                    <span>Ouvrir l&#39;itinéraire GPS</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyAddress}
                    className="direction-btn secondary"
                  >
                    <span className="direction-icon">{copied ? '✓' : '📋'}</span>
                    <span>{copied ? 'Adresse copiée dans le presse-papier !' : 'Copier l\'adresse'}</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. COUNTDOWN SECTION ── */}
      <section className="countdown-section">
        <div className="royal-container narrow">
          <ScrollReveal>
            <p className="countdown-names shimmer-gold">Mohamed Boubker</p>
            <p className="countdown-label">Compte à Rebours Avant le Jour J</p>
            <RoyalDivider />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Countdown />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="countdown-date">16 Décembre 2026 • 15h30</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. FOOTER ── */}
      <footer className="footer-section">
        <ScrollReveal>
          <RoyalDivider />
          <p className="footer-text-ar">في انتظار تشريفكم وحضوركم الكريم</p>
          <span className="footer-heart">♥</span>
          <p className="footer-text-fr">Au plaisir de vous compter parmi nous</p>
          <p className="footer-signature">Mohamed Boubker • 2026</p>
        </ScrollReveal>
      </footer>
    </motion.div>
  )
}
