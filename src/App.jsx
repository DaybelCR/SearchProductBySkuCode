import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from "./components/Loader"
import Home from "./pages/index"
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"))
import "./App.css"

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:skuCode' element={
            <Suspense fallback={<Loader />}>
              <ProductDetailPage />
            </Suspense>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
