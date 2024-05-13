import React from 'react'

const Lists = (props) => {

    //function to display cake list (filterd and sorted) 
    const lowCalorieDessert = props.cakeList.filter((cake)=>{
        return (cake.calories < 500) ;
    }).sort((a ,b)=>{
        return (a.calories - b.calories) ;
    }).map((cake)=>{
        return(
            <li>
                {cake.title} - {cake.calories} cal
            </li>
        )
    })

  return (
    <ul>{lowCalorieDessert}</ul>
  )
}

export default Lists