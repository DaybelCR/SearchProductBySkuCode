import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/index"
import ProductDetailPage from "./pages/ProductDetailPage"


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:skuCode' element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
