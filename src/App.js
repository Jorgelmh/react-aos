import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import michi from './michi.jpg'
import felih from './felih.jpg'
import JSConfetti from 'js-confetti'
import AOS from 'aos';

const App = () => {
  const [showYes, setShowYes] = useState(false)
  const [showNo, setShowNo] = useState(false)
  const jsConfetti = new JSConfetti()

  const firstDiv = useRef()
  const finalDiv = useRef()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='landing-view'>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='center-card'>
          <h1>Hola Jessi, te queria preguntar algo 👉👈</h1>
          <button onClick={() => firstDiv.current.scrollIntoView({ behavior: 'smooth' })} className='scroll-button'>Clickea aqui :3</button>
        </div>  
      </div>
      <div ref={firstDiv} className='landing-view'>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='center-card'>
          <h1>Quieres que te meta una hostia? 👊</h1>
          <div>
            <p>HAHA no mentira</p>
            <button onClick={() => finalDiv.current.scrollIntoView({ behavior: 'smooth' })} className='scroll-button'>Click me :3</button>
          </div>
        </div>
      </div>
      <div ref={finalDiv} className='landing-view'>
        {
          !showNo && !showYes ? (
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='center-card'>
            <h1>Quieres ser mi kjæreste? 💖 </h1>
            <p>(Como sea que se pronuncie eso xd)</p>
            <div className='disp-flex'>
              <button onClick={() => {
                setShowYes(true)
                jsConfetti.addConfetti()
              }} className='scroll-button'>Si 🥵</button>
              <button onClick={() => setShowNo(true)} className='scroll-button'>No 🤡</button>
            </div>
          </div>
          ) : (
            <>
              {
                showNo && (
                  <img className='image-response' src={michi} />
                )
              }
              {
                showYes && (
                  <img className='image-response' src={felih} />
                )
              }
            </>
          )
        }
      </div>
    </>
  )
}

export default App;
