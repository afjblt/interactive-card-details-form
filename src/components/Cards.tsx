import cardFrontImg from '../assets/bg-card-front.png'
import cardBackImg from '../assets/bg-card-back.png'
import cardLogoImg from '../assets/card-logo.svg'

type CardsProps = {
    cardName: string
    cardNumber: string
    month: string
    year: string
    cvc: string
}

export function Cards({ cardName, cardNumber, month, year, cvc }: CardsProps) {
    return(
        <div className="h-screen w-1/3 bg-[url('../assets/bg-main-desktop.png')] bg-no-repeat max-sm:bg-[url('../assets/bg-main-mobile.png')] max-sm:bg-no-repeat max-sm:h-1/3 max-sm:w-screen">
            <div className='mt-36 max-sm:mt-56'>
                <div className='absolute ml-[13rem] max-sm:ml-5 max-sm:top-[7.4rem] z-50'>
                    <img 
                        src={cardFrontImg} 
                        alt="card front" 
                        className='h-48 max-sm:h-[9.5rem]'
                    />
                    <img 
                        src={cardLogoImg} 
                        alt="card logo" 
                        className='-mt-[10.7rem] ml-6 h-9 max-sm:-mt-[8.5rem] max-sm:ml-4 max-sm:h-6' 
                    />
                    <h1 
                        className='text-white mt-12 ml-6 text-[1.2rem] tracking-widest max-sm:mt-9 max-sm:text-lg max-sm:ml-4'
                    >
                        {cardNumber}
                    </h1>
                    <div className='text-white text-xs mt-5 flex space-x-40 max-sm:space-x-24 max-sm:text-[.6rem] max-sm:mt-3'>
                        <p className='ml-6 w-28 max-sm:ml-4'>{cardName.toUpperCase()}</p>
                        <p>{month}/{year}</p>
                    </div>
                </div>
                <div className='absolute ml-[17rem] mt-[15rem] max-sm:ml-[5rem] max-sm:mt-0 max-sm:top-8'>
                    <img src={cardBackImg} alt="card back" className='h-48 max-sm:h-[9.5rem]'/>
                    <p className='text-white -mt-[6.6rem] ml-[17.5rem] text-xs max-sm:-mt-[5.4rem] max-sm:ml-[13.6rem]'>{cvc}</p>
                </div>
            </div>
        </div>
    )   
}