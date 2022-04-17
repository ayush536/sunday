import React from 'react'

const SortAndFilterButtons=({handleSort})=> {
  return (
    <div className='sortButtons'>
    <button onClick={()=> {handleSort('asc', 'name')}}>Sort by NAME Asc</button>
    <button onClick={()=> {handleSort('desc', 'name')}}>Sort by NAME Desc</button>
    <button onClick={()=> {handleSort('asc', 'age')}}>Sort AGE Asc</button>
    <button onClick={()=> {handleSort('desc', 'age')}}>Sort AGE desc</button>
</div>
  )
}

export default SortAndFilterButtons