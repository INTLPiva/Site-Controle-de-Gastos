import React, { useState, useEffect } from "react";
import './styles.css';
import { Chart } from "react-google-charts";
import { api } from '../../services/api'

const dataGanhos = [
    ["Data", "Ganhos", { role: "style" }]
];

const dataGastos = [
    ["Data", "Gastos", { role: "style" }]
]

export function Graficos() {
    
    const [ganhos, setGanhos] = useState([]);
    const [gastos, setGastos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        function getGanhosGastos() {
            
            api.get('/ganhos')
            .then(result => setGanhos(result.data))
            .then(ganhos.forEach(item => {
                dataGanhos.push([item.data, item.valor, "#735BF2"])
            }))
            .then(setTimeout(()=>{setLoading(false)}, 1000))

            api.get('/gastos')
            .then(result => setGastos(result.data))
            .then(gastos.forEach(item => {
                dataGastos.push([item.data, item.valor, "#BC0040"])
            }))
            .then(setTimeout(()=>{setLoading(false)}, 1000))

        }

        getGanhosGastos()

      }, [loading]);

      if(loading){
          return(
              <h1>Loading...</h1>
          )
      }

    return (
        <div className="container">

            <header>
                <div></div>
                <h1>Gráficos</h1>
                <div>
                    <a href="/">Ir para Home</a>
                </div>
            </header>
            
            <div className="containerGraficos">

                <div>        
                    <Chart
                        chartType="ColumnChart"
                        width="700px"
                        height="700px"
                        data={ dataGanhos }
                    />
                </div>

                <div>        
                    <Chart
                        chartType="ColumnChart"
                        width="700px"
                        height="700px"
                        data={ dataGastos }
                    />
                </div>

            </div>

        </div>
    )
}