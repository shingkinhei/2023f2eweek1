import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import Menu from './Menu'
import Advocate from './Advocate'
import Marquee from './MarqueeBanner'
import LatestEvent from './LatestEvent'
import PolicyIssue from './PolicyIssue'
import Donate from './Donate'
import Slogan from './Slogan'
import FooterPart from './FooterPart'

// import EventModal from './EventModal'
// import IssueModal from './IssueModal'
// import DonateModal from './DonateModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Menu/> */}
      <Banner/>
      <Marquee/>
      <Advocate/>
      <LatestEvent/>
      <PolicyIssue/>
      <Donate/> 
      <Slogan/>
      <FooterPart/>

      {/* <EventModal/>     */}
      {/* <IssueModal/>   */}
      {/* <DonateModal/> */}
    </>
  )
}

export default App
