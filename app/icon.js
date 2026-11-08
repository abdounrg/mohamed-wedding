import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0A1628 0%, #0D1F3C 50%, #0A1628 100%)',
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        {/* Gold ring border */}
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1.5px solid #D4AF37',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(145deg, rgba(212,175,55,0.15) 0%, rgba(10,22,40,0.9) 100%)',
          }}
        >
          {/* MB initials */}
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#D4AF37',
              letterSpacing: '-0.5px',
              fontFamily: 'serif',
              textShadow: '0 0 4px rgba(212,175,55,0.5)',
            }}
          >
            MB
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
