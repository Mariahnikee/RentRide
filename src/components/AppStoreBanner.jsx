import React from 'react'
import appstore from '../assets/website/app_store.png'
import playstore from '../assets/website/play_store.png'
import './AppStoreBanner.css'

function AppStoreBanner() {
  return (
    <div className="appstorebanner">
      <section className="background">
        <h2>Get Started with our app</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi neque
          nam sed quia!
        </p>
        <div className="app-buttons">
          <img src= {appstore} alt="Google Play" />
          <img src= {playstore} alt="App Store" />
        </div>
      </section>
    </div>
  )
}

export default AppStoreBanner;