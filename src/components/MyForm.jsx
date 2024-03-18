import React from "react";
import { useState } from "react";
import "./MyForm.css";


const MyForm = () => {
    // gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [bio, setBio] = useState("");
    
  
    //função para alterar o valor no evento OnChange
    const handleName = (e) => {
      setName(e.target.value);
    };

    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Enviando o formulário");
      console.log(name, email, bio)

      //limpar formulário
      setName("");
      setEmail("");
      setBio("");
    };
  
    return (
      <div>
        {/* - criação de form */}
        <form onSubmit={handleSubmit}  >
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
          {/* textarea */}
          <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
          </label>
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    );
    }; 
    export default MyForm;