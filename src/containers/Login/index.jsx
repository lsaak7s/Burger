import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../../components/button';
import { api } from '../../services/api';
import {
  Conteiner,
  LeftConteiner,
  RightConteiner,
  InputContainer,
  Title,
  Form,
  Link,
  PasswordBox,
  ShowPasswordButton,
  Input,
} from './styles';

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email('Formato Errado').required('Cade o email?'),
      password: yup.string().required('Cade a senha?').min(6, 'No minimo 6'),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await api.post('/Login', {
      email: data.email,
      password: data.password,
    });
    console.log(res);
  };

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <Conteiner>
      <LeftConteiner></LeftConteiner>
      <RightConteiner>
        <Title>
          <h1>Olá entre na sua Conta do Burger</h1>
          <p>Insira Seu</p>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <input {...register('email')} placeholder="Email"></input>
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <PasswordBox>
              <Input
                {...register('password')}
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
              />

              <ShowPasswordButton
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? '🙉' : '🙈'}
              </ShowPasswordButton>
            </PasswordBox>
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <Button type="submit">Entrar</Button>
            <Link>Ainda Não Tem uma Conta? please.</Link>
          </InputContainer>
        </Form>
      </RightConteiner>
    </Conteiner>
  );
}
