import React from "react";
import IconCLose from "./assets/icon_close.svg"
import DonateImage from "./assets/donate_image.png";



export default function DonateModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 flex justify-center items-start lg:items-center overflow-scroll ">
      <div className="bg-white my-3 lg:my-0 h-auto lg:h-5/6 w-5/6 lg:w-4/5 box-border rounded-3xl p-8 flex flex-col gap-3 overflow-scroll">
        <div className="model-top-container flex flex-row justify-between">
          <h3 className="text-3xl font-bold">小額捐款</h3>
          <img src={IconCLose} alt="" />
        </div>
        <div className="event-container flex flex-col lg:flex-row gap-5">
          <div className="event-cover-image w-full lg:w-3/5 flex-col flex gap-2 bg-bg-color-theme-3 box-border rounded-lg p-16">
            <div>
              <h3 className="text-3xl font-bold text-primary-color">
                您的小筆捐款
                <br />
                是每隻毛孩未來的大大動力！
              </h3>
              <h4>目前小額贊助總金額</h4>
              <span className="text-3xl font-bold">987,655,873</span>
            </div>
            <div className="box-border donate-image-container w-full flex items-center justify-center">
              <img src={DonateImage} ClassName="donate-image" alt="" />
            </div>
          </div>
          <div className="event-content flex-2 w-full lg:w-2/5 flex flex-col gap-5">
            <div className="">
              <h3 className="text-4xl font-bold text-primary-color">
                為毛孩子謀福利！推動寵物醫療保障方案
              </h3>
              <span className="news-date text-text-secondary text-sm">
                2023/12/24
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-bold">設立寵物醫療基金</h3>
              <p>每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用 </p>
              <h3 className="font-bold">提供醫療補助</h3>
              <p>
                每隻寵物每年可獲得高達新台幣
                20,000元的醫療補助，減輕飼主的經濟壓力
              </p>
              <h3 className="font-bold">合作動物醫院</h3>
              <p>目前已有和超過 200 家動物醫院進行初步的合作討論</p>
            </div>
            <div className="more-event-wrapper bg-bg-color-theme-4 p-3 rounded-lg flex flex-col gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
