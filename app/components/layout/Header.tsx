'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
	const pathname = usePathname()

	const isHome = pathname === '/'

	return (
		<header
			className={`w-full z-50 transition-all duration-300 ${
				isHome
					? 'absolute top-0 bg-transparent text-white border-b border-white/10'
					: 'sticky top-0 bg-white text-[#0F172A] border-b border-gray-100 shadow-sm'
			}`}
		>
			<div className="container mx-auto px-4 h-20 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo.png"
						alt="CarHut Logo"
						width={120}
						height={40}
						priority
						className={`object-contain ${!isHome ? 'invert' : ''}`}
					/>
				</Link>

				<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
					<Link
						href="/"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						Home
					</Link>
					<Link
						href="/listings"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						Listings
					</Link>
					<Link
						href="/blog"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						Blog
					</Link>
					<Link
						href="/pages"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						Pages
					</Link>
					<Link
						href="/about"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						About
					</Link>
					<Link
						href="/contact"
						className={`transition-colors ${
							isHome ? 'hover:text-blue-400' : 'hover:text-[#4064E3]'
						}`}
					>
						Contact
					</Link>
				</nav>

				<div>
					<button
						className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors shadow-md ${
							isHome
								? 'bg-white text-black hover:bg-gray-100'
								: 'bg-[#4064E3] text-white hover:bg-blue-700'
						}`}
					>
						Sign In
					</button>
				</div>
			</div>
		</header>
	)
}
