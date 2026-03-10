import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="absolute top-0 w-full z-50 bg-transparent text-white border-b border-white/10">
			<div className="container mx-auto px-4 h-20 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo.png"
						alt="CarHut Logo"
						width={120}
						height={40}
						priority
						className="object-contain"
					/>
				</Link>

				<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
					<Link href="/" className="hover:text-blue-400 transition-colors">
						Home
					</Link>
					<Link href="/listings" className="hover:text-blue-400 transition-colors">
						Listings
					</Link>
					<Link href="/blog" className="hover:text-blue-400 transition-colors">
						Blog
					</Link>
					<Link href="/pages" className="hover:text-blue-400 transition-colors">
						Pages
					</Link>
					<Link href="/about" className="hover:text-blue-400 transition-colors">
						About
					</Link>
					<Link href="/contact" className="hover:text-blue-400 transition-colors">
						Contact
					</Link>
				</nav>

				<div>
					<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
						Sign In
					</button>
				</div>
			</div>
		</header>
	)
}
