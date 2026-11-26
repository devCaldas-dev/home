'use client'

import { useEffect, useRef } from 'react'

const characters = '私の名前はDiego Whiskeyで、Web開発者です。'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const fontSize = 16
    const drops = Array.from(
      { length: Math.ceil(canvas.width / fontSize) },
      () => 1
    )

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.04)'
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = '#0f0'
      context.font = `${fontSize}px Arial`

      drops.forEach((drop, index) => {
        const character = characters[Math.floor(Math.random() * characters.length)]
        context.fillText(character, index * fontSize, drop * fontSize)
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0
        } else {
          drops[index] += 1
        }
      })
    }

    const timer = window.setInterval(draw, 33)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <canvas
      aria-hidden="true"
      className="matrix-rain"
      height="500"
      ref={canvasRef}
      width="700"
    />
  )
}
