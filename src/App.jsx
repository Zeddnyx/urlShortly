import Nav from './page/Nav'
import Home from './page/Home'
import Info from './page/InfoStatistic'

function App() {

  return <div>
    <Nav />
    <div className='px-5 xl:px-20'>
      <Home />
      <Info />
    </div>
  </div>
}
export default App
