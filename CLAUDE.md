# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React landing page for "Wau Coach" - an AI coaching application that combines AI avatars with human coaches. Built with Vite + React, featuring modern 2025 aesthetics including vivid glows, glassmorphism, micro-interactions, and elegant motion.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Architecture

This is a **Vite + React** project with the following structure:
- Main component: `src/App.jsx` (single-file landing page)
- UI components: `src/components/ui/` (shadcn/ui-style components)
- Styling: Tailwind CSS with custom configuration
- Build system: Vite with React plugin and path aliasing (`@/` -> `./src`)

### Key Technologies
- **React 18**: Hooks (useEffect, useMemo, useRef, useState)
- **Framer Motion**: Animations and micro-interactions
- **Tailwind CSS**: Utility-first styling with custom gradients
- **Lucide React**: Icon library
- **Vite**: Fast build tool with HMR

### Architectural Patterns
- Single-file component architecture for landing page
- Dynamic content switching based on persona selection (career, stress, relationships)
- Magnetic button interactions using Framer Motion
- Mobile-first responsive design
- Accessibility considerations with proper ARIA labels
- Custom hooks (useMagnetic) for reusable interactions

## Key Features

- **Hero Section**: Dynamic content that changes based on selected persona
- **Animated Backgrounds**: Moving gradients with Framer Motion
- **Magnetic CTA Button**: Mouse-tracking hover effects
- **Mobile App Badges**: Custom SVG badges for iOS/Android download
- **Interactive Testimonials**: Draggable carousel
- **FAQ Accordion**: Collapsible Q&A section
- **Glassmorphism Design**: Backdrop blur effects throughout

## Styling Approach

- **Dark Theme**: Primary background slate-950
- **Gradient Overlays**: Multiple animated background gradients
- **Glass Effects**: backdrop-blur with white/5 backgrounds
- **2025 Aesthetic**: Vivid glows and neon accents
- **Responsive**: Mobile-first with Tailwind's md: breakpoints

## Component Structure

The main `App.jsx` contains all sections:
- Navigation with sticky backdrop blur
- Hero with persona selector and magnetic CTA
- Features grid (6 key features)
- How it works (3-step process)
- Testimonials carousel
- App download section
- FAQ accordion
- Footer