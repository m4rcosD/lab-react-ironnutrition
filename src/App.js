import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search'
import foodsJson from './foods.json'
import Total from './components/Total';

function App() {
  
  const [foods, setFoods] = useState(foodsJson)
  const [showForm, setShowForm] = useState(false)
  const [checkoutData, setCheckout] = useState([])
  const [foodsCopy, setFoodsCopy] = useState(foodsJson)

  function handleClick(food, quantity){
    console.log('Click works')
    let checkoutFood = {
      name: food.name, 
      calories: food.calories,
      quantity: quantity
    }
    //updating the state
    setCheckout([checkoutFood, ...checkoutData])
  }

  function handleToggle() {
    setShowForm(!showForm)
  }


  function handleSubmit(event) {
    event.preventDefault()
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }
    setFoods([newFood, ...foods])

    setShowForm(false)
  }

  function handleSearch(event) {
    let word = event.target.value
    let filteredFoods = foods.filter((food) => {
      return food.name.includes(word)
    })
    setFoodsCopy(filteredFoods)

  }

  return (
    <div class="columns">
      <div class="column">
        <Search btnSearch={handleSearch} />
        {
         showForm ? <AddFood btnSubmit={handleSubmit} /> : <button onClick={handleToggle}>Show Form</button>
        }
        {
          foodsCopy.map((elem, i) => {
            return <FoodBox
              key={i}
              food={elem}
              btnClick={handleClick}
            />
          })
        }
      </div>
      <div class="column">
          <Total checkoutData={checkoutData} />
      </div>
      <h1>hey</h1>
    </div>
  );
}
export default App;
