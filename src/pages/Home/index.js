import React, { useState, useEffect } from 'react';
import { api } from '../../services/api'
import './styles.css';

import { Ganhos } from '../../components/Ganhos'
import { Gastos } from '../../components/Gastos'

export function Home() {

  const [valueGanho, setValueGanho] = useState();
  const [nomeGanho, setNomeGanho] = useState();
  const [dataGanho, setDataGanho] = useState();
  const [valueGasto, setValueGasto] = useState();
  const [nomeGasto, setNomeGasto] = useState();
  const [dataGasto, setDataGasto] = useState();
  const [user, setUser] = useState({ name: '', avatar: ''})
  const [ganhos, setGanhos] = useState([]);
  const [gastos, setGastos] = useState([]);

  async function handleAddGanho() {
    const newGanho = {
      nome: nomeGanho,
      valor: Number(valueGanho),
      data: dataGanho,
      id: Math.random()
    }

    await api.post('/ganhos', newGanho)
    window.location.reload()
  }

  async function handleAddGasto() {
    const newGasto = {
      nome: nomeGasto,
      valor: Number(valueGasto),
      data: dataGasto,
      id: Math.random()
    }

    await api.post('/gastos', newGasto)
    window.location.reload()
  }



  useEffect(() => {
    fetch('https://api.github.com/users/INTLPiva')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })

    fetch('http://localhost:3333/ganhos')
    .then(response => response.json())
    .then(data => {
      setGanhos(data)
    })

    fetch('http://localhost:3333/gastos')
    .then(response => response.json())
    .then(data => {
      setGastos(data)
    })
  }, []);

  return (
    <div className="container">
      <header>
        
        <div>
          <img src={user.avatar} alt="Foto de perfil" />
          <strong>{user.name}</strong>
        </div>

        <div>
            <a href="/Graficos">Ir para os gráficos</a>
          </div>
      </header>

      <hr></hr>

      <div className="colunas">

        <div className="divGanhos">
          <h1>Ganhos</h1>
          
          <input type="text" placeholder="Nome do ganho" onChange={e => setNomeGanho(e.target.value)}/>
          <input type="number" placeholder="Digite o valor" onChange={e => setValueGanho(e.target.value)}/>
          <input type="date" placeholder="dd-mm-yyyy" onChange={e => setDataGanho(e.target.value)} />

          <button type="button" onClick={handleAddGanho}>
            Adicionar
          </button>

          {
            ganhos.map(ganho => (
              <Ganhos
                key={ganho.data}
                nome={ganho.nome}
                value={ganho.valor}
                time={ganho.data}
              />
            ))
          }
        </div>

        <div className="divGastos">
          <h1>Gastos</h1>

          <input type="text" placeholder="Nome do gasto" onChange={e => setNomeGasto(e.target.value)}/>
          <input type="number" placeholder="Digite o valor" onChange={e => setValueGasto(e.target.value)}/>
          <input type="date" placeholder="dd-mm-yyyy" onChange={e => setDataGasto(e.target.value)} />

          <button type="button" onClick={handleAddGasto}>
            Adicionar
          </button>

          {
            gastos.map(gasto => (
              <Gastos
                key={gasto.data}
                nome={gasto.nome}
                value={gasto.valor}
                time={gasto.data}
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}
