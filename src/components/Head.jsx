import React from 'react'

function Head() {
  return (
    <div className='relative w-full h-auto sm:h-24 flex flex-col sm:flex-row justify-between sm:justify-between items-center p-4  border-base bg-background z-100 ' >
            <div className='flex justify-between w-full h-auto p-2 px-5 rounded-xl bg-base-lighter highlight-white hover:text-txt-depressed transition-all'>
               
                {/* logo */}
                <div>
                <h1 class="text-xl font-bold text-gray-900 dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-light-orange from-orange-500">Visualisation </span>Dashboard</h1>
                <h3 className='text-sm text-txt-depressed'>Made by Satyam</h3>
                </div>

                {/* profile icon */}
                <div className='w-full sm:w-auto flex items-center space-x-4 justify-between mt-4 sm:mt-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 cursor-pointer">
                      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>

                </div>
            </div>
            
        </div>
  )
}

export default Head
