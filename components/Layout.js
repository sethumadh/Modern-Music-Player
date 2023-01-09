import Navbar from "./Sidebar"
import Head from "next/head"

import Sidebar from "../components"

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className=" bg-gray-900 w-4 h-screen py-4 px-4 border rounded-xl ">
        {/* Sidebar component */}
        <Sidebar />
      </div>
      {children}
    </div>
  )
}

export default Layout
