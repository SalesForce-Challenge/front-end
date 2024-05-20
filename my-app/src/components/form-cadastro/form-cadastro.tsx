'use client'
import React, { useState } from 'react'

const FormCadastro: React.FC = () => {
   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [email, setEmail] = useState('')
   const [cargo, setCargo] = useState('')
   const [empresa, setEmpresa] = useState('')
   const [funcionarios, setFuncionarios] = useState('')
   const [pais, setPais] = useState('')
   const [aceitaTermos, setAceitaTermos] = useState(false)
   const [aceitaMarketing, setAceitaMarketing] = useState(false)
   const [response, setResponse] = useState('')
   const [senha, setSenha] = useState('')

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()

      const data = {
         endereco: {
            pais: pais
         },
         empresa: {
            nome: empresa,
            numFuncionario: funcionarios
         },
         pessoa: {
            nome: nome,
            sobrenome: sobrenome,
            cargo: cargo
         },
         conta: {
            email: email,
            senha: senha
         }
      }

      try {
         const response = await fetch('https://challengesalesforce-production.up.railway.app/auth/register', {
            method: 'POST',
            headers: {
               'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         })

         const responseData = await response.json()
         setResponse(responseData)
         console.log(responseData)

      } catch (error) {
         console.error('Error:', error)
         console.log(response)
      }
   }

   return (
      <section>
         <h2>Cadastre-se! <span> Teste gratuito por 30 dias</span></h2>
         <form onSubmit={ handleSubmit }>
            <div>
               <div>
                  <label htmlFor="primeiroNome">Primeiro nome:</label>
                  <input type="text" id="primeiroNome" placeholder="Digite o seu nome" value={ nome } onChange={ (event) => setNome(event.target.value) } />
               </div>

               <div>
                  <label htmlFor="sobrenome">Sobrenome:</label>
                  <input type="text" id="sobrenome" placeholder="Digite o seu sobrenome" value={ sobrenome } onChange={ (event) => setSobrenome(event.target.value) } />
               </div>
            </div>

            <div>

               <div>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" placeholder="Digite o seu e-mail" value={ email } onChange={ (event) => setEmail(event.target.value) } />
               </div>
               <div>
                  <label htmlFor="senha">Senha:</label>
                  <input type="password" id="senha" placeholder="Digite a sua senha" value={ senha } onChange={ (event) => setSenha(event.target.value) } />
               </div>
            </div>
            <div>
               <div>
                  <label htmlFor="cargo">Cargo:</label>
                  <input type="text" id="cargo" placeholder="Digite o seu cargo" value={ cargo } onChange={ (event) => setCargo(event.target.value) } />
               </div>

               <div>
                  <label htmlFor="empresa">Empresa:</label>
                  <input type="text" id="empresa" placeholder="Digite o nome da empresa" value={ empresa } onChange={ (event) => setEmpresa(event.target.value) } />
               </div>
            </div>

            <div>
               <label htmlFor="funcionarios">Media de Funcionários:</label>
               <select id="funcionarios" value={ funcionarios } onChange={ (event) => setFuncionarios(event.target.value) }>
                  <option value="option1">Opção 1</option>
                  <option value="option2">Opção 2</option>
                  <option value="option3">Opção 3</option>
                  <option value="option4">Opção 4</option>
               </select>
            </div>

            <div>
               <label htmlFor="oais">País</label>
               <select id="oais" value={ pais } onChange={ (event) => setPais(event.target.value) }>
                  <option value="option1">Opção 1</option>
                  <option value="option2">Opção 2</option>
                  <option value="option3">Opção 3</option>
                  <option value="option4">Opção 4</option>
               </select>
            </div>

            <div>
               <label>
                  <input type="checkbox" checked={ aceitaTermos } onChange={ (event) => setAceitaTermos(event.target.checked) } />
                  Estou de acordo com o Main Services Agreement
               </label>
            </div>

            <div>
               <label>
                  <input type="checkbox" checked={ aceitaMarketing } onChange={ (event) => setAceitaMarketing(event.target.checked) } />
                  Aceito receber comunicações de marketing da Salesforce
               </label>
            </div>

            <div>
               <button type="submit">Criar conta</button>
            </div>
         </form>
      </section>
   )
}

export default FormCadastro
