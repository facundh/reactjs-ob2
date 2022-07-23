import React, { useState, useEffect } from 'react'

export const ClockFunction = () => {
    
  const [user, setUser] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Facundo',
    apellidos: 'Herrera'
  })

  const tick = () => {
    
    setUser({
        ...user,
        fecha: new Date(),
        user: user.edad += 1
    })
  }

 
//   console.log(timerID);

  useEffect(() => {
    document.title = `${new Date()}`
    console.log('actualizacion del componente');
    const timerID = setInterval(() => {
        tick()
    },1000);
    return () => {
        console.log('Componente va a desaparecer');
        document.title = 'Tiempo detenido'
        clearInterval(timerID)
    }
  },[]);

 

  return (
    <div>
        <h2>
         Hora Actual:
         {user.fecha.toLocaleTimeString()}
         </h2>
         <h3>{user.nombre} {user.apellidos}</h3>
         <h1>Edad: {user.edad}</h1>
    </div>
  )
}
