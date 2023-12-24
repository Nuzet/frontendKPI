import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Image from './components/Image'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/exercise1"
          element={
            <div>
              <Header />
              <Content />
              <Image />
            </div>
          }
        />
        <Route
          path='/exercise2'
          element={<CardContainer />}
        />
        <Route
          path='/'
          element={
            <div className='choose__exercise'>
              <Link to={'/exercise1'}>exercise1</Link>
              <Link to={'/exercise2'}>exercise2</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
