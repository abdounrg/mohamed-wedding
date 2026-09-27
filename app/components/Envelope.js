'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      className="envelope-screen"
      onClick={onOpen}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Full-screen envelope background image */}
      <Image
        src="/envelope-bg.jpg"
        alt="Wedding Invitation Envelope"
        fill
        priority
        className="envelope-bg"
        sizes="100vw"
      />

      {/* Tap hint */}
      <motion.p
        className="envelope-tap-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Appuyez pour ouvrir
      </motion.p>
    </motion.div>
  )
}
