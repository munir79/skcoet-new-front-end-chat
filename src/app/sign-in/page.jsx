'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignInMutation } from '@/redux/features/auth/authApi';

export default function SignInPage() {
  const router = useRouter();
  const [signIn, { isLoading }] = useSignInMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn(formData).unwrap();

      console.log('Login Response:', res);

      // ✅ Save token to localStorage
      localStorage.setItem('accessToken', res.data.token);

      alert('Login Successful');

      router.push('/'); // redirect after login
    } catch (error) {
      console.error(error);
      alert(error?.data?.message || 'Login Failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          {isLoading ? 'Logging In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
