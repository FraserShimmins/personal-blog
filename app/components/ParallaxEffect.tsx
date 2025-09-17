'use client'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import DungeonEntrance from '../ui/DungeonEntrance';

export default function ParallaxEffect(){

    return (
        <Parallax pages={3} className="h-screen">
            
            <ParallaxLayer  
                offset={0} 
                factor={2}
                speed={0}                               // sky: farthest
                className="bg-fit bg-no-repeat bg-top" 
                style={{
                        backgroundImage: "url('/parallaxImages/Bg-imageLong.svg')",
            }}/>

            <ParallaxLayer  
                offset={0} 
                factor={2}
                speed={0.04}                               // far buildings
                className="bg-fit bg-no-repeat bg-top z-1" 
                style={{
                        backgroundImage: "url('/parallaxImages/City3.svg')",
            }}/>

            <ParallaxLayer  
                offset={0} 
                factor={2}
                speed={0.19} 
                className="bg-fit bg-no-repeat bg-top z-2" 
                style={{
                        backgroundImage: "url('/parallaxImages/City2.svg')",
            }}/>

            <ParallaxLayer  
                offset={0} 
                factor={2}
                speed={0.34}
                className="bg-fit bg-no-repeat bg-top z-3" 
                style={{
                        backgroundImage: "url('/parallaxImages/City1Long2.svg')",
            }}/>

            <ParallaxLayer  
                offset={1}
                factor={1}
                speed={0.49}                               // near buildings
                className="bg-fit bg-no-repeat bg-top z-4" 
                style={{
                        backgroundImage: "url('/parallaxImages/City0.svg')",
            }}/>
            
            <ParallaxLayer 
                offset={0} 
                factor={2}
                speed={0.15}  
                className="bg-cover bg-no-repeat bg-top z-15" 
                style={{
                        backgroundImage: "url('/parallaxImages/BottomImageTest.svg')",
            }}/>

            <ParallaxLayer 
                offset={0} 
                factor={2}
                speed={0.32}                               // house: very near 
                className="bg-cover bg-no-repeat bg-top z-10" 
                style={{
                        backgroundImage: "url('/parallaxImages/House.svg')",
            }}/>

            <ParallaxLayer 
                offset={0} 
                speed={0.36}                               // wires match balcony so they don't drift
                className="bg-cover bg-no-repeat bg-top z-9" 
                style={{
                        backgroundImage: "url('/parallaxImages/wire1.svg')",
            }}/>

            <ParallaxLayer 
                offset={0} 
                speed={0.36}                               // wires match balcony so they don't drift
                className="bg-cover bg-no-repeat bg-top z-8" 
                style={{
                        backgroundImage: "url('/parallaxImages/wire2.svg')",
            }}/>

            <ParallaxLayer 
                offset={0} 
                factor={3}
                speed={0.4}                               // balcony: closest  
                className="bg-cover bg-no-repeat bg-top z-11" 
                style={{
                        backgroundImage: "url('/parallaxImages/BalconyLong.svg')",
            }}/>

            
            <ParallaxLayer 
                offset={1} 
                speed={0}
                className="bg-cover bg-no-repeat bg-bottom z-100" 
                style={{
                        backgroundImage: "url('/parallaxImages/Fade-to-black.svg')",
            }}/>
            

            {/* “Section below” goes here */}
            <ParallaxLayer offset={2} speed={0}>
                <div className="flex flex-col items-center pt-30 text-3xl md:text-6xl gap-7 text-white">
                    <h1 className="text-center">Enter The Dungeon!</h1>
                    <DungeonEntrance href="/main"/>  
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};