//

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Semester 3 QAP3 running on port ${PORT}`);
});

app.set("view engine", "ejs");

const filmsRouter = require("./routes/films");

app.use("/films", filmsRouter);

app.use((req, res) => {
  res.status(404).render("404");
});
