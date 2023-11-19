import React from 'react'
import Marquee from "react-fast-marquee";

export default function MarqueeBanner() {
  return (
    <Marquee className='flex bg-primary-color text-white px-1' autoFill='true'>
        <div className="marquee-text"><p>為喵星人，守護台灣！</p></div>
        <div className="marquee-text"><p>從喵的眼中，看見台灣</p></div>
        <div className="marquee-text"><p>喵的未來，人的希望</p></div>
    </Marquee>
  )
}
