import { useState } from "react";
import "./styles.css";
import Counter from "components/Counter/Counter";

function Lesson07() {

const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

// generic
// generic указывается при создании type или interface после названия
type CustomArrayType<T = string> = T[];

const numbersArray: CustomArrayType<number> = [2, 3];
const stringArray: CustomArrayType = ["2", "3"];

type CustomArrayTupelType<T = string> = [string, T];
const arrayMix1: CustomArrayTupelType = ['apple', "2"];
const arrayMix2: CustomArrayTupelType<number> = ['apple', 2];

// создание type с interface
// пример без дженерика
interface FriutsGeneric<T = string> {
    name: string, 
    weight: T
}

const fruits2: FriutsGeneric<number> = {
    name: "Apple",
    weight: 4
}

// пример с дженериком


// enum
enum Colors {Red, Black = 9, Green};
//console.log(Colors)
let color: Colors = Colors.Green;
console.log(color);

// switch case
enum WeathersCode {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (codeOfWeather: WeathersCode): string => {
    switch (codeOfWeather) {
      case WeathersCode.SQ:
        return "шквал";
      case WeathersCode.PO:
        return "пыльный вихрь";
      case WeathersCode.FC:
        return "торнадо";
      case WeathersCode.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WeathersCode.HZ:
        return "мгла (видимость менее 10 км)";
      case WeathersCode.FU:
        return "дым (видимость менее 10 км)";
      case WeathersCode.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WeathersCode.SS:
        return "песчаная буря (видимость менее 10 км) ";
    }
  };
  console.log(decode(WeathersCode.FC));


return <div>
        <Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} />
    </div>
}

export default Lesson07;