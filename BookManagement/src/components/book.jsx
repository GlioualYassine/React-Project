import React from 'react'
import {useNavigate} from "react-router-dom"

const Book = ({book,deleteBook}) => {
    const {id , name , author , price , date  } = book
    const navigate = useNavigate()
    console.log(deleteBook)
    return (
    <div className='book'>
        <h2>{name}</h2>
        <div className="bookDetail">
            <p>Author : {author}</p> 
            <p>Price : {price}</p> 
            <p>Date : {new Date(date).toDateString()}</p> 

            <div className="buttons">
                <button onClick={()=>navigate(`/edit/${id}`)}  >Edit</button>
                <button onClick={()=>deleteBook(id)} >Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Book