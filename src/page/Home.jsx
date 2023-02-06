import { useState } from 'react'
import Orang from '../asset/images/illustration-working.svg'
import BgMobile from '../asset/images/bg-shorten-mobile.svg'
import BgDesktop from '../asset/images/bg-shorten-desktop.svg'

export default function Home() {
  const [link, setLink] = useState(false)
  const [dataInput, setDataInput] =  useState('')

  const handleForm = e => {
    e.preventDefault()

    if (dataInput.length == 0) {
      setLink(!link)
    } if (dataInput.length > 0) {
      setLink(false)
    }
  }
  return <header  className={head}>
    <div className={divImg}>
      <img src={Orang} alt="illustration-working" />
    </div>

    <div className={divTextHead}>
      <h1 className={h1}>More than just shorter links</h1>
      <p className={p}>Build your brand's recognition and
         get detaild insights on how your links are performing
      </p>
      <button className={btn}>Get Started</button>
    </div>

    <form className={form} onSubmit={handleForm}>
      <input className={!link ? `${input}` : `${inputErr}`} onChange={e => setDataInput(e.target.value)} 
        name='input' type="text" placeholder='Shorten a link here...' 
      />
      <label className={!link ? `hidden` : `inline text-red`} htmlFor="input">please add a link</label>
      <button className={btnInput} type="submit">Shorten It!</button>
    </form>
  </header>
}

const head = 'mt-20 z-10'
const divImg = 'w-80 mx-auto'

const divTextHead = 'mt-5 text-center flex flex-col gap-5'
const h1 = 'text-3xl text-veryDarkViolet font-pop'
const p = 'text-sm font-normal text-gray sm:px-12'
const btn = 'bg-cyan w-[170px] mx-auto py-4 font-pop rounded-full text-[#fff]'

const form = 'mt-20 bg-darkViolet flex flex-col gap-5 p-5 rounded-lg md:flex-row'
const input = 'p-3 bg-[#fff] text-gray rounded-lg outline-none md:w-full'
const inputErr = 'p-3 bg-[#fff] text-red border-2 border-red rounded-lg outline-none md:w-full'
const btnInput = 'bg-cyan text-[#fff] rounded-lg py-3 outline-none font-pop md:w-60'
