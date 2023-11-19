import React from 'react'
import new1 from './assets/news/news1.png'
import new2 from './assets/news/news2.png'
import new3 from './assets/news/news3.png'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function LatestEvent() {
  return (
    <section className='w-full flex flex-col items-center py-24'>
        <span className="section-tab">
            LATEST EVENTS
        </span>
        <h2 className='gradient-color py-2'>最新活動</h2>
        <div className="news-wrapper flex gap-6 max-w-7xl flex-col lg:flex-row p-5 lg:p-0">
            <div className="main-news-container w-full lg:w-1/2">
                <img src={new1} alt="" className='object-cover w-full h-4/5 rounded-lg'/>
                <div className="h-1/2">
                    <span className="news-date text-text-secondary text-sm">2023/12/26</span>
                    <h4 className='text-xl font-bold'>參與台北寵物論壇，爭取貓咪友善環境</h4>
                    <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
                </div>
            </div>
            <div className="more-news-wrapper flex flex-col w-full lg:w-1/2 gap-5 lg:gap-2">
                <div className="more-news-container flex gap-2">
                    <img src={new2} alt="" className=' object-cover w-1/3 lg:h-full rounded-lg'/>
                    <div className="more-news-text-content flex flex-col">
                        <span className="news-date text-text-secondary text-sm">2023/12/24</span>
                        <h4 className='text-xl font-bold'>掃街模式開啟！帶著你的貓耳，來和我一起走！</h4>
                        <p>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</p>
                    </div>
                </div>
                <div className="more-news-container flex gap-2">
                    <img src={new3} alt="" className='object-cover w-1/3 lg:h-full rounded-lg'/>
                    <div className="more-news-text-content flex flex-col">
                        <span className="news-date text-text-secondary text-sm">2023/12/24</span>
                        <h4 className='text-xl font-bold'>收容所模特兒大比拼！</h4>
                        <p>今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
                    </div>
                </div>
                <div className="more-news-container flex gap-2">
                    <img src={new1} alt="" className='object-cover w-1/3 lg:h-full rounded-lg'/>
                    <div className="more-news-text-content flex flex-col">
                        <span className="news-date text-text-secondary text-sm">2023/12/26</span>
                        <h4 className='text-xl font-bold'>參與台北寵物論壇，爭取貓咪友善環境</h4>
                        <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！</p>
                    </div>
                </div>
                <div className="pt-3">
                    <button>
                        查看更多<AiOutlineArrowRight size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
