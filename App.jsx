import { useState } from 'react';
import DragonBackground from './components/DragonBackground';
import Login from './components/Login';
import ChatConsole from './components/ChatConsole';
import VoiceLearn from './components/VoiceLearn';

export default function App() {
  const [authed, setAuthed] = useState(false);

  if (!authed) return (
    <>
      <DragonBackground />
      <Login onSuccess={() => setAuthed(true)} />
    </>
  );

  return (
    <>
      <DragonBackground />
      <div className="relative z-10 flex flex-col h-screen p-4 gap-4">
        <header className="text-2xl font-bold text-white drop-shadow-lg">ProfitSeerProBot Command Center</header>
        <main className="flex flex-1 gap-4 overflow-hidden">
          <ChatConsole className="flex-1" />
          <VoiceLearn className="w-96" />
        </main>
      </div>
    </>
  );
}
