export default function ChatConsole() {
  return (
    <div className="flex flex-col h-full bg-white/10 rounded-2xl p-4 backdrop-blur-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-2 text-white" id="chat-log">
        {/* Messages will stream here */}
      </div>
      <form className="mt-auto" onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Type a message…"
          className="w-full p-3 rounded-xl bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-brand-tech"
        />
      </form>
    </div>
  );
}
