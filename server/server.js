import express from "express";

const app = express();

app.get("/api/login", (req, res) => {
  function respond() {
    if (req.user) {
      const { username, fullName } = req.user;
      return res.json({ username, fullName });
    } else {
      res.sendStatus(204); //204 = Everything went fine but theres "No Content"
    }
  }

  setTimeout(respond, 400);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method == "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("/client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Stupid server started on http://localhost:${server.address().port}`
  );
});
