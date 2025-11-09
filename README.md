# dennisdiepolder.com

Modern, minimalist personal landing page built with Astro.

## Features

- Clean, classic-modern design with grey, black, and white color scheme
- Smooth animations and transitions
- Fully responsive layout
- Email and LinkedIn contact buttons with hover effects
- Grayscale profile image with color hover effect
- Optimized for performance using Astro
- TypeScript support

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Vanilla CSS** - No frameworks needed

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your site.

### Build

```bash
npm run build
```

This creates a `dist/` folder with your static site.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Replace Profile Image

Replace the placeholder image URL in `src/pages/index.astro`:

```astro
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  alt="Dennis Diepolder"
  class="profile-image"
/>
```

Change the `src` attribute to your own image URL or local path.

### Update Content

Edit the content in `src/pages/index.astro`:
- Name and tagline in the hero section
- Description text
- Skills cards in the "What I Do" section
- Email address and LinkedIn URL in the contact section

### Modify Colors

Update CSS variables in `src/pages/index.astro`:

```css
:root {
  --color-primary: #1a1a1a;
  --color-secondary: #333333;
  --color-accent: #666666;
  --color-light: #f5f5f5;
  --color-border: #e0e0e0;
}
```

## Deployment

This site is deployed using **AWS Amplify**.

Amplify will automatically detect the build settings and deploy on every push to the main branch.

### Manual Build

Build the site locally:

```bash
npm run build
```

This creates a `dist/` folder with your static site.

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Contact Features

The site includes:
- **Email Button** - Opens the user's default email client with `info@dennisdiepolder.com`
- **LinkedIn Button** - Links to LinkedIn profile with professional styling

## Performance

Astro generates static HTML with minimal JavaScript, resulting in:
- Fast page loads
- Excellent SEO
- Great Lighthouse scores
- Minimal bundle size

## License

MIT
# dennisdiepolder.com-v2
