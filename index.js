const express = require("express");
const app = express();
const port = 3000;
const apiRouter = require("./routes/api");
const auth = require('./auth');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(auth.verifyApiKey);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/api",apiRouter);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
app.use(api.recupererVerbeAleatoirement);
