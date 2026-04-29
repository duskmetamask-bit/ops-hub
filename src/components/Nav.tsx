'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/leads', label: 'Leads' },
  { href: '/seo', label: 'SEO / Content' },
  { href: '/infrastructure', label: 'Infrastructure' },
  { href: '/actions', label: 'Actions' },
  { href: '/competitors', label: 'Competitors' },
  { href: '/research', label: 'Research' },
  { href: '/stack', label: 'Tool Stack' },
  { href: '/decisions', label: 'Decisions' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 py-4 px-3 space-y-0.5">
      {navItems.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              active
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
