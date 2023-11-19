import React from 'react'
import BannerCloud from './assets/banner_cloud.svg'
import BannerPerson from './assets/banner_person.png'

export default function Banner() {
  return (
    <div className="banner-wrapper flex flex-col">
      <h2 className="break-keep gradient-color text-center lg:w-full mt-24 text-8xl z-10">
        台灣的明天 喵先鋪路!
      </h2>
      <div className="flex justify-center flex-col lg:flex-row gap-4 items-center text-center w-full mt-4 z-5">
        <div className="section-tab">
          <p className="text-2xl font-semibold ">2024 立委參選人</p>
        </div>
        <div className="name-tag">
          <div class="name-number">
            <span>3</span>
          </div>
          <h3 className="name-text">喵立翰 Miao LiHan</h3>
        </div>
      </div>
      <img
        src={BannerPerson}
        className="banner-person"
        alt=""
      />
      <img
        src={BannerCloud}
        className="banner-cloud"
        alt=""
      />
    </div>
  );
}
