import Link from "next/link";

// Renders copy exactly as formatted in the client's content docs:
//   **text**        → bold
//   [text](/path/)  → internal link (can sit inside bold: **[text](/path/)**)
export default function Rich({ text }) {
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g; // fresh per call — Rich recurses for bold links
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = m.index;
    if (m[1] !== undefined) {
      out.push(<strong key={k} className="font-semibold text-slate-900"><Rich text={m[1]} /></strong>);
    } else {
      out.push(
        <Link key={k} href={m[3]} className="text-[#1e5eff] underline underline-offset-2 transition hover:text-[#0b1f4d]">
          {m[2]}
        </Link>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
