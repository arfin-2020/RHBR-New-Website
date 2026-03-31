import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroSection from './HeroSection'
import BiryaniIntroSection from './BiryaniIntroSection'
import MenuSection from './MenuSection'
import TalabatSection from './TalabatSection'
import VideoSection from './VideoSection'
import ReviewsSection from './ReviewsSection'
import Footer from './Footer'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const Home = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
        <HeroSection/>
        <BiryaniIntroSection/>
        <MenuSection/>
        <TalabatSection/>
        <VideoSection/>
        <ReviewsSection/>
        <Footer/>
    </>
    );
}

export default Home