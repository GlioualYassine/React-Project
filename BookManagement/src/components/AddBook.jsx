import React, { useContext } from 'react'
import BookForm from './form/BookForm'
import {useNavigate} from "react-router-dom"
import { BookContext } from './context/BookContext'
const AddBook = () => {

    const {books , setBooks} =  useContext(BookContext)

    const navigate = useNavigate()
    const handleOnSubmit = (book)=>{
        setBooks([book , ...books])
        navigate('/')
    }

  return (
    <div className='addForm'>
        <BookForm handleSubmit = {handleOnSubmit} />
    </div>
  )
}

export default AddBook