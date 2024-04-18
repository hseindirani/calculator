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
            <div className="flex justify-between items-center mt-14 flex-wrap">
                <div className="sm:w-1/2 w-full">
                    <div className="flex items-center text-2xl font-black">
                        <input onChange={(e) => { setHeight(e.target.value) }} className="sm:w-[75%] w-fit sm:text-2xl text-base bg-transparent border-2 p-2 mr-3" placeholder="Enter Your Height"></input>
                        cm
                    </div>

                    <div className="flex items-center text-2xl font-black mt-5">
                        <input onChange={(e) => { setWeight(e.target.value) }} className="sm:w-[75%] w-fit sm:text-2xl text-base bg-transparent border-2 p-2 mr-3" placeholder="Enter Your Weight"></input>
                        kg
                    </div>

                </div>

                <div className="sm:hidden flex justify-center sm:w-1/2 w-full">
                    <button className="mt-5 rounded p-2 border-2 border-black hover:bg-black hover:text-white font-semibold" onClick={() => { submit() }}>Calculate</button>

                </div>

                {
                    bmi ?
                        <div className="sm:w-[45%] w-full text-center text-4xl font-bold sm:mt-0 mt-16">
                            Your bmi is {bmi}
                        </div>
                        : null
                }

                <div className=" sm:flex hidden justify-center  sm:w-[37.5%] w-fit">
                    <button className="mt-5 rounded p-2 border-2 border-black hover:bg-black hover:text-white font-semibold" onClick={() => { submit() }}>Calculate</button>

                </div>

            </div>
        </div>
    )

}
