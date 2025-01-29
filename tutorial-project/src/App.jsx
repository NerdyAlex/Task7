// import { useEffect, useState } from "react";
// import searchIcon  from './search.svg'
// import './App.css';
// import MovieCard from "./MovieCard.jsx";
// //7649315f
// import logo from './assets/logo.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Fun from './Fun.jsx';
import Create from './Create.jsx';
import Sidebar from './Sidebar.jsx';
import Streak from './Streak.jsx'

function App() {
  // const [movies, setMovies] = useState([])
  // const [searchname, SetSearchname] = useState('')
  // const API_LINK = 'http://www.omdbapi.com/?apikey=7649315f'

  // const search = async (title) => {
  //   const rep = await fetch(`${API_LINK}&s=${title}`)
  //   const data = await rep.json()
  //   setMovies(data.Search)
  // }
  // const inputHandler = (e) => {
  //   SetSearchname(e.target.value)
  // }

   
  // useEffect(() => {
  //   search('Batman')
    
    
  // }, [])
  
  // let i = document.getElementById('i')
  // function input(){
  //   let newi = i.value
  //   document.getElementById('i').value = ''
  //   search(newi)
  // }
  // const movie1  = {
  //   "Title": "Batman v Superman: Dawn of Justice",
  //   "Year": "2016",
  //   "imdbID": "tt2975590",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"
  // }
  

  // return (
  //  <div className="app">
  //   <h1>MovieBox</h1>

  //   <div className="search">
  //     <input 
  //     id="i"
  //     type="text" 
  //     value={searchname}
  //     onChange={(e) => {inputHandler(e)}} 
  //     placeholder="Enter a movie name..."/>
  //     <img 
  //       src={searchIcon}
  //       alt="search" 
  //         onClick={input}
  //       />

  //   </div>

  //   {
  //     movies?.length > 0 ? 
  //             (<div className="container">                
  //               {
  //                 movies.map((movie) => (<MovieCard movie={movie}  />)
  //               )}
  //             </div>)
  //           :
  //           (
  //             <div className="empty">
  //               <h2>No Movies found</h2>
  //             </div>
  //           )

  //   }

  // </div>
 
  // )
  return(
    <>
      <Router>
        <div className="flex">
          <Sidebar />

        </div>

        <div className="flex-grow p-6">
          
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/fun" element={<Fun />} />
              <Route path='/create' element={<Create/>}/>
            <Route path='/streak' element={<Streak />} />
            </Routes>
          
        </div>
      </Router>
    </>
  )
}

export default App
