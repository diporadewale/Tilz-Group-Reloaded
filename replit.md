# Tilz Group Corporate Website

## Overview
Professional corporate website for Tilz Group, a multi-vertical commerce company operating across marketplace consulting, third-party logistics (3PL), and digital trade platforms (Hercommerce).

## Architecture
- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage for contact form submissions
- **Routing**: wouter for client-side routing
- **Styling**: Custom corporate theme with Poppins/Inter fonts

## Pages
- **Home** (`/`): Hero, Who We Are, Core Services, Brands, Infrastructure, Partnerships, Insights, Strategic CTA
- **Services Overview** (`/services`): High-level overview of all three verticals with links to deep pages
- **Ecommerce Consulting** (`/services/ecommerce-consulting`): 10-section deep page — Hero, Who This Is For, Marketplace Expertise, Structured Commerce Framework, Performance Discipline, Integrated Logistics, Experience Snapshots, Engagement Models, "Who We Are Not" positioning, CTA
- **3PL Logistics** (`/services/3pl-logistics`): 7-section deep page — Hero, Warehousing, Capabilities Grid, Technology/Portal Preview, Pricing Model, Onboarding Process, CTA
- **Hercommerce** (`/services/hercommerce`): 7-section deep page — Hero, What is Hercommerce, Who It's For, Platform Features, 3PL Integration, Partner With Us, CTA
- **About** (`/about`): Company story, Mission/Vision, Leadership, Infrastructure & Capability, Global Footprint, Values, Timeline
- **Brands** (`/brands`): Brand portfolio overview, detailed brand cards (Tilz Collection, Tilz Gear, TilzMart, Tilz Toys), Marketplace Presence
- **Insights** (`/insights`): 9 articles with category filters (Ecommerce Strategy, Logistics & Supply Chain, Export & Trade, Marketplace Trends, Company Updates)
- **Partnerships** (`/partnerships`): Partner types, trusted partners, benefits, CTA
- **Contact** (`/contact`): Contact form with validation, company information, quick actions

## Navigation Structure
- Top nav: About | Services (dropdown: Ecommerce Consulting, 3PL Logistics, Hercommerce) | Brands | Insights | Partnerships | Contact
- CTA buttons: Client Portal, Book a Strategy Call
- Mobile responsive with hamburger menu and collapsible Services dropdown

## Color Palette
- Primary: #1E40AF (corporate blue)
- Secondary: #64748B (slate grey)
- Accent: #0EA5E9 (bright blue)
- Background: #FFFFFF (white)
- Text: #0F172A (dark slate)
- Subtle: #F1F5F9 (light grey)

## Key Files
- `client/src/App.tsx` - Main app with routing and layout
- `client/src/components/navigation.tsx` - Responsive navigation with Services dropdown
- `client/src/components/footer.tsx` - Structured footer with service sub-page links
- `client/src/pages/home.tsx` - Homepage with all 8 wireframe sections
- `client/src/pages/services.tsx` - Services overview page
- `client/src/pages/ecommerce-consulting.tsx` - Deep ecommerce consulting page (10 sections)
- `client/src/pages/logistics.tsx` - Deep 3PL logistics page (7 sections)
- `client/src/pages/hercommerce.tsx` - Deep Hercommerce page (7 sections)
- `client/src/pages/about.tsx` - About page with Infrastructure & Global Footprint
- `client/src/pages/brands.tsx` - Brands portfolio page
- `client/src/pages/insights.tsx` - Insights/thought leadership page (9 articles)
- `client/src/pages/partnerships.tsx` - Partnerships page
- `client/src/pages/contact.tsx` - Contact form page
- `shared/schema.ts` - Contact message schema
- `server/routes.ts` - Contact form API endpoint
- `server/storage.ts` - In-memory storage for contact messages

## API Endpoints
- `POST /api/contact` - Submit contact form message
