import { Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<>Home</>}/>
        <Route path="/compress-file" element={<>Compress</>}/>
        <Route path="/convert-file" element={<>Convert</>}/>
        <Route path="/merge-file" element={<>Merge</>}/>
        <Route path="/combine-file" element={<>Combine</>}/>
        <Route path="/edit-file" element={<>Edit</>}/>
      </Routes>
    </div>
  )
}

export default App