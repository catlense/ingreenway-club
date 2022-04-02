import { useEffect, useState } from 'react'
import s from './header.module.scss'

const Banner = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(window.localStorage.flashVisible || true)
    console.log(visible)
  }, [])

  const hideBanner = () => {
    setVisible(false)
    window.localStorage.flashVisible = false
  }

  return(
    <div className={`${s.banner} ${visible === true ? s.bannerVisible : null}`}>
      
    </div>
  )
}

export default Banner