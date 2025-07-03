"use client"

import { useState, useEffect } from "react"

export default function BlackFridayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Black Friday 2025 - November 28th at midnight LOCAL TIME
    const targetDate = new Date(2025, 10, 28, 0, 0, 0, 0).getTime(); // Local time

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Black Friday has arrived!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div
      className="h-screen w-full overflow-hidden box-border bg-black text-white flex flex-col justify-between items-center px-4 md:px-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      {/* Header Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl px-4">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5 leading-tight"
          style={{
            textShadow: "0 0 3px #B3D9FF",
          }}
        >
          When is Black Friday 2025?
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed"
          style={{
            color: "#F0F8FF",
            textShadow: "0 0 2px #6BB6FF",
          }}
        >
          Black Friday 2025 is on <strong>November 28th</strong>. See exactly how much time is left:
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="w-full flex justify-center items-center px-2">
        <div className="flex items-end justify-center gap-1 sm:gap-2 md:gap-3 w-full max-w-[380px] sm:max-w-[520px] md:max-w-[700px] overflow-hidden min-w-0">
          {/* Days */}
          <div className="flex flex-col items-center" style={{ minWidth: '80px' }}>
            <span
              className="text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "1px",
              }}
            >
              DAYS
            </span>
            <div className="relative w-full">
              <span
                className="text-4xl sm:text-5xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider block"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  textAlign: "center",
                  textShadow: `
    0 0 3px #00D4FF,
    0 0 6px #00D4FF,
    0 0 9px #0099CC
  `,
                  filter: "brightness(1.1) contrast(1.05)",
                  background: "linear-gradient(90deg, #00D4FF, #00B8E6, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {timeLeft.days}
              </span>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-end">
            <span
              className="text-3xl sm:text-4xl md:text-7xl text-blue-400 font-bold mb-0 md:mb-2"
              style={{
                textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
              }}
            >
              :
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center" style={{ minWidth: '60px' }}>
            <span
              className="text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "1px",
              }}
            >
              HRS
            </span>
            <div className="relative w-full">
              <span
                className="text-4xl sm:text-5xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider block"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  textAlign: "center",
                  textShadow: `
    0 0 3px #00D4FF,
    0 0 6px #00D4FF,
    0 0 9px #0099CC
  `,
                  filter: "brightness(1.1) contrast(1.05)",
                  background: "linear-gradient(90deg, #00D4FF, #00B8E6, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-end">
            <span
              className="text-3xl sm:text-4xl md:text-7xl text-blue-400 font-bold mb-0 md:mb-2"
              style={{
                textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
              }}
            >
              :
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center" style={{ minWidth: '60px' }}>
            <span
              className="text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "1px",
              }}
            >
              MIN
            </span>
            <div className="relative w-full">
              <span
                className="text-4xl sm:text-5xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider block"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  textAlign: "center",
                  textShadow: `
    0 0 3px #00D4FF,
    0 0 6px #00D4FF,
    0 0 9px #0099CC
  `,
                  filter: "brightness(1.1) contrast(1.05)",
                  background: "linear-gradient(90deg, #00D4FF, #00B8E6, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-end">
            <span
              className="text-3xl sm:text-4xl md:text-7xl text-blue-400 font-bold mb-0 md:mb-2"
              style={{
                textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
              }}
            >
              :
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center" style={{ minWidth: '60px' }}>
            <span
              className="text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "1px",
              }}
            >
              SEC
            </span>
            <div className="relative w-full">
              <span
                className="text-4xl sm:text-5xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider block"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  textAlign: "center",
                  textShadow: `
    0 0 3px #00D4FF,
    0 0 6px #00D4FF,
    0 0 9px #0099CC
  `,
                  filter: "brightness(1.1) contrast(1.05)",
                  background: "linear-gradient(90deg, #00D4FF, #00B8E6, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <p
          className="text-xs sm:text-sm md:text-base text-gray-400 text-center leading-relaxed"
          style={{
            textShadow: "0 0 1px #4A90E2",
          }}
        >
          Black Friday falls on the day after Thanksgiving each year.
        </p>
      </div>
    </div>
  )
}