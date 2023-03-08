import { FormEvent } from "react"
import { useNavigate } from "react-router-dom";

type FormProps = {
    cardName: string
    handleCardName: (e: FormEvent<HTMLInputElement>) => void;
    cardNumber: string
    handleCardNumber: (e: FormEvent<HTMLInputElement>) => void;
    month: string
    handleDateMonth: (e: FormEvent<HTMLInputElement>) => void;
    year: string
    handleDateYear: (e: FormEvent<HTMLInputElement>) => void;
    handleCvc: (e: FormEvent<HTMLInputElement>) => void;
}

export function Form({ 
    cardName,
    handleCardName,
    cardNumber,
    handleCardNumber, 
    month, 
    handleDateMonth,
    year,
    handleDateYear,
    handleCvc
}: FormProps) {   
    
    const date = new Date()
    const yearFormat = date.getFullYear().toString().slice(-2)

    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        if(cardName === 'Jane Applessed' || cardName === ' ') {
            e.preventDefault()
            alert('Digite seu nome corretamente como consta no cartão')
        } else if(cardNumber === ' ' || cardNumber === '0000 0000 0000 0000' || cardNumber.length < 19) {
            e.preventDefault()
            alert('Digite seu número corretamente como consta no cartão')
        } else if(month > '12' || month < '01' || year > yearFormat && year < '30') {
            e.preventDefault()
            alert('Data inválida')
        } else {
            e.preventDefault()
             navigate('/thanks')
        }

    }

    return(
        <div className="w-2/3 h-screen flex justify-center items-center max-sm:w-screen max-sm:h-2/3">
            <form className="flex flex-col text-xs w-72 mt-7 max-sm:w-80 max-sm:mt-28">
                    <label htmlFor="name" className="mb-1 tracking-[.1rem] text-[.65rem]">CARDHOLDER NAME</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="e.g Fernando Costa"
                        className="text-sm border-2 rounded-lg w-full p-2 mb-7 outline-none focus:ring-1 ring-[#580786] max-sm:mb-4"
                        onChange={handleCardName}
                        required 
                    />

                    <label htmlFor="cardNumber" className="mb-1 tracking-[.1rem] text-[.65rem]">CARD NUMBER</label>
                    <input 
                        type="text" 
                        id="cardNumber"
                        placeholder="e.g 0000 &#09;0000 &#09;0000 &#09;0000"
                        className="text-sm border-2 rounded-lg w-full p-2 mb-7 outline-none focus:ring-1 ring-[#580786] max-sm:mb-4" 
                        onChange={handleCardNumber}
                        required
                    />
                    <div className="w-full flex gap-4">
                        <div>
                            <label htmlFor="expDate" className="tracking-[.1rem] text-[.65rem]">EXP.DATE (MM/YY)</label>
                            <div className="mt-1 flex gap-2">
                                <input 
                                    type="text" 
                                    id="expDate" 
                                    placeholder="MM" 
                                    className="text-sm w-16 border-2 rounded-lg p-2 outline-none focus:ring-1 ring-[#580786]" 
                                    required
                                    onChange={handleDateMonth}
                                />
                                <input 
                                    type="text" 
                                    id="expDate" 
                                    placeholder="YY" 
                                    className="text-sm w-16 border-2 rounded-lg p-2 outline-none focus:ring-1 ring-[#580786]" 
                                    required
                                    onChange={handleDateYear}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvc" className="tracking-[.1rem] text-[.65rem]">CVC</label>
                            <input 
                                type="text" 
                                id="cvc"
                                placeholder="e.g 123" 
                                className="text-sm mt-1 p-2 border-2 rounded-lg w-full outline-none focus:ring-1 ring-[#580786]"
                                required
                                onChange={handleCvc}
                            />
                        </div>
                    </div>

                    <button type="submit" className="mt-10 bg-[#21092F] p-3 rounded-lg text-white text-base max-sm:mt-7" onClick={handleSubmit}>Confirm</button>
            </form>
        </div>
    )
}