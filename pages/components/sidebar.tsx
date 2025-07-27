import Image from 'next/image'

export default function Sidebar() {
    return (

        <>
            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#contact-info"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Image className="rounded-full" src="/profile-pic.jpg" width={30} height={30}
                                       alt={"me fr"}></Image>
                                <span className="ms-3">William Wells</span>
                            </a>
                            <ul className="space-y-2 font-medium pl-4 text-sm">
                                <li>
                                    <a href="#education"
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Education</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience"
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Relevant Experience</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#other-work"
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Other Work</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects"
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tech-stack"
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Technology Stack</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <button onClick={() => {
                    document.getElementById('default-sidebar')?.classList.toggle('-translate-x-full');
                    document.getElementById('open-sidebar-icon')?.classList.toggle('hidden');
                    document.getElementById('close-sidebar-icon')?.classList.toggle('hidden');
                    }} type="button"
                        className="absolute top-4 right-0 translate-x-6 transform sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <Image id={"open-sidebar-icon"} className="bg-gray-50 rounded -hidden" src="/sidebar-right-svgrepo-com.svg" width={30} height={30}
                           alt={"me fr"}></Image>

                    <Image id={"close-sidebar-icon"} className="bg-gray-50 rounded -hidden hidden" src="/sidebar-left-svgrepo-com.svg" width={30} height={30}
                           alt={"me fr"}></Image>
                </button>
            </aside>
        </>

    )
}