import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Home(){
    const history = useHistory()
    const orderPizza = () => {
        history.push('/pizza')
    }
    
    return(
        <div>
            <p>Your favorite foods delivered while you code<br></br>
            (Provided your favorite food is pizza)</p>
            <button onClick={orderPizza} id= 'order-pizza'> Pizza?</button>
        </div>
    )
}