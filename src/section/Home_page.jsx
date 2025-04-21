import React from 'react'
import bg from "../../images/BG.png"
import Banner from './Banner'

const Home_page = () => {
     return (
          <div className='min-h-screen bg-cover bg-center bg-no-repeat'
               style={{ backgroundImage: `url(${bg})` }}>
                    <Banner/>
          </div>
     )
}

export default Home_page