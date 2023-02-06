import BgMobile from '../asset/images/bg-boost-mobile.svg'
import BgDesktop from '../asset/images/bg-boost-desktop.svg'
import Fb from '../asset/images/icon-facebook.svg'
import Twit from '../asset/images/icon-twitter.svg'
import Pint from '../asset/images/icon-pinterest.svg'
import Ig from '../asset/images/icon-instagram.svg'

export default function Footer() {
  const Li = props => <li className='text-gray hover:text-cyan'>{props.li}</li>

  return <div className={parent}>
    <div>
      <img className={img} src={BgMobile} alt="bg-boost-mobile" />
      <img className={img2} src={BgDesktop} alt="bg-boost-desktop" />

      <div className={divtextjmg}>
        <h1 className={h1}>Boost your links today</h1>
        <button className={btn}>Get Started</button>
      </div>
    </div>

    <footer className={footer}>
      <div className={divFooter}>
        <h1 className={footerH1}>Shortly</h1>

        <ol className={ol}>
          <h3 className={footerH3}>Features</h3>
          <Li li='link Shortening' />
          <Li li='Branded Links' />
          <Li li='Analytics' />
        </ol>

        <ol className={ol}>
          <h3 className={footerH3}>Resources</h3>
          <Li li='Blog' />
          <Li li='Developers' />
          <Li li='Support' />
        </ol>

        <ol className={ol}>
          <h3 className={footerH3}>Company</h3>
          <Li li='About' />
          <Li li='Our Team' />
          <Li li='Careers' />
          <Li li='Contact' />
        </ol>

        <div className={footerSosmed}>
          <img src={Fb} alt="fb" />
          <img src={Twit} alt="twit" />
          <img src={Pint} alt="pint" />
          <img src={Ig} alt="ig" />
        </div>

      </div>
    </footer>
  </div>
}
const parent = 'mt-20 xl:mt-36'
const img = 'w-full h-60 bg-darkViolet xl:hidden'
const img2 = 'w-full h-[200px] hidden bg-darkViolet xl:flex'

const divtextjmg = 'absolute flex flex-col items-center gap-4 font-pop text-center w-full -my-40 xl:-my-[140px]'
const h1 = 'text-xl'
const btn = 'py-2 bg-cyan rounded-full w-40 outline-none'

const footer = 'py-4 grid text-center bg-verDarkViolet'
const divFooter = 'grid gap-4 xl:grid-cols-5'
const footerH1 = 'font-pop text-3xl'

const ol = 'flex flex-col gap-2 my-3'
const footerH3 = 'font-pop text-md'

const footerSosmed = 'mt-10 flex justify-center gap-6 h-6'
