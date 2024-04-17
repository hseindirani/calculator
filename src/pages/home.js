import CalChoices from "../components/calculatorChoices";
import HomeHeader from "../components/homeHeader";

export default function Home() {
    return (
        <div className="sm:p-14 h-screen flex flex-wrap justify-center sm:items-center pt-32">
            <div className="md:w-[50%] sm:w-[70%]  w-full">
                <HomeHeader></HomeHeader>
                <CalChoices></CalChoices>
            </div>
        </div>
    )
}