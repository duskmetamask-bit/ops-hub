import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import StatusBar from '@/components/StatusBar';

export const metadata: Metadata = {
  title: 'EMVY — Ops Dashboard',
  description: 'EMVY AI Audit Consultancy — Operations Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <div className="flex min-h-screen">
          {/* Left Sidebar */}
          <aside className="w-56 flex-shrink-0 border-r border-gray-800 flex flex-col">
            {/* Brand */}
            <div className="p-5 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <div>
                  <h1 className="text-base font-bold text-white">EMVY</h1>
                  <p className="text-xs text-gray-500">Ops Dashboard</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <Nav />

            {/* Status Bar at bottom */}
            <div className="mt-auto p-4 border-t border-gray-800">
              <StatusBar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="max-w-6xl mx-auto px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
