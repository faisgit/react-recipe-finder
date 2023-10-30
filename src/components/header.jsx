import React from 'react'
import Logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className="navbar bg-base-300 px-3 py-1">
  <div className="flex-1">
    <a className="btn btn-ghost btn-circle mr-3" href='/'>
       <img src={Logo} alt="" className='h-12 w-12 rounded-full'  />
    </a>
    <h1 className=' normal-case text-xl font-semibold'>Recipe Finder</h1>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
  </div>
  <img src="" alt="" />
</div>
  )
}
