import { useState } from "react"
import "./styles.css"

export default function App() {
  const [lado1, setLado1] = useState(0)
  const [lado2, setLado2] = useState(0)
  const [lado3, setLado3] = useState(0)
  const [triangleType, setTriangleType] = useState("")
  const [angles, setAngles] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
      setTriangleType(getTriangleType(lado1, lado2, lado3))
      setAngles(getTriangleAngle(lado1, lado2, lado3))
    } else {
      setTriangleType("Triângulo Inválido")
      setAngles("")
    }
  }

  const getTriangleType = (lado1, lado2, lado3) => {
    if (
      lado1 + lado2 < lado3 ||
      lado1 + lado3 < lado2 ||
      lado2 + lado3 < lado1
    ) {
      return "Triângulo Inválido"
    }
    if (lado1 === lado2 && lado2 === lado3) {
      return "Triângulo Equilátero"
    }
    if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Triângulo Isósceles"
    }
    return "Triângulo Escaleno"
  }

  const getTriangleAngle = (lado1, lado2, lado3) => {
    if (
      lado1 + lado2 < lado3 ||
      lado1 + lado3 < lado2 ||
      lado2 + lado3 < lado1
    ) {
      return ""
    }
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
    return [`Ângulos: ${firstAngle}°`, ` ${secondAngle}°`, ` ${thirdAngle}°`]
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h3>Insira os lados do triângulo:</h3>
          <label htmlFor="lado1">Lado 1:</label>
          <input
            value={lado1}
            onChange={(e) => setLado1(e.target.valueAsNumber)}
            type="number"
            pattern="[1-9]"
            id="lado1"
          />
          <br />
          <label htmlFor="lado2">Lado 2:</label>
          <input
            value={lado2}
            onChange={(e) => setLado2(e.target.valueAsNumber)}
            type="number"
            pattern="[1-9]"
            id="lado2"
          />
          <br />
          <label htmlFor="lado3">Lado 3:</label>
          <input
            value={lado3}
            onChange={(e) => setLado3(e.target.valueAsNumber)}
            type="number"
            pattern="[1-9]"
            id="lado3"
          />
        </div>
        <button className="btn">Testar</button>
      </form>
      <br />
      <h4>Lados: {lado1 + " " + lado2 + " " + lado3}</h4>
      <h4>{triangleType}</h4>
      <h4>{angles}</h4>
    </>
  )
}
