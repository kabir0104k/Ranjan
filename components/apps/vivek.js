import React, { Component } from 'react';
import ReactGA from 'react-ga4';

// Define the sub-components first
function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-transparent rounded-full">
                <img className="w-full h-auto" src="./images/logos/Kab.png" alt="Ranjan Kumar" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div><span className="font-bold">Rαηյαη Kumαr</span></div>
                <div className="font-normal ml-1"> <span className="text-green-600 font-extrabold">Security Researcher</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">A Passionate Cybersecurity Professional with a Focus on Offensive Security and Red Teaming <span className=" font-medium"></span> <u className=' cursor-pointer '> <a href="" target={"_blank"}></a> </u><a className='text-underline' href=''><u></u></a></li>
                <li className=" mt-3 list-building"> Bachelor's degree in Computer Science, with a strong foundation in Systems, Networks, and Application Security</li>
                <li className=" mt-3 list-time">Good at Finding and Fixing Security Problems in Android Apps and APIs by thinking like a Real Hacker<a href="" target="_blank" rel="noreferrer"> </a></li>
                <li className=" mt-3 list-star"> Hunting Bugs on Bugcrowd & Yogosha  Responsibly Breaking things to make the Internet safer</li>
            </ul>
        </>
    )
}

const Education = () => {
    return (
        <>
            <h2 className="text-xl font-bold text-white-400 mt-10 mb-4">🎓CERTIFICATIONS</h2>
            <ul className="list-outside text-yellow-300 space-y-4">
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/CEH%20V12_page-0001.jpg?raw=true"
                            className="text-teal-300 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🕵️‍♂️ CEH v12 (Certified Ethical Hacker)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eJPT_pages-to-jpg-0001.jpg?raw=true"
                            className="text-white-700 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🧑‍💻 eJPT (eLearnSecurity Junior Penetration Tester)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eCPPTv1_page-0001.jpg?raw=true"
                            className="text-purple-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🛡️ eCPPTv2 (Certified Professional Penetration Tester)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eWPTXv2_page-0001.jpg?raw=true"
                            className="text-green-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🌐 eWPTXv2 (Web Application Penetration Tester eXtreme)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/Dante-certificate_page-0001.jpg?raw=true"
                            className="text-red-700 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 DANTE (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/Zephyr_page-0001.jpg?raw=true"
                            className="text-pink-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 ZEPHYR (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/RastaLabs.jpg?raw=true"
                            className="text-cyan-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 RASTALABS (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
            </ul>
        </>
    );
};

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                SKILLS
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Network Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Web Application Pentesting</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> API Security Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Android Application Security</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> OWASP Top 10</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Vulnerability Scanning & Assessment</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> BlackBox Penetration Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Shell Scripting (Bash & PowerShell)</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">TOOLS</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">INTERESTS</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Nmap-005F6B?style=flat&logoColor=white&color=5B9AA0" alt="Nmap" />
                        <img className="m-1" src="https://img.shields.io/badge/Nessus-003366?style=flat&logoColor=white&color=4169E1" alt="Nessus" />
                        <img className="m-1" src="https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white" alt="Wireshark" />
                        <img className="m-1" src="https://img.shields.io/badge/BurpSuite-FF6F00?style=flat&logo=burpsuite&logoColor=white" alt="BurpSuite" />
                        <img className="m-1" src="https://img.shields.io/badge/SQLMap-black?style=flat&logoColor=white" alt="SQLMap" />
                        <img className="m-1" src="https://img.shields.io/badge/Metasploit-00BFFF?style=flat&logoColor=white" alt="Metasploit" />
                        <img className="m-1" src="https://img.shields.io/badge/Hydra-228B22?style=flat&logoColor=white" alt="Hydra" />
                        <img className="m-1" src="https://img.shields.io/badge/John_The_Ripper-8B0000?style=flat&logoColor=white" alt="John The Ripper" />
                        <img className="m-1" src="https://img.shields.io/badge/Hashcat-8A2BE2?style=flat&logoColor=white" alt="Hashcat" />
                        <img className="m-1" src="https://img.shields.io/badge/Netcat-696969?style=flat&logoColor=white" alt="Netcat" />
                        <img className="m-1" src="https://img.shields.io/badge/Nikto-A52A2A?style=flat&logoColor=white" alt="Nikto" />
                        <img className="m-1" src="https://img.shields.io/badge/Gobuster-483D8B?style=flat&logoColor=white" alt="Gobuster" />
                        <img className="m-1" src="https://img.shields.io/badge/OWASP_ZAP-0298C3?style=flat&logo=owasp&logoColor=white" alt="OWASP ZAP" />
                        <img className="m-1" src="https://img.shields.io/badge/TCP/IP-2E8B57?style=flat&logoColor=white" alt="TCP/IP" />
                        <img className="m-1" src="https://img.shields.io/badge/OSI_Model-556B2F?style=flat&logoColor=white" alt="OSI Model" />
                        <img className="m-1" src="https://img.shields.io/badge/IPv4/IPv6-191970?style=flat&logoColor=white" alt="IPv4/IPv6" />
                        <img className="m-1" src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/CTF_Challenges-7E57C2?style=flat&logoColor=white" alt="CTF Challenges" />
                        <img className="m-1" src="https://img.shields.io/badge/Bug_Hunting-BA55D3?style=flat&logoColor=white" alt="Bug Hunting" />
                        <img className="m-1" src="https://img.shields.io/badge/Course_Enrolling-8A2BE2?style=flat&logoColor=white" alt="Course Enrolling" />
                        <img className="m-1" src="https://img.shields.io/badge/Collecting_Certificates-9932CC?style=flat&logoColor=white" alt="Collecting Certificates" />
                        <img className="m-1" src="https://img.shields.io/badge/Goal:_Cloud_&_OffSec_Certs-6A5ACD?style=flat&logoColor=white" alt="Cert Goal" />
                        <img className="m-1" src="https://img.shields.io/badge/Cybersecurity_&_Cloud_Learning-4B0082?style=flat&logoColor=white" alt="Cyber & Cloud" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() { // Renamed function still renders the content for the 'projects' key
    const project_list = [
        {
            name: "NASA Hall Of Fame",
            date: "Feb 2025", // Note: Date seems to be in the future
            link: "https://media.licdn.com/dms/image/v2/D4D22AQErjaxvJ21fbQ/feedshare-shrink_2048_1536/B4DZUc86YIHYAo-/0/1739947485621?e=1748476800&v=beta&t=kZR2X25uau2lFCwSSi3lijdvgUstg7Q-e4UHbb36T9w",
            description: [
                "Acknowledged by NASA for responsible vulnerability disclosure and listed in their Hall of Fame.",
            ],
        },
        {
            name: "AIR CANADA Hall Of Fame",
            date: "Feb 2025", // Note: Date seems to be in the future
            link: "https://media.licdn.com/dms/image/v2/D4D22AQFzgtjtfwtDXQ/feedshare-shrink_2048_1536/B4DZUc86YmHAAo-/0/1739947485541?e=1748476800&v=beta&t=V7jWeAcfdXfIi3JcWkfRSnRcZQ7SzRdctZE5O_ODvK8",
            description: [
                "Earned a place in Air Canada's Hall of Fame for identifying and reporting critical security vulnerabilities.",
            ],
        },
        {
            name: "USGS Hall Of Fame",
            date: "Feb 2025", // Note: Date seems to be in the future
            link: "https://media.licdn.com/dms/image/v2/D4D22AQEzU0sO1iBFhg/feedshare-shrink_2048_1536/B4DZUnR0D8HwAo-/0/1740120736867?e=1748476800&v=beta&t=VxwiGo5VRjmO8TcT49S5yIv37-bFL78W-bcolgju9ds",
            description: [
                // Assuming this description was misplaced and belongs here, not the NASA one below.
                "Honored by the United States Geological Survey (USGS) for ethical hacking contributions.",
                // The original description seemed out of place: "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
            ],
        },
        {
            name: "SSA Hall Of Fame",
            date: "Mar 2025", // Note: Date seems to be in the future
            link: "https://github.com/kabir0104k/HackerHub/blob/main/Screenshot%20(122).png?raw=true",
            description: [
                // Assuming this description belongs here. The original repeated the NASA description.
                "Featured in the Social Security Administration (SSA) Hall of Fame for responsible disclosure.",
                // Original description: "Acknowledged by NASA for responsible vulnerability disclosure and listed in their Hall of Fame.",
            ],
        },
    ];

    const formatTitle = (str) => {
        const fullCaps = ['NASA', 'SSA', 'USGS', 'FBI', 'CIA', 'AIR CANADA']; // added AIR CANADA
        const words = str.split(' ');
        return words.map((word, index) => {
              // Check if the current word combined with the next forms a fullCaps entry
              if (index + 1 < words.length) {
                  const twoWords = `${word.toUpperCase()} ${words[index + 1].toUpperCase()}`;
                  if (fullCaps.includes(twoWords)) {
                      // Skip the next word by returning null, handle later
                      return word.toUpperCase(); // Return the first part
                  }
              }
               // Check if the previous word was part of a two-word entry
              if (index > 0) {
                  const prevTwoWords = `${words[index-1].toUpperCase()} ${word.toUpperCase()}`;
                  if (fullCaps.includes(prevTwoWords)) {
                    return word.toUpperCase(); // Return the second part
                  }
              }

              // Standard checks
              if (fullCaps.includes(word.toUpperCase())) return word.toUpperCase();
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .filter((word, index, arr) => { // Filter out the second word of two-word matches
              if (index > 0) {
                  const prevTwoWords = `${arr[index-1]?.toUpperCase()} ${word.toUpperCase()}`;
                  if (fullCaps.includes(prevTwoWords)) {
                      return true; // Keep the second word
                  }
              }
              // Check if the current word starts a two-word match
              if (index + 1 < arr.length) {
                  const twoWords = `${word.toUpperCase()} ${arr[index+1]?.toUpperCase()}`;
                  if (fullCaps.includes(twoWords)) {
                       return true; // Keep the first word
                  }
              }
               // Handle single word cases or non-matches
              if (index > 0) {
                 const prevWordSingleCheck = `${arr[index-1]?.toUpperCase()}`;
                 if (fullCaps.includes(prevWordSingleCheck)) {
                    // Don't filter if previous was a single match like NASA
                 } else {
                    // If previous wasn't a match, check if the current word is second part of a previous match (already covered)
                 }
              }

               // Default keep if not handled above
               // Need to refine the logic to avoid double filtering or keeping unnecessary words
              return true; // Simplified for now, might need more complex logic for edge cases
            })
            .join(' '); // Join the potentially modified/filtered words
    };

    // Placeholder for tag colors if needed later
    const tag_colors = {};

    return (
        <>
            {/* -------- SECTION HEADING CHANGED HERE -------- */}
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Hall Of Fame
            </div>

            {
                project_list.map((project, index) => {
                    // const projectNameFromLink = project.link.split('/'); // Not used
                    // const projectName = projectNameFromLink[projectNameFromLink.length - 1]; // Not used
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className="text-base md:text-lg mr-2">
                                        {formatTitle(project.name)} {/* Using formatTitle */}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, i) => {
                                            return <li key={i} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, i) => {
                                                // Make sure tag_colors[domain] resolves to a valid Tailwind color class part
                                                const colorClass = tag_colors[domain] || 'gray'; // Default color
                                                return <span key={i} className={`px-1.5 py-0.5 w-max border border-${colorClass}-500 text-${colorClass}-300 m-1 rounded-full`}>{domain}</span>;
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Achievements() {
    return (
        <div className="p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ubt-gedit-orange">GitHub</strong> Repo with Beginner Resources on <strong><a href="https://github.com/kabir0104k/CMD" target="_blank"><strong className="text-ubt-gedit-orange"><span class="text-green-500">CMD</span> </strong></a><a href="https://github.com/kabir0104k/PowerShell" target="_blank"><strong className="text-ubt-gedit-orange"><span class="text-green-500">PowerShell</span> </strong></a><a href="https://github.com/kabir0104k/Nmap" target="_blank"><strong className="text-ubt-gedit-orange"><span class="text-green-500">Nmap</span> </strong></a> </strong><strong></strong><strong></strong></li>
                <li>Published 3 Advanced <strong className="text-ubt-gedit-orange">TryHackMe</strong> Rooms 1 <a href="https://tryhackme.com/jr/tattletale1" target="_blank"><strong><span class="text-red-600">Hard</span> </strong></a>Challenge 1  <a href="https://tryhackme.com/jr/cybersentinelsUb" target="_blank"><strong><span class="text-orange-400">Medium</span> </strong></a> Challenge and 1 Comprehensive <a href="https://tryhackme.com/jr/owaspi1" target="_blank"><strong><span class="text-purple-500">Insane</span></strong> </a> Level Walkthrough</li>
                <li>Ongoing Development of New <strong className="text-ubt-gedit-orange">CTF</strong> Challenges across Multiple Platforms with additional Cybersecurity Content Coming Soon</li>
            </ul>
        </div>
    )
}


// Main Component
export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { }, // Default to an empty function or null
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />, // Key remains 'projects'
            "achievements": <Achievements />, // Assuming 'resume' id maps to Achievements component
            // "resume": <Achievements />, // If 'resume' id is used for Achievements link
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // Ensure the screen exists before trying to focus/set state
        if (this.screens[lastVisitedScreen]) {
             this.setState({
                 screen: this.screens[lastVisitedScreen],
                 active_screen: lastVisitedScreen
             });
            // focus last visited screen element - Optional, might cause issues if element isn't rendered yet
            // const elementToFocus = document.getElementById(lastVisitedScreen);
            // if(elementToFocus) {
            //    this.changeScreen(elementToFocus); // Call changeScreen to set state and focus
            // }
        } else {
            // Fallback if stored screen key is invalid
             this.setState({
                 screen: this.screens["about"],
                 active_screen: "about"
             });
        }
    }

    changeScreen = (e) => {
        // Determine the screen id, whether from event target or direct element pass
        const screen = e.id || e.target?.id; // Use optional chaining for target

        // Ensure screen is a valid key and exists in this.screens
        if (screen && this.screens[screen]) {
            // store this state
            localStorage.setItem("about-section", screen);

            // google analytics
             try {
                 ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: `View ${screen}` });
             } catch (error) {
                 console.error("GA Error:", error);
             }


            this.setState({
                screen: this.screens[screen],
                active_screen: screen
            });
        } else {
            console.warn(`Attempted to navigate to invalid screen: ${screen}`);
        }
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        // Note: The 'resume' id maps to the Achievements component based on the text content.
        // Ensure the key in this.screens matches the id used here if you want click/focus to work.
        // It seems 'achievements' might be the intended component/key, but the id is 'resume'.
        // For consistency, either change the id to 'achievements' or map 'resume' key in this.screens.
        // I'll keep the id 'resume' as per original code, assuming 'achievements' key is correct in componentDidMount.
        return (
            <>
                <div id="about" tabIndex={0} onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Ranjan" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Whoami</span>
                </div>
                <div id="education" tabIndex={0} onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ranjan' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Certifications</span>
                </div>
                <div id="skills" tabIndex={0} onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ranjan' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                {/* -------- NAV LINK TEXT CHANGED HERE -------- */}
                <div id="projects" tabIndex={0} onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ranjan's hacker section" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Achievements</span>
                </div>
                {/* This link has id 'resume' but text 'Achievements'. Ensure 'achievements' key exists in this.screens */}
                <div id="achievements" tabIndex={0} onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "achievements" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="" src="./themes/Yaru/status/achievements.svg" /> {/* Changed icon src potentially */}
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                {/* Desktop Sidebar */}
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                {/* Mobile Navbar Toggle */}
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1 cursor-pointer z-20">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                </div>
                 {/* Mobile Navbar Dropdown */}
                 {/* Added click handler to links inside mobile nav */}
                 <div className={`${this.state.navbar ? " visible animateShow z-30 " : " invisible absolute "} md:hidden text-xs bg-ub-cool-grey py-0.5 px-1 rounded-sm top-8 left-1 shadow border-black border border-opacity-20`}>
                     {this.renderNavLinks()}
                 </div>

                {/* Main Content Area */}
                <div className="flex flex-col w-full md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen pl-8 md:pl-0 pr-1 pt-1">
                    {/* Render the active screen component */}
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

// Helper function to render the component (optional, depends on usage)
export const displayAboutVivek = () => {
    return <AboutVivek />;
}