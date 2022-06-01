import { click } from "@testing-library/user-event/dist/click";
import Border from "./Border";
import BtnBox from "./BoxForBtn";
import Button from "./Button";
import Screen from "./Screen";
// import { useState } from "react";


const Calculator = () => {
    const btnValues = [
        ["C", 0, 1],
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, "+"],
        ["/", "*", "-"],
    ]
   function Click(btn) {
    console.log(btn)
   }



    return (
        <Border>
            <Screen />
            <BtnBox>
       
            {btnValues.flat().map((btn, i) => {
                return(
                    <Button 
                        key={i}
                        className={btn === "C" ? "clear" : null}
                        value={btn}
                        onClick={
                            Click(btn)
                        }
                       

                    />

                );
            

            })}

            </BtnBox>


        </Border>

    )
};

export default Calculator;