import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send } from 'lucide-react';

export default function Dashboard() {
  const [signal, setSignal] = useState('');
  const [logs, setLogs] = useState([]);
  const [voiceMode, setVoiceMode] = useState(false);

  const handleSignalSubmit = () => {
    if (!signal.trim()) return; // minor improvement: avoid blank signals
    setLogs(prev => [...prev, `🧑‍💻 You: ${signal}`]);

    setTimeout(() => {
      setLogs(prev => [...prev, `🐉 PSP: Processing signal "${signal}"...`]);
    }, 500);

    setSignal('');
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">📡 Live Signal Feed</h2>
          <div className="h-48 overflow-y-auto text-sm bg-black text-green-400 p-2 rounded-md">
            {logs.length === 0 && <p className="italic text-gray-500">No signals yet.</p>}
            {logs.map((log, i) => (
              <p key={i} className="whitespace-pre-wrap">{log}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">🕹️ Manual Command Panel</h2>
          <Textarea
            value={signal}
            onChange={e => setSignal(e.target.value)}
            placeholder="Type a signal or command..."
          />
          <div className="flex gap-2">
            <Button onClick={handleSignalSubmit}>
              <Send className="w-4 h-4 mr-1" /> Send
            </Button>
            <Button variant="secondary" onClick={() => setVoiceMode(!voiceMode)}>
              <Mic className="w-4 h-4 mr-1" /> {voiceMode ? "Listening..." : "Voice Mode"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
