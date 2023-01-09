import Link from "next/link"
import React from "react"
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineMicrophone,
  HiOutlineTrendingUp,
  HiOutlineDownload,
  HiOutlineMenuAlt1,
} from "react-icons/hi"

export default function Sidebar() {
  const links = [
    {
      icon: HiOutlineHome,
      name: "Home",
      link: "/",
    },
    {
      icon: HiOutlineSearch,
      name: "Search",
      link: "/",
    },
    {
      icon: HiOutlineHeart,
      name: "Heart",
      link: "/",
    },
    {
      icon: HiOutlineMicrophone,
      name: "Mic",
      link: "/",
    },
    {
      icon: HiOutlineTrendingUp,
      name: "Trend",
      link: "/",
    },
    {
      icon: HiOutlineDownload,
      name: "Download",
      link: "/",
    },
    {
      icon: HiOutlineMenuAlt1,
      name: "Menu",
      link: "/",
    },
  ]
  return (
    <div>
      <aside aria-label="Sidebar">
        <div className="py-4 px-3">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>
                  <a className="flex items-center p-2 text-base font-normal text-white rounded-lg outline-none  hover:shadow-white shadow-sm">
                    <span className="flex space-x-6 ml-3">
                      <link.icon color="white" className="w-5 h-5" />
                      {/* {link.name} */}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
