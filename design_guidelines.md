# Design Guidelines: Colorblind Accessibility Platform

## Design Approach
**Reference-Based Approach** drawing from accessibility-focused platforms (WebAIM, A11y Project) combined with modern web tools (Dropzone patterns, educational platforms like Khan Academy for content presentation).

**Key Design Principles:**
- Accessibility-first: High contrast, clear visual hierarchy, pattern-based differentiation
- Educational clarity: Information must be digestible and engaging
- Tool-centric: The color analyzer is the star feature
- Universal design: Works beautifully for all users, not just colorblind individuals

## Typography System

**Font Families:**
- Primary: Inter (Google Fonts) - exceptional readability, modern
- Monospace: JetBrains Mono - for hex codes and technical data

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Color Labels: text-sm font-medium, uppercase tracking-wide
- Hex Codes: text-xs md:text-sm, font-mono

## Layout System

**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Card gaps: gap-6 to gap-8
- Content max-width: max-w-7xl for full sections, max-w-4xl for text content

**Grid Structure:**
- Desktop: 3-column grid for educational cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Tool area: Single column, centered, max-w-4xl
- Color results: 4-6 column grid for color swatches (grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6)

## Page Structure & Sections

### 1. Hero Section (60-70vh)
- Centered layout with large headline and subheadline
- Primary CTA button: "Analyze Your Image" (prominent, size lg)
- Supporting text explaining the tool's purpose
- Subtle pattern or geometric background (no photo hero)
- Stats bar: "Supports X types of colorblindness | Free & Private | No account needed"

### 2. Color Analyzer Tool (Primary Feature)
**Full-width section with contained inner content (max-w-5xl):**

Upload Zone:
- Large drag-and-drop area (min-h-96)
- Dashed border with rounded corners (rounded-2xl)
- Icon: Large upload icon (size 16-20)
- Text hierarchy: Primary instruction + Secondary help text
- File type indicators at bottom
- Hover state: Transform scale slightly

Results Display (appears after upload):
- Two-column layout on desktop (md:grid-cols-2)
  - Left: Uploaded image preview with overlay controls
  - Right: Color extraction results
- Color palette grid showing 6-12 dominant colors
- Each color swatch includes:
  - Large color block (h-24 md:h-32)
  - Pattern overlay option for differentiation
  - Color name (accessible font size)
  - Hex code (monospace font)
  - Percentage of image
- Action buttons: "Download Palette" "Analyze Another"

### 3. Educational Section: Understanding Colorblindness

**Three-column card grid (stacks on mobile):**

Each card includes:
- Icon/graphic at top
- Type name as header (Protanopia, Deuteranopia, Tritanopia)
- Brief description (3-4 lines)
- "Affects X% of population" stat
- Visual simulation example placeholder

### 4. How It Works Section

**Numbered step cards in horizontal flow (3 steps):**
- Step numbers in large, bold typography
- Title + description for each step
- Icons representing each action
- Connected with subtle divider lines on desktop

### 5. Accessibility Features Highlight

**Two-column alternating layout:**
- Feature 1: Text left, visual right
- Feature 2: Visual left, text right
- Features: "Pattern Support", "High Contrast Mode", "Screen Reader Compatible"

### 6. Statistics/Impact Section

**Four-column stats grid (stacks to 2-col on tablet, 1-col on mobile):**
- Large number (text-4xl, font-bold)
- Label text below
- Stats: "8% of men", "300M worldwide", "Types of colorblindness", "Languages supported"

### 7. FAQ/Resources Section

**Single column, accordion-style (max-w-3xl centered):**
- Question cards with expand/collapse
- Each card: py-6, border-b
- Plus/minus icon indicating state
- Links to external resources

### 8. Footer

**Three-column layout (stacks on mobile):**
- Column 1: About text + social links
- Column 2: Quick links (Tool, Education, FAQ, Accessibility)
- Column 3: Language selector + feedback link
- Bottom bar: Privacy policy, Terms, Made with ❤️ for accessibility

## Component Library

### Buttons
- Primary: Large, rounded-lg, font-semibold, px-8 py-4
- Secondary: Outlined variant, same sizing
- Text: Underline on hover, font-medium
- Floating action (on image): backdrop-blur-md, rounded-full

### Cards
- Educational: rounded-xl, p-8, shadow-lg, border
- Color swatch: rounded-lg, overflow-hidden, border-2
- Stats: text-center, p-6

### Input Elements
- Search/filter (if needed): rounded-full, px-6, py-3
- File upload zone: dashed border-2, rounded-2xl, p-12

### Icons
**Use Heroicons (outline style) via CDN**
- Upload: cloud-arrow-up
- Check/success: check-circle
- Info: information-circle
- Eye: eye
- Palette: swatch
- Download: arrow-down-tray

## Accessibility Enhancements

- All color information paired with patterns or labels
- Minimum touch target size: 44x44px
- Focus indicators: ring-4, ring-offset-2
- Skip to content link at top
- ARIA labels on all interactive elements
- Alt text for all images/graphics
- Keyboard navigation throughout

## Images

**No hero image** - use geometric patterns or subtle gradients instead.

**Include images for:**
1. **Colorblindness type examples**: Simulated vision differences (3 comparison images showing normal vs. affected vision)
2. **Sample analyzed images**: 2-3 example photos showing before/after color extraction
3. **Optional decorative illustrations**: Abstract eye/vision graphics in educational cards

**Image placement:**
- Educational section cards: Small illustrative graphics (h-32)
- How it works: Icon-style illustrations (h-40)
- Example results: Actual photo samples with extracted palettes

## Animations

**Minimal, purposeful animations only:**
- Drag-over state: Subtle scale + border pulse
- Upload success: Check icon fade-in
- Color extraction: Staggered reveal of color swatches (100ms delay between each)
- Accordion expand/collapse: Smooth height transition
- NO continuous animations or distracting movements

## Responsive Behavior

**Mobile (base):** Single column, generous spacing (p-4 to p-6)
**Tablet (md):** Two-column for most sections, tool remains single column
**Desktop (lg):** Full multi-column layouts, max-w constraints, horizontal padding (px-8)

**Critical mobile considerations:**
- Upload zone min-h-64 on mobile (vs h-96 desktop)
- Stack all cards to single column
- Reduce text sizes appropriately
- Maintain minimum 16px body text for readability