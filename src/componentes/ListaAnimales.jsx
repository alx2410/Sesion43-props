export function ListaAnimales({ nombre, imagen }) {
  return (
    <div>
      <img src={imagen} alt={nombre} width="300" />
      <p>{nombre}</p>
    </div>
  )
}
