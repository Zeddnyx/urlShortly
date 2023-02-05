import Orang from '../asset/images/illustration-working.svg'

export default function Home() {

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
  </header>
}

const head = 'mt-20 z-10'
const divImg = 'w-80 mx-auto'

const divTextHead = 'mt-5 text-center font-pop flex flex-col gap-5'
const h1 = 'text-3xl text-veryDarkViolet'
const p = 'text-sm font-normal text-gray'
const btn = 'bg-cyan w-[170px] mx-auto py-4 rounded-full text-[#fff]'
