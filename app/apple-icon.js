import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0A1628 0%, #0D1F3C 40%, #0A1628 100%)',
          position: 'relative',
        }}
      >
        {/* Outer decorative ring */}
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '2px solid rgba(212,175,55,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Inner gold ring */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2.5px solid #D4AF37',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(145deg, rgba(212,175,55,0.1) 0%, rgba(10,22,40,0.95) 100%)',
              boxShadow: '0 0 20px rgba(212,175,55,0.2)',
            }}
          >
            {/* Star above */}
            <span
              style={{
                fontSize: '12px',
                color: '#D4AF37',
                marginBottom: '2px',
              }}
            >
              ✦
            </span>
            {/* MB initials */}
            <span
              style={{
                fontSize: '42px',
                fontWeight: 700,
                color: '#D4AF37',
                letterSpacing: '-1px',
                fontFamily: 'serif',
                lineHeight: 1,
                textShadow: '0 0 12px rgba(212,175,55,0.4)',
              }}
            >
              MB
            </span>
            {/* Star below */}
            <span
              style={{
                fontSize: '12px',
                color: '#D4AF37',
                marginTop: '2px',
              }}
            >
              ✦
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

