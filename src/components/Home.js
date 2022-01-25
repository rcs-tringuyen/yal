import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
    return (
        <div>
            <main className="bg-white dark:bg-gray-800">
                <div className="mx-auto h-40 bg-white dark:bg-gray-800">
                <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">  
                    <div class="md:w-1/4 rounded-lg border-2 border-gray-500 p-6 mr-6">
                        <img
                            src="../profile.jpg"
                            alt=""
                            class="rounded-full p-4 h-60 mx-auto"
                        />
                        <h1 class="text-2xl text-gray-200 font-extrabold px-2 text-left">
                            Tri Nguyen
                        </h1>
                        <h2 class="text-xl text-gray-300 font-medium px-2 text-left pb-4">
                            @rcs-tringuyen
                        </h2>
                        <div className="w-7/8 bg-gray-200 rounded-full dark:bg-gray-700 ml-2">
                            <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{"width": "45%"}}> 45%</div>
                        </div>
                        <div>
                            <ul class="text-gray-500 text-left py-4 px-2 font-semibold">
                            <li>🕸 Web Developer</li>
                            <li>👨‍💻 Penetration Tester</li>
                            <li>✍ Occational Blogger</li>
                            </ul>
                        </div>
                        <footer class="text-left py-3 px-2 text-gray-500">
                            <button
                            class="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
                            >
                            FOLLOW
                            </button>
                        </footer>
                    </div>
                    <div class="md:w-3/4 rounded-lg border-2 border-gray-500 bg-gray-1000 p-6 mx-auto">
                        <GitHubCalendar username='rcs-tringuyen' style={{"opacity": "0.75"}} />
                    </div>
                </div>
                </div>
                
            </main>
        </div>
    )
}