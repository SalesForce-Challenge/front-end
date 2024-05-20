'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import classes from './produtos-list.module.css'

interface Product {
   id: number
   name: string
   description: string
   category: string
   img: string
}

const ProdutosLista = () => {
   const [data, setData] = useState<Product[]>([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const apiUrl = 'https://challengesalesforce-production.up.railway.app/servicos'
            const res = await fetch(apiUrl)
            const jsonData = await res.json()
            const transformedData = jsonData.map((item: any) => ({
               id: item.id_servico,
               name: item.nome,
               description: item.descricao,
               category: item.categoria,
               img: item.img_url
            }))
            setData(transformedData)
            console.log('Data fetched:', transformedData)
         } catch (error) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
   }, [])


   return (
      <ul className={ classes.listWrapper }>
         { data.map((item: Product) => (
            <li key={ item.id }>
               <div role="presentation">
                  <Image
                     src={ item.img }
                     alt={ item.description }
                     priority
                     width={ 100 }
                     height={ 100 }
                  />
               </div>
               <p>{ item.name }</p>
            </li>
         )) }
      </ul>
   )
}

export default ProdutosLista
