import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-13T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="bg-gradient-to-br from-gunmetal/80 to-onyx/80 tri-cut p-6 neon-border glass backdrop-blur-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/5 to-teal-glow/5"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Clock className="w-6 h-6 text-neon-mint mr-2 animate-pulse" />
          <h3 className="text-lg font-bold text-soft-white font-orbitron">
            Event Starts In
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="text-center">
              <div className="bg-gunmetal/60 tri-cut-sm p-3 neon-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl md:text-3xl font-bold text-neon-mint font-orbitron mb-1 tabular-nums">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-soft-white/60 font-inter uppercase tracking-wider">
                    {unit.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-soft-white/70 font-inter">
            September 13-14, 2025 • PESU52, RR Campus
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;