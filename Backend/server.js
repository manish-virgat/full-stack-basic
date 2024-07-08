import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready and up!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This is #1 joke",
    },
    {
      id: 2,
      title: "Another Joke",
      content: "This is #2 joke",
    },
    {
      id: 3,
      title: "A third Joke",
      content: "This is #3 joke",
    },
    {
      id: 4,
      title: "A Fourth Joke",
      content: "This is #4 joke",
    },
    {
      id: 5,
      title: "A Fifth Joke",
      content: "This is #5 joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
