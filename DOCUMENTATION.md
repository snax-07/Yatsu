# YÄ~TSU Squad Website Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Architecture](#architecture)
4. [Components](#components)
5. [Styling](#styling)
6. [Development](#development)
7. [Deployment](#deployment)
8. [Dependencies](#dependencies)

## Introduction
YÄ~TSU Squad website is a modern, cyberpunk-themed web application built with Next.js and React. It features a responsive design, interactive components, and a unique cyberpunk aesthetic.

## Project Setup

### Prerequisites
- Node.js (Latest LTS version)
- pnpm package manager

### Installation
```bash
pnpm install
pnpm dev
```

## Architecture

### Directory Structure
```
yatsu/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── register/        # Registration pages
├── components/          # React components
│   ├── about.tsx        # About section
│   ├── hero.tsx         # Hero section
│   ├── team.tsx         # Team section
│   ├── tech-tracks.tsx  # Tech tracks section
│   └── ui/              # UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Components

### Core Components
1. **Hero Section**
   - Main landing component
   - Call-to-action buttons
   - Animated background

2. **About Section**
   - Mission statement
   - Key features
   - Interactive elements

3. **Tech Tracks**
   - Course offerings
   - Interactive carousel
   - Track descriptions

4. **Team Section**
   - Team member profiles
   - Social links
   - Role descriptions

### UI Components
- Animated backgrounds
- Cyberpunk-themed elements
- Responsive navigation
- Custom form elements

## Styling

### Technologies
- TailwindCSS for utility-first styling
- Custom animations
- Responsive design principles
- Dark/light theme support

### Design System
- Cyberpunk-inspired color palette
- Custom animations and transitions
- Responsive breakpoints
- Consistent spacing and typography

## Development

### Available Scripts
```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run linting
```

### Best Practices
- Component-based architecture
- TypeScript for type safety
- Responsive design implementation
- Accessibility considerations
- Performance optimization

## Deployment

### Production Build
1. Create production build:
   ```bash
   pnpm build
   ```
2. Test production build locally:
   ```bash
   pnpm start
   ```

### Deployment Platform
- Configured for Vercel deployment
- Automatic deployments from main branch
- Environment variable management

## Dependencies

### Core Dependencies
- Next.js 14.2.16
- React 18
- TailwindCSS
- TypeScript

### UI Libraries
- Radix UI components
- Lucide React icons
- Shadcn UI components

### Form Handling
- React Hook Form
- Zod validation

### Development Tools
- TypeScript
- ESLint
- PostCSS
- Autoprefixer

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
Refer to the LICENSE file in the repository for licensing information.