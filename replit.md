# Replit.md

## Overview

GT Cars Rent is a luxury car rental service landing page and booking API built with a modern full-stack architecture. The application features a premium car rental service targeting individuals and businesses seeking high-end vehicles for business trips, weddings, special occasions, and leisure travel. The platform provides a professional, engaging user experience with a focus on luxury and comfort, implemented with a white and red design theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Custom white and red theme with gradient animations, magnetic buttons, and morphing shapes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with structured route handlers
- **Data Storage**: In-memory storage implementation with interface-based design for easy database migration
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with Vite integration and runtime error overlay

### Data Storage Solutions
- **Current Implementation**: In-memory storage using Maps for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema**: Well-defined tables for cars, bookings, and users with proper relationships
- **Migration Support**: Drizzle Kit configured for database migrations

### Authentication and Authorization
- **Session Management**: Express session middleware configured
- **Database Sessions**: Connect-pg-simple for PostgreSQL session storage
- **User Schema**: Defined user table structure ready for implementation

### External Service Integrations
- **WhatsApp Integration**: Direct WhatsApp messaging for instant booking inquiries
- **Neon Database**: Configured for serverless PostgreSQL hosting
- **Image Storage**: External image URLs with fallback handling
- **Font Services**: Google Fonts integration for typography

### Key Architectural Decisions

**Monorepo Structure**: Organized into client, server, and shared directories for code reusability and type sharing across frontend and backend.

**Type-Safe Communication**: Shared schema definitions using Drizzle and Zod for consistent data validation between client and server.

**Component-Driven UI**: Modular component architecture with reusable UI components and proper separation of concerns.

**Performance Optimization**: Vite for fast builds, code splitting, and hot module replacement during development.

**Scalability Preparation**: Interface-based storage layer allows easy migration from in-memory to database storage without code changes.

**Mobile-First Design**: Responsive design with mobile breakpoint detection and optimized mobile experience.

**SEO Optimization**: Proper meta tag management and semantic HTML structure for search engine optimization.