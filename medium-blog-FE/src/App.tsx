import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Blog from "./pages/Blog"
import Header from "./components/Header"
import CreateBlog from "./pages/CreateBlog"
// import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <RecoilRoot> */}
            <Route path="/blog/:id" element={<Blog />} />
          {/* </RecoilRoot> */}
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
