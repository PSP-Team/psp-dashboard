import { useState } from 'react';
import useVoiceCommand from '../hooks/useVoiceCommand';

export default function VoiceLearn({ className = '' }) {
  const [subject, setSubject] = useState('');
  const [learning, setLearning] = useState(false);

  useVoiceCommand('learn', (phrase) => {
    const topic = phrase.replace(/learn\s+/i, '').trim();
    if (topic) {
      setSubject(topic);
      setLearning(true);
      // TODO: send WebSocket event to backend/bot to learn topic
    }
  });

  return (
    <div className={`bg-white/10 rounded-2xl p-4 backdrop-blur-lg text-white ${className}`}>
      <h2 className="text-lg font-semibold mb-2">Voice-Learn Console</h2>
      {learning ? (
        <p>📚 PSP is learning <span className="font-bold">{subject}</span>…</p>
      ) : (
        <p className="text-sm text-white/70">Say “PSP, learn &lt;topic&gt;” or type below:</p>
      )}
      <input
        placeholder="e.g. Fibonacci retracement"
        className="w-full mt-3 p-3 rounded-xl bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-brand-tech"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setSubject(e.target.value);
            setLearning(true);
            // TODO: send WebSocket event as above
          }
        }}
      />
    </div>
  );
}
