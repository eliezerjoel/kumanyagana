'use client'
import { auth } from "@/auth"
import Link from "next/link"
import Logout from "./logout"
import Login from "./login"

const Navbar = async () => {
    const session = await auth()
    return(
        <nav className="bg-gray-800">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-white font-bold">Kumanyagana</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-400">Home</a>
              <a href="#" className="text-white hover:text-gray-400">About</a>
              <a href="#" className="text-white hover:text-gray-400">Contact</a>
            </div>
          </div>
        </nav>
    )
}
export default Navbar
// {/* <div><Link href="/"></Link></div>
//             <div>
//                 {!session?.user ? (<Login />) : (<Logout />)}
                
//                 <Link href="/dashboard">Dashboard</Link>
//             </div> */}



// <nav className="bg-gray-800">
//   <div className="container mx-auto flex justify-between items-center py-4">
//     <div className="flex items-center">
//       <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-3" />
//       <h1 className="text-white font-bold">Your Brand</h1>
//     </div>
//     <div className="hidden md:flex space-x-8">
//       <a href="#" className="text-white hover:text-gray-400">Home</a>
//       <a href="#" className="text-white hover:text-gray-400">About</a>
//       <div className="relative">
//         <button className="text-white hover:text-gray-400">Products</button>
//         <div className="hidden absolute top-full left-0 bg-white rounded-md shadow-md mt-2">
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product A</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product B</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product C</a>
//         </div>
//       </div>
//       <a href="#" className="text-white hover:text-gray-400">Contact</a>
//     </div>
//     <div className="md:hidden">
//       <button className="text-white hover:text-gray-400">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         </svg>
//       </button>
//     </div>
//   </div>
// </nav>
