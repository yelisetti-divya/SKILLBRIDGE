import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
});

export default function Login() {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    api.post('/auth/login', data).then(res => login(res.data));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input type="password" {...register('password')} placeholder="Password" />
        <p>{errors.password?.message}</p>
        <button>Login</button>
      </form>
    </div>
  );
}