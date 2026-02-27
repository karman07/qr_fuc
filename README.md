# Links Landing Page

A simple and clean landing page built with Next.js, TypeScript, and Tailwind CSS that displays three social/business links.

## Features

- 🌐 **Maps**: Direct link to your business location
- 💬 **WhatsApp**: Direct messaging for customer support
- 📱 **Instagram**: Social media profile link
- 🎨 **Responsive Design**: Clean, mobile-first design with Tailwind CSS
- ⚡ **Fast Loading**: Built with Next.js for optimal performance

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Customization

You can easily customize the links by editing `src/app/page.tsx`:

1. **Update the links**: Change the URLs in the `onClick` handlers
2. **Modify the business name**: Update the title and description text
3. **Change styling**: Modify the Tailwind CSS classes
4. **Add more links**: Follow the same button pattern to add additional links

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with Tailwind
```

## Technologies Used

- **Next.js 16**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons for the social links

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
