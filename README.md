# Thank You Page

This is a simple thank-you page where a user can input their first and last name, and then download a personalized "thank you" PDF with an image from Anima International.

## Project structure

- `src/components/Form.tsx` - The form where users enter their names
- `src/utils/CreatePDF.tsx` - Handles creating the PDF
- `src/App.tsx` - Main app component
- `src/App.css` - All the styling
- `public/` - Images and logos used in the app and PDF

## Running it locally

Clone this repository, then open your terminal and navigate to the project folder:

```bash
cd anima-thank-you-page
```

Now run these commands in your terminal:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) and you're good to go. Type your name and hit submit to download your PDF.

## Deploying it

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect it's a React app. 
5. Hit "Deploy"
6. Done! You'll now have a live URL

## What's inside

- React + TypeScript
- jsPDF makes the PDFs
- Some CSS for styling

Enjoy.
