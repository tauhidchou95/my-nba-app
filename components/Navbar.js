import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav class="bg-blue-400">
            <div class="px-8 mx-auto">
                <div class="flex justify-between">
                    <div class="flex space-x-6">
                        {/* this is the menu icon    */}
                        <a href="#" class="flex items-center ">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </a>
                        {/* this is the nba icon */}
                        <img class="w-20 h-20" src="https://cdn.nba.com/logos/nba/nba-logoman-75-word_white.svg" alt="NBA 75th Anniversary Logo" title="NBA 75th Anniversary Logo">
                        </img>
                        
                        <div class= "flex items-center space-x-6">
                            <Link href="/">
                                <a class="text-white">Home</a>
                            </Link>
                            <a class="text-white" href="">Games</a>
                            <a class="text-white" href="">Schedule</a>
                            <a class="text-white" href="">News</a>
                            <a class="text-white" href="">Watch</a>
                            <Link href="/players">
                                <a class="text-white">Players</a> 
                            </Link>
                            <Link href="/teams">
                                <a class="text-white">Teams</a>
                            </Link>
                        </div>     
                    </div> 
                    <a href="#" class="flex items-center">
                        <svg class="w-14 h-14 flex items-center space-x-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>    
                    </a>      
                </div> 
            </div> 
        </nav>
    )
}
