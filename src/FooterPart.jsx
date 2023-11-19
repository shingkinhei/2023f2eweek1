import React from "react";
import iconFacebook from "./assets/icon_facebook.svg";
import iconInstagram from "./assets/icon_instagram.svg";
import iconYoutube from "./assets/icon_youtube.svg";

export default function FooterPart() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="flex gap-2 items-center">
            <div class="flex items-center justify-center h-10 w-10 rounded-full gradient-background">
              <span class="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-color">
              喵立翰 Miao LiHan
            </h3>
          </div>
          <div className="flex flex-1 gap-2 my-3">
            <div class="flex items-center bg-white justify-center rounded-full bg-w p-2">
              <img src={iconFacebook} alt="" className="h-6 w-6" />
            </div>
            <div class="flex items-center bg-white justify-center rounded-full bg-w p-2">
              <img src={iconInstagram} alt="" className="h-6 w-6" />
            </div>
            <div class="flex items-center bg-white justify-center rounded-full bg-w p-2">
              <img src={iconYoutube} alt="" className="h-6 w-6" />
            </div>
          </div>
          <p>© 2023 喵立翰 Miao Li-Han 版權所有</p>
        </div>
        <div className="footer-content gap-2">
          <h4 className="text-2xl font-bold">競選總部</h4>
          <p>
            辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓<br></br>
            電話：(02) 888-5678<br></br>
            電子郵件地址：meowoffice@linmeow.tw
          </p>
        </div>
      </div>
    </footer>
  );
}
