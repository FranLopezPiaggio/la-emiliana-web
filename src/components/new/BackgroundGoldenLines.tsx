// src/components/BackgroundGoldenLines.tsx

export default function BackgroundGoldenLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40">
      <svg
        className="w-full h-full text-gold-line"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 4800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 220 380 C 650 350, 1100 520, 1260 780 C 1380 980, 1150 1150, 780 1180 C 450 1200, 180 1350, 160 1600 C 140 1880, 520 2000, 960 1980 C 1320 1960, 1420 2200, 1340 2480 C 1260 2750, 800 2820, 380 2900 C 100 2960, 80 3280, 240 3480 C 420 3700, 1020 3680, 1260 3950 C 1420 4150, 1250 4450, 720 4600"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
        <path
          d="M 980 220 C 1280 340, 1360 620, 1120 860 C 880 1080, 320 1020, 160 1260 C -10 1520, 180 1780, 520 1840 C 920 1920, 1280 1820, 1360 2120 C 1450 2480, 1120 2680, 780 2740 C 350 2820, 180 3060, 340 3340 C 500 3620, 1180 3540, 1320 3840"
          stroke="currentColor"
          strokeDasharray="8 6"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}