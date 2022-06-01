import { click } from "@testing-library/user-event/dist/click";
import Border from "./Border";
import BtnBox from "./BoxForBtn";
import Button from "./Button";
import Screen from "./Screen";
import { useState } from "react";


const Calculator = () => {
    const btnValues = [
        ["C", 0, 1],
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, "+"],
        ["/", "*", "-"],
    ]
  
    const [screenValue, setScreenValue] = useState({
        sign: "",
        num: 0,
        res: 0,
    });

    const resetClickHandler = () => {


        setScreenValue({
            ...screenValue,
            sign: "",
            num: 0,
            res: 0,

            
        })

    };

    const addClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        console.log(value + screenValue.num)
    }

    const substractClickHandler = () => {

    }

    const multiplyClickHandler = () => {

    }

    const divideClickHandler = () => {

    }

    const numberClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setScreenValue({
            ...screenValue,
            sign: "",
            num: value,
            res: 0,

        })
        console.log(screenValue.num)

      

    }



    return (
        <Border>
            <Screen value={screenValue.num ? screenValue.num : screenValue.res}/>
            <BtnBox>
       
            {btnValues.flat().map((btn, i) => {
                return(
                    <Button 
                        key={i}
                        className={btn === "C" ? "clear" : null}
                        value={btn}
                        onClick={
                            btn === "C"
                                ? resetClickHandler
                                : btn === "+"
                                ? addClickHandler
                                : btn === "-"
                                ? substractClickHandler
                                : btn === "*"
                                ? multiplyClickHandler
                                : btn === "/"
                                ? divideClickHandler
                                : numberClickHandler

                        }
                       

                    />

                );
            

            })}

            </BtnBox>


        </Border>

    )
};

export default Calculator;