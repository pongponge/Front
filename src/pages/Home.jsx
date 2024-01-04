import React from 'react'

import FavoriteProduct from '../components/home/FavoriteProduct';

function Home() {
  return (
    <>

      <main id="main">
        {/* ======= favoriteProduct Section ======= */}
        <FavoriteProduct></FavoriteProduct>
      </main>
    </>
  )
}

export default Home;