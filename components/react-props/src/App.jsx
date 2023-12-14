import SiteContent from './components/SiteContent'
import SiteFooter from './components/SiteFooter'
import MainNavigation from './components/MainNavigation'
import './App.css'

export default function App() {
  return (
    <>
      <MainNavigation text='React App' link='https://react.dev/' />
      <SiteContent />
      <SiteFooter />
    </>
  )
}
