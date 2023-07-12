import { BookContext } from './context/BookContext'
import { useContext } from 'react'
import Book from './book'
const ListBook = () => {

  const {books , setBooks} =  useContext(BookContext)

  const handleremoveBook = (id)=>{
    setBooks(books.filter(book=>book.id!==id))

  }

  console.log(books)
  return (
    <div className='ListBook'>
        {books.length ? books.map(book=>(
          <Book deleteBook = {handleremoveBook} book = {book} key = {book.id} />
)) : (
          <p className='noData'> No books available , Please add some book! </p>
        ) }
    </div>
  )
}

export default ListBook