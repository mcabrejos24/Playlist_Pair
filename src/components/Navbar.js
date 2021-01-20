import React from 'react';

export default function Navbar() {
    
    return(
        <header className="w-full bg-black fixed z-10">
            <div className="h-20 flex  xl:px-36 lg:px-24 md:px-20 justify-center md:justify-between">
                <a href="/" className="self-center font-bold text-white text-xl">
                    Playlist Connect
                </a>
                <div className="hidden md:flex md:flex-row md:self-center md:font-light">
                    <a className="hover:underline text-white text-lg pr-4" href="/about-us">About Us</a>
                    <a className="hover:underline text-white text-lg px-4" href="/donate">Donate</a>
                    <a className="hover:underline text-white text-lg pl-4" href="/contact-us">Contact Us</a>
                </div>
            </div>
          </header>
    );
} 
