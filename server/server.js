import express from "express";

const app = express();

app.get("/api/login", (req, res) => {
  function respond() {
    res.json({
      username: "admin",
      fullName: "Shreks Bussy",
    });
  }

  setTimeout(respond, 3000);
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
  console.log(`Server started on http://localhost:${server.address().port}`);
});
