# 🎨 Henry — Interactive Designer Portfolio

An interactive, dark-themed, playful design journey portfolio built for the **CodSoft Web Development Internship**. Featuring handcrafted vector illustrations, 3D Polaroid tilt interactions, interactive skill filtering, case studies lightbox, particle sparkles, one-click email copying, and responsive design for all screen resolutions.

---

## ✨ Features

- **📖 Story-Driven Design Journey**: Chronological storytelling spanning across career milestones (School Duoc UC, Mediastream, 420seeds, Faisandú Studio, Santander Digital Banking, Sura Online Transformation, and Today in the south of Chile).
- **🖼️ 3D Polaroid Hover & Lightbox Modal**: Organic 3D perspective tilt effect on cursor movement, with full-screen zoom lightbox on click.
- **🏷️ Interactive Skill Tag Filter**: Clicking any skill chip (*Design Strategy, Code, Design System, UX, UI, Motion*) dynamically highlights and scales the corresponding journey chapters.
- **📋 One-Click Email Copy with Toast**: Click the contact bar to instantly copy the email address (`henry92@gmail.com`) to the clipboard with an animated checkmark toast notification.
- **📂 Featured Case Studies Modal**: In-app preview drawer for design system and UX case studies.
- **✨ Playful Micro-interactions & Easter Eggs**: Wiggling stickers, floating particle bursts, ambient background glows, and sound pops.
- **📱 100% Fluid Responsive Design**: Seamless layout across mobile (320px+), tablet (768px), desktop (1024px+), and ultra-wide screens.
- **⚡ Zero External Heavy Dependencies**: Fast, lightweight vanilla HTML5, modern CSS3 (Grid & Flexbox), and modular JavaScript.

---

## 🗂️ Project Structure

```text
Portfolio/
├── assets/                          # Handcrafted high-resolution vector artwork & illustrations
│   ├── avatar.svg                   # 3D Designer Memoji with purple ambient glow
│   ├── squiggle-hero.svg            # Hero hand-drawn wavy divider
│   ├── squiggle-footer.svg          # Footer green wavy divider
│   ├── photo-school.svg             # School (DUOC UC 2006) polaroid illustration
│   ├── photo-mediastream.svg        # Mediastream office team polaroid
│   ├── photo-mentor.svg             # Designing with mentor Jorlo polaroid
│   ├── sticker-alien-tee.svg        # 420seeds Alien graphic tee ("420 Time Out of Space")
│   ├── sticker-flower-tee.svg       # Psychedelic floral graphic tee
│   ├── photo-faisandu.svg           # Faisandú Studio HQ polaroid
│   ├── poster-neutral.svg           # Neutral 2014 Music Festival poster
│   ├── sneaker-puma.svg             # Puma Suede red sneaker illustration
│   ├── photo-santander-team.svg     # Santander design team polaroid
│   ├── mockup-iphone-santander.svg  # 3D perspective Santander mobile banking app mockup
│   ├── sketchbook-santander.svg     # Wireframe sketchbook illustration
│   ├── photo-sura-team.svg          # Team GOT polaroid
│   ├── sketchbook-sura.svg          # Collaborative design system canvas with teammate cursors
│   ├── photo-mada.svg               # MADA UC 2019 Master of Design polaroid
│   ├── photo-chile-lake.svg         # South of Chile pristine lake polaroid
│   ├── photo-chile-walkway.svg      # Mari walking in rainforest walkway polaroid
│   ├── cat-tuxedo.svg               # Oreo the kitten polaroid
│   ├── cat-tabby.svg                # Mochi the kitten polaroid
│   ├── cat-calico.svg               # Luna the kitten polaroid
│   ├── sticker-tmnt.svg             # Ninja Turtle doodle sticker
│   ├── sticker-usa.svg              # US Flag sticker badge
│   ├── icon-linkedin.svg            # LinkedIn social icon
│   └── icon-notion.svg              # Notion case studies icon
├── scripts/
│   └── main.js                      # Core interactive logic (Filters, Lightbox, Tilt, Toast, Easter eggs)
├── global.css                       # Modern CSS Grid/Flexbox layout, tokens, Polaroid 3D & media queries
├── index.css                        # Smooth entrance animations, custom scrollbar & accessibility styles
├── index.html                       # Semantic HTML5 markup with SEO & Google Fonts
├── build-assets.js                  # Automated SVG vector asset generator
├── server.js                        # Zero-dependency local development static server
├── package.json                     # Project manifest and npm run scripts
└── README.md                        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended) or any static web browser / live server.

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eleshkapri/Portfolio.git
   cd Portfolio
   ```

2. **Start the local development server**:
   ```bash
   npm start
   ```
   *(or run `node server.js`)*

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Built With

- **HTML5**: Semantic tags, accessibility attributes, and SEO meta tags.
- **CSS3**: Custom properties, Grid, Flexbox, perspective transforms, keyframe animations, glassmorphism, and responsive breakpoints.
- **JavaScript (ES6+)**: Custom DOM controllers, Web Audio API, Clipboard API, and interactive event handlers.
- **Google Fonts**: [Space Mono](https://fonts.google.com/specimen/Space+Mono), [DM Sans](https://fonts.google.com/specimen/DM+Sans), and [Caveat](https://fonts.google.com/specimen/Caveat).

---

## 👨‍💻 Author & Credits

- Created for **CodSoft Web Development Internship**
- Developed with dedication by **Elesh Kapri**
- Inspired by the iconic Henry Designer Journey storytelling aesthetic
