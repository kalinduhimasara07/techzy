import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteButton = () => {
  return (
    <div>
      <Link href='/favourites' className='group relative'>
        <Heart className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
        <span className='absolute -top-1 -right-2 bg-shop_light_green text-white rounded-full px-1 text-xs'>0</span>
    </Link>
    </div>
  )
}

export default FavouriteButton
