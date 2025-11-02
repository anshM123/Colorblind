# ColorSense - Color Analysis Tool for Colorblind Users

## Overview

ColorSense is an accessibility-focused web application designed to help colorblind users identify and analyze colors in images. The application allows users to upload images and receive detailed color breakdowns with accessible labels, hex codes, and percentages. It features educational content about different types of colorblindness and provides a clean, modern interface built with accessibility as the primary focus.

The application is a single-page application (SPA) built with React on the frontend and Express.js on the backend, though the current implementation focuses primarily on client-side functionality with minimal backend infrastructure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application is primarily a single-page application with a main Home page and a 404 Not Found fallback.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives. This provides a comprehensive set of accessible, customizable UI components following the "New York" style variant with neutral base colors. Components include buttons, cards, dialogs, forms, tooltips, and more.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The application supports both light and dark themes with an "Eye Saver" mode that applies sepia toning and reduced saturation. Typography uses Inter for primary text and JetBrains Mono for monospace/code content (hex codes).

**State Management**: React hooks for local component state, with TanStack Query (React Query) for server state management (though minimal server interaction currently exists).

**Key Design Patterns**:
- Component composition with Radix UI primitives wrapped in custom styled components
- CSS custom properties for theming and dynamic color adjustments
- Responsive design with mobile-first Tailwind breakpoints
- Accessibility-first approach with ARIA labels, semantic HTML, and keyboard navigation

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: The application uses a dual-mode setup:
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Compiled static assets served by Express

**API Structure**: Minimal REST API setup currently in place. The routes are registered through a `registerRoutes` function but no actual endpoints are implemented yet. The architecture is prepared for future API endpoints with a `/api` prefix pattern.

**Storage Layer**: Abstracted through an `IStorage` interface with in-memory implementation (`MemStorage`). Includes user CRUD operations as a foundation, though authentication is not currently implemented.

### Color Analysis System

The core feature is client-side color extraction and analysis:

**Color Extraction**: Uses browser-native Canvas API to analyze uploaded images. The system extracts dominant colors by sampling pixel data and clustering similar colors.

**Color Naming**: Maps extracted RGB values to human-readable color names using a distance-based algorithm that finds the nearest match from a predefined list of common colors. This provides accessibility for users who struggle with distinguishing colors visually.

**Output Format**: Extracted colors include:
- Human-readable color name (e.g., "Sky Blue")
- Hex code for technical reference
- Percentage of image composition
- RGB values for calculations

### Data Storage Solutions

**Current State**: In-memory storage using Map data structures. Suitable for development but not production-ready.

**Database Configuration**: Drizzle ORM configured with PostgreSQL support (Neon serverless driver). Schema defines a users table with UUID primary keys. No database is actively used in the current implementation, but the infrastructure is prepared for future use.

**Session Storage**: Configuration exists for PostgreSQL-backed sessions using `connect-pg-simple`, though sessions are not currently implemented.

### Theme and Accessibility Features

**Multi-Theme Support**: 
- Light and dark modes with CSS custom properties
- Theme preference persisted in localStorage
- Smooth transitions between themes

**Eye Saver Mode**: 
- Optional sepia filter with reduced saturation
- Designed to reduce eye strain
- Independent of light/dark mode
- Preference persisted in localStorage

**Accessibility Considerations**:
- High contrast ratios between text and backgrounds
- Pattern-based differentiation beyond color alone
- Keyboard navigation support through Radix UI primitives
- Semantic HTML and ARIA labels throughout
- Focus visible states on interactive elements

### Component Structure

**Page Components**:
- `Home`: Main landing page orchestrating all sections
- `NotFound`: 404 error page

**Feature Components**:
- `ColorAnalyzer`: Main color analysis tool container
- `ColorUploader`: Drag-and-drop image upload with file input fallback
- `ColorPalette`: Display extracted colors in a grid with copy-to-clipboard
- `ColorblindnessInfo`: Educational cards about colorblindness types
- `HeroSection`: Landing section with CTA
- `HowItWorks`: Step-by-step process explanation
- `StatsSection`: Statistical information display
- `Footer`: Site footer with links

**Utility Components**:
- `ThemeToggle`: Light/dark mode switcher
- `EyeSaverToggle`: Eye saver mode toggle

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command palette component (installed but not actively used)

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities for Tailwind (implied by component usage)
- **Google Fonts**: Inter and JetBrains Mono fonts loaded via CDN

### Data and State Management
- **TanStack Query (React Query)**: Server state management and data fetching
- **Wouter**: Lightweight routing library for React

### Build Tools and Development
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the codebase
- **esbuild**: Fast JavaScript bundler (used for server compilation)
- **@vitejs/plugin-react**: Vite plugin for React Fast Refresh
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Database and ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **drizzle-kit**: CLI companion for Drizzle ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Zod**: Schema validation (used with Drizzle)

### Color Processing
- **color-name-list**: Comprehensive database of color names
- **color-thief-react**: React wrapper for color extraction (installed but may not be actively used)

### Forms and Validation
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Validation resolvers for react-hook-form

### Utilities
- **clsx**: Utility for constructing className strings
- **tailwind-merge**: Utility to merge Tailwind CSS classes
- **date-fns**: Date utility library
- **nanoid**: Unique ID generator

### Session Management (Prepared but Not Active)
- **connect-pg-simple**: PostgreSQL session store for Express

### Backend Runtime
- **Express.js**: Web application framework
- **tsx**: TypeScript execution for Node.js (development)