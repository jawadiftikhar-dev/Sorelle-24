# [SORELLE 24](https://sorelle-24.jawadiftikhar.com) — Parisian Michelin Tasting House Theme

SORELLE 24 is an ultra-premium single-page restaurant portfolio and booking platform theme. Styled with a "Warm Minimal Parisian" aesthetic, this template combines Bootstrap 5, semantic HTML5, custom design tokens, and highly optimized vanilla JavaScript. It delivers transactional client-side e-commerce modules—including a persistent shopping bag, live reservation receipt, and dynamic catalog search—entirely without heavy backend dependencies or third-party state managers.

Developed by [Jawad Iftikhar](https://jawadiftikhar.com).

---

## 🚀 Key Features & UX Modules

* **Client-Side State Registry:** A centralized JS State Manager storing selected dishes and dining experiences, persisting quantities across user sessions via localized path keys.
* **Dynamic Booking Receipt:** A live, styled billing receipt that reads items from your reservation bag, calculates pricing, and provides inline quantity controls, directly linked to the final checkout form.
* **Interactive Table Preference Grid:** An embedded, form-integrated grid allowing users to choose table arrangements (Window Table, Center Table, Chef's Table) and updating active booking states in real-time.
* **Category Spotlight Filtering:** Smooth filtering capabilities that organize act-based menus into distinct categories (First, Second, Desserts, Wine) without triggering full-page layout shifts.
* **Dynamic Specials Slider:** A fully responsive multi-item carousel that debounces window resizing events to dynamically adjust column structures for mobile, tablet, and desktop viewports.
* **Atmospheric Soundscape Interface:** A custom client-facing control interface mimicking active ambient acoustics, altering container border highlighting states in real-time.
* **Catalog Query Search:** An offcanvas search bar that matches strings against localized dish datasets, automatically closes the offcanvas on query matches, scrolls to targets, and triggers visual highlighting animations.
* **Clean A11y Accordions:** Accessible, keyboard-compliant collapsible modules that calculate vertical `scrollHeight` dynamically to ensure smooth transitions on expanded FAQ panels.
* **Optimized CSS Typography Scales:** Fluid typographical scaling mapped to systematic 8-base spacing units inside standard layouts.

---

## 📂 File & Directory Structure

To expand this single-file source code (`Sorelle 24.html`) into a production-ready, modular repository structure, organize your directories as follows:

```text
Sorelle-24/
├── index.html                   # Core single-page layout & semantic HTML5
├── LICENSE                      # Mozilla Public License 2.0 (MPL-2.0)
├── README.md                    # Project documentation & setup instructions
├── assets/                      # Static assets and media files
│   └── images/                  # Performance-optimized theme imagery (WebP/SVG)
├── styles/                      # Stylesheets folder
│   ├── design-system.css        # Brand Palette, Typography, Spacing, Radii & Shadows
│   ├── global.css               # Base Styles & Resets
│   ├── main.css                 # Main CSS
│   └── responsive.css           # Mobile Adaptations
└── scripts/                     # Vanilla JS modular scripts
    └── main.js                  # All webbsite scripts

🛠️ Codebase Architecture

1. HTML Outline & Metadata Consistency

The document is authored with semantic HTML5 tags and accessibility attributes:

  - SEO Metadata & Open Graph Integration: Programmed with distinct Meta
    descriptions, canonical parameters, open-graph variables, and preconnection
    hints.
  - SEO Schema Integration: Features double JSON-LD micro-data arrays defining a
    ProfessionalService and an active FAQPage to make questions and operating
    hours discoverable by search engine indexing bots.
  - Accessibility Overrides: Embedded visually-hidden .sr-only table
    descriptions provide screen readers with sequential alternate data
    representing simulated performance charts.

2. Design Tokens & Styling Alias Framework

Theme colors and scale boundaries are declared as custom CSS variables to
establish a unified spacing scale:

:root {
    /* Parisian Design Palette */
    --ivory: #f8f5f1;
    --sand: #ede6db;
    --sage: #4f5a4d;
    --taupe: #785d49;
    --caramel: #b38b6d;
    --rose: #a95e4e;
    --deep: #2a2521;
    --muted: #7a6f63;

    /* Systematic 8-Base Spacing */
    --space-4: 1rem;      /* 16px */
    --space-11: 3rem;     /* 48px */
    --space-15: 7.5rem;   /* 120px */
}

  - Tailored Color Selections: Contrast ratios (such as --caramel and --rose)
    are customized to meet WCAG AA legibility criteria against light ivory
    backdrops.
  - Framework Integration: Clean layout parameters seamlessly bridge custom
    design tokens with Bootstrap 5 utility layers.

3. JavaScript Transactional Architecture

Scripts are isolated in a self-executing modular closure (IIFE) that handles
state mutations securely and isolates variables:

(function () {
    "use strict";

    // Dynamic ID-based Centralized State Management
    const StateManager = {
        state: {
            cart: {},
            selectedTable: "window"
        }
    };
})();

Client-Side State Mutations

The application utilizes a custom transactional system that maps unique item IDs
and increments quantities directly in the browser's persistent storage:

setCartQuantity(id, qty) {
    if (qty <= 0) {
        delete this.state.cart[id];
    } else {
        this.state.cart[id] = qty;
    }
    this.commit();
}

Event Delegation Pattern

To minimize memory usage, click event handlers for active buttons inside the
menus, dishes, and carousels are bound to the document root and delegated
dynamically:

document.addEventListener("click", (e) => {
    const btnAddDish = e.target.closest(".add-to-bag");
    if (btnAddDish) {
        const id = parseInt(btnAddDish.dataset.id, 10);
        Atelier.handleItemAddition(id, btnAddDish);
    }
});

Safe Input Sanitation

The reservation module secures custom inputs prior to processing by routing them
through a programmatic DOM text-escaping utility:

sanitizeInput(val) {
    const temp = document.createElement("div");
    temp.textContent = val;
    return temp.innerHTML;
}

💻 Getting Started & Local Setup

Installation

1.  Clone the repository to your local drive:
    git clone https://github.com/jawadiftikhar-dev/Sorelle-24.git
    cd Sorelle-24
2.  Rename the main template file to index.html if you want to deploy it as a
    single-file template:
    mv "Sorelle 24.html" index.html
3.  Run the project locally using a basic HTTP server. For example, using
    Python's built-in module:
    python -m http.server 8000
4.  Open your web browser and navigate to: http://localhost:8000

🎨 Customization Guide

Designing Custom Brand Colors

To modify the Parisian minimal look, update the color variables declared in the
:root variables block:

:root {
    --ivory: #f8f5f1;       /* Main page background */
    --sage: #4f5a4d;        /* Theme brand color (sage green) */
    --deep: #2a2521;        /* Primary typography dark color */
    --gold: #d4a253;        /* Secondary brand accent */
}

Extending Menu Catalog Datasets

To update the signature dishes or wine listings, modify the arrays declared in
the JavaScript module. The client-side state engine and reservation preview
panel will automatically update to reflect any dataset changes:

// Adding dishes to the local database
const dishes = [
    {
        id: 9,
        name: "Your Custom Dish",
        tag: "Seasonal",
        pairing: "Champagne Brut",
        desc: "• roasted botanicals • fresh cream •",
        price: 45,
        img: "https://your-image-url.com/image.webp",
        rating: 4.9
    }
];

♿ Accessibility & Performance Details

Accessibility Standards

  - Contrast Compliance: Text color variables are optimized to meet WCAG AA
    contrast standards against ivory and sand backgrounds.
  - ARIA & Focus Overrides: Custom inputs, form components, and carousel slide
    triggers are styled with clear, keyboard-compliant focus outlines
    (:focus-visible) and include necessary accessibility labels.
  - Screen Reader Tabular Alternatives: Active graphical metric indicators
    include hidden, text-only tabular data arrays to remain readable by screen
    readers.

Performance Optimizations

  - Scroll Performance: Scroll handlers are configured as { passive: true } to
    keep viewport scrolling smooth and prevent main-thread blocking.
  - LCP Asset Optimizations: Critical hero images use high-priority fetching
    directives (fetchpriority="high") to optimize Largest Contentful Paint (LCP)
    performance metrics.

