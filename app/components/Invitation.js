'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

/* ─── Scroll-triggered reveal ─── */
function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="scroll-reveal"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Small gold dot divider ─── */
function Dot() {
  return (
    <div className="section-dot">
      <span />
    </div>
  )
}

/* ─── Countdown Timer ─── */
function Countdown() {
  const [mounted, setMounted] = useState(false)
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    setMounted(true)
    const target = new Date('2026-11-20T15:30:00')
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

  if (!mounted) return <div className="countdown-grid" style={{ minHeight: 68 }} />

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
      navigator.clipboard.writeText("Palmier D'or Traiteur, RN 38, Djasr Kasentina, Alger")
      setCopied(true)
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
      {/* ── HERO SECTION ── */}
      <section className="hero-section">
        <Image
          src="/hero-stage-bg.jpg"
          alt="Wedding Venue"
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.p
            className="hero-verse"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </motion.p>

          <motion.h1
            className="hero-names"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Rania
            <span className="hero-ampersand">&amp;</span>
            Mohamed
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Vous invitent à partager leur joie
          </motion.p>

          <motion.p
            className="hero-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Le 20 Novembre 2026
          </motion.p>

          <motion.p
            className="hero-time"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
          >
            À partir de 15h30
          </motion.p>
        </div>
      </section>

      {/* Floating RSVP / Location */}
      <a href="#location" className="rsvp-float">
        <span className="rsvp-float-heart">♡</span>
        <span className="rsvp-float-text">Info</span>
        <span className="rsvp-float-arrow">↓</span>
      </a>

      {/* ── QUOTE SECTION ── */}
      <section className="quote-section">
        <ScrollReveal>
          <span className="quote-marks">&ldquo;</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="quote-title">Une Parenthèse de Bonheur</h2>
          <p className="quote-title-ar">لحظات من السعادة والسرور</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="quote-text">
            Nous avons le plaisir de vous convier à un moment spécial,
            pensé avec le cœur et préparé avec soin.
            Une belle occasion de partager, de célébrer et de créer des
            souvenirs ensemble.
          </p>
          <p className="quote-text-ar">
            يسرّنا دعوتكم لمشاركتنا لحظات مميزة نابعة من صميم القلب ومُعدّة بكل عناية،
            لنتشارك الفرحة ونحتفل معاً ونصنع أجمل الذكريات.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="quote-text" style={{ marginTop: 16 }}>
            Votre présence serait pour nous la plus belle des touches à
            cette journée
          </p>
          <p className="quote-text-ar" style={{ marginTop: 8 }}>
            وحضوركم هو أجمل ما يكتمل به بهاء هذا اليوم المبارك
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <span className="quote-marks end">&rdquo;</span>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="location-poem-container" style={{ marginTop: 24 }}>
            <p className="location-poem">
              Nous serons ravis de vous accueillir dans ce cadre prestigieux
              pour célébrer ensemble le plus beau jour de notre vie.
            </p>
            <p className="location-poem-ar">
              يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة هذا اليوم المبارك
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── NOTICE SECTION (No Children) ── */}
      <section className="notice-section" id="notice">
        <ScrollReveal>
          <span className="notice-icon">🤍</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="notice-text">
            Afin de profiter pleinement de cette soirée,
            nous vous prions gentiment de ne pas amener d&#39;enfants.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="notice-text" style={{ color: 'var(--text-muted)' }}>
            Merci de votre compréhension.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Dot />
          <p className="notice-text-ar">
            نرجو عدم اصطحاب الأطفال
            <br />
            شاكرين تفهمكم
          </p>
        </ScrollReveal>
      </section>

      {/* ── DETAILS / LOCATION SECTION ── */}
      <section className="details-section" id="location">
        <ScrollReveal>
          <Dot />
          <p className="details-subheading">Lieu de la Célébration</p>
          <h2 className="details-heading">Salle des Fêtes Palmier d&#39;Or</h2>
          <p className="details-arabic-name">قاعة حفلات النخلة الذهبية</p>
          <p className="details-traiteur">Palmier d&#39;Or Traiteur</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="location-card">
            <div className="location-card-header">
              <div className="location-badge">🌴</div>
              <h3 className="location-card-title">Palmier d&#39;Or</h3>
              <p className="location-card-subtitle">Salle des Fêtes &amp; Traiteur</p>
            </div>

            <div className="location-divider" />

            <div className="location-card-info">
              <div className="location-card-info-item">
                <span className="location-card-info-icon">📍</span>
                <div className="location-card-info-text">
                  <strong>Adresse</strong>
                  <span>RN 38, Djasr Kasentina, Alger</span>
                </div>
              </div>

              <div className="location-card-info-item">
                <span className="location-card-info-icon">📅</span>
                <div className="location-card-info-text">
                  <strong>Date</strong>
                  <span>Vendredi 20 Novembre 2026</span>
                </div>
              </div>

              <div className="location-card-info-item">
                <span className="location-card-info-icon">🕒</span>
                <div className="location-card-info-text">
                  <strong>Horaire</strong>
                  <span>À partir de 15h30</span>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="map-container">
              <iframe
                title="Localisation Salle des Fêtes Palmier d'Or"
                src="https://maps.google.com/maps?q=Palmier+D'or+Traiteur+RN38+Djasr+Kasentina+Alger&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Action buttons */}
            <div className="location-actions">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Palmier+D%27or+Traiteur,+RN+38,+Djasr+Kasentina,+Alger"
                target="_blank"
                rel="noopener noreferrer"
                className="direction-button primary"
              >
                <span className="direction-icon">🗺️</span>
                Ouvrir l&#39;itinéraire GPS
              </a>

              <button
                type="button"
                onClick={copyAddress}
                className="direction-button secondary"
              >
                <span className="direction-icon">{copied ? '✓' : '📋'}</span>
                {copied ? 'Adresse copiée !' : 'Copier l\'adresse'}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── COUNTDOWN SECTION ── */}
      <section className="countdown-section">
        <ScrollReveal>
          <p className="countdown-names">Mohamed &amp; Rania</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="countdown-label">Compte à rebours</p>
          <div className="countdown-divider" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Countdown />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="countdown-date">20 Novembre 2026</p>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <ScrollReveal>
          <Dot />
          <p className="footer-text-ar">في انتظار حضوركم</p>
          <span className="footer-heart">♥</span>
          <p className="footer-text-fr">Au plaisir de vous voir</p>
          <Dot />
        </ScrollReveal>
      </footer>
    </motion.div>
  )
}
