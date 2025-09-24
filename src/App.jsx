import './App.css'
import { ListaAnimales } from './componentes/ListaAnimales' 
import { Fruta } from './componentes/Frutas' 
import { Dia } from './componentes/Dias.jsx'

function App() {
  const animales = [
    { nombre: "gato", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtvmzQm86PrdIUiq9QW-7bgJYXSi1hB2_cA&s" },
    { nombre: "perro", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kT6X-MBUjGNwq7On9w9alfyynLGGVAUImQ&s" },
    { nombre: "conejo", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2TN4Kx-Xd3eyijwUuIRvhPUJv6wo9vSQzw&s" }
  ]

  const frutas = ["durazno" , "fresa" , "mango"]

  const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ]

  return (
    <>
       <h1>Lista de Animales</h1>

      {animales.map((animal, index) => (
        <ListaAnimales 
          key={index} 
          imagen={animal.imagen} 
          nombre={animal.nombre} 
        />
      ))}

      <h2>Lista de Frutas</h2>
<ul>
  {frutas.map((fruta, index) => (
    <Fruta key={index} nombre={fruta} />
  ))}
</ul>

      <h2>Días de la Semana</h2>
      <ul>
        {dias.map((dia, index) => (
         <Dia key={index} nombre={dia} />
        ))}
      </ul>
    </>
  )
}

export default App
