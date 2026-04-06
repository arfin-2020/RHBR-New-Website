import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroSection from './HeroSection'
import BiryaniIntroSection from './BiryaniIntroSection'
import MenuSection from './MenuSection'
import TalabatSection from './TalabatSection'
import VideoSection from './VideoSection'
import ReviewsSection from './ReviewsSection'
import Footer from './Footer'






const Home = () => {
   
    return (
        <>
        <HeroSection/>
        <BiryaniIntroSection/>
        <MenuSection/>
        <TalabatSection/>
        <VideoSection/>
        <ReviewsSection/>
    
    </>
    );
}

export default Home