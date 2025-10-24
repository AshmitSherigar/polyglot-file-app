import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[8vh] px-12 border-gray-200 border-b-2">
        <h1 className="text-xl uppercase select-none">Polyglot App</h1>
        <div className="flex gap-10">
            <NavLink className={({isActive})=>(isActive ? "border-b" : "")} to={"/compress-file"}>Compress</NavLink>
            <NavLink className={({isActive})=>(isActive ? "border-b" : "")} to={"/convert-file"}>Convert</NavLink>
            <NavLink className={({isActive})=>(isActive ? "border-b" : "")} to={"/merge-file"}>Merge</NavLink>
            <NavLink className={({isActive})=>(isActive ? "border-b" : "")} to={"/combine-file"}>Combine</NavLink>
            <NavLink className={({isActive})=>(isActive ? "border-b" : "")} to={"/edit-file"}>Edit</NavLink>
        </div>
        <div className="flex gap-10">
            <button className="cursor-pointer" onClick={()=>alert("opens modal")}>Log in</button>
            <div className="select-none">|</div>
            <button className="cursor-pointer" onClick={()=>alert("opens modal")}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar