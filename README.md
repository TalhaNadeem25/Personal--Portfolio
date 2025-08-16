# Talha Nadeem - Personal Portfolio

A modern, responsive personal portfolio website built with React and TypeScript, showcasing web development skills and projects.

## 🚀 Live Demo

Visit the portfolio: https://talhaportfolio.tech/

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Particle effects, smooth scrolling, and hover animations
- **Professional Sections**: Hero, About, Skills, Experience, Projects, and Contact
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion, TSParticles
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Deployment**: Vercel (with analytics)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static files
└── utils/              # Helper utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cosmic-portfolio-grove
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - Personal story and background
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Contact.tsx` - Contact details

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update CSS variables in `src/index.css`
- Customize animations in component files

### Assets
- Replace images in `src/assets/` with your own
- Update social media links in Hero component
- Replace resume PDF in `public/` folder

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Talha Nadeem
- **Email**: nadeemtalha24@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/talha-nadeem-4021b8259/
- **GitHub**: https://github.com/TalhaNadeem25

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
