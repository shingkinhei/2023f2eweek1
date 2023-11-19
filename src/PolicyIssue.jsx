import React from 'react'
import policy1 from './assets/policy_1.png'
import policy2 from './assets/policy_2.png'
import policy3 from './assets/policy_3.png'

export default function PolicyIssue() {
  return (
    <section className='policy-issue-wrapper'>
        <span className="section-tab">
            POLICY ISSUES
        </span>
        <h2 className='gradient-color py-2'>政策議題</h2>
        <div className="policy-wrapper flex justify-between gap-6 flex-col lg:flex-row p-6 lg:p-0">
            <div className="policy-content flex flex-col gap-2 justify-between">
                <h3 className="policy-title text-2xl font-bold">為毛孩子謀福利！<br/>推動寵物醫療保障方案</h3>
                <img src={policy1} alt="" className='object-cover w-screen lg:h-64 lg:w-96 rounded-lg'/>
            </div>
            <div className="policy-content flex flex-col gap-2 justify-between">
                <h4 className="policy-title text-2xl font-bold">打造休閒天堂！<br/>推廣寵物休閒與娛樂場所</h4>
                <img src={policy2} alt="" className='object-cover w-screen lg:h-64 lg:w-96 rounded-lg'/>
            </div>
            <div className="policy-content flex flex-col gap-2 justify-between">
                <h4 className="policy-title text-2xl font-bold">推廣寵物飼養教育，讓愛更加專業</h4>
                <img src={policy3} alt="" className='object-cover w-screen lg:h-64 lg:w-96 rounded-lg'/>
            </div>
        </div>
    </section>
  )
}
