import FullHome from './Homepage/Home/FullHome'
import Footer from './Homepage/footer/footer' 
import Start from './Homepage/star/start'
import Driver from './Homepage/Truckdriver/truckdriver'
import WeAre from './Homepage/weare/weare'

export default function Home() {
  return (
    <div>
          <FullHome />

          <Driver />

          <WeAre />

          <Start />

          <Footer />
    </div>
  )
}
