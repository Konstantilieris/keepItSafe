Lord of the Rings Next.js Assessment
Project Overview
This project is a Lord of the Rings-themed web application created as part of a technical assessment. The project demonstrates skills in full-stack development using Next.js along with advanced libraries such as Prisma, tRPC, Zustand, Tailwind CSS, and Framer Motion.

Project Goals
The project is designed to:

Showcase full-stack development using Next.js with Prisma and tRPC for seamless API management.
Demonstrate front-end state management using Zustand.
Highlight UI styling and animation skills with Tailwind CSS and Framer Motion.
Provide an engaging, theme-based user experience aligned with The Lord of the Rings universe.
Table of Contents
Project Overview
Project Goals
Installation Instructions
Usage
Features
Tech Stack Overview

Installation Instructions
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/Ve2max-Assessments/nextjs-assessment-Konstantilieris.git
Navigate into the project directory:

bash
Copy code
cd nextjs-assessment-Konstantilieris
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Rename .env.example to .env and add the following variables:
Database URL (for Prisma)
I have included my env and will delete it in a week for a better ui experience!!!

Set up Prisma:

Generate Prisma client:
bash
Copy code
npx prisma generate
Run database migrations:
bash
Copy code
npx prisma migrate dev
Start the development server:

bash
Copy code
npm run dev
Open in the browser:

Visit http://localhost:3000 to view the application.
Usage
Upon visiting the app, you’ll be immersed in a Lord of the Rings-themed interface.
Explore various pages and features related to Middle-earth characters, locations, and lore.
Features
Character & Location Database: Powered by Prisma and tRPC, this app fetches and displays data on various Middle-earth elements.
Interactive UI: Styled with Tailwind CSS for a modern look and enhanced with Framer Motion animations.
State Management with Zustand: Used for managing global state across components seamlessly.
Responsive Design: Fully optimized for desktop and mobile devices.
Tech Stack Overview
Next.js: React framework with server-side rendering.
Prisma: ORM for database management, enabling easy and efficient data handling.
tRPC: Typesafe APIs for seamless client-server communication.
Zustand: Lightweight state management for front-end data handling.
Tailwind CSS: Utility-first CSS framework for styling.
Framer Motion: Animation library for creating dynamic interactions
