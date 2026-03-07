import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';

const schema = yup.object({
  organization_name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
});

export default function SignupNGO() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    api.post('/auth/signup', { ...data, role: 'ngo' })
      .then(() => alert('NGO registered, please login'));
  };
  return (
    <div>
      <h2>NGO Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('organization_name')} placeholder="Organization Name" />
        <p>{errors.organization_name?.message}</p>
        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input type="password" {...register('password')} placeholder="Password" />
        <p>{errors.password?.message}</p>
        <button>Sign up</button>
      </form>
    </div>
  );
}