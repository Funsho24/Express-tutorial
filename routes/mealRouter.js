// const express = require('express')
// const router = express.Router();

const router = require("express").Router();
const {
  getAMeal,
  getAllMeals,
  createMeal,
  deleteMeal,
  updateMeal,
  getAboutPage,
  getHomepage,
} = require("../controller/mealController");


// get all meals
// router.get("/api/meals", getAllMeals);
//create a meal-
// router.post ("/api/meals", createMeal);
router.route("/api/meals").get(getAllMeals).post(createMeal)
// get a single meal

// update a meal
// find what we want to update - get sth
// provide what
// router.get("/api/meals/:mealId", getAMeal);
// router.patch("/api/meals/:mealId", updateMeal);
// router.delete("/api/meals/:mealId", deleteMeal);

router.route("/api/meals/:mealId").get(getAMeal).patch(updateMeal).delete(deleteMeal)

router.get("/", getHomepage);

router.get("/about", getAboutPage );
module.exports = router;
