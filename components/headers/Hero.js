import Navbar from "./Navbar";
import Button from "./Button";

const p1 = "I,m a fullstack developer who loves to create new innovative solutions";
const p2 = "I have a passion for creating and building things that solve problems for people";

export default function Hero() {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
            <div className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
                    <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">{p1}</h1>
                    <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">{p2}</p>
                    <Button href="#profile" pill variant="yellow" className="mt-14">Learn</Button>
                </div>
            </div>
        </div>
    );
}
