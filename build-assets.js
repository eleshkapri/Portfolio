const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Avatar (Memoji style designer with glasses and purple ambient background)
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="avatarBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#9d4edd"/>
      <stop offset="100%" stop-color="#3c096c"/>
    </radialGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fcd5b5"/>
      <stop offset="100%" stop-color="#e8a87c"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="96" fill="url(#avatarBg)"/>
  <!-- Body/Hoodie -->
  <path d="M40 190 C40 150, 70 140, 100 140 C130 140, 160 150, 160 190 Z" fill="#1b1a2f"/>
  <path d="M75 145 Q100 160 125 145" fill="none" stroke="#2e2b4f" stroke-width="4"/>
  <!-- Neck -->
  <rect x="85" y="120" width="30" height="25" rx="6" fill="#df9b6d"/>
  <!-- Face -->
  <ellipse cx="100" cy="95" rx="42" ry="48" fill="url(#skin)"/>
  <!-- Hair -->
  <path d="M55 90 C50 60, 70 35, 100 35 C130 35, 150 60, 145 90 C140 65, 125 50, 100 50 C75 50, 60 65, 55 90 Z" fill="#1a1412"/>
  <path d="M60 60 C80 35, 120 35, 140 60 C130 45, 110 40, 95 42 C80 44, 70 50, 60 60 Z" fill="#2c221e"/>
  <!-- Ears -->
  <circle cx="56" cy="98" r="9" fill="#e8a87c"/>
  <circle cx="144" cy="98" r="9" fill="#e8a87c"/>
  <!-- Glasses -->
  <rect x="66" y="82" width="28" height="22" rx="7" fill="none" stroke="#111" stroke-width="3.5"/>
  <rect x="106" y="82" width="28" height="22" rx="7" fill="none" stroke="#111" stroke-width="3.5"/>
  <line x1="94" y1="92" x2="106" y2="92" stroke="#111" stroke-width="3.5"/>
  <!-- Eyes -->
  <circle cx="80" cy="93" r="4.5" fill="#1f1a17"/>
  <circle cx="120" cy="93" r="4.5" fill="#1f1a17"/>
  <circle cx="82" cy="91" r="1.5" fill="#ffffff"/>
  <circle cx="122" cy="91" r="1.5" fill="#ffffff"/>
  <!-- Eyebrows -->
  <path d="M68 76 Q80 72 90 77" fill="none" stroke="#1a1412" stroke-width="3" stroke-linecap="round"/>
  <path d="M110 77 Q120 72 132 76" fill="none" stroke="#1a1412" stroke-width="3" stroke-linecap="round"/>
  <!-- Nose -->
  <path d="M97 97 Q100 106 103 97" fill="none" stroke="#cb7d55" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Smile -->
  <path d="M85 114 Q100 128 115 114" fill="none" stroke="#b24b42" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Cheeks -->
  <circle cx="70" cy="106" r="6" fill="#ff7675" opacity="0.4"/>
  <circle cx="130" cy="106" r="6" fill="#ff7675" opacity="0.4"/>
</svg>`;

// 2. Hero Squiggle Divider
const squiggleHeroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <path d="M10 45 C45 10, 65 75, 105 40 C145 5, 165 75, 205 40 C245 5, 270 70, 310 35" stroke="#b678ff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// 3. Footer Squiggle Divider
const squiggleFooterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <path d="M10 40 C45 5, 65 75, 105 38 C145 5, 165 75, 205 38 C245 5, 275 70, 310 40" stroke="#2ad03d" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// 4. Sparkles / Stars
const sparklesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
  <!-- Large Star -->
  <path d="M35 5 L39 20 L54 24 L39 28 L35 43 L31 28 L16 24 L31 20 Z" fill="#ffd32a"/>
  <!-- Small Star -->
  <path d="M12 35 L14 43 L22 45 L14 47 L12 55 L10 47 L2 45 L10 43 Z" fill="#ffd32a" opacity="0.85"/>
</svg>`;

// 5. Ninja Turtle Sticker (childhood memory drawing)
const stickerTmntSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" fill="none">
  <ellipse cx="50" cy="40" rx="36" ry="30" fill="#2ecc71" stroke="#27ae60" stroke-width="2"/>
  <!-- Mask (Purple Donatello mask) -->
  <path d="M15 36 C25 30, 75 30, 85 36 C87 43, 85 48, 85 48 C75 44, 25 44, 15 48 Z" fill="#9b59b6"/>
  <!-- Mask Tails -->
  <path d="M84 42 Q96 46 95 60 Q86 52 82 46 Z" fill="#8e44ad"/>
  <path d="M85 38 Q99 35 98 48 Q88 44 83 40 Z" fill="#9b59b6"/>
  <!-- Eye Holes & White Eyes -->
  <ellipse cx="36" cy="39" rx="8" ry="6" fill="#ffffff"/>
  <ellipse cx="64" cy="39" rx="8" ry="6" fill="#ffffff"/>
  <circle cx="37" cy="39" r="3" fill="#111"/>
  <circle cx="63" cy="39" r="3" fill="#111"/>
  <!-- Turtle Smile -->
  <path d="M38 56 Q50 65 62 56" stroke="#1b5e20" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// 6. Vinyl Record / Headphones sticker (music studio)
const stickerVinylSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="44" fill="#18181b" stroke="#3f3f46" stroke-width="3"/>
  <circle cx="50" cy="50" r="36" fill="none" stroke="#27272a" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#27272a" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="18" fill="#e11d48"/>
  <circle cx="50" cy="50" r="6" fill="#f4f4f5"/>
  <path d="M50 20 A30 30 0 0 1 78 40" stroke="rgba(255,255,255,0.25)" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// 7. 420 Seeds Alien Black T-Shirt
const stickerAlienTeeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <!-- T-shirt Body -->
  <path d="M60 40 L80 40 Q100 55 120 40 L140 40 L175 75 L150 95 L135 80 L135 170 L65 170 L65 80 L50 95 L25 75 Z" fill="#1c1917" stroke="#44403c" stroke-width="3"/>
  <!-- Graphic print -->
  <circle cx="100" cy="105" r="32" fill="#15803d" opacity="0.3"/>
  <path d="M100 80 C86 80, 78 95, 84 112 C90 126, 100 132, 100 132 C100 132, 110 126, 116 112 C122 95, 114 80, 100 80 Z" fill="#22c55e"/>
  <!-- Alien Eyes -->
  <ellipse cx="91" cy="102" rx="6" ry="10" transform="rotate(-20 91 102)" fill="#09090b"/>
  <ellipse cx="109" cy="102" rx="6" ry="10" transform="rotate(20 109 102)" fill="#09090b"/>
  <!-- Lettering -->
  <text x="100" y="68" text-anchor="middle" fill="#4ade80" font-family="'Space Mono', monospace" font-weight="bold" font-size="10">420 TIME</text>
  <text x="100" y="148" text-anchor="middle" fill="#4ade80" font-family="'Space Mono', monospace" font-weight="bold" font-size="9">OUT OF SPACE</text>
</svg>`;

// 8. 420 Seeds Psychedelic Floral White T-shirt
const stickerFlowerTeeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <path d="M60 40 L80 40 Q100 55 120 40 L140 40 L175 75 L150 95 L135 80 L135 170 L65 170 L65 80 L50 95 L25 75 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
  <!-- Psycho Flower Graphic -->
  <circle cx="100" cy="105" r="26" fill="#facc15"/>
  <circle cx="100" cy="105" r="14" fill="#a855f7"/>
  <circle cx="100" cy="74" r="9" fill="#4ade80"/>
  <circle cx="100" cy="136" r="9" fill="#4ade80"/>
  <circle cx="69" cy="105" r="9" fill="#4ade80"/>
  <circle cx="131" cy="105" r="9" fill="#4ade80"/>
  <text x="100" y="109" text-anchor="middle" fill="#ffffff" font-family="'Space Mono', monospace" font-size="8" font-weight="bold">PSYCHO</text>
</svg>`;

// 9. Green Leaf Sticker
const stickerLeafSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <path d="M50 15 C50 15, 68 35, 68 55 C68 70, 58 85, 50 90 C42 85, 32 70, 32 55 C32 35, 50 15, 50 15 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
  <path d="M50 25 L50 85 M50 45 L62 38 M50 55 L38 48 M50 65 L62 58" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

// 10. Seed Pack Boxes
const stickerSeedPackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" fill="none">
  <!-- Box 1 (Pink) -->
  <g transform="rotate(-8 60 50)">
    <rect x="20" y="20" width="50" height="60" rx="4" fill="#ec4899" stroke="#be185d" stroke-width="2"/>
    <rect x="26" y="32" width="38" height="28" rx="2" fill="#fdf2f8"/>
    <text x="45" y="29" text-anchor="middle" fill="#fff" font-family="'Space Mono', monospace" font-size="7" font-weight="bold">420 PACK</text>
    <text x="45" y="48" text-anchor="middle" fill="#be185d" font-family="'Space Mono', monospace" font-size="6" font-weight="bold">GENETICA</text>
  </g>
  <!-- Box 2 (Orange) -->
  <g transform="rotate(10 90 50)">
    <rect x="70" y="20" width="50" height="60" rx="4" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
    <rect x="76" y="32" width="38" height="28" rx="2" fill="#fff7ed"/>
    <text x="95" y="29" text-anchor="middle" fill="#fff" font-family="'Space Mono', monospace" font-size="7" font-weight="bold">420 TIME</text>
    <text x="95" y="48" text-anchor="middle" fill="#c2410c" font-family="'Space Mono', monospace" font-size="6" font-weight="bold">SUMMER</text>
  </g>
