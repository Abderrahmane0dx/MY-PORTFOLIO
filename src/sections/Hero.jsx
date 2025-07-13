import AnimatedCounter from '../components/AnimatedCounter.jsx'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { words } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP (() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="images/bg.png" alt="background" />
        </div>
        <div className='hero-layout'>
            {/* LEFT: HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <div className="flex flex-col items-start text-left space-y-2">
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                Hello there<span className="text-primary"> !</span>
                            </h1>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 drop-shadow-lg">
                                It&apos;s Abderrahmane Benamara
                            </h1>
                        </div> 
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                        Hi, Iam Abderrahmane, a developer with a passion for code.
                    </p>
                    <Button 
                     className="md:w-80 md:h-16 w-60 h-12"
                     id="button"
                     text="See my work"
                    />
                </div>
            </header>

            {/* RIGHT: HERO */}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience/>
                </div>
            </figure>
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero
