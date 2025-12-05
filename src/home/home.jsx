import { useEffect, useState } from "react"
import {gsap} from "gsap"

function Home(){
    const [email, setEmail] = useState('')
    const [error, setError] = useState({})


    useEffect(()=>{
        const tl  = gsap.timeline({
            defaults:{
                duration: 2, 
                ease: 'power2.inOut'
            }
        })

        tl.fromTo('.left',{
            opacity: 0,
            x: '-100%'
        }, {opacity: 1, x: 0, yoyo:true }, 0)
        .fromTo('.hero-img ',{
            opacity: 0,
            x:'100%'
        }, {
            opacity:1, 
            x:0
        },0)

        .fromTo('.logo',
            {opacity: 0, y:'-100%'},
            {opacity:1, y:0}
         )

         .fromTo('.hero-mobile',
            {opacity:0, x: '100%'},
            {opacity:1, x:0},0
         )

    },[])

    const handleChange =(e) =>{
        e.preventDefault()
        let temp = {}

        if(!email.trim()){
            temp.email = 'please provide an email'
        }else if(!/\S+@\S+\.\S+/.test(email)){
            temp.email = 'Please provide a valid email'
        }

        setError(temp)

        if(Object.keys(setError) === 0){
            alert('Submitted successfully')
            setEmail('')
        }
    }
   return(
      <div 
      className="container flex justify-between items-start pl-[16%] max-lg:flex-col-reverse max-lg:pl-0">
        <div className="left w-[400px] max-sm:w-full max-lg:text-center max-lg:px-4 max-lg:pt-10 max-lg:mx-auto max-lg:w-[500px]">
            <div className="mt-7 mb-25 max-lg:hidden">
                <img src="/assets/images/logo.svg" alt="" />
            </div>

            <h1 className="text-6xl uppercase tracking-widest text-[hsl(0,6%,24%)] max-sm:text-4xl max-sm:px-10"
            ><span className="text-[hsl(0,36%,70%)] font-light">We're</span>  coming soon</h1>
            <p className="text-[hsl(0,36%,70%)] my-4"
            > Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

            <form onSubmit={handleChange}>
                <div>
                    <div
                    className={`flex justify-between items-center   rounded-full gap-3 
                    ${error.email ? 'border-[hsl(0,93%,68%)]' : 'border-[hsl(0,36%,70%)]'}
                    
                    ${error.email ? 'border-2' : 'border '}

                    `}>
                        <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full p-2 pl-5 placeholder:text-[hsl(0,36%,70%)] outline-none"/>

                        <img src="/assets/images/icon-error.svg" alt="" className={`
                            ${error.email ? 'inline-block' : 'hidden'}
                            `} />

                        <button 
                        type="submit"
                        className="py-3 px-8 bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] rounded-full cursor-pointer">
                            <img src="/assets/images/icon-arrow.svg" alt="" />
                        </button>

                    </div>

                    {error.email  && <p className="text-[hsl(0,93%,68%)]"> {error.email}</p>}
                </div>
            </form>
        </div>
        
        <div className="right">
            <div className="pl-4 py-6 hidden max-lg:block">
                 <img src="/assets/images/logo.svg" alt="" className=" logo" />
            </div>
            <img src="/assets/images/hero-desktop.jpg" alt="" className="hero-img h-screen w-[38vw] object-cover max-lg:hidden"/>

            <img src="/assets/images/hero-mobile.jpg" alt="" 
            className="hero-mobile hidden max-lg:inline-block max-lg:w-screen"/>
        </div>

 

  
    </div>
  )
}

export default Home