</svg>`;

// 11. School DUOC UC Class celebration illustration (Polaroid image)
const photoSchoolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <defs>
    <linearGradient id="skyDuoc" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#86efac"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#skyDuoc)"/>
  <!-- Trees -->
  <circle cx="60" cy="180" r="50" fill="#16a34a" opacity="0.6"/>
  <circle cx="340" cy="180" r="55" fill="#15803d" opacity="0.6"/>
  <rect y="210" width="400" height="90" fill="#4ade80"/>
  <!-- Colored Ribbons in Air -->
  <path d="M80 180 Q100 40 120 20" stroke="#f43f5e" stroke-width="8" stroke-linecap="round"/>
  <path d="M140 190 Q150 50 170 30" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round"/>
  <path d="M200 190 Q210 30 230 15" stroke="#eab308" stroke-width="9" stroke-linecap="round"/>
  <path d="M260 190 Q270 45 285 25" stroke="#a855f7" stroke-width="8" stroke-linecap="round"/>
  <path d="M310 190 Q325 60 340 40" stroke="#ec4899" stroke-width="8" stroke-linecap="round"/>
  <!-- Crowd of Design Students -->
  <g transform="translate(40, 150)">
    <!-- Student bodies -->
    <circle cx="80" cy="40" r="14" fill="#fed7aa"/>
    <rect x="68" y="55" width="24" height="40" rx="6" fill="#3b82f6"/>
    
    <circle cx="120" cy="35" r="14" fill="#fcd34d"/>
    <rect x="108" y="50" width="24" height="45" rx="6" fill="#ec4899"/>
    
    <!-- Henry (with glasses and green hoodie) -->
    <circle cx="160" cy="30" r="16" fill="#fcd5b5"/>
    <rect x="144" y="47" width="32" height="48" rx="8" fill="#10b981"/>
    <!-- Glasses -->
    <rect x="149" y="27" width="10" height="7" rx="2" fill="none" stroke="#111" stroke-width="2"/>
    <rect x="162" y="27" width="10" height="7" rx="2" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Arms raised in celebration -->
    <path d="M144 55 Q130 35 125 20" stroke="#10b981" stroke-width="7" stroke-linecap="round"/>
    <path d="M176 55 Q190 35 195 20" stroke="#10b981" stroke-width="7" stroke-linecap="round"/>

    <circle cx="200" cy="35" r="14" fill="#fbcfe8"/>
    <rect x="188" y="50" width="24" height="45" rx="6" fill="#8b5cf6"/>

    <circle cx="240" cy="40" r="14" fill="#fed7aa"/>
    <rect x="228" y="55" width="24" height="40" rx="6" fill="#f97316"/>
  </g>
</svg>`;

// 12. Mediastream Office Polaroid Photo
const photoMediastreamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#1e293b"/>
  <!-- Office desks & lights -->
  <rect x="30" y="40" width="340" height="20" rx="4" fill="#334155"/>
  <line x1="100" y1="40" x2="100" y2="0" stroke="#64748b" stroke-width="2"/>
  <line x1="300" y1="40" x2="300" y2="0" stroke="#64748b" stroke-width="2"/>
  <!-- Monitors -->
  <rect x="70" y="130" width="70" height="50" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <path d="M80 145 L130 145 M80 155 L110 155" stroke="#38bdf8" stroke-width="2"/>
  <rect x="250" y="125" width="80" height="55" rx="4" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <rect x="20" y="180" width="360" height="90" fill="#475569"/>
  <!-- Team group smiling -->
  <g transform="translate(100, 80)">
    <circle cx="40" cy="40" r="16" fill="#fed7aa"/>
    <rect x="24" y="58" width="32" height="45" rx="6" fill="#0284c7"/>
    <circle cx="100" cy="35" r="18" fill="#fcd5b5"/>
    <rect x="80" y="55" width="40" height="48" rx="8" fill="#0d9488"/>
    <!-- Glasses -->
    <rect x="88" y="32" width="10" height="7" rx="2" fill="none" stroke="#000" stroke-width="2"/>
    <rect x="102" y="32" width="10" height="7" rx="2" fill="none" stroke="#000" stroke-width="2"/>
    <circle cx="160" cy="40" r="16" fill="#fbcfe8"/>
    <rect x="144" y="58" width="32" height="45" rx="6" fill="#e11d48"/>
  </g>
</svg>`;

// 13. Jorlo & Henry Designing at desk
const photoMentorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#0f172a"/>
  <!-- Big screen with wireframes -->
  <rect x="120" y="40" width="220" height="150" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
  <rect x="140" y="60" width="80" height="50" rx="4" fill="#312e81"/>
  <rect x="235" y="60" width="85" height="110" rx="4" fill="#4338ca"/>
  <!-- Henry and Jorlo sitting side by side looking at screen -->
  <circle cx="70" cy="130" r="22" fill="#fcd5b5"/>
  <rect x="42" y="154" width="56" height="70" rx="10" fill="#0284c7"/>
  <!-- Glasses -->
  <rect x="62" y="126" width="11" height="8" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="76" y="126" width="11" height="8" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  
  <circle cx="120" cy="120" r="24" fill="#fed7aa"/>
  <rect x="94" y="146" width="52" height="78" rx="10" fill="#4f46e5"/>
  <!-- Pointing arm -->
  <path d="M140 160 L190 120" stroke="#fed7aa" stroke-width="8" stroke-linecap="round"/>
</svg>`;

// 14. Faisandú Studio Photo
const photoFaisanduSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#2d1b4e"/>
  <!-- Background posters on wall -->
  <rect x="40" y="30" width="70" height="90" rx="2" fill="#a855f7" opacity="0.6"/>
  <rect x="290" y="30" width="70" height="95" rx="2" fill="#06b6d4" opacity="0.6"/>
  <!-- Henry selfie with cap -->
  <circle cx="200" cy="140" r="42" fill="#fcd5b5"/>
  <!-- Cap (Magenta/Violet Snapback) -->
  <path d="M150 125 C150 90, 250 90, 250 125 Z" fill="#ec4899"/>
  <path d="M140 125 Q200 115 265 120 Q240 132 150 132 Z" fill="#db2777"/>
  <!-- Glasses -->
  <rect x="175" y="130" width="20" height="15" rx="4" fill="none" stroke="#111" stroke-width="3"/>
  <rect x="205" y="130" width="20" height="15" rx="4" fill="none" stroke="#111" stroke-width="3"/>
  <line x1="195" y1="137" x2="205" y2="137" stroke="#111" stroke-width="3"/>
  <!-- Smile -->
  <path d="M188 162 Q200 172 212 162" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>
  <!-- Purple Hoodie -->
  <path d="M130 185 C130 170, 160 175, 200 175 C240 175, 270 170, 270 185 L280 270 L120 270 Z" fill="#7c3aed"/>
