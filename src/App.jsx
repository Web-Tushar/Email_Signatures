import React from 'react'
import Banner from './section/Banner'
import Buisness from './section/Buisness';
import EmailSection from './section/EmailSection';
import LifecycleManag from './section/LifecycleManag';
import Ultimatebranding from './section/Ultimatebranding';
import Home_page from './section/Home_page';

const App = () => {
  return (
    <div className='container '>
          <Home_page/>
           <Banner/>
           <Buisness/>
           <EmailSection/>
           <LifecycleManag/>
           <Ultimatebranding/>

    </div>
  )
}

export default App