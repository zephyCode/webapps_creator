import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/landing_page_img.jpg';

const HomeContent = () => {
    const delay = (ms: number): Promise<void> =>
        new Promise(resolve => setTimeout(resolve, ms));

    const [welcomeText, setWelcomeText] = useState("");
    const [whatWeDo, setWhatWeDo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const typeLoop = async (fullText: string, setText: any) => {
            while (isMounted) {
                for (let i = 0; i <= fullText.length; i++) {
                    if (!isMounted) return;
                    setText(fullText.slice(0, i));
                    await delay(100);
                }
                await delay(1000);
                for (let i = fullText.length; i >= 0; i--) {
                    if (!isMounted) return;
                    setText(fullText.slice(0, i));
                    await delay(50);
                }
                await delay(500);
            }
        };

        typeLoop("Welcome! 👋", setWelcomeText);
        typeLoop(
            "From development to hosting, every step is taken care of. No worries.",
            setWhatWeDo
        );

        return () => {
            isMounted = false;
        };
    }, []);

    const getStartedBtnClickHandler = () => {
        navigate('/user/requirements');
    }

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-24 gap-8 pt-32"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Left Content */}
            <div className="bg-white/50 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-lg w-full max-w-2xl shadow-lg">
                <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    Create a webapp in minutes.
                </p>
                <p className="mb-2 text-base sm:text-lg text-gray-700 min-h-[2rem]">
                    No need to do anything — we'll handle it all for you.
                </p>
                <p className="mb-6 text-sm text-gray-700">
                    {whatWeDo || "\u00A0"}
                </p>
                <button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 w-full sm:w-auto" onClick={getStartedBtnClickHandler}>
                    Get Started
                </button>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left w-full max-w-md">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md min-h-[3rem]">
                    {welcomeText || "\u00A0"}
                </p>
                <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                    We help people bring their dream businesses to life.
                </p>
            </div>
        </div>
    );
};

export default HomeContent;