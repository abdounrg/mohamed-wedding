'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope'
import Invitation from './components/Invitation'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Envelope key="envelope" onOpen={() => setIsOpen(true)} />
        ) : (
          <Invitation key="invitation" />
        )}
      </AnimatePresence>
    </main>
  )
}
