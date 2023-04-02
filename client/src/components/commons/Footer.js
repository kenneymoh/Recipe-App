import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (

        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <div class=" max-w-screen-xl mx-auto p-4 md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between items-center">
            <a href="#" class="flex items-center mb-2 sm:mb-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLp9Qp1nCFdNV8Ss-Wx9LEamshScjedBAWBnON0BLVGlbElnLnG55zLoYBbpbMh431Go&usqp=CAU" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MY RECIPE</span>
            </a>
            <ul class="flex flex-wrap items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pl-10">
                <li className="mr-4 hover:underline md:mr-6">
              <NavLink to = '/about'>About Us</NavLink>
              </li>
                <li>
                <NavLink to = '/contact'>Contact Us</NavLink>
                </li>
            </ul>
        </div>

    </div>
</footer>

  )
}

export default Footer
