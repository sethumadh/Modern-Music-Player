import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Topbar = () => {
  const router = useRouter()
  const [search, setSearch] = useState("")
  return (
    <nav className="bg-gray-800">
      <form>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"></label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-gray-700 border rounded-l-lg "
            type="button"
          >
            <Link href={`/search/${search}`}>Search</Link>
          </button>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search ..."
              //   onMouseEnter={()=>{router.push(`/search/${search}`)}}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              value={search}
            />
          </div>
        </div>
      </form>
    </nav>
  )
}

export default Topbar