</svg>`;

// 15. Neutral 2014 Music Festival Poster
const posterNeutralSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320" fill="none">
  <rect width="240" height="320" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="3"/>
  <rect x="15" y="15" width="210" height="290" fill="#fae8ff"/>
  <text x="120" y="55" text-anchor="middle" fill="#86198f" font-family="'Space Mono', monospace" font-size="20" font-weight="900" letter-spacing="2">FESTIVAL</text>
  <text x="120" y="100" text-anchor="middle" fill="#c026d3" font-family="'Space Mono', monospace" font-size="34" font-weight="900">NEU</text>
  <text x="120" y="135" text-anchor="middle" fill="#c026d3" font-family="'Space Mono', monospace" font-size="34" font-weight="900">TRAL</text>
  <text x="120" y="175" text-anchor="middle" fill="#701a75" font-family="'Space Mono', monospace" font-size="28" font-weight="700">2014</text>
  <line x1="30" y1="195" x2="210" y2="195" stroke="#d946ef" stroke-width="2"/>
  <text x="120" y="225" text-anchor="middle" fill="#4a044e" font-family="sans-serif" font-size="11" font-weight="bold">GEPE • PEDRO PIEDRA</text>
  <text x="120" y="245" text-anchor="middle" fill="#4a044e" font-family="sans-serif" font-size="11" font-weight="bold">DËNVER • PREHISTORICOS</text>
  <text x="120" y="265" text-anchor="middle" fill="#4a044e" font-family="sans-serif" font-size="11" font-weight="bold">CONGELADOR • QUEMASUCABEZA</text>
</svg>`;

// 16. Puma Suede Red Sneakers
const sneakerPumaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90" fill="none">
  <path d="M10 65 C20 45, 50 35, 75 35 C90 35, 115 45, 145 50 C155 52, 155 70, 140 70 L10 70 Z" fill="#dc2626"/>
  <!-- Puma Stripe (White) -->
  <path d="M35 55 Q75 45 140 60 Q85 58 45 65 Z" fill="#ffffff"/>
  <!-- Sole -->
  <rect x="8" y="68" width="144" height="12" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>
  <!-- Laces -->
  <line x1="60" y1="38" x2="72" y2="48" stroke="#fff" stroke-width="2.5"/>
  <line x1="68" y1="36" x2="80" y2="46" stroke="#fff" stroke-width="2.5"/>
</svg>`;

// 17. Santander Team Polaroid Photo
const photoSantanderTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#1e1b4b"/>
  <!-- Glass office window -->
  <rect x="20" y="20" width="360" height="260" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <!-- Nicole, Henry, Osman, Tamara -->
  <g transform="translate(50, 70)">
    <!-- Nicole -->
    <circle cx="40" cy="50" r="18" fill="#fed7aa"/>
    <rect x="20" y="70" width="40" height="50" rx="8" fill="#ec4899"/>
    
    <!-- Henry -->
    <circle cx="110" cy="40" r="20" fill="#fcd5b5"/>
    <rect x="86" y="64" width="48" height="56" rx="8" fill="#dc2626"/>
    <rect x="98" y="36" width="10" height="7" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
    <rect x="112" y="36" width="10" height="7" rx="2" fill="none" stroke="#fff" stroke-width="2"/>

    <!-- Osman -->
    <circle cx="185" cy="42" r="19" fill="#fbcfe8"/>
    <rect x="162" y="65" width="46" height="55" rx="8" fill="#2563eb"/>

    <!-- Tamara -->
    <circle cx="255" cy="48" r="18" fill="#fde047"/>
    <rect x="235" y="70" width="40" height="50" rx="8" fill="#10b981"/>
  </g>
</svg>`;

