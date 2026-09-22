
import React, { useEffect, useState } from 'react'

const TARGET_DATE = '2027-03-16T00:00:00+05:00'

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(TARGET_DATE).getTime() - new Date().getTime()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="absolute bottom-0 left-1/2 z-30 w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 translate-y-1/2">

      <div className="overflow-hidden rounded-xl border border-[#D6E1E7] bg-white shadow-[0_10px_30px_rgba(0,59,104,0.12)]">

        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_3fr]">

          {/* Countdown Introduction */}
          <div className="flex flex-col justify-center bg-[#003B68] px-5 py-5 sm:px-6 md:px-7 md:py-6">

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00895D] sm:text-sm">
              Conference begins in
            </p>

            <p className="mt-2 max-w-xs text-sm font-semibold leading-relaxed text-white sm:text-base">
              16 March 2027 · Pakistan Standard Time
            </p>

          </div>

          {/* Countdown Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4">

            {countdownItems.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col items-center justify-center px-3 py-5 ${
                  index !== 0
                    ? 'border-t border-[#D6E1E7] sm:border-t-0 sm:border-l'
                    : ''
                }`}
              >

                <span className="text-3xl font-extrabold leading-none text-[#003B68] sm:text-4xl md:text-5xl">
                  {String(item.value).padStart(2, '0')}
                </span>

                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-[#526673] sm:text-xs">
                  {item.label}
                </span>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}

export default CountDown
