# Initiative Website

A clean, simple public information website for sharing initiative details, documents, FAQs, and contact information.

## Features

- **Scrolling single-page design** - All content on one page for easy navigation
- **Initiative Overview** - Hero section with key messaging
- **About Section** - Detailed explanation of your initiative
- **Document Display** - Central area to showcase your main document
- **FAQ Section** - Expandable questions and answers
- **Contact Form** - Safe, secure way for visitors to reach you
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Simple & Clean** - Minimal design focusing on content clarity

## Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

```bash
npm run build
npm start
```

## Customizing Your Content

All placeholder content is marked with `[...]`. Find and replace these with your actual content:

1. **Hero Section** (`components/Hero.tsx`)
   - Change the main heading and tagline

2. **About Section** (`components/About.tsx`)
   - Add your initiative's detailed description
   - Update key points list

3. **Document Section** (`components/Document.tsx`)
   - Replace the placeholder with your document content
   - You can paste text directly or embed a PDF

4. **FAQ Section** (`components/FAQ.tsx`)
   - Update the FAQ items array with your questions and answers

5. **Contact Email** (`components/ContactForm.tsx` and `components/Footer.tsx`)
   - Update the email address to your contact email

6. **Styling** (`styles/globals.css`)
   - Modify colors, fonts, and spacing to match your brand
   - Default uses clean blue (#0066cc) and neutral colors

## Contact Form Setup

The contact form is ready to use but needs email configuration. Choose one:

### Option 1: Using Nodemailer with SMTP
Create a `.env.local` file:
```
SMTP_HOST=your.mail.server
SMTP_PORT=587
SMTP_USER=your.email@example.com
SMTP_PASSWORD=your_password
CONTACT_EMAIL=where.to.send@example.com
```

Then uncomment the Nodemailer code in `pages/api/contact.ts`.

### Option 2: Using an Email Service
- **SendGrid**: Set up SendGrid API and modify the API route
- **Mailgun**: Similar setup with Mailgun API
- **AWS SES**: Use AWS SDK in the API route
- **Formspree/Basin**: Use external form service

See comments in `pages/api/contact.ts` for guidance.

## Project Structure

```
initiative-site/
├── pages/
│   ├── index.tsx          # Main page
│   ├── _app.tsx           # App layout
│   └── api/
│       └── contact.ts     # Contact form API route
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Document.tsx       # Document display
│   ├── FAQ.tsx            # FAQ section
│   ├── ContactForm.tsx    # Contact form component
│   └── Footer.tsx         # Footer
├── styles/
│   └── globals.css        # Global styling
├── public/                # Static files (images, etc.)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── next.config.js         # Next.js config
```

## Deployment

When you're ready to go live:

1. **Prepare your content**
   - Replace all placeholders with actual content
   - Test the contact form
   - Verify all links work

2. **Deploy to Vercel (Recommended)**
   ```bash
   npm install -g vercel
   vercel
   ```
   Vercel is optimized for Next.js and has excellent Next.js support.

3. **Connect your domain**
   - Point your domain's DNS to your hosting provider
   - Follow your host's domain setup guide

4. **Keep it private during development**
   - Set the project to private in your hosting platform
   - Or use Vercel's password protection feature

## Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **CSS** - Vanilla CSS with responsive design
- **Node.js API** - Backend for contact form

## License

[Add your license here]

## Support

For questions about customizing this site, refer to the `.github/copilot-instructions.md` file.
