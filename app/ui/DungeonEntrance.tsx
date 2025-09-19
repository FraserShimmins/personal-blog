"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface props {
  href: string;
}


export default function DungeonEntrance({ href }: props){

    const [open, setOpen] = useState(false);       // tracks whether grate is open or closed
    const [running, setRunning] = useState(false); // controls play state
    const [reset, setReset] = useState(false);     // resets animation so it can replay

    const animationClass = open ? "motion-translate-x-in-100" : "motion-translate-x-out-100";

    return (
        <div className="relative w-[6em] h-[6em]">
            <Link href={href} className="absolute inset-0 z-0">
                <Image src="/images/Entrance.svg" alt="Entrance" fill priority />
            </Link>
        
            <div
                className={["relative w-[6em] h-[6em] z-10", !reset && `${animationClass} motion-duration-700 motion-ease-in-out motion-fill-forwards`,
                    running ? "motion-running" : "motion-paused",
                ]
                .filter(Boolean)
                .join(" ")}
                // start running the current animation
                onMouseEnter={() => {
                    setRunning(true);
                }}
                onMouseDown={() => {
                    setRunning(true);
                }}
                // flip the "open" state when the animation finishes & reset animation so it can replay next hover
                onAnimationEnd={() => {
                    setOpen(!open);
                    setRunning(false);
                    setReset(true);
                    requestAnimationFrame(() => setReset(false));
                }}
                >
                <Image
                    src="/images/EntranceCover.svg"
                    alt="Logo"
                    fill
                    priority
                />
            </div>
        
        </div>
    );
};