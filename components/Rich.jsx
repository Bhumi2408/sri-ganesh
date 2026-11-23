// Renders copy where `**text**` marks bold (kept exactly as in the client's content docs).
export default function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part
  );
}
