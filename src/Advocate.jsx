import React from 'react'
import advocateImage from "./assets/advocate_image.png";

export default function advocate() {
  return (
    <section className="advocate-wrapper">
      <div className="advocate-content">
        <div className=" bg-white p-10 flex-1 flex flex-col justify-between items-center rounded-t-3xl lg:rounded-l-3xl">
          <span className="section-tab">ADVOCATE</span>
          <h2 className="gradient-color py-2">候選人主張</h2>
          <h3 className=" font-bold text-2xl py-2">
            我堅信 ! 藉由推動更完善的
            <span className="text-primary-color">貓咪福利</span>
            和相關政策，更是間接地投資於
            <span className="text-primary-color">台灣的未來</span>。
          </h3>
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            <br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
        <div className="flex-1">
          <img
            src={advocateImage}
            className="object-cover w-full h-full rounded-b-3xl lg:rounded-r-3xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
