"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

export default function Carrousel() {
    const images = [
        "/images/js.png",
        "/images/typescript.png",
        "/images/React.png",
        "/images/nextjs.png",
        "/images/python.png",
        "/images/tailwind.png",
        "/images/html.png",
        "/images/css.png",
    ]

    const FAST_DURATION = 25
    const SLOW_DURATION = 75

    const [duration, setDuration] = useState(FAST_DURATION)
    const [ref, { width }] = useMeasure()
    const xTranslation = useMotionValue(0)
    const [mustFinish, setMustFinish] = useState(false)
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        let controls
        let finalPosition = -width / 2 - 8

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false)
                    setRerender(!rerender)
                    xTranslation.set(0) // Reset position before restarting
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                
                onRepeat: () => {
                    // Reset position before each repeat to avoid jump
                    xTranslation.set(0)
                }
            })
        }

        return () => controls?.stop()
    }, [xTranslation, width, duration, rerender, mustFinish])

    return (
        <section className='py-8 overflow-hidden'>
            <motion.div 
                className='left-0 flex gap-10  lg:w-[1200px] clas' 
                ref={ref} 
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setMustFinish(true)
                    setDuration(FAST_DURATION)
                }}
            >
                {[...images, ...images, ...images,...images].map((item, idx) => (
                    <Card image={item} key={`${idx}-${item}`} />
                ))}
            </motion.div>
        </section>
    )
}