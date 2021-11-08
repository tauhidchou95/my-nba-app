import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div class="flex flex-col min-h-screen">
           <Navbar class="h-10"/>
           <div class="flex-1">
            { children }
           </div>        
           <Footer class="h-10"/>
        </div>
    )
}
