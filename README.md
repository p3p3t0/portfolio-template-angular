# Cybersecurity Portfolio

A modern, responsive Angular portfolio website for cybersecurity students and professionals. This portfolio showcases skills, projects, certifications, blog articles, and provides a contact form.

## Features

- **Home Page**: Introduction with name, photo, and short bio
- **Skills Section**: Display cybersecurity skills with categorized badges
- **Projects Section**: Showcase projects with descriptions, technologies, and GitHub links
- **Certifications Section**: Display professional certifications with verification links
- **Blog/Articles Section**: Optional section for cybersecurity articles and write-ups
- **Contact Form**: Allow visitors to send messages via email (with form validation)
- **CV Download**: Button to download CV as PDF
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Angular Routing**: Navigation between different sections

## Tech Stack

- **Angular 21**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **CSS Variables**: For theming and dark mode support
- **RxJS**: For reactive programming
- **Angular Animations**: Smooth transitions and animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Home page component
│   │   ├── skills/            # Skills section
│   │   ├── projects/          # Projects showcase
│   │   ├── certifications/    # Certifications display
│   │   ├── blog/              # Blog listing and article detail
│   │   ├── contact/           # Contact form
│   │   └── navbar/            # Navigation bar with theme toggle
│   ├── models/                # TypeScript interfaces
│   ├── services/              # Data and business logic services
│   ├── app.ts                 # Root component
│   ├── app.routes.ts          # Routing configuration
│   └── app.config.ts          # Application configuration
├── styles.css                 # Global styles and theme variables
└── index.html                 # Main HTML file
```

## Customization

### Updating Personal Information

1. **Home Page**: Edit `src/app/components/home/home.component.ts` to update:
   - Name
   - Photo URL
   - Bio/description
   - Social links

2. **Contact Information**: Edit `src/app/components/contact/contact.component.ts` to update:
   - Email address
   - LinkedIn profile
   - GitHub profile

### Adding Projects

Edit `src/app/services/data.service.ts` and add projects to the `projects` array:

```typescript
{
  id: 5,
  title: 'Your Project Title',
  description: 'Project description',
  technologies: ['Technology1', 'Technology2'],
  githubUrl: 'https://github.com/yourusername/project',
  demoUrl: 'https://your-demo-url.com', // Optional
  category: 'Category Name'
}
```

### Adding Certifications

Edit `src/app/services/data.service.ts` and add certifications to the `certifications` array:

```typescript
{
  id: 5,
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  issueDate: '2024-01-01',
  expiryDate: '2027-01-01', // Optional
  credentialId: 'CERT-12345', // Optional
  verificationUrl: 'https://verification-url.com' // Optional
}
```

### Adding Blog Articles

Edit `src/app/services/data.service.ts` and add articles to the `articles` array:

```typescript
{
  id: 4,
  title: 'Article Title',
  excerpt: 'Short description',
  content: 'Full article content',
  publishDate: '2024-01-01',
  category: 'Category',
  readTime: 5
}
```

### Adding Skills

Edit `src/app/services/data.service.ts` and update the `skills` signal:

```typescript
private skills = signal<string[]>([
  'Your Skill 1',
  'Your Skill 2',
  // ... more skills
]);
```

### Adding Your CV

1. Place your CV PDF file in `public/assets/` directory
2. Name it `cv.pdf`
3. The download link on the home page will automatically work

### Customizing Colors

Edit `src/styles.css` to customize the color scheme:

```css
:root {
  --primary-color: #2563eb;      /* Primary brand color */
  --primary-hover: #1d4ed8;      /* Hover state */
  /* ... other colors */
}
```

## Building for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Features in Detail

### Dark/Light Mode

The theme toggle in the navbar allows users to switch between dark and light modes. The preference is saved in localStorage and persists across sessions.

### Form Validation

The contact form includes:
- Required field validation
- Email format validation
- Error messages displayed below each field (red text)
- Success/error messages after submission

### Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### Animations

Smooth fade-in animations are applied to:
- Page sections
- Project cards
- Skill cards
- Certification cards
- Blog articles

## Contact Form Backend

The contact form currently uses a mock service. To integrate with a real backend:

1. Edit `src/app/services/contact.service.ts`
2. Replace the mock implementation with an HTTP call to your backend API
3. Update the service to use Angular's `HttpClient`

Example:

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

sendMessage(message: ContactMessage): Observable<{ success: boolean; message: string }> {
  return this.http.post<{ success: boolean; message: string }>('/api/contact', message);
}
```

