import { useEffect } from 'react';

export default function useVoiceCommand(keyword, callback) {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onresult = ({ results }) => {
      const { transcript } = results[results.length - 1][0];
      if (transcript.toLowerCase().startsWith(keyword.toLowerCase())) {
        callback(transcript);
      }
    };

    recognition.start();
    return () => recognition.stop();
  }, [keyword, callback]);
}
