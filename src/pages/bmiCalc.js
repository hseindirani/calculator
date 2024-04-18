import BmiForm from "../components/bmiForm";
import Header from "../components/header";

export default function BmiCalc () {
    return(
        <div className="sm:p-20 p-5 pt-20">
            <Header title={"Bmi Calculator"}></Header>
            <BmiForm></BmiForm>
        </div>
    )
}