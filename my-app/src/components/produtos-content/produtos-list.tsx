'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import classes from './produtos-list.module.css'

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
         <ul className={classes.listWrapper}>
            {data.map((item: Product) => (
               <li key={item.id}>
                  <div>
                     <Image src={item.src} alt={item.name} 
                     priority
                     width={100}
                     height={100}
                     />
                  </div>

                  <p>{item.name}</p>
               </li>
            ))}
         </ul>
      )
   };
   
export default ProtudosLista;
