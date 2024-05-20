'use client'
import React, { useEffect, useState } from 'react'
import style from './from-cadastro.module.css'

const FormCadastro: React.FC = () => {
   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [email, setEmail] = useState('')
   const [cargo, setCargo] = useState('')
   const [empresa, setEmpresa] = useState('')
   const [funcionarios, setFuncionarios] = useState('')
   const [pais, setPais] = useState('')
   const [aceitaTermos, setAceitaTermos] = useState(false)
   const [response, setResponse] = useState('')
   const [senha, setSenha] = useState('')
   const [paises, setPaises] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://664a9139a300e8795d4249d4.mockapi.io/paises')
            const data = await response.json()
            console.log(data)
            setPaises(data)
         } catch (error) {
            console.error('Error:', error)
         }
      }

      fetchData()
   }, [])


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
         console.log(data)
         console.log(response)
      }
   }

   return (
      <section className={ style.cadastroSectionWrapper }>
         <h2>Cadastre-se! <span> Teste gratuito por 30 dias</span></h2>
         <form onSubmit={ handleSubmit } className={ style.formWrapper }>
            <div className={ style.formWrapperItemRow }>
               <div className={ style.formWrapperItem }>
                  <label htmlFor="primeiroNome">Primeiro nome:</label>
                  <input type="text" id="primeiroNome" placeholder="Digite o seu nome" value={ nome } onChange={ (event) => setNome(event.target.value) } />
               </div>

               <div className={ style.formWrapperItem }>
                  <label htmlFor="sobrenome">Sobrenome:</label>
                  <input type="text" id="sobrenome" placeholder="Digite o seu sobrenome" value={ sobrenome } onChange={ (event) => setSobrenome(event.target.value) } />
               </div>
            </div>

            <div className={ style.formWrapperItemRow }>
               <div className={ style.formWrapperItem }>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" placeholder="Digite o seu e-mail" value={ email } onChange={ (event) => setEmail(event.target.value) } />
               </div>
               <div className={ style.formWrapperItem }>
                  <label htmlFor="senha">Senha:</label>
                  <input type="password" id="senha" placeholder="Digite a sua senha" value={ senha } onChange={ (event) => setSenha(event.target.value) } />
               </div>
            </div>
            <div className={ style.formWrapperItemRow }>
               <div className={ style.formWrapperItem }>
                  <label htmlFor="cargo">Cargo:</label>
                  <input type="text" id="cargo" placeholder="Digite o seu cargo" value={ cargo } onChange={ (event) => setCargo(event.target.value) } />
               </div>

               <div className={ style.formWrapperItem }>
                  <label htmlFor="empresa">Empresa:</label>
                  <input type="text" id="empresa" placeholder="Digite o nome da empresa" value={ empresa } onChange={ (event) => setEmpresa(event.target.value) } />
               </div>
            </div>

            <div className={ style.formWrapperItemColumn }>
               <label htmlFor="funcionarios">Media de Funcionários:</label>
               <select id="funcionarios" value={ funcionarios } onChange={ (event) => setFuncionarios(event.target.value) }>
                  <option value="option1">1 a 50 funcionários</option>
                  <option value="option2">51 a 300 funcionários</option>
                  <option value="option3">301 a 1000 funcionários</option>
                  <option value="option4">1001 a 2000 funcionários</option>
                  <option value="option4">2001 + funcionários</option>
               </select>
            </div>

            <div className={ style.formWrapperItemColumn }>
               <label htmlFor="pais">País</label>
               <select id="pais" value={ pais } onChange={ (event) => setPais(event.target.value) }>
                  { paises.map((pais: any) => (
                     <option key={ pais.id } value={ pais.nome }>{ pais.nome }</option>
                  )) }
               </select>
            </div>


            <label>
               <input type="checkbox" checked={ aceitaTermos } onChange={ (event) => setAceitaTermos(event.target.checked) } />
               Sim, eu aceito receber comunicações de marketing, sobre a família de produtos, serviços e eventos da companhia Salesforce. Eu posso me descadastrar a qualquer momento.
            </label>


            <div className={ style.buttonSubmitWrapper }>
               <button type="submit">Criar conta</button>
            </div>
         </form>
      </section>
   )
}

export default FormCadastro
