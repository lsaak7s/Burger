import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../../components/button';
import {
  Conteiner,
  LeftConteiner,
  RightConteiner,
  InputContainer,
  Title,
  Form,
  Link,
} from './styles';

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email('Precisa ser um formato de email').required(),
      password: yup.string().min(6, 'No minimo 6 Caracteres').required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);

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
            <input
              {...register('email')}
              //type="email"
              placeholder="Email"
            ></input>
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <input
              {...register('password')}
              type="password"
              placeholder="Senha"
            ></input>
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
