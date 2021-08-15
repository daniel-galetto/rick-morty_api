import React, {useEffect, useState} from 'react'
import './Api.css';


const Api = () => {

  const [personajes,setPersonajes] = useState([])
    
    useEffect(() =>{
      document.title = 'first Api'
      datos()
    },[])
    
    const datos = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const character = await data.json()
      setPersonajes(character.results)
    } 
    
    let page = 1

    return (

      
      personajes.map( item => (
        
        <ul>
        
          <div></div>
       

          <div className="card" key={item.id}>

            <img src={item.image} alt={item.name}/>
              
            <h2><b>{item.name}</b></h2> 

            <div className="container">
              <p>Estado actual: {item.status}</p> 
              <p>Especie: {item.species}</p>
              <p>Genero: {item.gender}</p>
            </div>
          </div>

        
      </ul>
       ))

     
    )

}
export default Api
