import React from "react";
import { useState } from "react";
import "./MyForm.css";


const MyForm = () => {
    // gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();
  
    //função para alterar o valor no evento OnChange
    const handleName = (e) => {
      setName(e.target.value);
    };

    console.log(name)
    console.log(email)
  
    return (
      <div>
        {/* - criação de form */}
        <form>
          <h2>FORMS</h2>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Digite o seu nome:"
              onChange={handleName}
              value = {name}
            />
          </div>
          {/* label envolvendo input */}
          <label>
            <span>E-mail</span>
            {/* onChange: manipulação de forma mais simples/ função inline */}
            <input type="email" name="email" placeholder="Digite o seu e-mail:" onChange = {(e) => setEmail(e.target.value)}
            value = {email}
            />
          </label>
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    );
    }; 
    export default MyForm;