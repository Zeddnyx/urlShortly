import Nav from './page/Nav'
import Home from './page/Home'
import Info from './page/InfoStatistic'
import Footer from './page/Footer'

function App() {

  return <div>
    <Nav />
    <div className='px-5 xl:px-20'>
      <Home />
      <Info />
    </div>
    <Footer />
  </div>
}
export default App
