'use client'
import React, { useState } from 'react'
import Link from 'next/link';

const Generate = () => {
    const [link, setLink] = useState("");
    const [keyword, setKeyword] = useState("");
    const [generated, setGenerated] = useState("")
    const generateLink = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "keyword": keyword
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setLink("");
                setKeyword("");
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${keyword}`);
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }
    return (
        <>
            <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 lg:w-[80vw] lg:mx-auto mt-10 px-4 min-h-[85vh]">
                <div className="flex flex-col md:justify-baseline items-center md:items-baseline sm:mt-30 mt-10 gap-4 px-4">
                    <h2 className='md:text-3xl text-2xl font-semibold'>Generate your BitLink here</h2>

                    <input onChange={(e) => { setLink(e.target.value) }} value={link} className='md:w-100 w-[60%] min-w-[280px] px-4 py-2 border focus:border-gray-700 border-gray-700 rounded-xl' type="text" placeholder='Enter URL' />
                    <input onChange={(e) => { setKeyword(e.target.value) }} value={keyword} className='md:w-100 w-[60%] min-w-[280px] px-4 py-2 border focus:border-gray-700 border-gray-700 rounded-xl' type="text" placeholder='Enter keyword for bitlink' />

                    <button onClick={generateLink} disabled={link == "" || keyword == ""} className="bg-gray-800 disabled:bg-gray-500 text-white p-2 w-30 rounded-md cursor-pointer hover:font-bold">Generate</button>
                    {generated && <div className='px-2 flex flex-col gap-2'>
                    <h3 className='text-gray-800 font-bold text-lg'>Your Bit Link</h3>
                    <Link href={generated} target='_blank'><code className='text-gray-600 hover:text-gray-800 sm:text-md text-sm font-semibold'>{generated}</code></Link>
                </div>}
                </div>
                <div className="flex justify-center">
                    <img src="vector.png" className="w-full object-contain"  ></img>
                </div>
                
            </div>


        </>
    )
}

export default Generate
