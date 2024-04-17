import { useState } from "react";

export default function BmiForm() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const submit = () => {
        const calc = weight / (height / 100) ** 2;
        setBmi(calc.toFixed(2))
        console.log(weight)
        console.log(height)
    }
    return (
        <div>
            <div className="flex justify-between items-center mt-14">
                <div className="sm:w-1/2 w-full">
                    <div className="flex items-center text-2xl font-black">
                        <input onChange={(e) => { setHeight(e.target.value) }} className="text-2xl bg-transparent border-2 p-2 mr-3" placeholder="Enter Your Height"></input>
                        cm
                    </div>

                    <div className="flex items-center text-2xl font-black mt-5">
                        <input onChange={(e) => { setWeight(e.target.value) }} className="text-2xl bg-transparent border-2 p-2 mr-3" placeholder="Enter Your Weight"></input>
                        kg
                    </div>
                </div>
                {
                    bmi ? 
                        <div className="sm:w-[45%] w-full text-center text-4xl font-bold">
                            Your bmi is {bmi}
                        </div>
                        : null
                }

            </div>
            <button className="mt-5 rounded p-2 border-2 border-black hover:bg-black hover:text-white font-semibold" onClick={() => { submit() }}>Calculate</button>
        </div>
    )

}