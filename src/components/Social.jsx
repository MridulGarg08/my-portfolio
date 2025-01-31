import React from 'react'
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socials=[
  {
    id:1,
    child:(
      <>LinkedIn <FaLinkedin size={25}/></>
    ),
    href:"https://www.linkedin.com/in/mridul-garg-40050a245/",
    style:"rounded-tr-md"
  },
  {
    id:2,
    child:(
      <>Github <FaGithub size={25}/></>
    ),
    href:"https://github.com/MridulGarg08/"
  },
  {
    id:3,
    child:(
      <>Mail <HiOutlineMail size={25}/></>
    ),
    href:"mailto:gargmridul0808@gmail.com",
  },
  {
    id:4,
    child:(
      <>Resume <BsFillPersonLinesFill size={25}/></>
    ),
    href:"/Mridul_Resume.pdf",
    style:"rounded-br-md",
    download:true
  }
]


const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] fixed left-0 text-white'>
        <ul>
          {
            socials.map((item)=>(
              <li key={item.id} className={'flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300' + ' '+ item.style}>
                <a className='flex justify-between items-center w-full text-white' download={item.download} target='_blank' rel='noreferrer' href={item.href}>  {item.child}</a></li>
            ))
          }
        </ul>
    </div>
  )
}

export default Social