import { useNavigate } from "react-router-dom";
export default function CalChoices(){
    const nav=useNavigate();
    const choices=[
        {
            title:"Normal Calculator",
            path:"normalcalc"
        },
        {
            title:"BMI Calculator",
            path:"bmicalc"
        }
    ]
    return(
        <div className="flex items-center flex-col mt-10 w-full  ">
            {
                choices.map((choice)=>(
                    <div onClick={()=>{nav(`/${choice.path}`)}} className="w-1/2 mb-3 cursor-pointer border-2 font-bold rounded-xl text-center p-3 hover:border-black">{choice.title}</div>
                ))
            }
        </div>
    )
}