// 18. Santander Banking iPhone 3D Mockup
const mockupIphoneSantanderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 460" fill="none">
  <!-- Phone Frame -->
  <rect x="10" y="10" width="220" height="440" rx="36" fill="#18181b" stroke="#3f3f46" stroke-width="5"/>
  <!-- Screen Area -->
  <rect x="18" y="18" width="204" height="424" rx="28" fill="#09090b"/>
  <!-- Dynamic Island Notch -->
  <rect x="80" y="26" width="80" height="18" rx="9" fill="#000000"/>
  <!-- Santander Red Header Bar -->
  <rect x="18" y="55" width="204" height="70" fill="#dc2626"/>
  <text x="35" y="85" fill="#ffffff" font-family="'Space Mono', monospace" font-size="12" font-weight="bold">Santander</text>
  <circle cx="195" cy="80" r="12" fill="rgba(255,255,255,0.2)"/>
  <!-- Account Card Widget -->
  <rect x="30" y="105" width="180" height="90" rx="14" fill="#27272a" stroke="#3f3f46" stroke-width="1.5"/>
  <text x="45" y="130" fill="#a1a1aa" font-family="sans-serif" font-size="10">Cuenta Corriente</text>
  <text x="45" y="155" fill="#ffffff" font-family="'Space Mono', monospace" font-size="16" font-weight="bold">$5.420.520</text>
  <text x="45" y="178" fill="#4ade80" font-family="sans-serif" font-size="9">● Saldo disponible</text>
  <!-- Fast Action Circles -->
  <g transform="translate(30, 210)">
    <circle cx="20" cy="20" r="18" fill="#3f3f46"/>
    <text x="20" y="24" text-anchor="middle" fill="#fff" font-size="12">⇄</text>
    <circle cx="65" cy="20" r="18" fill="#3f3f46"/>
    <text x="65" y="24" text-anchor="middle" fill="#fff" font-size="12">$</text>
    <circle cx="110" cy="20" r="18" fill="#3f3f46"/>
    <text x="110" y="24" text-anchor="middle" fill="#fff" font-size="12">💳</text>
    <circle cx="155" cy="20" r="18" fill="#3f3f46"/>
    <text x="155" y="24" text-anchor="middle" fill="#fff" font-size="12">⚙</text>
  </g>
  <!-- Recent Activity list -->
  <rect x="30" y="265" width="180" height="150" rx="12" fill="#18181b"/>
  <text x="45" y="290" fill="#e4e4e7" font-family="sans-serif" font-size="11" font-weight="bold">Movimientos</text>
  <line x1="45" y1="305" x2="195" y2="305" stroke="#27272a"/>
  <text x="45" y="330" fill="#a1a1aa" font-size="10">Supermercado</text>
  <text x="195" y="330" text-anchor="end" fill="#f87171" font-size="10" font-weight="bold">-$34.990</text>
  <line x1="45" y1="345" x2="195" y2="345" stroke="#27272a"/>
  <text x="45" y="370" fill="#a1a1aa" font-size="10">Transferencia Recibida</text>
  <text x="195" y="370" text-anchor="end" fill="#4ade80" font-size="10" font-weight="bold">+$120.000</text>
</svg>`;

// 19. Santander Wireframe Sketchbook
const sketchbookSantanderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 260" fill="none">
  <!-- Spiral Wire Notebook -->
  <rect x="25" y="10" width="300" height="240" rx="8" fill="#f5f5f4" stroke="#d6d3d1" stroke-width="2"/>
  <!-- Wire Rings -->
  ${Array.from({length: 12}).map((_, i) => `<rect x="15" y="${25 + i * 18}" width="22" height="8" rx="4" fill="#78716c"/>`).join('')}
  <!-- Grid paper background -->
  <line x1="45" y1="50" x2="310" y2="50" stroke="#e7e5e4" stroke-width="1.5"/>
  <line x1="45" y1="90" x2="310" y2="90" stroke="#e7e5e4" stroke-width="1.5"/>
  <line x1="45" y1="130" x2="310" y2="130" stroke="#e7e5e4" stroke-width="1.5"/>
  <line x1="45" y1="170" x2="310" y2="170" stroke="#e7e5e4" stroke-width="1.5"/>
  <line x1="45" y1="210" x2="310" y2="210" stroke="#e7e5e4" stroke-width="1.5"/>
  <!-- Hand-sketched Phone UI -->
  <rect x="70" y="45" width="80" height="150" rx="8" fill="none" stroke="#292524" stroke-width="2.5" stroke-dasharray="3 1"/>
  <rect x="80" y="60" width="60" height="25" rx="4" fill="none" stroke="#292524" stroke-width="2"/>
  <line x1="80" y1="100" x2="140" y2="100" stroke="#292524" stroke-width="2"/>
  <line x1="80" y1="120" x2="140" y2="120" stroke="#292524" stroke-width="2"/>
  <circle cx="110" cy="160" r="14" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <!-- Notes and Annotations -->
  <text x="175" y="70" fill="#44403c" font-family="'Caveat', cursive" font-size="18" font-weight="bold">App Design System</text>
  <text x="175" y="105" fill="#0284c7" font-family="'Caveat', cursive" font-size="15">→ Atomic buttons</text>
  <text x="175" y="130" fill="#0284c7" font-family="'Caveat', cursive" font-size="15">→ Tokenized colors</text>
  <text x="175" y="155" fill="#0284c7" font-family="'Caveat', cursive" font-size="15">→ Handoff to dev</text>
</svg>`;

// 20. Sura Team GOT Polaroid Photo
const photoSuraTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#0284c7"/>
  <!-- Team photo -->
  <rect x="20" y="20" width="360" height="260" rx="8" fill="#0369a1"/>
  <g transform="translate(60, 80)">
    <circle cx="40" cy="40" r="18" fill="#fed7aa"/>
    <rect x="22" y="60" width="36" height="50" rx="6" fill="#0f172a"/>
    <circle cx="100" cy="35" r="20" fill="#fcd5b5"/>
    <rect x="78" y="58" width="44" height="52" rx="8" fill="#0284c7"/>
    <circle cx="160" cy="38" r="19" fill="#fbcfe8"/>
    <rect x="140" y="60" width="40" height="50" rx="6" fill="#3b82f6"/>
    <circle cx="220" cy="40" r="18" fill="#fed7aa"/>
    <rect x="202" y="60" width="36" height="50" rx="6" fill="#f59e0b"/>
  </g>
