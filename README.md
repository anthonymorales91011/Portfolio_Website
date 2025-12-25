# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a beautiful UI with smooth animations, responsive design, and multiple sections to showcase your work.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills display with progress bars
- 📧 Contact form
- 🌐 Social media links

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and statistics
- **Skills**: Technical skills with visual progress indicators
- **Projects**: Portfolio projects with links and technologies
- **Contact**: Contact form and information
- **Footer**: Social links and copyright

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio_Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Add your social media links
   - Replace placeholder image

2. **About Section** (`src/components/About.jsx`):
   - Update bio text
   - Modify statistics (projects, experience, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels (0-100)
   - Add new skill categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your own
   - Update project images, descriptions, and links
   - Add/remove technologies

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Connect form to your backend/email service

6. **Header** (`src/components/Header.jsx`):
   - Update logo text if needed

### Styling

- Global styles: `src/index.css`
- Component styles: `src/components/*.css`
- Color scheme: Modify CSS variables in `src/index.css`

### Colors

The color scheme can be customized by editing the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Project Structure

```
Portfolio_Website/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ using React
