//

const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const { getFilms, getFilmById } = require("../services/films.dal");

router.get("/", async (req, res) => {
  let films = await getFilms();
  if (films.length > 0) res.render("films.ejs", { films });
  else res.render("nodata");
});

router.get("/:id", async (req, res) => {
  let film = await getFilmById(req.params.id);
  if (film.length > 0) res.render("filmdetails.ejs", { film });
  else res.render("nodata");
});

module.exports = router;
