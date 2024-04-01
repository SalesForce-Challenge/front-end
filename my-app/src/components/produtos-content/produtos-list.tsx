'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Product {
   id : number
   name: string;
   src: string;
}

const ProtudosLista = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/data.json')
         const jsonData = await res.json()
         setData(jsonData)
         }
   
         fetchData()
      }, [])
   

      return (
         <div>
            {data.map((item: Product) => (
               <div key={item.id}>
                  <h2>{item.name}</h2>
                  <div>
                     <Image src={item.src} alt={item.name} 
                     priority
                     width={100}
                     height={100}
                     />
                  </div>
               </div>
            ))}
         </div>
      )
   };
   
export default ProtudosLista;
