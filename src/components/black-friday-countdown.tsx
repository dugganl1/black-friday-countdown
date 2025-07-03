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
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-0 md:px-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(26, 42, 46, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 42, 46, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      {/* Header Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl">
        <h1
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{
            textShadow: "0 0 3px #B3D9FF",
          }}
        >
          When is Black Friday 2025?
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{
            color: "#F0F8FF",
            textShadow: "0 0 2px #6BB6FF",
          }}
        >
          Black Friday 2025 is on <strong>November 28th</strong>. See exactly how much time is left:
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span
              className="text-sm md:text-lg font-bold mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "2px",
              }}
            >
              DAYS
            </span>
            <div className="relative">
              <span
                className="text-6xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  minWidth: "3ch",
                  display: "inline-block",
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
                {timeLeft.days.toString().padStart(3, "0")}
              </span>
            </div>
          </div>

          {/* Separator */}
          <span
            className="text-3xl md:text-7xl text-blue-400 font-bold mx-0.5 md:mx-1 self-end mb-1 md:mb-2"
            style={{
              textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
              fontFamily: "Orbitron, monospace",
              fontWeight: "900",
            }}
          >
            :
          </span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span
              className="text-sm md:text-lg font-bold mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "2px",
              }}
            >
              HRS
            </span>
            <div className="relative">
              <span
                className="text-6xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  minWidth: "2ch",
                  display: "inline-block",
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
          <span
            className="text-3xl md:text-7xl text-blue-400 font-bold mx-0.5 md:mx-1 self-end mb-1 md:mb-2"
            style={{
              textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
              fontFamily: "Orbitron, monospace",
              fontWeight: "900",
            }}
          >
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span
              className="text-sm md:text-lg font-bold mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "2px",
              }}
            >
              MIN
            </span>
            <div className="relative">
              <span
                className="text-6xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  minWidth: "2ch",
                  display: "inline-block",
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
          <span
            className="text-3xl md:text-7xl text-blue-400 font-bold mx-0.5 md:mx-1 self-end mb-1 md:mb-2"
            style={{
              textShadow: "0 0 5px #00D4FF, 0 0 8px #00D4FF",
              fontFamily: "Orbitron, monospace",
              fontWeight: "900",
            }}
          >
            :
          </span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span
              className="text-sm md:text-lg font-bold mb-2 md:mb-4 tracking-widest"
              style={{
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "#00B8E6",
                textShadow: "0 0 1px #00D4FF",
                letterSpacing: "2px",
              }}
            >
              SEC
            </span>
            <div className="relative">
              <span
                className="text-6xl md:text-8xl font-mono font-bold text-blue-400 tracking-wider"
                style={{
                  fontFamily: "monospace, Orbitron, monospace",
                  fontWeight: "900",
                  letterSpacing: "0px",
                  minWidth: "2ch",
                  display: "inline-block",
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
      <div className="flex-1 flex items-center justify-center">
        <p
          className="text-sm md:text-base text-gray-400 text-center leading-relaxed"
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