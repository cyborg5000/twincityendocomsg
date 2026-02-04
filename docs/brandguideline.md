# Twin City Endodontics - Brand Guidelines

> **Official Brand Guideline PDF:** [brand-guideline-official.pdf](./brand-guideline-official.pdf)

*This document supplements the official brand guideline PDF with implementation details for the website.*

---

## 🎨 Official Brand Fonts

Based on the official brand guideline PDF:

| Font Name | Usage | Website Alternative |
|-----------|--------|---------------------|
| **Gopher** | Body text, paragraphs | **Open Sans** (closest match) |
| **Gopher Light** | Light body text | Open Sans Light (300) |
| **Gopher Medium** | Subtitles, emphasis | Open Sans SemiBold (600) |
| **Freight Disp Pro Bold** | Headlines, H1-H2 | **Montserrat Bold** (700) |
| **Freight Disp Pro** | Subheadings, H3-H4 | Montserrat SemiBold (600) |

### Font Weights Used in Brand

| Weight | Font | Usage |
|--------|------|-------|
| **Regular (400)** | Gopher | Body text |
| **Light (300)** | Gopher Light | Captions, fine print |
| **Medium (500)** | Gopher Medium | Emphasis, labels |
| **Regular (400)** | Freight Disp Pro | Subheadings |
| **Bold (700)** | Freight Disp Pro Bold | Main headings, CTAs |

## 🎨 Brand Overview

**Brand Name:** Twin City Endodontics Pte Ltd  
**Website:** https://twincityendo.com.sg  
**Tagline:** Expert Endodontic Care in Singapore  
**Established:** 2008  

---

## 🎨 Color Palette

### Primary Colors

| Color | Hex | RGB | CMYK | Usage |
|-------|-----|-----|------|-------|
| **Deep Teal** | `#2D5B5F` | 45, 91, 95 | 51, 0, 0, 63 | Main brand color, headers, CTAs, navigation |
| **Accent Gold** | `#BCA868` | 188, 168, 104 | 0, 11, 45, 26 | Highlights, buttons, icons, decorative elements |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Light Teal** | `#4A7A7F` | Hover states, active links |
| **Dark Gold** | `#9A8A48` | Hover states, borders |
| **Cream White** | `#FAFBFC` | Backgrounds, cards |
| **Text Dark** | `#1A2E33` | Body text, headings |
| **Text Light** | `#6B7D82` | Subtitles, captions |

### Color Usage Guidelines

#### DO ✓
- Use Deep Teal as the dominant brand color
- Use Gold for accents and calls-to-action
- Maintain 60-30-10 ratio (60% neutral, 30% primary, 10% accent)
- Use cream white backgrounds for warmth

#### DON'T ✗
- Don't use black (`#000000`) as primary text color
- Don't use gold as background color
- Don't mix with clashing colors (red, bright orange, pink)
- Don't use gradients that compete with brand colors

---

## 🌊 Gradient Guidelines

### Approved Gradients

| Type | CSS | Usage |
|------|-----|-------|
| **Subtle Teal** | `linear-gradient(135deg, #2D5B5F 0%, #4A7A7F 100%)` | Hero sections, buttons |
| **Warm Gold** | `linear-gradient(135deg, #BCA868 0%, #9A8A48 100%)` | Highlights, icons |
| **Background** | `linear-gradient(180deg, #FAFBFC 0%, #F0F4F5 100%)` | Section backgrounds |

### Gradient Usage

- **Hero Sections:** Use subtle teal gradient from top-left to bottom-right
- **Buttons:** Use gold gradient for primary CTAs
- **Cards:** Use light background gradient for depth
- **Icons:** Gold gradient on teal backgrounds

---

## 📸 Imagery Guidelines

### Photography Style

| Element | Guideline |
|---------|-----------|
| **Mood** | Professional, warm, welcoming, trustworthy |
| **Lighting** | Soft, natural light (avoid harsh shadows) |
| **Colors** | Warm tones that complement brand colors |
| **Composition** | Clean, uncluttered, patient-centered |
| **People** | Diverse patients and staff (happy, not staged) |
| **Equipment** | Modern dental technology (Zeiss microscopes, CBCT) |

### Approved Images

| Image | Source | Usage |
|-------|--------|-------|
| Hero Image | `/images/190123-3226-CP-811-080319-s.png` | Homepage hero section |
| Our Doctors | `/images/Our-Doctors.png` | Doctors page banner |
| Microscope | `/images/Dr-Renee-Mircoscope-3.jpg` | Equipment showcase |
| Team Photos | Download from website | About/team sections |

### Image Specifications

| Type | Dimensions | Format | Max Size |
|------|------------|--------|----------|
| Hero Images | 1920x600px | PNG/JPG | 500KB |
| Doctor Photos | 800x800px | PNG/JPG | 200KB |
| Icons | 64x64px | SVG/PNG | 50KB |
| Backgrounds | 1920x1080px | PNG/JPG | 400KB |

