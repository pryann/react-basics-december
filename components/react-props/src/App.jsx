import SiteContent from './components/SiteContent'
import SiteFooter from './components/SiteFooter'
import MainNavigation from './components/MainNavigation'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter + 1), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <MainNavigation text='React App' link='https://react.dev/' version={2} />
      <SiteContent counter={counter} />
      <SiteFooter />
    </>
  )
}
