import React from "react";
import IconCLose from "./assets/icon_close.svg"
import new1 from "./assets/news/news1.png";
import new2 from "./assets/news/news2.png";
import new3 from "./assets/news/news3.png";
import iconFacebook from "./assets/icon_facebook.svg";
import iconInstagram from "./assets/icon_instagram.svg";
import iconYoutube from "./assets/icon_youtube.svg";


export default function EventModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 flex justify-center items-start lg:items-center overflow-scroll ">
      <div className="bg-white my-3 lg:my-0 h-auto lg:h-5/6 w-5/6 lg:w-4/5 box-border rounded-3xl p-8 flex flex-col gap-3 overflow-scroll">
        <div className="model-top-container flex flex-row justify-between">
          <h3 className="text-3xl font-bold">最新活動</h3>
          <img src={IconCLose} alt="" />
        </div>
        <div className="event-container flex flex-col lg:flex-row gap-5">
          <div className="event-cover-image w-full lg:w-1/3 flex-col flex gap-2">
            <img src={new1} className="object-cover rounded-lg" alt="" />
            <div className="">
              <h3>參與台北寵物論壇，爭取貓咪友善環境</h3>
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
                參與台北寵物論壇，爭取貓咪友善環境
              </h3>
              <span className="news-date text-text-secondary text-sm">
                2023/12/24
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <p>
                台北市 —
                今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。
              </p>
              <p>
                在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。
                喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。
                為了實現這一目標，喵力翰提出了一系列具體的政策建議。
              </p>
              <p>
                首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。
                在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。
                此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。
              </p>
              <p>
                他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。
                這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。
              </p>
            </div>
            <div className="more-event-wrapper bg-bg-color-theme-4 p-3 rounded-lg flex flex-col gap-2">
              <div className="">
                <h4 className="text-xl font-bold">更多活動</h4>
              </div>
              <div className="more-event-slide flex gap-2 flex-row">
                <div className="more-event-container flex flex-col w-1/3">
                  <img src={new2} className="" alt="" />
                  <h3 className="font-bold">
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </h3>
                </div>
                <div className="more-event-container flex flex-col w-1/3">
                  <img src={new3} className="" alt="" />
                  <h3 className="font-bold">
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
