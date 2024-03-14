import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import {FaHouseUser} from "react-icons/fa"
import {FaRegistered} from "react-icons/fa"

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-gradient-to-r from-violet-300 via-indigo-300 to-violet-300 p-3">
        <Link to="/">
          <h1 className="text-xl sm:text-3xl flex flex-wrap">
            <span className="font-semibold">Urban</span>
            <span className="font-light flex">Nest
              <FaRegistered className="size-3"/>
            </span>
        </h1>
        </Link>
        
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder=" &#x1F50E; Search..."
            className="bg-gray-100 focus:outline-none rounded"
          />
        </form>
        <div className="hidden sm:flex flex-wrap items-center gap-3 ">
          <Button variant="secondary" size="sm">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="secondary" size="sm">
            <Link to="/about">About</Link>
          </Button>
          <Button variant="secondary" size="sm">
            <Link to="/profile">Profile</Link>
          </Button>
          <Button variant="secondary" size="sm">
            <Link className="items-center flex gap-2" to="/sign-in"><FaHouseUser /> Sign In</Link>
          </Button>

        </div>
      </div>
  )
}


