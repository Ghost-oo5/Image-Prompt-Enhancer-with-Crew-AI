import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://alphabase.co/" className="hover:underline">Alphabase</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://alphabase.co/" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="https://alphabase.co/services" className="hover:underline me-4 md:me-6">Services</a>
        </li>
        <li>
            <a href="https://alphabase.co/blogs" className="hover:underline me-4 md:me-6">Blogs</a>
        </li>
        <li>
            <a href="https://alphabase.co/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer