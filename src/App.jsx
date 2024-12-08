
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'


// pages
import About from '../Pages/About'
import Details from '../Pages/Details'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Menu from '../Pages/Menu'
import Contact from '../Pages/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path='about' element={<About />}/>
      <Route path='menu' element={<Menu />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='foods/:id' element={<Details />}/>
    </Route>
  )
)

function App() {


  return <RouterProvider router={router} />
}

export default App
