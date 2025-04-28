import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Bio from './Bio'
import Motto from './Motto'
import Spesifikasi from './Spesifikasi'
import Review from './Review'
import Footer from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Bio />
    <Motto />
    <Spesifikasi />
    <Review />
    <Footer />
  </StrictMode>,
)
