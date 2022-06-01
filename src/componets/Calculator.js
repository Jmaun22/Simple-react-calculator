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
        ["/", "*", "-", "="],
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



    const numberClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        if(screenValue.num === 0) {
            setScreenValue({
                ...screenValue,
                num: value,

            })

        } else {
            setScreenValue({
                ...screenValue,
                res: value

            })
        }

    
        console.log(screenValue.num)

      

    }
    const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setScreenValue({
            ...screenValue,
            sign: value,

        })
        console.log(screenValue.sign);

    }

    const equalClickHandler = () => {
        
        switch (screenValue.sign) {
            case "+":
                const add = Number(screenValue.num) + Number(screenValue.res);

                setScreenValue({
                    ...screenValue,
                    num: add,
                });

                
                break;
            case "-":
                const sub= Number(screenValue.num) - Number(screenValue.res);

                setScreenValue({
                    ...screenValue,
                    num: sub,
                });


                break;
            case "*":
                const multiply = Number(screenValue.num) * Number(screenValue.res);

                setScreenValue({
                    ...screenValue,
                    num: multiply,
                });

                break;
            case "/":
                const divide = Number(screenValue.num) / Number(screenValue.res);

                setScreenValue({
                    ...screenValue,
                    num: divide,
                });

                break;
        
            default:
                break;
        }


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
                                : btn === "+" || btn === "-" || btn === "*" || btn === "/"
                                ? signClickHandler
                                : btn === "="
                                ? equalClickHandler
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