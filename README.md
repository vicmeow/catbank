# CatBank

This project uses the React + TypeScript + Vite template, which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This is a simple starter template for building React applications with TypeScript using Vite as the build tool.

## Getting Started

To get this project up and running locally, follow these steps:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vicmeow/catbank.git
   ```

   Replace `your-username` with your GitHub username or use the URL of your project repository if hosted elsewhere.

2. Navigate to the project directory:

   ```bash
   cd catbank
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

### Development Server

To run the development server and start your React application, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access your app in your web browser at [http://localhost:5173](http://localhost:5173).

# How I worked

I started out with decided what to make, and landed on a small web app where users can enter their age and some basic info to get a list of savings accounts with the highest interest rate. Here is the process I went through:

1. Sketch out some possible designs (Goodreads/regular notebook)
2. Choose design system (Sanity UI) for rapid prototyping and design
3. Create an initial design sketch in Figma
3. Scaffold a project with the tools I'm familiar with (React + TypeScript + Vite)
4. Plan out components and parse data from XML file

## What I'd change

- Make something that's more fun to look at
- Add more search criterias (to filter out product and membership requirements)
- Option to add current interest rate to compare the top results with your current savings account
- Add loading states and transitions to the search results
- Make the cards with details about the savings account clickable to view more information about the offer
- Add URLs to the bank's homepage, but it wasn't available in the data

## List of resources

- [Sanity UI](https://www.npmjs.com/package/@sanity/ui)
- [Sanity Icons](https://www.npmjs.com/package/@sanity/icons)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [Figma](https://www.figma.com)
- [Vite](http://vitejs.dev)