### Imagery DON'Ts ✗

- Don't use stock photos that look fake or staged
- Don't use images with bright white backgrounds
- Don't use images with red/orange accents
- Don't use blurry or low-quality images
- Don't use watermarked images

---

## 🔤 Typography

### Primary Typeface

**Brand Fonts (from official PDF):**
- **Gopher** - Primary body font
- **Freight Display Pro** - Primary display/heading font

**Website Implementation:**

| Element | Font | Weight | Size | Color |
|---------|------|--------|------|-------|
| **H1 - Main Headings** | Montserrat (替代 Freight Disp Pro Bold) | 700 | 48-64px | `#2D5B5F` |
| **H2 - Section Headings** | Montserrat (替代 Freight Disp Pro) | 700 | 32-40px | `#2D5B5F` |
| **H3 - Subheadings** | Montserrat (替代 Freight Disp Pro) | 600 | 24-28px | `#2D5B5F` |
| **Body Text** | Open Sans (替代 Gopher) | 400 | 16px | `#1A2E33` |
| **Body Text Light** | Open Sans (替代 Gopher Light) | 300 | 14px | `#6B7D82` |
| **Captions** | Open Sans | 400 | 12-14px | `#6B7D82` |
| **Buttons** | Montserrat | 600 | 16px | White |

### Typography Scale

| Element | Font Size | Line Height | Letter Spacing |
|---------|-----------|-------------|----------------|
| H1 | 48-64px | 1.1 | -0.02em |
| H2 | 32-40px | 1.2 | -0.02em |
| H3 | 24-28px | 1.3 | -0.01em |
| Body | 16px | 1.6 | 0em |
| Small | 14px | 1.5 | 0em |

### Font Usage Examples

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #2D5B5F;
}

/* Body text */
p, li, span, a, body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #1A2E33;
}
```

---

## 🎯 Tone of Voice

### Brand Personality

| Attribute | Description |
|-----------|-------------|
| **Professional** | Expert knowledge, trusted authority |
| **Welcoming** | Warm, approachable, reassuring |
| **Caring** | Empathetic, patient-focused |
| **Modern** | Up-to-date technology, innovative |
| **Singapore** | Local, understanding of community needs |

### Writing Guidelines

#### DO ✓
- Use clear, simple language (avoid dental jargon)
- Be reassuring and calming (dental anxiety is common)
- Use "you" and "your" to address patients
- Highlight expertise and technology
- Include local context (Ngee Ann City, Forum Shopping Mall)
- Be specific about services (root canal, retreatments, surgery)

#### DON'T ✗
- Don't use overly clinical or scary language
- Don't use fear-based marketing
- Don't make false promises
- Don't use overly casual or slang language
- Don't write in all caps or use excessive exclamation marks

### Sample Copy

| Context | Before | After |
|---------|--------|-------|
| Hero | "Best Root Canal Treatment in Singapore" | "Expert Endodontic Care in Singapore" |
| Services | "Painful dental procedures" | "Gentle root canal treatment" |
| Doctors | "Our highly skilled dentists" | "Our team of seven endodontists" |
| Location | "We have clinics" | "Conveniently located at Ngee Ann City and Forum Shopping Mall" |
| Technology | "We use fancy equipment" | "Full range of Zeiss microscopes and CBCT 3D imaging" |

### Key Messages

1. **Expertise:** 7 endodontists with international training
2. **Technology:** Advanced Zeiss microscopes and CBCT imaging
3. **Experience:** Since 2008, trusted by thousands of patients
4. **Convenience:** Two locations (Ngee Ann City & Forum)
5. **Care:** Gentle, patient-focused approach

---

## 📋 Application Examples

### Website

```css
:root {
  --primary: #2D5B5F;
  --accent: #BCA868;
  --text-dark: #1A2E33;
  --text-light: #6B7D82;
  --background: #FAFBFC;
  --gradient-primary: linear-gradient(135deg, #2D5B5F 0%, #4A7A7F 100%);
  --gradient-accent: linear-gradient(135deg, #BCA868 0%, #9A8A48 100%);
}
```

### Button Styles

```css
/* Primary Button */
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 12px 24px;
  border-radius: 8px;
}

/* Gold Accent */
.btn-accent {
  background: var(--gradient-accent);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}
```

### Card Component

```css
.card {
  background: white;
  border: 1px solid #E8ECED;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(45, 91, 95, 0.08);
}

.card:hover {
  box-shadow: 0 8px 24px rgba(45, 91, 95, 0.12);
}
```

---

## 📞 Contact Information

**Twin City Endodontics Pte Ltd**

| Location | Address | Phone |
|----------|---------|-------|
| Ngee Ann City | #08-07, +65 6235 9888 |
| Forum Shopping Mall | #06-04, +65 6235 3063 |

**Website:** https://twincityendo.com.sg  
**Email:** [email protected]

---

*Last Updated: February 4, 2026*  
*Version: 1.0*
