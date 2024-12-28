"use client";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="bg-[#fff000]">
                <div>
                    <Navbar />
                </div>
                <div className="flex justify-center py-14">
                    <div className="mt-10">
                        <p className="text-md sm:text-xl lg:text-xl text-center font-light tracking-wide">The MS-EventSphere Experience OS: One platform for all of your B2B events</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-[73px] font-semibold text-center mt-5">Unlimited events for</h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-[73px] font-semibold text-center mt-3">limitless event professionals</h1>
                        <p className="text-md sm:text-xl lg:text-xl text-center mt-4 font-light tracking-wide">Raise the bar with software that is easy to</p>
                        <p className="text-md sm:text-xl lg:text-xl text-center mt-3 font-light tracking-wide">customize and built to boost event ROI year-round.</p>
                    </div>
                </div>
                <div className="w-full flex justify-center pb-10">
                    <div className="w-full lg:w-[55%] flex flex-col sm:flex-row sm:justify-center gap-3 px-7">
                        <input type="text" placeholder="Enter Your Email..." className="w-full sm:w-[70%] rounded-xl px-5 py-3" required />
                        <button className="w-[45%] sm:w-[30%] md:w-[20%] bg-black text-sm sm:text-sm text-white tracking-wide font-semibold px-7 py-4 sm:py-1 rounded-2xl hover:scale-95">Send Email</button>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-3xl sm:text-4xl font-bold mb-10">Sponsored By:</h1>
                </div>
                <div className="w-full flex justify-center pb-10">
                    <div className="w-[90%] sm:w-[90%] lg:w-[60%] bg-gray-100 rounded-lg">
                        <div className="flex justify-center gap-10 sm:gap-16">
                            <Image src="/Icons/amazon.png" width={90} height={30} alt="Logo img 1" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                            <Image src="/Icons/forbes.png" width={90} height={30} alt="Logo img 2" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                            <Image src="/Icons/hubspot.png" width={90} height={30} alt="Logo img 3" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                        </div>
                        <div className="flex justify-center gap-10 sm:gap-16 mt-5">
                            <Image src="/Icons/snowflake.png" width={90} height={30} alt="Logo img 4" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                            <Image src="/Icons/time.png" width={90} height={30} alt="Logo img 5" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                            <Image src="/Icons/wsj.png" width={90} height={30} alt="Logo img 6" className="w-[70px] h-[70px] sm:w-[150px] sm:h-[90px]"></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-full flex flex-col lg:flex-row gap-5 py-10 px-1 md:py-16 md:px-10">
                <div className="w-full lg:w-[50%] px-10">
                    <h1 className="text-4xl md:text-5xl font-semibold mt-3 md:mt-5">Powerful tech that’s easy to use</h1>
                    <p className="text-gray-600 text-md md:text-xl mt-3 md:mt-7">Streamline your most complex events with a full-scale, full-spectrum platform built to plan, promote, and produce.</p>
                    <ul>
                        <li className="text-gray-600 text-md md:text-xl mt-3 md:mt-5">Personalize attendee journeys with dynamic registration and multi-track agendas.</li>
                        <li className="text-gray-600 text-md md:text-xl mt-3 md:mt-5">Leverage a built-in event marketing suite, code-free templates, and integrations to fully customize the experience.</li>
                        <li className="text-gray-600 text-md md:text-xl mt-3 md:mt-5">Monitor event success indicators, engagement insights, and business outcomes.</li>
                    </ul>
                    <div className="mt-7">
                        <button className=" bg-black sm:text-md text-white font-semibold px-7 py-2 rounded-2xl hover:scale-95">Learn More</button>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-5 lg:w-[50%] lg:mt-0">
                    <Image src="/Images/PowerfulTechImg.png" width={300} height={300} alt="Powerful Tech Image" className="w-full sm:w-[650px]"></Image>
                </div>
            </div>

            <div className="bg-[#fff000] w-full flex flex-col-reverse lg:flex-row gap-5 py-10 px-1 md:py-16 md:px-10">
                <div className="w-full flex justify-center mt-5 lg:w-[50%] lg:mt-0">
                    <Image src="/Images/SalesPipelineImg.png" width={300} height={300} alt="Powerful Tech Image" className="w-full sm:w-[550px] sm:h-[480px]"></Image>
                </div>
                <div className="w-full lg:w-[50%] px-10">
                    <h1 className="text-4xl md:text-5xl font-semibold mt-3 md:mt-5">Build sales pipeline and prove event ROI</h1>
                    <p className="text-black text-md md:text-xl mt-3 md:mt-7">Convert your events into revenue-generating opportunities and improve time-to-value for sponsors and sales teams alike.</p>
                    <ul>
                        <li className="text-black text-md md:text-xl mt-3 md:mt-5">Connect events to your CRM so data can flow in real-time.</li>
                        <li className="text-black text-md md:text-xl mt-3 md:mt-5">Supply go-to-market teams with actionable intent data.</li>
                        <li className="text-black text-md md:text-xl mt-3 md:mt-5">Arm your exhibitors with smart lead capture tools.</li>
                    </ul>
                    <div className="mt-7">
                        <button className=" bg-black sm:text-md text-white font-semibold px-7 py-2 rounded-2xl hover:scale-95">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="bg-white w-full py-10 px-1 md:py-16 md:px-10">
                <div className="flex justify-center">
                    <Image src="/Icons/CommaIcon.svg" width={50} height={50} alt="Comma Icon" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"></Image>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-full md:w-[70%] lg:w-[60%] px-10 md:px-2">
                        <h1 className="text-xl sm:text-2xl md:text-4xl text-black font-serif tracking-wide">MS-EventSphere has everything we need all in one platform. We needed a partner to help us scale and grow as a company, and MS-EventSphere checks those boxes.</h1>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full md:w-[60%] px-10 md:px-2 mt-8">
                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <Image src="/Images/ManagerImg.png" width={50} height={50} alt="Manager Image" className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"></Image>
                            </div>
                            <div>
                                <h1 className="text-lg md:text-xl font-semibold tracking-wide">Alexis Fillon</h1>
                                <p className="text-sm md:text-lg text-gray-500">Senior Growth Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#fff000] w-full py-10 px-1 md:py-12 md:px-10">
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-center mt-7">The No.1-Rated event software</h1>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                        <div className="flex justify-center md:items-center gap-4 shadow-lg bg-white py-7 px-5 lg:py-6 md:px-6 rounded-xl">
                            <div className="flex justify-center">
                                <Image src="/Images/TopEventImg1.png" width={50} height={50} alt="Manager Image" className="w-[100px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px]"></Image>
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-semibold tracking-wide">Forrester Wave Leader</h1>
                                <p className="text-sm md:text-lg text-gray-600">B2B Event Management Technology, 2023</p>
                            </div>
                        </div>
                        <div className="flex justify-center md:items-center gap-4 shadow-lg bg-white py-7 px-5 lg:py-6 md:px-6 rounded-xl">
                            <div className="flex justify-center">
                                <Image src="/Images/TopEventImg2.png" width={50} height={50} alt="Manager Image" className="w-[100px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px]"></Image>
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-semibold tracking-wide">Inc. 5000 Honoree</h1>
                                <p className="text-sm md:text-lg text-gray-600">Top 25% Fastest-growing Private Companies, 2022</p>
                            </div>
                        </div>

                        <div className="flex justify-center md:items-center gap-4 shadow-lg bg-white py-7 px-5 lg:py-6 md:px-6 rounded-xl">
                            <div className="flex justify-center">
                                <Image src="/Images/TopEventImg3.png" width={50} height={50} alt="Manager Image" className="w-[100px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px]"></Image>
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-semibold tracking-wide">G2 Category Leader</h1>
                                <p className="text-sm md:text-lg text-gray-600">Event Management Platforms, Event Registration & Ticketing, and Webinars.</p>
                            </div>
                        </div>
                        <div className="flex justify-center md:items-center gap-4 shadow-lg bg-white py-7 px-5 lg:py-6 md:px-6 rounded-xl">
                            <div className="flex justify-center">
                                <Image src="/Images/TopEventImg4.png" width={50} height={50} alt="Manager Image" className="w-[100px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px]"></Image>
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-semibold tracking-wide">3X Winner Best Onsite Badging and Check-in Solution</h1>
                                <p className="text-sm md:text-lg text-gray-600">Event Technology Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center py-10 px-1 md:py-12 md:px-10">
                <Footer />
            </div>

        </div>
    )
}
