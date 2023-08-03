import React, { useEffect, useState } from "react";
import classes from "./Avaliable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvaliableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetching
    const fetchMeals = async () => {
      const responseData = await (
        await fetch("https://react-http-cd376-default-rtdb.firebaseio.com/meals.json")
      ).json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);

      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  // loading show message
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
