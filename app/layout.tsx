import './globals.css';
import Link from 'next/link';
export const metadata = { title: 'Frag Naija', description: 'TDM 1v1 coin betting MVP' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><nav className="border-b border-white/10 bg-black/90"><div className="mx-auto flex max-w-6xl items-center justify-between p-4"><Link href="/" className="text-2xl font-black text-green-400">Frag Naija</Link><div className="flex gap-4 text-sm"><Link href="/modes">Modes</Link><Link href="/tdm">TDM</Link><Link href="/history">History</Link><Link href="/profile">Profile</Link><Link href="/admin/dashboard">Admin</Link></div></div></nav>{children}</body></html>}
