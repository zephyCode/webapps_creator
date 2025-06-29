import { Route, Routes } from "react-router-dom"
import LeftSideNavigation from "./shared/ui_elements/LeftSideNavigation"
import Home from "./home/pages/Home"
import UserRequirements from "./home/pages/UserRequirements"

const App = () => {

  return (
    <>
      {/* <MainHeader/> */}
      <LeftSideNavigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/requirements" element={<UserRequirements/>}/>
      </Routes>
    </>
  )

}

export default App
