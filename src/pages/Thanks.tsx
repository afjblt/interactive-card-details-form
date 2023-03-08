import completeImg from '../assets/icon-complete.svg'

export function Thanks() {
    return(
        <div className="w-2/3 h-screen flex flex-col justify-center items-center max-sm:w-screen max-sm:h-2/3 max-sm:mt-24">
            <img src={completeImg} alt="completed" className='h-[4.5rem] max-sm:h-20' />
            <h1 className='tracking-[.2rem] mt-8 mb-4 text-2xl max-sm:mb-3'>THANK YOU!</h1>
            <p className='text-zinc-500 mb-10'>We've added your card details</p>
            <button className='w-80 bg-[#21092F] text-white rounded-lg p-3'>Continue</button>
        </div>
    )
}