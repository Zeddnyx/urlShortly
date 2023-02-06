import Brand from '../asset/images/icon-brand-recognition.svg'
import Detail from '../asset/images/icon-detailed-records.svg'
import Fully from '../asset/images/icon-fully-customizable.svg'
import BgMobile from '../asset/images/bg-boost-mobile.svg'
import BgDesktop from '../asset/images/bg-boost-desktop.svg'

export default function Info() {

  const InfoStats = props => {
    return <div className={`${card} ${props.self}`}>
      <div className={divImg}>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className={divText}>
        <h1 className={divH1}>{props.title}</h1>
        <article className={article}>
          {props.desc}
        </article>
      </div>
    </div>
  }

  return <section className={section}>
    <div>
      <h1 className={h1}>Advanced Statistics</h1>
      <article className={article}>
        Track how your links are performing acros
        the web with our advanced statistic dashboard.
      </article>
    </div>

    <div className={parentCard}>
      <InfoStats self='self-start' img={Brand} alt='icon-brand-recognition' title='Brand Recognition'
        desc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
      />
      <InfoStats self='self-center'img={Detail} alt='icon-detailed-records' title='Retailed Records'
        desc="Gain insight into who i clicking your links. Knowing when and where people engage with your content helps inform better decisions"
      />
      <InfoStats self='self-end' img={Fully} alt='icon-fully-customizable' title='Fully Customizable'
        desc="Improve brand awareness and content discoverability through costomizable links, supercharging audience engagement"
      />
    </div>
  </section>
}

const section = 'mt-36 text-center items-center flex flex-col'
const h1 = 'font-pop text-2xl my-3'
const article = 'px-3 text-gray'

const parentCard = 'grid grid-cols-1 xl:grid-cols-3 xl:gap-10 xl:h-[470px]'
const card = 'bg-[#eee] mt-20 rounded shadow-lg grid grid-cols-1 w-full place-items-center text-center'
const divImg = 'bg-darkViolet my-2 rounded-full p-5 w-20'

const divText = 'px-10 py-5'
const divH1 = 'font-pop text-xl py-2 text-veryDarkViolet'
