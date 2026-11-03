'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(60)
    }

    // Allow full cinematic reveal before handing off to the invitation
    setTimeout(() => {
      onOpen()
    }, 2000)
  }

  return (
    <motion.div
      className="env-screen"
      onClick={handleOpen}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── 1. Photorealistic Navy & Gold Envelope Photo with Cinematic Zoom ── */}
      <motion.div
        className="env-photo-wrapper"
        animate={
          isOpening
            ? { scale: 1.15, filter: 'blur(3px) brightness(0.85)' }
            : { scale: 1, filter: 'blur(0px) brightness(1)' }
        }
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/envelope-navy-gold.jpg"
          alt="Enveloppe Mariage Mohamed Boubker"
          fill
          priority
          className="env-photo-img"
          sizes="100vw"
        />
        {/* Soft vignette to frame the center */}
        <div className="env-photo-vignette" />
      </motion.div>

      {/* ── 2. Interactive Gold Glow Pulse around the Seal ── */}
      {!isOpening && (
        <motion.div
          className="env-seal-glow-target"
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* ── 3. Golden Light Bloom on Unseal ── */}
      {isOpening && (
        <>
          <motion.div
            className="env-light-bloom"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 5, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <motion.div
            className="env-light-bloom secondary"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3.5, opacity: 0 }}
            transition={{ duration: 1.4, delay: 0.1, ease: 'easeOut' }}
          />

          {/* Radial Sparks */}
          <div className="env-spark-container">
            {[...Array(16)].map((_, i) => (
              <motion.span
                key={i}
                className="env-spark-particle"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i * Math.PI) / 8) * (60 + (i % 4) * 30),
                  y: Math.sin((i * Math.PI) / 8) * (60 + (i % 4) * 30),
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{ duration: 1.1 + (i % 3) * 0.15, ease: 'easeOut' }}
              />
            ))}
          </div>
        </>
      )}

      {/* ── 4. The Royal Invitation Letter Sliding Up & Expanding ── */}
      <motion.div
        className="env-letter-card"
        initial={{ y: 90, opacity: 0, scale: 0.9 }}
        animate={
          isOpening
            ? {
                y: [-30, -50, -60],
                opacity: [0, 1, 0],
                scale: [0.92, 1.05, 1.25],
              }
            : { y: 90, opacity: 0, scale: 0.9 }
        }
        transition={{
          duration: 1.6,
          delay: 0.35,
          times: [0, 0.6, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="env-letter-inner">
          <p className="env-letter-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <div className="env-letter-line" />
          <p className="env-letter-type">Invitation de Mariage</p>
          <h2 className="env-letter-name shimmer-gold">Mohamed Boubker</h2>
          <div className="env-letter-line small" />
          <p className="env-letter-date">Mercredi 16 Décembre 2026</p>
          <p className="env-letter-venue">Salle des Fêtes El Hani • Alger</p>
        </div>
      </motion.div>

      {/* ── 5. Tap Hint at Bottom ── */}
      {!isOpening && (
        <motion.div
          className="env-tap-bar"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="env-tap-button">
            <span className="env-tap-star">✦</span>
            <span>Appuyez pour ouvrir l&apos;invitation</span>
            <span className="env-tap-star">✦</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
