import "./styles.css";
import { CounterProps } from "./type";
import Button from "components/Button/Button";
import { useState } from "react";




function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onButtonClick={onMinusClick}/>
      </div>
      <p>{countValue}</p>
      <div className="button-control">
        <Button name="+" onButtonClick={onPlusClick}/>
      </div>
    </div>
  );
}

export default Counter;
