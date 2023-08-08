import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import BetterService from './BetterService'
import Services from './Services'
import Faqs from './Faqs'
import HireingNursing from './HireingNursing'
import NursingAssignment from './NursingAssignment/NursingAssignment'
import SimpleStep from './SimpleStep/SimpleStep'
import WhyStudent from './WhyStudent/WhyStudent'
import AsPerUniversity from './AsPerUniversity/AsPerUniversity'
import ProsCons from './ProsCons/ProsCons'
import AssignmentExpert from './AssignmentExpert/AssignmentExpert'
import Key from './Key/Key'
import StudentsLook from './StudentsLook/StudentsLook'
import Overview from './Overview/Overview'
import Blog from './Blog'

export default function Home() {
  return (
    <>
        <Banner/>
        <Overview/>
        <Key/>
        <AssignmentExpert/>
        <StudentsLook/>
        <NursingAssignment/>
        <SimpleStep/>
        <Services/>
        <Carousel/>
        <BetterService/>
        <WhyStudent/>
        <Blog/>
        <AsPerUniversity/>
        <ProsCons/>
        <HireingNursing/>
        <Faqs/>
    </>
  )
}
