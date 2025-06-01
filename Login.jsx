import { useState } from 'react';

export default function Login({ onSuccess }) {
  const [pass, setPass] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (pass === import.meta.env.VITE_PSP_PASS) onSuccess();
  };
  return (
    <form onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full">
        <h1 className="text-white text-center text-xl mb-4 font-semibold">Login to PSP</h1>
        <input
          type="password"
          placeholder="Secret Passphrase"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="w-full p-3 rounded-xl bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
        <button className="mt-4 w-full py-3 rounded-xl bg-brand-accent text-white font-bold hover:opacity-90 transition">Enter</button>
      </div>
    </form>
  );
}
