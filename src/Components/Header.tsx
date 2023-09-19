import React, {useState} from 'react'
import logo from './../assets/Images/logo.png'
// import axios from 'axios'
import { 
  HiHome,
  HiMagnifyingGlass, 
  HiStar,
  HiPlayCircle,
  HiTv } from 'react-icons/hi2'
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem'


function Header() {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name:'HOME',
      icon: HiHome
    },
    {
      name : 'SEARCH',
      icon : HiMagnifyingGlass
    },
    {
      name : 'WATCH LIST',
      icon : HiPlus
    },
    {
      name : 'ORIGINALS',
      icon : HiStar
    },
    {
      name : 'MOVIES',
      icon : HiPlayCircle
    },
    {
      name : 'SERIES',
      icon : HiTv
    }
  ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover '/>
        <div className='hidden md:flex gap-8'>
        {
          menu.map((item, i) => 
            <HeaderItem name={item.name} Icon={item.icon}key={i} />
          )
        }
        </div>
        <div className='flex md:hidden gap-5'> {/* masih belum paham */}
          {menu.map((item, i) => i<3&&( 
            <HeaderItem name={''} Icon={item.icon}key={i} />)
          )}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
             <HeaderItem name={''} Icon={HiDotsVertical}/>
             {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
             {menu.map((item, i) => i>2&&( 
              <HeaderItem name={item.name} Icon={item.icon}key={i} />)
              )}
             </div> : null}
          </div>
        </div>
      </div>
      <img src='https://png.pngtree.com/element_pic/17/08/29/0c5705281baf0bc315e222dfd469e69e.jpg' className='w-[40px] rounded-full' />
    </div>
  )
}

export default React.memo(Header)
