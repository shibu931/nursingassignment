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

export default function Home() {
  return (
    <>
        <Banner/>
        <Key/>
        <AssignmentExpert/>
        <StudentsLook/>
        <NursingAssignment/>
        <SimpleStep/>
        <Services/>
        <Carousel/>
        <BetterService/>
        <WhyStudent/>
        <AsPerUniversity/>
        <ProsCons/>
        <HireingNursing/>
        <Faqs/>
    </>
  )
}
