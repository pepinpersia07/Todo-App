import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Task</label>
        <input 
        autoFocus
        id='addItem'
        type="text" 
        placeholder='Add Task'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}/>
        <button type='submit'><FaPlus/></button>
    </form>
   
  )
}

export default AddItem