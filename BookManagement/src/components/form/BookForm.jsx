import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
const BookForm = ({ book,handleSubmit}) => {
    
   const  [bookState,setBookState] = useState({
        name : book ? book.name : '',
        author :  book ? book.author : '',
        price  :  book ? book.price : ''
    })


   


    const handleChange = (e)=>{
     //   console.log(e.target)
        setBookState({
            ...bookState,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit =  (e)=>{
        e.preventDefault()
        handleSubmit({
             id : book ? book.id :  uuidv4(),
            date : new Date(),
            ... bookState
        })
       
       
       setBookState({
        name:'',
        author : '',
        price : ''
       })
    }

    const renderInputField = (label,placeholder,name,)=>(
        <div className='inputField'>
            <label>{label}</label>
            <input defaultValue={bookState[name]} onChange={handleChange} type="text" name={name} placeholder={placeholder}  />
        </div>
    )

   const disabledSubmit = !bookState.name || !bookState.author || !bookState.price

    return (
    <form onSubmit={onSubmit} className='form'>
        {renderInputField("book Name  ",'Enter name of book ...','name')}
        {renderInputField("book Author  ",'Enter name of author ...','author')}
        {renderInputField("book price  ",'Enter price of book ...','price')}
        <button disabled = {disabledSubmit}  className='btnForm' type='submit' > {book ? "update" : "submit"}</button>
    </form>
  )
}

export default BookForm