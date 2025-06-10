# HP AI Chat Application

A React-based chat application using Google's Gemini AI.

## Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. First, create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the application:
   ```bash
   vercel
   ```

### Option 2: Deploy to Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy the application:
   ```bash
   netlify deploy
   ```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

Make sure to set up your environment variables in your hosting platform:

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key

## Features

- Real-time chat with Gemini AI
- Recent chat history
- Responsive design
- Modern UI/UX
