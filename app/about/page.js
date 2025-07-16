import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className='mx-auto md:w-[80vw] mt-10 px-4 md:min-h-[85vh] flex flex-col gap-5 font-semibold text-md text-gray-800 pb-4'>
            <p>
                BiltLinks is a modern and reliable URL shortener designed to make sharing links faster, cleaner, and more efficient. Whether you're sharing on social media, email, or print, BiltLinks helps you turn long, clunky URLs into short, memorable links that are easy to manage and track.
            </p>
            <p>

                Built for developers, marketers, and everyday users alike — BiltLinks empowers you to build smarter links that fit seamlessly into your digital workflow.


            </p>
            <p>
                No sign-up required — BiltLinks is a direct and hassle-free app that lets you start shortening links instantly, without creating an account.
            </p>
            <p>
                Start shortening. Start sharing. Start smarter — with BiltLinks.
            </p>
            <Link href="/generate">
                <button className="bg-gray-800 text-white p-2 w-30 rounded-md cursor-pointer hover:font-bold">Try BitLinks</button>
            </Link>
        </div>
    )
}

export default About
