import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './app/Signin'
import Dashboard from './app/Dashboard'
import CreatePost from "./app/CreatePost";
import './App.css'

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
