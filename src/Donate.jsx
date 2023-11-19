import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import DonateImage from "./assets/donate_image.png";
import MessageImage from "./assets/message_image.png";

export default function Donate() {
  return (
    <section className="w-full flex flex-col items-center py-24">
      <div className="donate-wrapper flex justify-between gap-6 max-w-7xl flex-col lg:flex-row p-5 lg:p-0">
        <div className="donate-content box-border flex flex-col gap-2 justify-between bg-primary-color w-full rounded-3xl p-10 lg:p-20">
          <div className="donate-text">
            <h2 className="text-white">小額支持喵喵</h2>
            <p className="text-white">
              您的小筆捐款，是每隻毛孩未來的大大動力！
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            <button>
              小額捐款
              <AiOutlineArrowRight size={20} />
            </button>
            <img src={DonateImage} alt="" className="w-48" />
          </div>
        </div>
        <div className="policy-content box-border flex flex-col gap-2 justify-between bg-text-primary w-full rounded-3xl p-10 lg:p-20">
          <div className="donate-text">
            <h2 className="text-white">民眾服務信箱</h2>
            <p className="text-white">
              親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            <button>
              填寫表單
              <AiOutlineArrowRight size={20} />
            </button>
            <img src={MessageImage} alt="" className="w-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
