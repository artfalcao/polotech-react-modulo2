import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Container, Form, Input, SubmitButton, RightContainer, Wrapper } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterImg from '../../assets/img/register-img.svg';

type TRegisterData = {
  name: string,
  email: string,
  password: string
}


const Register = () => {
  const navigate = useNavigate();
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [formData, setFormData] = useState<TRegisterData>({} as TRegisterData);

    const validateName = (name: string): string | undefined => {
        if(name.trim().length < 3) {
            return 'O NOME deve ter no mínimo 03 caracteres';
        }
    };

    const validateEmail = (email: string): string | undefined => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return 'O E-MAIL precisa ser válido';
        }
    };

    const validatePassword = (password: string): string | undefined => {
      if(password.trim().length < 3) {
        return 'A SENHA deve ter no mínimo 03 caracteres';
    }
        
    };

  const cadastrarUsuario = (e: React.MouseEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const toastPosition = toast.POSITION.TOP_RIGHT

    if(nameError) { 
        toast.error(nameError, {position: toastPosition});
        return
    }

    if(emailError) {
        toast.error(emailError, {position: toastPosition});
        return
    }

    if(passwordError) {
        toast.error(passwordError, {position: toastPosition});
        return
    }

    setFormData({
      name: name,
      email: email,
      password: password
    });

    localStorage.setItem("user", JSON.stringify(formData))
    navigate("/listPage");
  }

  return (
    <Wrapper>
      <Container>
      <Title>Gerenciador de Tarefas</Title>
      <Form>
        <Input 
          type="text" 
          placeholder="Insira seu nome" 
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          type="email" 
          placeholder="Insira seu email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Insira sua senha" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton onClick={cadastrarUsuario}>
          Cadastrar
        </SubmitButton>
        <ToastContainer />
      </Form>
      </Container>

      <RightContainer>
        <img src={RegisterImg} alt="To-do list image" />
      </RightContainer>
    </Wrapper>
    
  )
}

export default Register;