</svg>`;

// 21. Sura Digital Transformation Collaborative Sketchbook & Interactive System
const sketchbookSuraSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 380" fill="none">
  <!-- Open Large Notebook Canvas -->
  <rect x="15" y="15" width="390" height="350" rx="12" fill="#fafafa" stroke="#e5e5e5" stroke-width="2"/>
  <!-- Center Book Spine fold -->
  <line x1="210" y1="15" x2="210" y2="365" stroke="#d4d4d4" stroke-width="3"/>

  <!-- Left Page: Wireframes & Metrics Charts -->
  <rect x="35" y="45" width="155" height="110" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M45 120 Q70 80 100 95 T150 65 T180 75" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round"/>
  <circle cx="100" cy="95" r="4" fill="#0ea5e9"/>
  <circle cx="150" cy="65" r="4" fill="#0ea5e9"/>
  <text x="45" y="65" fill="#64748b" font-family="'Space Mono', monospace" font-size="9" font-weight="bold">ONLINE SALES</text>

  <!-- Right Page: Interactive UI Elements -->
  <!-- Wireframe Card 1 -->
  <rect x="230" y="45" width="155" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="250" cy="70" r="12" fill="#e2e8f0"/>
  <line x1="270" y1="65" x2="360" y2="65" stroke="#94a3b8" stroke-width="3"/>
  <line x1="270" y1="75" x2="330" y2="75" stroke="#cbd5e1" stroke-width="2"/>

  <!-- Switch UI Component -->
  <g transform="translate(145, 235)">
    <rect x="0" y="0" width="46" height="24" rx="12" fill="#22c55e"/>
    <circle cx="34" cy="12" r="9" fill="#ffffff"/>
  </g>

  <!-- Primary Button Component -->
  <g transform="translate(90, 275)">
    <rect x="0" y="0" width="110" height="34" rx="8" fill="#0284c7"/>
    <text x="55" y="22" text-anchor="middle" fill="#ffffff" font-family="'DM Sans', sans-serif" font-weight="bold" font-size="14">Button</text>
  </g>

  <!-- Floating Sticky Notes on Sketchbook -->
  <g transform="translate(30, 175) rotate(-6)">
    <rect x="0" y="0" width="55" height="50" rx="3" fill="#fef08a" stroke="#fde047"/>
    <text x="8" y="22" fill="#713f12" font-family="'Caveat', cursive" font-size="12" font-weight="bold">Online</text>
    <text x="8" y="38" fill="#713f12" font-family="'Caveat', cursive" font-size="12" font-weight="bold">Sales</text>
  </g>

  <g transform="translate(330, 60) rotate(8)">
    <rect x="0" y="0" width="60" height="50" rx="3" fill="#86efac" stroke="#4ade80"/>
    <text x="8" y="20" fill="#14532d" font-family="'Caveat', cursive" font-size="11" font-weight="bold">Design</text>
    <text x="8" y="34" fill="#14532d" font-family="'Caveat', cursive" font-size="11" font-weight="bold">System</text>
  </g>

  <g transform="translate(340, 160) rotate(-5)">
    <rect x="0" y="0" width="62" height="50" rx="3" fill="#fbcfe8" stroke="#f472b6"/>
    <text x="8" y="22" fill="#831843" font-family="'Caveat', cursive" font-size="11" font-weight="bold">Figma</text>
    <text x="8" y="36" fill="#831843" font-family="'Caveat', cursive" font-size="11" font-weight="bold">Tokens</text>
  </g>
</svg>`;

// 22. MADA UC 2019 Master of Design Polaroid
const photoMadaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#18181b"/>
  <!-- Classroom / Studio -->
  <rect x="20" y="30" width="360" height="240" rx="6" fill="#27272a"/>
  <text x="200" y="70" text-anchor="middle" fill="#a1a1aa" font-family="'Space Mono', monospace" font-size="14" font-weight="bold">MASTER OF DESIGN • 2019</text>
  <!-- Class Group -->
  <g transform="translate(60, 90)">
    <circle cx="30" cy="40" r="16" fill="#fed7aa"/>
    <rect x="14" y="58" width="32" height="45" rx="6" fill="#3b82f6"/>
    
    <circle cx="85" cy="35" r="17" fill="#fcd5b5"/>
    <rect x="68" y="54" width="34" height="48" rx="6" fill="#8b5cf6"/>
    
    <!-- Henry with glasses -->
    <circle cx="140" cy="32" r="18" fill="#fcd5b5"/>
    <rect x="122" y="52" width="36" height="50" rx="6" fill="#10b981"/>
    <rect x="131" y="29" width="9" height="7" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
    <rect x="143" y="29" width="9" height="7" rx="2" fill="none" stroke="#fff" stroke-width="2"/>

    <circle cx="195" cy="36" r="17" fill="#fde047"/>
    <rect x="178" y="55" width="34" height="48" rx="6" fill="#ef4444"/>

    <circle cx="250" cy="40" r="16" fill="#fed7aa"/>
    <rect x="234" y="58" width="32" height="45" rx="6" fill="#06b6d4"/>
  </g>
</svg>`;

// 23. US Flag Badge
const stickerUsaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
  <circle cx="30" cy="30" r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <clipPath id="circleClip">
    <circle cx="30" cy="30" r="28"/>
  </clipPath>
  <g clip-path="url(#circleClip)">
    <!-- Red and white stripes -->
    ${Array.from({length: 9}).map((_, i) => `<rect x="0" y="${i * 7}" width="60" height="3.5" fill="#dc2626"/>`).join('')}
    <!-- Blue canton -->
    <rect x="0" y="0" width="28" height="28" fill="#1d4ed8"/>
    <!-- Stars -->
    <circle cx="8" cy="8" r="2" fill="#fff"/>
    <circle cx="20" cy="8" r="2" fill="#fff"/>
    <circle cx="14" cy="14" r="2" fill="#fff"/>
    <circle cx="8" cy="20" r="2" fill="#fff"/>
    <circle cx="20" cy="20" r="2" fill="#fff"/>
  </g>
</svg>`;

