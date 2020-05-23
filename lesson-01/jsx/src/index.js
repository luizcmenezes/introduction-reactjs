import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a ,b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="teste">
            Luiz Menezes - Introdução ao ReactJS
            <h1>Soma: {sum(2,2)}</h1> 
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)