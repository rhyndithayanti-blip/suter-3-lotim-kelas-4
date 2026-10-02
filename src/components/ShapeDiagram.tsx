import React from 'react';
import { ShapeDiagramData } from '../types/game';

interface Props {
  diagram?: ShapeDiagramData;
}

export const ShapeDiagram: React.FC<Props> = ({ diagram }) => {
  if (!diagram) return null;

  const { patternType, dimensions = {}, label, notes, ruleHint } = diagram;

  return (
    <div className="my-2.5 sm:my-3 bg-gradient-to-b from-sky-50/90 to-blue-50/80 border-2 border-blue-300 rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center shadow-xs">
      {/* Pattern Header Tag */}
      <div className="flex items-center gap-1.5 mb-1.5 flex-wrap justify-center">
        {label && (
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-200/90 px-2.5 py-0.5 rounded-full border border-blue-300">
            {label}
          </span>
        )}
        {ruleHint && (
          <span className="text-[10px] sm:text-xs font-extrabold text-amber-900 bg-amber-200/90 px-2.5 py-0.5 rounded-full border border-amber-300">
            {ruleHint}
          </span>
        )}
      </div>

      {/* SVG Canvas Container */}
      <div className="w-full max-w-[340px] sm:max-w-[420px] min-h-[140px] sm:min-h-[160px] flex items-center justify-center overflow-x-auto py-1">
        {/* ============================================================== */}
        {/* 1. POLA BERULANG 2 BENTUK (Lingkaran, Segitiga, Lingkaran...) */}
        {/* ============================================================== */}
        {patternType === 'repeating_shapes' && (
          <svg viewBox="0 0 380 120" className="w-full h-auto drop-shadow-xs select-none">
            {/* Box 1 */}
            <g transform="translate(10, 10)">
              <rect width="64" height="74" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="32" cy="35" r="18" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2.5" />
              <text x="32" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Urutan 1</text>
            </g>
            <text x="80" y="52" textAnchor="middle" fontSize="16" fill="#3b82f6" fontWeight="bold">➔</text>
            {/* Box 2 */}
            <g transform="translate(90, 10)">
              <rect width="64" height="74" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
              <polygon points="32,18 14,50 50,50" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
              <text x="32" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">Urutan 2</text>
            </g>
            <text x="160" y="52" textAnchor="middle" fontSize="16" fill="#3b82f6" fontWeight="bold">➔</text>
            {/* Box 3 */}
            <g transform="translate(170, 10)">
              <rect width="64" height="74" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="32" cy="35" r="18" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2.5" />
              <text x="32" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Urutan 3</text>
            </g>
            <text x="240" y="52" textAnchor="middle" fontSize="16" fill="#3b82f6" fontWeight="bold">➔</text>
            {/* Box 4 */}
            <g transform="translate(250, 10)">
              <rect width="64" height="74" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
              <polygon points="32,18 14,50 50,50" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
              <text x="32" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">Urutan 4</text>
            </g>
            <text x="320" y="52" textAnchor="middle" fontSize="16" fill="#e11d48" fontWeight="bold">➔</text>
            {/* Box 5: Mystery ? */}
            <g transform="translate(325, 6)">
              <rect width="50" height="82" rx="12" fill="#fef2f2" stroke="#e11d48" strokeWidth="3" strokeDasharray="4 2" />
              <text x="25" y="48" textAnchor="middle" fontSize="30" fontWeight="black" fill="#e11d48">?</text>
              <text x="25" y="72" textAnchor="middle" fontSize="9" fontWeight="extrabold" fill="#991b1b">Urutan 5</text>
            </g>
            <text x="190" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Aturan: Bentuk berulang Lingkaran ➔ Segitiga secara bergantian
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 2. POLA BERULANG 3 BENTUK (Bintang, Persegi, Segitiga...) */}
        {/* ============================================================== */}
        {patternType === 'repeating_3_shapes' && (
          <svg viewBox="0 0 390 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1: Star */}
            <g transform="translate(5, 10)">
              <rect width="56" height="70" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
              <polygon points="28,15 32,26 44,26 34,34 38,45 28,38 18,45 22,34 12,26 24,26" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="28" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#854d0e">Bintang</text>
            </g>
            {/* 2: Square */}
            <g transform="translate(68, 10)">
              <rect width="56" height="70" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
              <rect x="14" y="18" width="28" height="28" rx="4" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" />
              <text x="28" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Persegi</text>
            </g>
            {/* 3: Triangle */}
            <g transform="translate(131, 10)">
              <rect width="56" height="70" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <polygon points="28,18 14,46 42,46" fill="#f87171" stroke="#b91c1c" strokeWidth="2" />
              <text x="28" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">Segitiga</text>
            </g>
            {/* 4: Star */}
            <g transform="translate(194, 10)">
              <rect width="56" height="70" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
              <polygon points="28,15 32,26 44,26 34,34 38,45 28,38 18,45 22,34 12,26 24,26" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="28" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#854d0e">Bintang</text>
            </g>
            {/* 5: Square */}
            <g transform="translate(257, 10)">
              <rect width="56" height="70" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
              <rect x="14" y="18" width="28" height="28" rx="4" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" />
              <text x="28" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Persegi</text>
            </g>
            {/* 6: Mystery ? */}
            <g transform="translate(320, 6)">
              <rect width="58" height="78" rx="10" fill="#fff1f2" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="29" y="46" textAnchor="middle" fontSize="32" fontWeight="black" fill="#e11d48">?</text>
              <text x="29" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">Urutan 6</text>
            </g>
            <text x="195" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
              Pola berulang setiap 3 bentuk: Bintang ➔ Persegi ➔ Segitiga
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 3. POLA PENSIL BERTAMBAH (2, 4, 6, 8 pensil) */}
        {/* ============================================================== */}
        {patternType === 'growing_pencils' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 2 pencils */}
            <g transform="translate(10, 10)">
              <rect width="78" height="85" rx="10" fill="#eff6ff" stroke="#60a5fa" strokeWidth="2" />
              <g transform="translate(22, 16)">
                <rect x="0" y="0" width="12" height="42" rx="2" fill="#fbbf24" stroke="#d97706" />
                <polygon points="6,-8 0,0 12,0" fill="#f87171" stroke="#b91c1c" />
                <rect x="20" y="0" width="12" height="42" rx="2" fill="#60a5fa" stroke="#2563eb" />
                <polygon points="26,-8 20,0 32,0" fill="#f87171" stroke="#b91c1c" />
              </g>
              <text x="39" y="74" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill="#1e3a8a">2 pensil</text>
            </g>
            <text x="96" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10b981">+2</text>
            {/* 4 pencils */}
            <g transform="translate(106, 10)">
              <rect width="78" height="85" rx="10" fill="#eff6ff" stroke="#60a5fa" strokeWidth="2" />
              <g transform="translate(12, 16)">
                {[0, 14, 28, 42].map((x, i) => (
                  <g key={i} transform={`translate(${x}, 0)`}>
                    <rect x="0" y="0" width="10" height="42" rx="2" fill={i % 2 === 0 ? "#fbbf24" : "#34d399"} stroke="#059669" />
                    <polygon points="5,-7 0,0 10,0" fill="#f87171" stroke="#b91c1c" />
                  </g>
                ))}
              </g>
              <text x="39" y="74" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill="#1e3a8a">4 pensil</text>
            </g>
            <text x="192" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10b981">+2</text>
            {/* 6 pencils */}
            <g transform="translate(202, 10)">
              <rect width="78" height="85" rx="10" fill="#eff6ff" stroke="#60a5fa" strokeWidth="2" />
              <g transform="translate(8, 16)">
                {[0, 11, 22, 33, 44, 55].map((x, i) => (
                  <g key={i} transform={`translate(${x}, 0)`}>
                    <rect x="0" y="0" width="8" height="42" rx="2" fill="#fbbf24" stroke="#d97706" />
                    <polygon points="4,-6 0,0 8,0" fill="#f87171" stroke="#b91c1c" />
                  </g>
                ))}
              </g>
              <text x="39" y="74" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill="#1e3a8a">6 pensil</text>
            </g>
            <text x="288" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10b981">+2</text>
            {/* 8 pencils */}
            <g transform="translate(298, 10)">
              <rect width="78" height="85" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" />
              <text x="39" y="42" textAnchor="middle" fontSize="16" fontWeight="black" fill="#15803d">✏️ × 8</text>
              <text x="39" y="74" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill="#15803d">8 pensil</text>
            </g>
            <text x="190" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
              Banyak benda terus bertambah 2: Pola Gambar Bertambah (+2)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 4. POLA ROTASI PANAH (↑, →, ↓, ?) */}
        {/* ============================================================== */}
        {patternType === 'repeating_arrows' && (
          <svg viewBox="0 0 380 120" className="w-full h-auto drop-shadow-xs select-none">
            {/* Up arrow */}
            <g transform="translate(20, 10)">
              <rect width="64" height="74" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <path d="M32 50 L32 24 M22 34 L32 22 L42 34" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="32" y="66" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">1. Atas (↑)</text>
            </g>
            <text x="96" y="48" textAnchor="middle" fontSize="14" fill="#0284c7" fontWeight="bold">↷ 90°</text>
            {/* Right arrow */}
            <g transform="translate(110, 10)">
              <rect width="64" height="74" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <path d="M18 37 L44 37 M34 27 L46 37 L34 47" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="32" y="66" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">2. Kanan (→)</text>
            </g>
            <text x="186" y="48" textAnchor="middle" fontSize="14" fill="#0284c7" fontWeight="bold">↷ 90°</text>
            {/* Down arrow */}
            <g transform="translate(200, 10)">
              <rect width="64" height="74" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <path d="M32 24 L32 50 M22 40 L32 52 L42 40" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="32" y="66" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">3. Bawah (↓)</text>
            </g>
            <text x="276" y="48" textAnchor="middle" fontSize="14" fill="#e11d48" fontWeight="bold">↷ 90°</text>
            {/* Mystery ? */}
            <g transform="translate(290, 6)">
              <rect width="68" height="82" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="34" y="48" textAnchor="middle" fontSize="34" fontWeight="black" fill="#e11d48">?</text>
              <text x="34" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">4. Berikutnya?</text>
            </g>
            <text x="190" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
              Pola berulang putaran searah jarum jam: Atas ➔ Kanan ➔ Bawah ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 5. POLA WARNA LAMPU BERULANG (Merah, Kuning, Hijau...) */}
        {/* ============================================================== */}
        {patternType === 'repeating_colors' && (
          <svg viewBox="0 0 390 120" className="w-full h-auto drop-shadow-xs select-none">
            {/* Lights 1 to 8 */}
            {[
              { id: 1, c: '#ef4444', n: 'Merah' },
              { id: 2, c: '#eab308', n: 'Kuning' },
              { id: 3, c: '#22c55e', n: 'Hijau' },
              { id: 4, c: '#ef4444', n: 'Merah' },
              { id: 5, c: '#eab308', n: 'Kuning' },
              { id: 6, c: '#22c55e', n: 'Hijau' },
              { id: 7, c: '#ef4444', n: 'Merah' },
              { id: 8, c: '#f43f5e', n: '?', isMystery: true },
            ].map((item, idx) => {
              const x = 12 + idx * 46;
              return (
                <g key={idx} transform={`translate(${x}, 12)`}>
                  <rect width="40" height="68" rx="8" fill={item.isMystery ? '#fff1f2' : '#f8fafc'} stroke={item.isMystery ? '#f43f5e' : '#cbd5e1'} strokeWidth="1.5" strokeDasharray={item.isMystery ? '3 2' : undefined} />
                  {item.isMystery ? (
                    <text x="20" y="38" textAnchor="middle" fontSize="24" fontWeight="black" fill="#e11d48">?</text>
                  ) : (
                    <circle cx="20" cy="24" r="14" fill={item.c} stroke="#0f172a" strokeWidth="1.5" />
                  )}
                  <text x="20" y="52" textAnchor="middle" fontSize="9" fontWeight="bold" fill={item.isMystery ? '#9f1239' : '#334155'}>
                    #{item.id}
                  </text>
                  <text x="20" y="62" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill={item.isMystery ? '#e11d48' : item.c}>
                    {item.n}
                  </text>
                </g>
              );
            })}
            <text x="195" y="104" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola 3 warna berulang: Merah (1,4,7) ➔ Kuning (2,5,8) ➔ Hijau (3,6,9)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 6. POLA KELERENG BERTAMBAH 2 (3, 5, 7, ? 9) */}
        {/* ============================================================== */}
        {patternType === 'growing_dots' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* Box 1: 3 dots */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="24" cy="30" r="9" fill="#3b82f6" />
              <circle cx="50" cy="30" r="9" fill="#3b82f6" />
              <circle cx="37" cy="48" r="9" fill="#3b82f6" />
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">3 kelereng</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#10b981">+2</text>
            {/* Box 2: 5 dots */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="20" cy="24" r="8" fill="#3b82f6" />
              <circle cx="54" cy="24" r="8" fill="#3b82f6" />
              <circle cx="37" cy="36" r="8" fill="#3b82f6" />
              <circle cx="20" cy="48" r="8" fill="#3b82f6" />
              <circle cx="54" cy="48" r="8" fill="#3b82f6" />
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">5 kelereng</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#10b981">+2</text>
            {/* Box 3: 7 dots */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="20" cy="22" r="7" fill="#3b82f6" />
              <circle cx="37" cy="22" r="7" fill="#3b82f6" />
              <circle cx="54" cy="22" r="7" fill="#3b82f6" />
              <circle cx="28" cy="36" r="7" fill="#3b82f6" />
              <circle cx="46" cy="36" r="7" fill="#3b82f6" />
              <circle cx="20" cy="50" r="7" fill="#3b82f6" />
              <circle cx="54" cy="50" r="7" fill="#3b82f6" />
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">7 kelereng</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#e11d48">+2</text>
            {/* Box 4: ? 9 dots */}
            <g transform="translate(292, 6)">
              <rect width="78" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Gambar 4</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Aturan: Banyak kelereng bertambah 2 di setiap gambar (+2)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 7. POLA BINTANG BERTAMBAH 3 (2, 5, 8, ? 11) */}
        {/* ============================================================== */}
        {patternType === 'growing_stars' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* Box 1: 2 stars */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20">⭐ ⭐</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">2 bintang</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#10b981">+3</text>
            {/* Box 2: 5 stars */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="28" textAnchor="middle" fontSize="14">⭐⭐⭐</text>
              <text x="37" y="46" textAnchor="middle" fontSize="14">⭐⭐</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">5 bintang</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#10b981">+3</text>
            {/* Box 3: 8 stars */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="28" textAnchor="middle" fontSize="13">⭐⭐⭐⭐</text>
              <text x="37" y="46" textAnchor="middle" fontSize="13">⭐⭐⭐⭐</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">8 bintang</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#e11d48">+3</text>
            {/* Box 4: ? 11 stars */}
            <g transform="translate(292, 6)">
              <rect width="78" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Pola ke-4</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Aturan Pola: 2 (+3) ➔ 5 (+3) ➔ 8 (+3) ➔ ...
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 8. ATURAN POLA LINGKARAN BERTAMBAH 4 (4, 8, 12, 16) */}
        {/* ============================================================== */}
        {patternType === 'growing_circles_rule' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 4 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
              <circle cx="28" cy="28" r="9" fill="#10b981" />
              <circle cx="46" cy="28" r="9" fill="#10b981" />
              <circle cx="28" cy="46" r="9" fill="#10b981" />
              <circle cx="46" cy="46" r="9" fill="#10b981" />
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">4 lingkaran</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#059669">+4?</text>
            {/* 8 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="18" fontWeight="black" fill="#10b981">● × 8</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">8 lingkaran</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#059669">+4?</text>
            {/* 12 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="18" fontWeight="black" fill="#10b981">● × 12</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">12 lingkaran</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#059669">+4?</text>
            {/* 16 */}
            <g transform="translate(292, 10)">
              <rect width="74" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="18" fontWeight="black" fill="#10b981">● × 16</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">16 lingkaran</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Selisih: 8 - 4 = 4; 12 - 8 = 4; 16 - 12 = 4 (Bertambah 4)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 9. POLA BATANG KOREK API PERSEGI BERSAMBUNG (4, 7, 10, ? 13) */}
        {/* ============================================================== */}
        {patternType === 'growing_matchsticks' && (
          <svg viewBox="0 0 390 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1 square: 4 sticks */}
            <g transform="translate(10, 10)">
              <rect width="76" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <rect x="22" y="18" width="32" height="32" fill="none" stroke="#d97706" strokeWidth="4" />
              <circle cx="22" cy="18" r="3" fill="#dc2626" />
              <circle cx="54" cy="18" r="3" fill="#dc2626" />
              <circle cx="54" cy="50" r="3" fill="#dc2626" />
              <circle cx="22" cy="50" r="3" fill="#dc2626" />
              <text x="38" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">4 batang (1 kotak)</text>
            </g>
            <text x="96" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#10b981">+3</text>
            {/* 2 squares: 7 sticks */}
            <g transform="translate(106, 10)">
              <rect width="82" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <rect x="15" y="20" width="26" height="28" fill="none" stroke="#d97706" strokeWidth="3" />
              <rect x="41" y="20" width="26" height="28" fill="none" stroke="#d97706" strokeWidth="3" />
              <text x="41" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">7 batang (2 kotak)</text>
            </g>
            <text x="198" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#10b981">+3</text>
            {/* 3 squares: 10 sticks */}
            <g transform="translate(208, 10)">
              <rect width="84" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <rect x="10" y="22" width="21" height="26" fill="none" stroke="#d97706" strokeWidth="3" />
              <rect x="31" y="22" width="21" height="26" fill="none" stroke="#d97706" strokeWidth="3" />
              <rect x="52" y="22" width="21" height="26" fill="none" stroke="#d97706" strokeWidth="3" />
              <text x="42" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">10 batang (3 kotak)</text>
            </g>
            <text x="302" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#e11d48">+3</text>
            {/* 4 squares: ? 13 sticks */}
            <g transform="translate(312, 6)">
              <rect width="68" height="92" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="34" y="50" textAnchor="middle" fontSize="32" fontWeight="black" fill="#e11d48">?</text>
              <text x="34" y="76" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">4 kotak bersambung</text>
            </g>
            <text x="195" y="116" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Setiap menambah 1 kotak hanya butuh +3 batang korek api
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 10. POLA BILANGAN SEGITIGA BERTINGKAT (1, 3, 6, 10, ? 15) */}
        {/* ============================================================== */}
        {patternType === 'growing_triangle_dots' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1 */}
            <g transform="translate(10, 10)">
              <rect width="64" height="85" rx="8" fill="#fdf4ff" stroke="#c084fc" strokeWidth="2" />
              <circle cx="32" cy="35" r="7" fill="#a855f7" />
              <text x="32" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">1 titik</text>
            </g>
            <text x="82" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">+2</text>
            {/* 3 */}
            <g transform="translate(92, 10)">
              <rect width="64" height="85" rx="8" fill="#fdf4ff" stroke="#c084fc" strokeWidth="2" />
              <circle cx="32" cy="24" r="6" fill="#a855f7" />
              <circle cx="22" cy="42" r="6" fill="#a855f7" />
              <circle cx="42" cy="42" r="6" fill="#a855f7" />
              <text x="32" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">3 titik</text>
            </g>
            <text x="164" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">+3</text>
            {/* 6 */}
            <g transform="translate(174, 10)">
              <rect width="64" height="85" rx="8" fill="#fdf4ff" stroke="#c084fc" strokeWidth="2" />
              <circle cx="32" cy="18" r="5" fill="#a855f7" />
              <circle cx="24" cy="32" r="5" fill="#a855f7" />
              <circle cx="40" cy="32" r="5" fill="#a855f7" />
              <circle cx="16" cy="46" r="5" fill="#a855f7" />
              <circle cx="32" cy="46" r="5" fill="#a855f7" />
              <circle cx="48" cy="46" r="5" fill="#a855f7" />
              <text x="32" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">6 titik</text>
            </g>
            <text x="246" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">+4</text>
            {/* 10 */}
            <g transform="translate(256, 10)">
              <rect width="64" height="85" rx="8" fill="#fdf4ff" stroke="#c084fc" strokeWidth="2" />
              <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="black" fill="#7e22ce">10</text>
              <text x="32" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">10 titik</text>
            </g>
            <text x="328" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e11d48">+5</text>
            {/* ? */}
            <g transform="translate(332, 6)">
              <rect width="44" height="92" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="22" y="50" textAnchor="middle" fontSize="28" fontWeight="black" fill="#e11d48">?</text>
              <text x="22" y="76" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#9f1239">Pola 5</text>
            </g>
            <text x="190" y="116" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pertambahan bertingkat: +2, +3, +4, +5 ➔ 10 + 5 = ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 11. POLA APEL BERKURANG 2 (10, 8, 6, ? 4) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_apples' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 10 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <text x="37" y="32" textAnchor="middle" fontSize="16">🍎🍎🍎</text>
              <text x="37" y="48" textAnchor="middle" fontSize="16">🍎🍎🍎</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">10 apel</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ef4444">-2</text>
            {/* 8 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <text x="37" y="32" textAnchor="middle" fontSize="16">🍎🍎🍎🍎</text>
              <text x="37" y="48" textAnchor="middle" fontSize="16">🍎🍎🍎🍎</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">8 apel</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ef4444">-2</text>
            {/* 6 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <text x="37" y="32" textAnchor="middle" fontSize="16">🍎🍎🍎</text>
              <text x="37" y="48" textAnchor="middle" fontSize="16">🍎🍎🍎</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">6 apel</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ef4444">-2</text>
            {/* ? 4 */}
            <g transform="translate(292, 6)">
              <rect width="78" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Gambar 4</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola Gambar Berkurang 2: 10 (-2) ➔ 8 (-2) ➔ 6 (-2) ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 12. POLA BALOK BERKURANG 3 (15, 12, 9, ? 6) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_cubes' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 15 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="22" fontWeight="black" fill="#0369a1">📦 15</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#075985">15 balok</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#0284c7">-3</text>
            {/* 12 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="22" fontWeight="black" fill="#0369a1">📦 12</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#075985">12 balok</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#0284c7">-3</text>
            {/* 9 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="22" fontWeight="black" fill="#0369a1">📦 9</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#075985">9 balok</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ef4444">-3</text>
            {/* ? 6 */}
            <g transform="translate(292, 6)">
              <rect width="78" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Gambar 4</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola Berkurang 3: 15 (-3) ➔ 12 (-3) ➔ 9 (-3) ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 13. ATURAN BUNGA BERKURANG 4 (20, 16, 12, 8) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_flowers' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 20 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#be185d">🌸 20</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">20 bunga</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#db2777">-4?</text>
            {/* 16 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#be185d">🌸 16</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">16 bunga</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#db2777">-4?</text>
            {/* 12 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#be185d">🌸 12</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">12 bunga</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#db2777">-4?</text>
            {/* 8 */}
            <g transform="translate(292, 10)">
              <rect width="74" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#be185d">🌸 8</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">8 bunga</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Selisih: 20 - 16 = 4; 16 - 12 = 4; 12 - 8 = 4 (Berkurang 4 bunga)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 14. POLA KOIN RUMPANG DI TENGAH (18, [?], 10, 6) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_coins' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 18 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#854d0e">🪙 18</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">18 koin</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ca8a04">-4</text>
            {/* Mystery [ ? ] */}
            <g transform="translate(104, 6)">
              <rect width="74" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="37" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="37" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Gambar 2</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ca8a04">-4</text>
            {/* 10 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#854d0e">🪙 10</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">10 koin</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ca8a04">-4</text>
            {/* 6 */}
            <g transform="translate(292, 10)">
              <rect width="74" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#854d0e">🪙 6</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">6 koin</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Aturan pola selisih 10 - 6 = 4. Maka Gambar 2 = 18 - 4 = ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 15. POLA DONAT BERKURANG 5 (16, 11, 6, ? 1) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_donuts' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 16 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#c2410c">🍩 16</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">16 donat</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ea580c">-5</text>
            {/* 11 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="80" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#c2410c">🍩 11</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">11 donat</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ea580c">-5</text>
            {/* 6 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
              <text x="37" y="40" textAnchor="middle" fontSize="20" fontWeight="black" fill="#c2410c">🍩 6</text>
              <text x="37" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">6 donat</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#ef4444">-5</text>
            {/* ? 1 */}
            <g transform="translate(292, 6)">
              <rect width="78" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Tingkat 4</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola Berkurang 5: 16 (-5) ➔ 11 (-5) ➔ 6 (-5) ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 16. POLA PERSEGI GRID MEMBESAR (1x1, 2x2, 3x3, ? 4x4) */}
        {/* ============================================================== */}
        {patternType === 'grid_growing' && (
          <svg viewBox="0 0 380 135" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1x1 */}
            <g transform="translate(10, 10)">
              <rect width="64" height="92" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="22" y="24" width="20" height="20" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.5" />
              <text x="32" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">1×1 = 1</text>
              <text x="32" y="80" textAnchor="middle" fontSize="8" fill="#64748b">Gambar 1</text>
            </g>
            {/* 2x2 */}
            <g transform="translate(84, 10)">
              <rect width="74" height="92" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <g transform="translate(23, 19)">
                <rect x="0" y="0" width="14" height="14" fill="#60a5fa" stroke="#1d4ed8" />
                <rect x="14" y="0" width="14" height="14" fill="#60a5fa" stroke="#1d4ed8" />
                <rect x="0" y="14" width="14" height="14" fill="#60a5fa" stroke="#1d4ed8" />
                <rect x="14" y="14" width="14" height="14" fill="#60a5fa" stroke="#1d4ed8" />
              </g>
              <text x="37" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">2×2 = 4</text>
              <text x="37" y="80" textAnchor="middle" fontSize="8" fill="#64748b">Gambar 2</text>
            </g>
            {/* 3x3 */}
            <g transform="translate(168, 10)">
              <rect width="84" height="92" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <g transform="translate(24, 16)">
                {[0, 1, 2].map(r =>
                  [0, 1, 2].map(c => (
                    <rect key={`${r}-${c}`} x={c * 12} y={r * 12} width="12" height="12" fill="#60a5fa" stroke="#1d4ed8" />
                  ))
                )}
              </g>
              <text x="42" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">3×3 = 9</text>
              <text x="42" y="80" textAnchor="middle" fontSize="8" fill="#64748b">Gambar 3</text>
            </g>
            {/* 4x4: ? 16 */}
            <g transform="translate(262, 6)">
              <rect width="108" height="98" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="54" y="44" textAnchor="middle" fontSize="32" fontWeight="black" fill="#e11d48">?</text>
              <text x="54" y="70" textAnchor="middle" fontSize="10" fontWeight="black" fill="#991b1b">Gambar 4 (4×4)</text>
              <text x="54" y="84" textAnchor="middle" fontSize="8" fill="#64748b">Berapa kotak?</text>
            </g>
            <text x="190" y="122" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola persegi membesar: 1 (1×1), 4 (2×2), 9 (3×3), ? (4×4)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 17. POLA LINGKARAN KONSENTRIS MEMBESAR (d=4, d=8, d=12 cm) */}
        {/* ============================================================== */}
        {patternType === 'concentric_growing' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* Lingkaran A */}
            <g transform="translate(20, 10)">
              <rect width="90" height="90" rx="10" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" />
              <circle cx="45" cy="40" r="14" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
              <text x="45" y="72" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">A: d = 4 cm</text>
              <text x="45" y="84" textAnchor="middle" fontSize="8" fill="#64748b">Ukuran Kecil</text>
            </g>
            {/* Lingkaran B */}
            <g transform="translate(140, 10)">
              <rect width="100" height="90" rx="10" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" />
              <circle cx="50" cy="40" r="23" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
              <text x="50" y="72" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">B: d = 8 cm</text>
              <text x="50" y="84" textAnchor="middle" fontSize="8" fill="#64748b">Ukuran Sedang</text>
            </g>
            {/* Lingkaran C */}
            <g transform="translate(260, 10)">
              <rect width="105" height="90" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
              <circle cx="52" cy="40" r="32" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="52" y="72" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#15803d">C: d = 12 cm</text>
              <text x="52" y="84" textAnchor="middle" fontSize="8" fill="#64748b">Ukuran Besar</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Ukuran gambar tampak semakin besar secara teratur: Pola Gambar Membesar
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 18. POLA SEGITIGA MENGECIL (t=18, t=14, t=10, ? t=6) */}
        {/* ============================================================== */}
        {patternType === 'shrinking_triangles' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1: t=18 */}
            <g transform="translate(10, 10)">
              <rect width="76" height="88" rx="8" fill="#fef2f2" stroke="#f87171" strokeWidth="2" />
              <polygon points="38,12 14,56 62,56" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
              <text x="38" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">t = 18 cm</text>
              <text x="38" y="82" textAnchor="middle" fontSize="8" fill="#64748b">Segitiga 1</text>
            </g>
            <text x="96" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">-4 cm</text>
            {/* 2: t=14 */}
            <g transform="translate(106, 10)">
              <rect width="76" height="88" rx="8" fill="#fef2f2" stroke="#f87171" strokeWidth="2" />
              <polygon points="38,20 18,56 58,56" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
              <text x="38" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">t = 14 cm</text>
              <text x="38" y="82" textAnchor="middle" fontSize="8" fill="#64748b">Segitiga 2</text>
            </g>
            <text x="192" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">-4 cm</text>
            {/* 3: t=10 */}
            <g transform="translate(202, 10)">
              <rect width="76" height="88" rx="8" fill="#fef2f2" stroke="#f87171" strokeWidth="2" />
              <polygon points="38,28 22,56 54,56" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
              <text x="38" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">t = 10 cm</text>
              <text x="38" y="82" textAnchor="middle" fontSize="8" fill="#64748b">Segitiga 3</text>
            </g>
            <text x="288" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e11d48">-4 cm</text>
            {/* 4: ? t=6 */}
            <g transform="translate(298, 6)">
              <rect width="74" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="37" y="48" textAnchor="middle" fontSize="30" fontWeight="black" fill="#e11d48">?</text>
              <text x="37" y="72" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">Segitiga 4</text>
              <text x="37" y="84" textAnchor="middle" fontSize="8" fill="#64748b">t = ? cm</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Tinggi segitiga mengecil 4 cm di setiap tahap: 18 (-4) ➔ 14 (-4) ➔ 10 (-4) ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 19. POLA TANGGA BALOK MEMBESAR (1, 3, 6, ? 10) */}
        {/* ============================================================== */}
        {patternType === 'stairs_growing' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1 anak tangga */}
            <g transform="translate(10, 10)">
              <rect width="66" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="25" y="38" width="16" height="16" fill="#93c5fd" stroke="#1d4ed8" />
              <text x="33" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">1 balok</text>
              <text x="33" y="80" textAnchor="middle" fontSize="8" fill="#64748b">1 tingkat</text>
            </g>
            <text x="86" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">+2</text>
            {/* 2 anak tangga */}
            <g transform="translate(96, 10)">
              <rect width="76" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="22" y="40" width="16" height="16" fill="#93c5fd" stroke="#1d4ed8" />
              <rect x="38" y="40" width="16" height="16" fill="#93c5fd" stroke="#1d4ed8" />
              <rect x="22" y="24" width="16" height="16" fill="#93c5fd" stroke="#1d4ed8" />
              <text x="38" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">3 balok (1+2)</text>
              <text x="38" y="80" textAnchor="middle" fontSize="8" fill="#64748b">2 tingkat</text>
            </g>
            <text x="182" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">+3</text>
            {/* 3 anak tangga */}
            <g transform="translate(192, 10)">
              <rect width="86" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              {/* col 1: 3 */}
              <rect x="18" y="42" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              <rect x="18" y="28" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              <rect x="18" y="14" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              {/* col 2: 2 */}
              <rect x="32" y="42" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              <rect x="32" y="28" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              {/* col 3: 1 */}
              <rect x="46" y="42" width="14" height="14" fill="#93c5fd" stroke="#1d4ed8" />
              <text x="43" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">6 balok (1+2+3)</text>
              <text x="43" y="80" textAnchor="middle" fontSize="8" fill="#64748b">3 tingkat</text>
            </g>
            <text x="288" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e11d48">+4</text>
            {/* 4 anak tangga */}
            <g transform="translate(298, 6)">
              <rect width="74" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="37" y="48" textAnchor="middle" fontSize="30" fontWeight="black" fill="#e11d48">?</text>
              <text x="37" y="72" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">4 tingkat</text>
              <text x="37" y="84" textAnchor="middle" fontSize="8" fill="#64748b">1+2+3+4 = ?</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola penambahan balok: 1, 1+2=3, 1+2+3=6, 1+2+3+4 = ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 20. POLA PERSEGI PANJANG MENGECIL (12x6, 10x5, 8x4, ? 6x3) */}
        {/* ============================================================== */}
        {patternType === 'rectangles_shrinking' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1: 12x6 */}
            <g transform="translate(10, 10)">
              <rect width="78" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="14" y="24" width="50" height="26" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
              <text x="39" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">12 cm × 6 cm</text>
              <text x="39" y="78" textAnchor="middle" fontSize="8" fill="#64748b">Pola 1</text>
            </g>
            <text x="98" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">-2 & -1</text>
            {/* 2: 10x5 */}
            <g transform="translate(108, 10)">
              <rect width="78" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="18" y="26" width="42" height="22" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
              <text x="39" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">10 cm × 5 cm</text>
              <text x="39" y="78" textAnchor="middle" fontSize="8" fill="#64748b">Pola 2</text>
            </g>
            <text x="196" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">-2 & -1</text>
            {/* 3: 8x4 */}
            <g transform="translate(206, 10)">
              <rect width="78" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <rect x="22" y="28" width="34" height="18" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
              <text x="39" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">8 cm × 4 cm</text>
              <text x="39" y="78" textAnchor="middle" fontSize="8" fill="#64748b">Pola 3</text>
            </g>
            <text x="294" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e11d48">-2 & -1</text>
            {/* 4: ? 6x3 */}
            <g transform="translate(304, 6)">
              <rect width="68" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="34" y="48" textAnchor="middle" fontSize="28" fontWeight="black" fill="#e11d48">?</text>
              <text x="34" y="72" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9f1239">Pola 4</text>
              <text x="34" y="84" textAnchor="middle" fontSize="8" fill="#64748b">? cm × ? cm</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Panjang berkurang 2 cm (12➔10➔8➔6), Lebar berkurang 1 cm (6➔5➔4➔3)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 21. POLA KRISTAL RUMPANG DI TENGAH (5, [? 9], 13, 17) */}
        {/* ============================================================== */}
        {patternType === 'crystals_missing' && (
          <svg viewBox="0 0 380 125" className="w-full h-auto drop-shadow-xs select-none">
            {/* 5 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="80" rx="10" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#0f766e">💎 5</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#115e59">5 kristal</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#0d9488">+4</text>
            {/* Mystery [ ? ] */}
            <g transform="translate(104, 6)">
              <rect width="74" height="86" rx="12" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="37" y="50" textAnchor="middle" fontSize="36" fontWeight="black" fill="#e11d48">?</text>
              <text x="37" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Pola 2</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#0d9488">+4</text>
            {/* 13 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="80" rx="10" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#0f766e">💎 13</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#115e59">13 kristal</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#0d9488">+4</text>
            {/* 17 */}
            <g transform="translate(292, 10)">
              <rect width="74" height="80" rx="10" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="20" fontWeight="black" fill="#0f766e">💎 17</text>
              <text x="37" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#115e59">17 kristal</text>
            </g>
            <text x="190" y="112" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Selisih 17 - 13 = 4. Maka Pola 2 = 5 + 4 = ? (dan ? + 4 = 13)
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 22. POLA HURUF L PERMATA BERTAMBAH (3, 5, 7, Pola 5 = ? 11) */}
        {/* ============================================================== */}
        {patternType === 'permata_L' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* Pola 1: 3 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="88" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
              <g transform="translate(24, 20)">
                <rect x="0" y="0" width="12" height="12" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="0" y="12" width="12" height="12" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="12" y="12" width="12" height="12" fill="#a78bfa" stroke="#6d28d9" />
              </g>
              <text x="37" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Pola 1 = 3</text>
            </g>
            <text x="94" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed">+2</text>
            {/* Pola 2: 5 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="88" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
              <g transform="translate(20, 14)">
                <rect x="0" y="0" width="10" height="10" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="0" y="10" width="10" height="10" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="0" y="20" width="10" height="10" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="10" y="20" width="10" height="10" fill="#a78bfa" stroke="#6d28d9" />
                <rect x="20" y="20" width="10" height="10" fill="#a78bfa" stroke="#6d28d9" />
              </g>
              <text x="37" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Pola 2 = 5</text>
            </g>
            <text x="188" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed">+2</text>
            {/* Pola 3: 7 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="88" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
              <text x="37" y="38" textAnchor="middle" fontSize="16" fontWeight="black" fill="#6d28d9">L (7)</text>
              <text x="37" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Pola 3 = 7</text>
            </g>
            <text x="282" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e11d48">...</text>
            {/* Pola 5: ? 11 */}
            <g transform="translate(292, 6)">
              <rect width="78" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="48" textAnchor="middle" fontSize="30" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="72" textAnchor="middle" fontSize="10" fontWeight="black" fill="#991b1b">Pola ke-5</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola bertambah 2: Pola 1 = 3, Pola 2 = 5, Pola 3 = 7, Pola 4 = 9, Pola 5 = ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 23. POLA BINGKAI UBIN MEMBESAR (8, 12, 16, ? 20) */}
        {/* ============================================================== */}
        {patternType === 'border_grid' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 8 */}
            <g transform="translate(10, 10)">
              <rect width="74" height="88" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <text x="37" y="36" textAnchor="middle" fontSize="18" fontWeight="black" fill="#d97706">8 ubin</text>
              <text x="37" y="54" textAnchor="middle" fontSize="8" fill="#92400e">(1 ubin pusat)</text>
              <text x="37" y="74" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b45309">Pola 1</text>
            </g>
            <text x="94" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#d97706">+4</text>
            {/* 12 */}
            <g transform="translate(104, 10)">
              <rect width="74" height="88" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <text x="37" y="36" textAnchor="middle" fontSize="18" fontWeight="black" fill="#d97706">12 ubin</text>
              <text x="37" y="54" textAnchor="middle" fontSize="8" fill="#92400e">(4 ubin pusat)</text>
              <text x="37" y="74" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b45309">Pola 2</text>
            </g>
            <text x="188" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#d97706">+4</text>
            {/* 16 */}
            <g transform="translate(198, 10)">
              <rect width="74" height="88" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
              <text x="37" y="36" textAnchor="middle" fontSize="18" fontWeight="black" fill="#d97706">16 ubin</text>
              <text x="37" y="54" textAnchor="middle" fontSize="8" fill="#92400e">(9 ubin pusat)</text>
              <text x="37" y="74" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b45309">Pola 3</text>
            </g>
            <text x="282" y="50" textAnchor="middle" fontSize="13" fontWeight="black" fill="#e11d48">+4</text>
            {/* ? 20 */}
            <g transform="translate(292, 6)">
              <rect width="78" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="48" textAnchor="middle" fontSize="32" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="74" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#991b1b">Pola 4</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Ubin tepi bertambah 4 di setiap tahap: 8 (+4) ➔ 12 (+4) ➔ 16 (+4) ➔ ?
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 24. POLA KOMBINASI BENTUK, JUMLAH & WARNA */}
        {/* ============================================================== */}
        {patternType === 'combo_shapes' && (
          <svg viewBox="0 0 380 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* 1 Segitiga Kuning */}
            <g transform="translate(10, 10)">
              <rect width="74" height="88" rx="8" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <polygon points="37,20 22,46 52,46" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
              <text x="37" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#854d0e">1 Segitiga</text>
              <text x="37" y="76" textAnchor="middle" fontSize="8" fill="#a16207">Kuning</text>
            </g>
            <text x="94" y="52" textAnchor="middle" fontSize="14" fill="#3b82f6" fontWeight="bold">➔</text>
            {/* 2 Lingkaran Biru */}
            <g transform="translate(104, 10)">
              <rect width="74" height="88" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="26" cy="34" r="10" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.5" />
              <circle cx="48" cy="34" r="10" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.5" />
              <text x="37" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">2 Lingkaran</text>
              <text x="37" y="76" textAnchor="middle" fontSize="8" fill="#2563eb">Biru</text>
            </g>
            <text x="188" y="52" textAnchor="middle" fontSize="14" fill="#ef4444" fontWeight="bold">➔</text>
            {/* 3 Persegi Merah */}
            <g transform="translate(198, 10)">
              <rect width="74" height="88" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <g transform="translate(12, 26)">
                <rect x="0" y="0" width="14" height="14" fill="#f87171" stroke="#b91c1c" />
                <rect x="18" y="0" width="14" height="14" fill="#f87171" stroke="#b91c1c" />
                <rect x="36" y="0" width="14" height="14" fill="#f87171" stroke="#b91c1c" />
              </g>
              <text x="37" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">3 Persegi</text>
              <text x="37" y="76" textAnchor="middle" fontSize="8" fill="#b91c1c">Merah</text>
            </g>
            <text x="282" y="52" textAnchor="middle" fontSize="14" fill="#16a34a" fontWeight="bold">➔</text>
            {/* Pola 4: ? (4 Bintang Hijau) */}
            <g transform="translate(292, 6)">
              <rect width="78" height="94" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="39" y="48" textAnchor="middle" fontSize="30" fontWeight="black" fill="#e11d48">?</text>
              <text x="39" y="72" textAnchor="middle" fontSize="9" fontWeight="black" fill="#991b1b">Pola ke-4</text>
              <text x="39" y="84" textAnchor="middle" fontSize="8" fill="#64748b">4 Bintang Hijau</text>
            </g>
            <text x="190" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Banyak objek bertambah 1: 1 ➔ 2 ➔ 3 ➔ 4. Bentuk & warna berganti!
            </text>
          </svg>
        )}

        {/* ============================================================== */}
        {/* 25. POLA JUMLAH SUDUT BANGUN DATAR / POLIGON (3, 4, 5, 6, 7, ? 8) */}
        {/* ============================================================== */}
        {patternType === 'polygons_angles' && (
          <svg viewBox="0 0 390 130" className="w-full h-auto drop-shadow-xs select-none">
            {/* Segitiga 3 */}
            <g transform="translate(6, 10)">
              <rect width="56" height="86" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <polygon points="28,20 12,46 44,46" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
              <text x="28" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">Segitiga</text>
              <text x="28" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">3 sudut</text>
            </g>
            {/* Persegi 4 */}
            <g transform="translate(68, 10)">
              <rect width="56" height="86" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <rect x="15" y="22" width="26" height="26" fill="#86efac" stroke="#15803d" strokeWidth="2" />
              <text x="28" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">Persegi</text>
              <text x="28" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">4 sudut</text>
            </g>
            {/* Segi-5 */}
            <g transform="translate(130, 10)">
              <rect width="56" height="86" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1.5" />
              <polygon points="28,18 44,28 38,46 18,46 12,28" fill="#fde047" stroke="#a16207" strokeWidth="2" />
              <text x="28" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#854d0e">Segi-5</text>
              <text x="28" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#a16207">5 sudut</text>
            </g>
            {/* Segi-6 */}
            <g transform="translate(192, 10)">
              <rect width="56" height="86" rx="8" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />
              <polygon points="28,18 42,26 42,40 28,48 14,40 14,26" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="2" />
              <text x="28" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b21a8">Segi-6</text>
              <text x="28" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#7e22ce">6 sudut</text>
            </g>
            {/* Segi-7 */}
            <g transform="translate(254, 10)">
              <rect width="56" height="86" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              <polygon points="28,18 40,24 44,36 36,46 20,46 12,36 16,24" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
              <text x="28" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9a3412">Segi-7</text>
              <text x="28" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#c2410c">7 sudut</text>
            </g>
            {/* Mystery ? (Segi-8 = 8 sudut) */}
            <g transform="translate(316, 6)">
              <rect width="66" height="92" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="33" y="46" textAnchor="middle" fontSize="28" fontWeight="black" fill="#e11d48">?</text>
              <text x="33" y="68" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#9f1239">Segi-8 (Oktagon)</text>
              <text x="33" y="80" textAnchor="middle" fontSize="8" fill="#64748b">Berapa sudut?</text>
            </g>
            <text x="195" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
              Pola sudut bertambah 1: 3 ➔ 4 ➔ 5 ➔ 6 ➔ 7 ➔ ? sudut
            </text>
          </svg>
        )}

        {/* Fallback / Generic Pattern Diagram if not matched */}
        {!patternType && (
          <div className="text-center p-3 text-xs text-blue-900 font-semibold">
            <span>Visualisasi Pola Gambar Tersedia</span>
          </div>
        )}
      </div>

      {/* Quick Dimension/Attributes Pills if available */}
      {dimensions && Object.keys(dimensions).length > 0 && (
        <div className="flex flex-wrap gap-1.5 justify-center mt-1.5">
          {Object.entries(dimensions).map(([key, val]) => (
            <span
              key={key}
              className="text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded-lg border border-blue-200 font-semibold shadow-2xs"
            >
              <span className="capitalize text-blue-900 font-bold">{key}:</span> {val}
            </span>
          ))}
        </div>
      )}

      {notes && (
        <p className="text-[11px] text-slate-600 mt-1 text-center font-medium italic">
          {notes}
        </p>
      )}
    </div>
  );
};
