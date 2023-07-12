import './App.css'
import Header from './components/Header'
import {Routes , Route} from "react-router-dom"
import ListBook from './components/ListBook'
import EditBook from './components/EditBook'
import AddBook from './components/AddBook'
import { BookProvider } from './components/context/BookContext'
function App() {
  
  return (
    <>
      <div className='container'> 
      <BookProvider>
        <Header/>
        <Routes>
            <Route path='/' element={ <ListBook/> } />
            <Route path='/add' element={ <AddBook/> } />
            <Route path='/edit/:id' element={ <EditBook/> } />
        </Routes>
        </BookProvider>
      </div>
    </>
  )
}

export default App
