import React from "react";
import 'normalize.css';
import data from "./data";
import DogCard from "./DogCard";
import './App.css'

export default function App(props) {
  const dogs = data.map(item => {
    return (
      <DogCard
        key={item.id}
        {...item}
      />
    );
  })

  return (
    <div className="row">
      {dogs}
    </div>
  )
}