// 24. South of Chile Lake landscape
const photoChileLakeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 400" fill="none">
  <defs>
    <linearGradient id="skyChile" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#22c55e"/>
    </linearGradient>
  </defs>
  <rect width="340" height="400" fill="url(#skyChile)"/>
  <!-- Mountain peaks -->
  <polygon points="40,160 120,70 190,160" fill="#475569"/>
  <polygon points="120,70 140,95 105,95" fill="#f8fafc"/>
  <polygon points="150,170 230,60 310,170" fill="#334155"/>
  <polygon points="230,60 250,85 210,85" fill="#f8fafc"/>
  <!-- Ancient native rainforest trees -->
  <circle cx="50" cy="180" r="45" fill="#15803d"/>
  <circle cx="120" cy="175" r="50" fill="#166534"/>
  <circle cx="200" cy="180" r="48" fill="#15803d"/>
  <circle cx="280" cy="175" r="55" fill="#14532d"/>
  <!-- Lake Reflection & Water -->
  <rect y="210" width="340" height="190" fill="#0284c7"/>
  <ellipse cx="170" cy="240" rx="140" ry="15" fill="#0369a1" opacity="0.5"/>
  <ellipse cx="170" cy="300" rx="160" ry="20" fill="#075985" opacity="0.6"/>
</svg>`;

// 25. South of Chile Rainforest Walkway
const photoChileWalkwaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 400" fill="none">
  <rect width="340" height="400" fill="#064e3b"/>
  <!-- Lush rainforest canopy -->
  <circle cx="70" cy="60" r="70" fill="#047857"/>
  <circle cx="260" cy="60" r="75" fill="#065f46"/>
  <circle cx="160" cy="80" r="60" fill="#059669"/>
  <circle cx="40" cy="200" r="60" fill="#047857"/>
  <circle cx="300" cy="210" r="65" fill="#065f46"/>
  <!-- Wooden boardwalk path curving down -->
  <path d="M160 160 Q170 240 130 400 L240 400 Q200 240 180 160 Z" fill="#b45309"/>
  ${Array.from({length: 10}).map((_, i) => `<line x1="${155 - i * 3}" y1="${180 + i * 22}" x2="${185 + i * 6}" y2="${180 + i * 22}" stroke="#78350f" stroke-width="4"/>`).join('')}
  <!-- Mari walking on boardwalk in pink jacket -->
  <circle cx="170" cy="230" r="10" fill="#fed7aa"/>
  <rect x="162" y="240" width="16" height="24" rx="4" fill="#ec4899"/>
</svg>`;

// 26. Kittens Polaroids (Tuxedo, Tabby, Calico)
const catTuxedoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" fill="none">
  <circle cx="80" cy="80" r="76" fill="#18181b"/>
  <!-- Ears -->
  <polygon points="35,60 50,20 70,50" fill="#18181b"/>
  <polygon points="40,55 50,28 64,48" fill="#f472b6"/>
  <polygon points="125,60 110,20 90,50" fill="#18181b"/>
  <polygon points="120,55 110,28 96,48" fill="#f472b6"/>
  <!-- Face & White Mask -->
  <circle cx="80" cy="88" r="48" fill="#18181b"/>
  <path d="M80 65 L60 130 L100 130 Z" fill="#ffffff"/>
  <!-- Eyes -->
  <ellipse cx="62" cy="82" rx="9" ry="12" fill="#a3e635"/>
  <ellipse cx="98" cy="82" rx="9" ry="12" fill="#a3e635"/>
  <ellipse cx="62" cy="82" rx="4" ry="10" fill="#111827"/>
  <ellipse cx="98" cy="82" rx="4" ry="10" fill="#111827"/>
  <!-- Pink Nose & Whiskers -->
  <polygon points="76,104 84,104 80,109" fill="#f472b6"/>
  <line x1="40" y1="106" x2="68" y2="106" stroke="#e4e4e7" stroke-width="2"/>
  <line x1="120" y1="106" x2="92" y2="106" stroke="#e4e4e7" stroke-width="2"/>
</svg>`;

const catTabbySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" fill="none">
  <circle cx="80" cy="80" r="76" fill="#78350f"/>
  <!-- Ears -->
  <polygon points="35,60 50,20 70,50" fill="#92400e"/>
  <polygon points="40,55 50,28 64,48" fill="#f472b6"/>
  <polygon points="125,60 110,20 90,50" fill="#92400e"/>
  <polygon points="120,55 110,28 96,48" fill="#f472b6"/>
  <!-- Tabby Stripes -->
  <circle cx="80" cy="88" r="48" fill="#b45309"/>
  <line x1="80" y1="46" x2="80" y2="65" stroke="#451a03" stroke-width="4"/>
  <line x1="68" y1="52" x2="72" y2="68" stroke="#451a03" stroke-width="3"/>
  <line x1="92" y1="52" x2="88" y2="68" stroke="#451a03" stroke-width="3"/>
  <!-- Eyes -->
  <ellipse cx="62" cy="82" rx="9" ry="12" fill="#fbbf24"/>
  <ellipse cx="98" cy="82" rx="9" ry="12" fill="#fbbf24"/>
  <ellipse cx="62" cy="82" rx="4" ry="10" fill="#111827"/>
  <ellipse cx="98" cy="82" rx="4" ry="10" fill="#111827"/>
  <!-- Nose & Whiskers -->
  <polygon points="76,104 84,104 80,109" fill="#f472b6"/>
  <line x1="40" y1="106" x2="68" y2="106" stroke="#fde68a" stroke-width="2"/>
  <line x1="120" y1="106" x2="92" y2="106" stroke="#fde68a" stroke-width="2"/>
</svg>`;

const catCalicoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" fill="none">
  <circle cx="80" cy="80" r="76" fill="#f8fafc"/>
  <!-- Ears -->
  <polygon points="35,60 50,20 70,50" fill="#ea580c"/>
  <polygon points="40,55 50,28 64,48" fill="#f472b6"/>
  <polygon points="125,60 110,20 90,50" fill="#1e293b"/>
  <polygon points="120,55 110,28 96,48" fill="#f472b6"/>
  <!-- Calico patches -->
  <circle cx="80" cy="88" r="48" fill="#ffffff"/>
  <path d="M40 70 Q60 50 75 75 Q60 100 40 85 Z" fill="#ea580c"/>
  <path d="M120 70 Q100 50 85 75 Q100 100 120 85 Z" fill="#1e293b"/>
  <!-- Eyes -->
  <ellipse cx="62" cy="82" rx="9" ry="12" fill="#38bdf8"/>
  <ellipse cx="98" cy="82" rx="9" ry="12" fill="#38bdf8"/>
  <ellipse cx="62" cy="82" rx="4" ry="10" fill="#111827"/>
  <ellipse cx="98" cy="82" rx="4" ry="10" fill="#111827"/>
  <!-- Nose & Whiskers -->
  <polygon points="76,104 84,104 80,109" fill="#f472b6"/>
  <line x1="40" y1="106" x2="68" y2="106" stroke="#94a3b8" stroke-width="2"/>
  <line x1="120" y1="106" x2="92" y2="106" stroke="#94a3b8" stroke-width="2"/>
</svg>`;

// 27. Social Icons (LinkedIn, Notion)
const iconLinkedInSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="10" fill="#0a66c2"/>
  <path d="M15 19 H21 V35 H15 Z M18 13 A3.5 3.5 0 1 0 18 20 A3.5 3.5 0 1 0 18 13 Z M25 19 H31 V21.5 C32 20 34 18.5 37 18.5 C42 18.5 44 21.5 44 27 V35 H38 V28 C38 25 36.5 24 34.5 24 C32.5 24 31 25.5 31 28 V35 H25 Z" fill="#ffffff"/>
</svg>`;

const iconNotionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="10" fill="#ffffff"/>
  <path d="M13 14 L30 11 L35 14 L35 34 L31 37 L16 37 L13 34 Z" fill="#ffffff" stroke="#111" stroke-width="2.5"/>
  <path d="M18 18 L25 17 L30 26 L30 18 L33 18 L33 30 L27 31 L21 21 L21 30 L18 30 Z" fill="#111"/>
</svg>`;

// Map of all assets
const assets = {
  'avatar.svg': avatarSvg,
  'squiggle-hero.svg': squiggleHeroSvg,
  'squiggle-footer.svg': squiggleFooterSvg,
  'sparkles.svg': sparklesSvg,
  'sticker-tmnt.svg': stickerTmntSvg,
  'sticker-vinyl.svg': stickerVinylSvg,
  'sticker-alien-tee.svg': stickerAlienTeeSvg,
  'sticker-flower-tee.svg': stickerFlowerTeeSvg,
  'sticker-leaf.svg': stickerLeafSvg,
  'sticker-seed-pack.svg': stickerSeedPackSvg,
  'photo-school.svg': photoSchoolSvg,
  'photo-mediastream.svg': photoMediastreamSvg,
  'photo-mentor.svg': photoMentorSvg,
  'photo-faisandu.svg': photoFaisanduSvg,
  'poster-neutral.svg': posterNeutralSvg,
  'sneaker-puma.svg': sneakerPumaSvg,
  'photo-santander-team.svg': photoSantanderTeamSvg,
  'mockup-iphone-santander.svg': mockupIphoneSantanderSvg,
  'sketchbook-santander.svg': sketchbookSantanderSvg,
  'photo-sura-team.svg': photoSuraTeamSvg,
  'sketchbook-sura.svg': sketchbookSuraSvg,
  'photo-mada.svg': photoMadaSvg,
  'sticker-usa.svg': stickerUsaSvg,
  'photo-chile-lake.svg': photoChileLakeSvg,
  'photo-chile-walkway.svg': photoChileWalkwaySvg,
  'cat-tuxedo.svg': catTuxedoSvg,
  'cat-tabby.svg': catTabbySvg,
  'cat-calico.svg': catCalicoSvg,
  'icon-linkedin.svg': iconLinkedInSvg,
  'icon-notion.svg': iconNotionSvg,
};

Object.entries(assets).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(assetsDir, filename), content.trim());
  console.log('Created asset:', filename);
});

console.log('All assets created successfully!');
