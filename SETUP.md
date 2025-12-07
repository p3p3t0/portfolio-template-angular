# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:4200/`

## First Steps to Customize

### 1. Update Personal Information

**Home Component** (`src/app/components/home/home.component.ts`):
- Change "John Doe" to your name
- Update the photo URL (replace placeholder)
- Update the bio/description
- Update the stats numbers

**Contact Component** (`src/app/components/contact/contact.component.ts`):
- Update email address
- Update LinkedIn URL
- Update GitHub URL

### 2. Add Your Content

**Data Service** (`src/app/services/data.service.ts`):
- Update projects array with your projects
- Update certifications array with your certifications
- Update articles array with your blog posts
- Update skills array with your skills

### 3. Add Your CV

1. Create a PDF of your CV
2. Save it as `public/assets/cv.pdf`
3. The download button will automatically work

### 4. Update Page Title

**Index HTML** (`src/index.html`):
- Change "Cybersecurity Portfolio - John Doe" to your name

### 5. Customize Colors (Optional)

**Styles** (`src/styles.css`):
- Modify CSS variables to match your brand colors

## Testing the Contact Form

The contact form currently uses a mock service. To test:
1. Fill out the form
2. Submit it
3. Check the browser console for the logged message
4. You'll see a success message

To connect to a real backend, update `src/app/services/contact.service.ts` with your API endpoint.

## Building for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy to any static hosting service.

