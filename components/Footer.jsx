import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <Logo />
        <p className="text-center text-sm text-gray-500">
          Manufacturing of Engineering Polymers · PC | ABS | PBT
        </p>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Shree Ganesh Polymer</p>
      </div>
    </footer>
  );
}
