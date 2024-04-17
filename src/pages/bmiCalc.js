import BmiForm from "../components/bmiForm";
import Header from "../components/header";

export default function BmiCalc () {
    return(
        <div className="p-20">
            <Header title={"Bmi Calculator"}></Header>
            <BmiForm></BmiForm>
        </div>
    )
}