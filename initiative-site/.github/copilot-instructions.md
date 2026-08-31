# Initiative Website - Copilot Instructions

## Project Overview
This is a single-page scrolling website for a public initiative. It features:
- Initiative description and mission
- Document display section
- FAQ section with collapsible answers
- Contact form with email validation
- Simple, clean, responsive design

## Project Structure
- `pages/` - Next.js pages and API routes
- `components/` - React components
- `styles/` - Global CSS styling
- `public/` - Static assets

## Key Technologies
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS** - Vanilla CSS with responsive design

## Development Setup
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`

## Content Placeholders
All content sections have placeholders marked with `[...]`. Replace these with actual content:
- `[Brief tagline or mission statement goes here]`
- `[Detailed explanation of the initiative goes here]`
- FAQ questions and answers
- Document content
- Contact email address

## Contact Form
The contact form is configured to receive submissions but email sending needs to be set up:
- Configure SMTP credentials in environment variables OR
- Integrate with an email service (SendGrid, Mailgun, AWS SES, etc.)
- See `pages/api/contact.ts` for implementation notes

## Environment Variables
Create a `.env.local` file if integrating email service:
```
SMTP_HOST=your_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password
CONTACT_EMAIL=where_to_send_messages@example.com
```

## Deployment
When ready to deploy with your domain:
1. Build the project: `npm run build`
2. Deploy to Vercel (recommended for Next.js) or your hosting provider
3. Update all placeholder content
4. Set up email service integration
5. Update contact email address throughout the site

## Customization Guide
- **Styling**: Edit `styles/globals.css`
- **Navigation**: Update `components/Header.tsx`
- **Sections**: Modify or add components in the `components/` folder
- **Pages**: Main page logic is in `pages/index.tsx`
