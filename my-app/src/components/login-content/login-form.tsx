'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../assets/icon/logo_desk.svg'
import classes from './login-form.module.css'

const LoginForm: React.FC = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()

      const data = {
         email: email,
         senha: password
      }

      try {
         const response = await fetch('https://challengesalesforce-production.up.railway.app/auth/login', {
            method: 'POST',
            headers: {
               'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         })

         if (response.ok) {
            // Handle successful responses
            console.log('Login successful')
         } else {
            // Handle error response
            console.error('Login failed')
         }
      } catch (error) {
         // Handle network error
         console.error('Network error')
      }
   }

   return (
      <section className={ classes.sectionFormWrapper } aria-labelledby="loginHeading">
         <Image src={ logo } alt="Salesforce" />
         <form onSubmit={ handleSubmit }>
            <h2 id="loginHeading">Login</h2>
            <div>
               <label htmlFor="email">E-mail:</label>
               <input type="email" id="email" placeholder="Digite seu e-mail" value={ email } onChange={ (e) => setEmail(e.target.value) } required />
            </div>

            <div>
               <label htmlFor="password">Senha:</label>
               <input type="password" id="password" placeholder="Digite sua senha" value={ password } onChange={ (e) => setPassword(e.target.value) } required />
            </div>

            <div>
               <input className={ classes.buttonSelected } type="submit" value="Entrar" />
            </div>

            <div className={ classes.formLinksWrapper }>
               <span>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Lembrar-me</label>
               </span>
               <a href="#" >Esqueceu sua senha?</a>
            </div>
         </form>
      </section>
   )
}

export default LoginForm
