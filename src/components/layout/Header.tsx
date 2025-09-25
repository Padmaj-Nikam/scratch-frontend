import Link from "next/link";
import navLinks from "./navLinks";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 px-6 py-4 text-white shadow">
      {/* Logo / Title */}
      <div className="text-lg font-bold">
        <Link href="/">Scratch Template</Link>
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
