import { useState } from 'react'
import Logo from '../asset/images/logo.svg'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Nav() {
  const [nav, setNav] = useState(false)
  const handleNav= () => setNav(!nav)

  const Li = props => <li className='font-bold font-pop text-gray hover:text-veryDarkViolet'>{props.li}</li>

  return <nav className={navbar}>
    <div className={div}>
      <div className='flex gap-5 items-center'>
        <img src={Logo} alt="Shortly" />
     
        <ul className='hidden md:flex gap-5'>
          <Li li='Feature' />
          <Li li='Pricing' />
          <Li li='Resource' />
        </ul>
      </div>

      <div className='hidden md:flex gap-5 font-pop'>
        <button>Login</button>
        <button className='w-36 py-2 bg-cyan rounded-full'>Sign Up</button>
      </div>

      <div onClick={handleNav} className={menu}>
      {!nav ? <FiMenu size='25' /> : <AiOutlineClose size='25' /> }
      </div>
    </div>
    <ul className={!nav ? `hidden` : `${ulMobile}` }>
      <Li li='Feature' />
      <Li li='Pricing' />
      <Li li='Resource' />
      <div className='h-[2px] w-60 mx-auto bg-grayViolet'></div>
      <div className='flex flex-col gap-3 font-pop items-center'>
        <button>Login</button>
        <button className='w-60 py-3 bg-cyan rounded-full'>Sign Up</button>
      </div>
    </ul>
  </nav>
}

const navbar = 'px-5 z-50'
const div = 'w-full top-0 left-0 fixed flex justify-between px-5 items-center py-3 bg-[#fff]'

const menu = 'text-gray md:hidden'
const ulMobile = 'md:hidden mt-20 flex flex-col gap-5 bg-darkViolet rounded-xl text-center py-10'