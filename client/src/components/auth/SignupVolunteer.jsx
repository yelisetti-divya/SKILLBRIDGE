import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
});

export default function SignupVolunteer() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    api.post('/auth/signup', { ...data, role: 'volunteer' })
      .then(() => alert('Registered, please login'));
  };
  return (
    <div>
      <h2>Volunteer Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        <p>{errors.name?.message}</p>
        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input type="password" {...register('password')} placeholder="Password" />
        <p>{errors.password?.message}</p>
        <button>Sign up</button>
      </form>
    </div>
  );
}