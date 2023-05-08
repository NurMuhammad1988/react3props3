import React from 'react'
// import './Car.css'




function Car(props) {


    return (

        <div className='cars'>
            <h2 style={{color:"red"}}>Name: {props.name} </h2>
            <p>Number: {props.number} </p>
            <p>Color: {props.color} </p>

            <strong>Random : {Math.floor(Math.random() * 100)}</strong>

            <p>{10+10}</p>

            <p>{props.children}</p>

            {2 + 2}

        </div>

    )
}

export default Car;