import { NextPage } from 'next'
import styles from './mouse-move.module.scss'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const MouseMove: NextPage = () => {
  const timeline = gsap.timeline()
  const timeline2 = gsap.timeline()
  const cursor = useRef(null)
  const text = useRef(null)
  let posX = 0
  let posY = 0
  let mouseX = 0
  let mouseY = 0

  useEffect(() => {
    timeline.to(
      {},
      {
        repeat: -1,
        duration: 0.002,
        onRepeat: () => {
          posX += (mouseX - posX) / 10
          posY += (mouseY - posY) / 10
          timeline.set(cursor.current, {
            css: {
              left: posX - 125,
              top: posY - 125,
            },
          })
        },
      }
    )
    document.addEventListener('mousemove', (e) => {
      mouseX = e.pageX
      mouseY = e.pageY
    })
    //@ts-ignore
    timeline2.from(text.current?.children, {
      yPercent: 100,
      duration: 1,
      ease: 'power4',
      stagger: {
        each: 0.6,
      },
    })
    timeline2.from(cursor.current, {
      duration: 1.5,
      opacity: 0,
    })
  }, [])

  return (
    <>
      <div className={styles.content} ref={text}>
        <h1>starlight dream</h1>
        <h2>mind's eye</h2>
        <h2>heavy atoms</h2>
      </div>
      <div ref={cursor} className={styles['cursor-follow']}></div>
    </>
  )
}

export default MouseMove
