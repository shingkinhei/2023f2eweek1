import React from "react";
import IconCLose from "./assets/icon_close.svg"
import policy1 from "./assets/policy_1.png";
import policy2 from "./assets/policy_2.png";
import policy3 from "./assets/policy_3.png";
import iconFacebook from "./assets/icon_facebook.svg";
import iconInstagram from "./assets/icon_instagram.svg";
import iconYoutube from "./assets/icon_youtube.svg";


export default function IssueModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 flex justify-center items-start lg:items-center overflow-scroll ">
      <div className="bg-white my-3 lg:my-0 h-auto lg:h-5/6 w-5/6 lg:w-4/5 box-border rounded-3xl p-8 flex flex-col gap-3 overflow-scroll">
        <div className="model-top-container flex flex-row justify-between">
          <h3 className="text-3xl font-bold">最新活動</h3>
          <img src={IconCLose} alt="" />
        </div>
        <div className="event-container flex flex-col lg:flex-row gap-5">
          <div className="event-cover-image w-full lg:w-1/3 flex-col flex gap-2">
            <img src={policy1} className="object-cover rounded-lg" alt="" />
            <div className="">
              <h3>為毛孩子謀福利！推動寵物醫療保障方案</h3>
            </div>
            <div className="flex flex-row items-center">
              <div className=" mr-3">分享</div>
              <div className="flex flex-1 gap-5 my-3">
                <img src={iconFacebook} alt="" className="h-6 w-6" />
                <img src={iconInstagram} alt="" className="h-6 w-6" />
                <img src={iconYoutube} alt="" className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="event-content flex-2 w-full lg:w-2/3 flex flex-col gap-5">
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
            <div className="more-event-wrapper bg-bg-color-theme-4 p-3 rounded-lg flex flex-col gap-2">
              <div className="">
                <h4 className="text-xl font-bold">更多政策議題</h4>
              </div>
              <div className="more-event-slide flex gap-2 flex-row">
                <div className="more-event-container flex flex-col w-1/3">
                  <img src={policy2} className="" alt="" />
                  <h3 className="font-bold">
                    打造休閒天堂！推廣寵物休閒與娛樂場所
                  </h3>
                </div>
                <div className="more-event-container flex flex-col w-1/3">
                  <img src={policy3} className="" alt="" />
                  <h3 className="font-bold">推廣寵物飼養教育，讓愛更加專業</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
