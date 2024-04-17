import CalChoices from "../components/calculatorChoices";
import Header from "../components/header";


export default function Home() {
    return (
        <div className="sm:p-14 h-screen flex flex-wrap justify-center sm:items-center pt-32">
            <div className="md:w-[50%] sm:w-[70%]  w-full">
                <Header title={"Choose Calculator"}></Header>
                <CalChoices></CalChoices>
            </div>
        </div>
    )
}