import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getFood, getOrder} from './store/action';
import './App.css'
import Orders from './components/Orders';

export default function App() {
  const food = useSelector(state => state.food);
  const dispatch = useDispatch();
  const order = (dish) =>{dispatch(getOrder(dish))}

useEffect(() =>{
  dispatch(getFood());
}, [dispatch]);

  return (
    <div className= "djanbolotov">
      <header>
          Добро пожаловать на сайт djanbolotov16!!!
      </header>
      <div className="container1">
          <div className="menu">
            {
              food.map((dish, index) =>{
                return <div onClick={() => order(dish)} className="menu_item" key={index}>
                  <h1>{dish.name}</h1>
                  <div className="image"><img src= {dish.image} alt="#"/></div>
                  <p>{dish.stoimost} сом</p>
                </div>
              })
            }
          </div>
          <div>
            <Orders/>
          </div>
      </div>
    </div>
  )
}
