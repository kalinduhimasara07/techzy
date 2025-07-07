import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href='/cart' className='group relative'>
        <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
        <span className='absolute -top-1 -right-2 bg-shop_light_green text-white rounded-full px-1 text-xs'>0</span>
    </Link>
  )
}

export default CartIcon
