import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/NavBar/Navbar'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipecards from './components/Recipecards/Recipecards'
import SideBar from './components/SideBar/SideBar'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const [wantCook, setWantCook] = useState([])

  const handleWantCookItem = (item) => {
    const checkAlreadyAdded = wantCook.find(i => i.recipe_id === item.recipe_id)
    
    if (checkAlreadyAdded) {
      toast.error("Already added")
      return
    }
    const newCookItem = [...wantCook, item]
    setWantCook(newCookItem)

  }

  const [currentCook, setCurrentCook] = useState([])

  const handleWantCook = item => {
      const newItem = [...currentCook, item]
      setCurrentCook(newItem)

      setWantCook (prevItems => prevItems.filter(i => i.recipe_id !== item.recipe_id ))
  }


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='md:flex space-x-5'>
        <Recipecards handleWantCookItemProps={handleWantCookItem}></Recipecards>
        <SideBar wantCookProps={wantCook} handleWantCook = {handleWantCook} currentCook = {currentCook}></SideBar>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
