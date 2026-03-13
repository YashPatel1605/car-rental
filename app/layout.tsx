import type { Metadata } from 'next'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
	title: 'BoxCar | Find Your Perfect Car',
	description:
		'Browse thousands of cars to find your perfect match. Buy or sell your vehicle easily with BoxCar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="antialiased font-sans text-gray-900 bg-white">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Toaster position="top-right" />
				<Footer />
			</body>
		</html>
	)
}
