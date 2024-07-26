import { CepBox, Container, ContainerHome, Main } from './style'
import { useState } from 'react'
import axios from 'axios'

import { Header } from '../../components/header'

import { FaSearchLocation } from 'react-icons/fa'
import { BsDatabaseFillSlash } from 'react-icons/bs'

export function Home() {
  const [cep, setCep] = useState('')
  const [data, setData] = useState({})
  const [alert, setAlert] = useState('Digite o cep e clique em pesquisar!')
  const [loading, setLoading] = useState(false)

  const handleZipCodeEntrance = (e) => {
    setData({})
    const cep = e.target.value

    if (/[^0-9]/.test(cep)) {
      setAlert('Digite apenas números')
      setCep('')
    } else {
      setAlert('Clique em pesquisar!')
      setCep(cep)
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

      if (response.data.erro) {
        setAlert('Cep inválido, verifique o cep digitado!')
        setData({})
      } else {
        setData(response.data)
        setCep('')
      }
    } catch (error) {
      setAlert('Cep não encontrado!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerHome $data={data}>
      <Header />

      <Main>
        <Container>
          <CepBox>
            <article className="container-title">
              <h2>Encontre endereços pela plataforma Busca CEP</h2>
            </article>

            <article className="search-cep">
              <div>
                <input
                  type="text"
                  placeholder="Informe o cep"
                  maxLength="8"
                  inputMode="numeric"
                  pattern="\d{1,8}"
                  title="Por favor, insira um CEP válido com até 8 dígitos"
                  value={cep}
                  onChange={handleZipCodeEntrance}
                />
                <button onClick={fetchData}>
                  <FaSearchLocation />
                </button>
              </div>
            </article>

            <div className="container-data-cep">
              {Object.keys(data).length > 0 ? (
                Object.keys(data).map((key) => (
                  <div key={key} className="data-display-screen">
                    <p>{key.toUpperCase()}:</p>
                    <p>{data[key]}</p>
                  </div>
                ))
              ) : (
                <div className="noData-display-screen">
                  <BsDatabaseFillSlash />
                  {loading ? (
                    <span>Buscando cep...</span>
                  ) : (
                    alert && <span>{alert}</span>
                  )}
                </div>
              )}
            </div>
          </CepBox>
        </Container>
      </Main>
    </ContainerHome>
  )
}
