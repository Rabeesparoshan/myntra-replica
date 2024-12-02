import React, { useState } from 'react';


import Navbar from './Components/Navbar/Navbar.js';

import Categories from './Components/Catergories/Categories.js';
import ProductGrid from './Components/ProductGrid/ProductGrid.js';
import Footer from './Components/Footer/Footer.js';
import Cart from './Components/Rightnav/Cart.js';
import './App.css';
import Wishlist from './Components/Rightnav/Whishlist.js';
import Menpage from './Components/MenPage/menpage.js';
import Women from './Components/womenpage/women.js';
import Kid from './Components/kidspage/kid.js';
import HL from './Components/HLpage/HL.js';
import Beauty from './Components/beautypage/beauty.js'
import Studio from './Components/studiopage/studio.js';

const App = () => {
  const [contentState, setContentState] = useState("content");

  let wishlist = [];

  let contentPage = <>
    <Categories />    
    <ProductGrid />
    <Footer/>
  </>

  
  return (
      <>
        <Navbar changeState={setContentState}/>
        <div className="navebarFixedFixer"></div>
        {
          
          contentState == "content" ? contentPage :
          (contentState == "wishlist" ? <Wishlist wishlist={wishlist}/> : (
            contentState == "cart" ? <Cart/> : (
              contentState == "men" ? <Menpage wishlist={wishlist}/> : (
                contentState == "women" ? <Women/> : (
                  contentState == "kid" ? <Kid/> : (
                    contentState == "hl" ? <HL/> : (
                      contentState == "beauty" ? <Beauty/> : (
                        contentState == "studio" ? <Studio/> : null
                      )
                    )
                  )
                )
              )
            )
          ))

        }
      </>
  );
};

export default App;
