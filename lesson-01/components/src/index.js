import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from "./Button"
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"

function soma(a ,b) {
    alert(a + b)
}

const App = () => {
    return (
        <div className="App">
           Olá mundo!
           <Button onClick={() => soma(10, 20)} name="Luiz Menezes"/>
           <ComponenteA>
               <ComponenteB>
                <Button onClick={() => soma(40, 20)} name="Aqui"/>
               </ComponenteB>
           </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)