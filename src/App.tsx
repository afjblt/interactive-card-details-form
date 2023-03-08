import { FormEvent, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cards } from './components/Cards'
import { Form } from './pages/Form'
import { Thanks } from './pages/Thanks'
import './styles/global.css'

function App() {
  const [cardName, setCardName] =useState('Jane Applessed')
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [cvc, setCvc] = useState('000')

  function handleCardName(e: FormEvent<HTMLInputElement>) {
      let value = e.currentTarget.value
      value = value.replace(/\d/g, "")
      e.currentTarget.value = value
      setCardName(value)
  } 

  function handleCardNumber(e: FormEvent<HTMLInputElement>) {
      e.currentTarget.maxLength = 19
      let value = e.currentTarget.value
      value = value.replace(/\D/g, "")
      value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
      e.currentTarget.value = value
      setCardNumber(value)
  } 

  function handleDateMonth(e: FormEvent<HTMLInputElement>) {
      e.currentTarget.maxLength = 2
      let value = e.currentTarget.value
      value = value.replace(/\D/g, "")
      e.currentTarget.value = value
      setMonth(value)
  }

  function handleDateYear(e: FormEvent<HTMLInputElement>) {
      e.currentTarget.maxLength = 2
      let value = e.currentTarget.value
      value = value.replace(/\D/g, "")
      e.currentTarget.value = value
      setYear(value)
  }

  function handleCvc(e: FormEvent<HTMLInputElement>) {
      e.currentTarget.maxLength = 3
      let value = e.currentTarget.value
      value = value.replace(/\D/g, "")
      e.currentTarget.value = value
      setCvc(value)
  }

  return (
    <div className='flex max-sm:flex-col'>
      <Cards cardName={cardName} cardNumber={cardNumber} month={month} year={year} cvc={cvc} />
      <BrowserRouter>
            <Routes>
                <Route 
                  path="/" 
                  element={ <Form 
                    cardName={cardName}
                    handleCardName={handleCardName} 
                    cardNumber={cardNumber}
                    handleCardNumber={handleCardNumber} 
                    month={month} 
                    handleDateMonth={handleDateMonth} 
                    year={year} 
                    handleDateYear={handleDateYear}
                    handleCvc={handleCvc}
                  /> } 
                />
                <Route 
                  path='/thanks'
                  element={ <Thanks /> }
                />
            </Routes>
            
      </BrowserRouter>
    </div>
  )
}

export default App
