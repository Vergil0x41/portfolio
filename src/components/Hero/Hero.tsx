import type { FC } from 'react'
import "./Hero.scss"
import useHero from './useHero'
import BlackHole from './BlackHole'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next"
import avatar from '/src/images/avatar.jpg'

const Hero:FC = () => {

  const { t } = useTranslation()

  const { x, y, strength, handleMouseMove, isDesktop } = useHero()

  useEffect(() => {
  const disp = document.getElementById("displacement");
  if (disp) {
    disp.setAttribute("scale", String(strength));
  }
  }, [strength]);

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
    
      <div className="hero__grid" />

      {isDesktop && (
        <div
          className="hero__gravity"
          style={
            {
              "--x": `${x}px`,
              "--y": `${y}px`,
            } as React.CSSProperties
          }
        />
      )}

      <BlackHole x={x} y={y} isDesktop={isDesktop} />

      <div className="hero__content container">
        <img src={avatar} alt="" />
        <h1>{t('hero.author')}</h1>
        <p>{t('hero.developer')} | UX/UI</p>
        
      </div>

      <svg width="0" height="0">
        <filter id="warp">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="2"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="35" result="blur" />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="blur"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

    </section>
  )
}

export default Hero