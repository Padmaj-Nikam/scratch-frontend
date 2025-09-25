import Link from "next/link";
import navLinks from "./navLinks";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
