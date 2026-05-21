import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the home page");
});

const LISTS = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "Learn the basics of React, including components, props, and state management."
  },
  {
    id: 2,
    title: "Understanding Async/Await",
    content: "Master asynchronous JavaScript by moving away from promises and callbacks to cleaner async/await syntax."
  },
  {
    id: 3,
    title: "Introduction to Tailwind CSS",
    content: "Discover how utility-first CSS frameworks can speed up your web development workflow."
  },
  {
    id: 4,
    title: "Database Optimization Techniques",
    content: "Explore indexing, query caching, and schema design to make your database reads lightning fast."
  },
  {
    id: 5,
    title: "The Importance of Accessibility",
    content: "Why building web applications with semantic HTML and ARIA roles matters for everyone."
  }
];

app.get("/list", (req, res) => {
  res.status(200).json(LISTS);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});