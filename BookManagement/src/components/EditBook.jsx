import React, { useContext } from 'react'
import BookForm from './form/BookForm'
import {useNavigate , useParams} from "react-router-dom"
import { BookContext } from './context/BookContext'
const EditBook = () => {

    const {id} = useParams()
    const {books , setBooks} =  useContext(BookContext)

    const bookToEdit = books.filter(book=>book.id === id)[0]
    console.log(bookToEdit)
    const navigate = useNavigate()


    const handleOnSubmit = (book)=>{
        const filtredBook = books.filter(book=>book.id !== id)
        setBooks([book , ...filtredBook ])
        navigate('/')
    }

  return (
    <div className='addForm'>
        <BookForm book = {bookToEdit} handleSubmit = {handleOnSubmit} />
    </div>
  )
}

export default EditBook