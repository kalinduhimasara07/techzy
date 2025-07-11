import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { auth, currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser();
  const { userId } = await auth();
  return (
    <header className='bg-white py-5'>
        <Container className='flex items-center justify-between text-lightColor'>
          <div className='w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0'>
            <MobileMenu />
            <Logo />
          </div>
          <HeaderMenu />
          <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
            <SearchBar />
            <CartIcon />
            <FavouriteButton />
            <ClerkLoaded>
              <SignedIn>
                <UserButton/>
              </SignedIn>
              {!user && <SignIn />}
            </ClerkLoaded>
          </div>
        </Container>
    </header>
  )
}

export default Header