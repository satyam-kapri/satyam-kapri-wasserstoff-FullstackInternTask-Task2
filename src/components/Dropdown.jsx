import React from 'react'

function Dropdown({item2,item3,selectItem,setShowDropdown}) {
  return (
    
    <div class="absolute top-16 z-20 flex flex-col rounded-lg w-full max-w-36 p-2 bg-gray-950">
      
                         {/* menu items of dropdown */}
                        <div class="menu-item  hover:bg-zinc-900 cursor-pointer rounded-lg" onClick={()=>{selectItem(item2);setShowDropdown(false);}}>
                                <span class="menu-title ml-2 ">
                                {item2}
                                </span>
                        </div>
                        <div class="menu-item hover:bg-zinc-900 cursor-pointer rounded-lg" onClick={()=>{selectItem(item3);setShowDropdown(false);}}>
                                <span class="menu-title ml-2  ">
                                {item3}
                                </span>
                        </div>
          
    </div>
    
  
  )
}

export default Dropdown
