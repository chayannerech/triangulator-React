import { useState } from "react"
import "./styles.css"

export default function App() {
  const [sideA, setsideA] = useState(0)
  const [sideB, setsideB] = useState(0)
  const [sideC, setsideC] = useState(0)
  const [triangleType, setTriangleType] = useState("")
  const [angles, setAngles] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (sideA > 0 && sideB > 0 && sideC > 0) {
      setTriangleType(getTriangleType(sideA, sideB, sideC))
      setAngles(getTriangleAngle(sideA, sideB, sideC))
    }
  }

  const getTriangleType = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
      return "Triângulo equilátero"
    }
    if (
      lado1 + lado2 < lado3 ||
      lado1 + lado3 < lado2 ||
      lado2 + lado3 < lado1
    ) {
      return "Triângulo inválido"
    }
    if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Triângulo isósceles"
    }
    return "Triângulo escaleno"
  }

  const getTriangleAngle = (lado1, lado2, lado3) => {
    const firstAngle = Math.floor(
      Math.acos((lado2 ** 2 + lado3 ** 2 - lado1 ** 2) / (2 * lado2 * lado3)) *
        (180 / Math.PI)
    )
    const secondAngle = Math.floor(
      Math.acos((lado1 ** 2 + lado3 ** 2 - lado2 ** 2) / (2 * lado1 * lado3)) *
        (180 / Math.PI)
    )
    const thirdAngle = Math.floor(
      Math.acos((lado1 ** 2 + lado2 ** 2 - lado3 ** 2) / (2 * lado1 * lado2)) *
        (180 / Math.PI)
    )
    return [`${firstAngle}°`, `${secondAngle}°`, `${thirdAngle}°`]
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h3>Insira os lados do triângulo:</h3>
          <label htmlFor="lado1">Lado 1:</label>
          <input
            value={sideA}
            onChange={(e) => setsideA(e.target.valueAsNumber)}
            type="number"
            pattern="[0-9]"
            id="lado1"
          />
          <br />
          <label htmlFor="lado2">Lado 2:</label>
          <input
            value={sideB}
            onChange={(e) => setsideB(e.target.valueAsNumber)}
            type="number"
            pattern="[0-9]"
            id="lado2"
          />
          <br />
          <label htmlFor="lado3">Lado 3:</label>
          <input
            value={sideC}
            onChange={(e) => setsideC(e.target.valueAsNumber)}
            type="number"
            pattern="[0-9]"
            id="lado3"
          />
        </div>
        <button className="btn">Testar</button>
      </form>
      <br />
      <h4>Lados: {sideA + " " + sideB + " " + sideC}</h4>
      <h4>Tipo do triangulo: {triangleType}</h4>
      <h4>Ângulos: {angles}</h4>
    </>
  )
}
