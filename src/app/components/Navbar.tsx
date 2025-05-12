"use client"

import { useNavAnimation } from '@/animations/NavbarAnimation'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Navbar = () => {

  useGSAP(() => {
    useNavAnimation()
  })

  return (
    <section className='navbar fixed opacity-0 top-14 w-full flex items-center justify-center px-10'>
        <div className='flex items-center justify-between max-w-7xl w-full'>
            <div className='flex items-center gap-10'>
                <div>JITTER</div>
                <div>Product</div>
                <div>Customers</div>
                <div>Templates</div>
                <div>Pricing</div>
            </div>
            <div>
                <button className='btn_primary'>Log in</button>
                <button className='btn_secondary'>Try for free</button>
            </div>
        </div>
    </section>
  )
}

export default Navbar