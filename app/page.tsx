import Image from 'next/image'
import { Metadata } from 'next'
import {
	Search,
	CheckCircle2,
	Play,
	MoveUpRight,
	Gauge,
	Fuel,
	Settings,
	ShieldCheck,
	BadgeCheck,
	Tag,
	Headphones,
	Car,
	DollarSign,
} from 'lucide-react'

export const metadata: Metadata = {
	title: 'CarHut | Find Your Perfect Car',
	description:
		'Browse thousands of premium cars. Buy and sell vehicles easily with trusted dealers.',
	keywords: ['cars', 'buy car', 'sell car', 'luxury vehicles'],
}

export default function HomePage() {
	return (
		<main className="bg-[#F7F8FB] text-[#0F172A]">
			<section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 scale-105 animate-subtle-zoom">
					<Image src="/Car/Background.png" alt="Hero car" fill priority className="object-cover" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
				</div>

				<div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-5 animate-fade-in-down">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
						</span>
						Find cars for sale and rent near you
					</div>

					<h1 className="text-white font-extrabold tracking-tight leading-[1.1] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
						Drive Your <span className="text-blue-500">Dream</span> Today
					</h1>

					<div className="flex justify-center mb-10">
						<div className="flex bg-black/40 backdrop-blur-xl p-1 rounded-full border border-white/10">
							{['All', 'New', 'Used'].map((tab) => (
								<button
									key={tab}
									className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
										tab === 'All'
											? 'bg-blue-600 text-white shadow-lg'
											: 'text-white/60 hover:text-white'
									}`}
								>
									{tab}
								</button>
							))}
						</div>
					</div>

					<div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
						<div className="flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-gray-100 py-2">
							<Car className="text-blue-600" size={20} />
							<div className="text-left w-full">
								<label className="block text-[10px] uppercase font-bold text-gray-400 ml-1">
									Make
								</label>
								<select className="w-full bg-transparent text-gray-800 font-medium outline-none text-sm cursor-pointer">
									<option>Any Makes</option>
								</select>
							</div>
						</div>

						<div className="flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-gray-100 py-2">
							<Tag className="text-blue-600" size={20} />
							<div className="text-left w-full">
								<label className="block text-[10px] uppercase font-bold text-gray-400 ml-1">
									Model
								</label>
								<select className="w-full bg-transparent text-gray-800 font-medium outline-none text-sm cursor-pointer">
									<option>Any Models</option>
								</select>
							</div>
						</div>

						<div className="flex items-center px-4 gap-3 py-2">
							<DollarSign className="text-blue-600" size={20} />
							<div className="text-left w-full">
								<label className="block text-[10px] uppercase font-bold text-gray-400 ml-1">
									Price
								</label>
								<select className="w-full bg-transparent text-gray-800 font-medium outline-none text-sm cursor-pointer">
									<option>All Prices</option>
								</select>
							</div>
						</div>

						<button className="bg-blue-600 hover:bg-blue-700 text-white h-full py-4 md:py-0 md:h-[56px] rounded-xl md:rounded-full flex items-center justify-center gap-2 font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/30">
							<Search size={20} strokeWidth={2.5} />
							<span>Search Cars</span>
						</button>
					</div>

					<div className="mt-12">
						<p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
							Or Browse by Category
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							{['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Hybrid'].map((type) => (
								<button
									key={type}
									className="group flex flex-col items-center bg-white/5 hover:bg-blue-600/20 backdrop-blur-md border border-white/10 hover:border-blue-500/50 px-6 py-3 rounded-2xl transition-all duration-300"
								>
									<span className="text-white text-sm font-medium group-hover:scale-110 transition-transform">
										{type}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 bg-[#F7F8FB]">
				<div className="flex justify-between items-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900">Explore Our Premium Brands</h2>

					<button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition">
						Show All Brands <MoveUpRight size={16} />
					</button>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
					{[
						{ name: 'Audi', img: '/logo/audi.png' },
						{ name: 'BMW', img: '/logo/bmw.png' },
						{ name: 'Ford', img: '/logo/ford.png' },
						{ name: 'Mercedes Benz', img: '/logo/mercedes.png' },
						{ name: 'Peugeot', img: '/logo/peugeot1.png' },
						{ name: 'Volkswagen', img: '/logo/volk.png' },
					].map((brand, i) => (
						<div
							key={i}
							className="group bg-white border border-gray-200 rounded-2xl h-[130px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
						>
							<div className="relative w-[70px] h-[50px] mb-2 transition-transform duration-300 group-hover:scale-110">
								<Image src={brand.img} alt={brand.name} fill className="object-contain" />
							</div>

							<span className="text-sm font-semibold text-gray-700 group-hover:text-black transition">
								{brand.name}
							</span>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-10">
				{/* Header */}
				<div className="flex justify-between items-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900">Explore All Vehicles</h2>

					<button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition">
						View All <MoveUpRight size={18} />
					</button>
				</div>

				{/* Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{ img: '/Car/car1.png', name: 'Ford Transit – 2021', price: '$39,000' },
						{ img: '/Car/car2.png', name: 'BMW X6 – 2023', price: '$54,000' },
						{ img: '/Car/car3.png', name: 'Audi A5 – 2023', price: '$58,000' },
						{ img: '/Car/car4.png', name: 'Civic RS – 2022', price: '$45,000' },
					].map((car, i) => (
						<div
							key={i}
							className="group bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
						>
							{/* Image */}
							<div className="relative h-[210px] overflow-hidden">
								<Image
									src={car.img}
									alt={car.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
							</div>

							{/* Content */}
							<div className="p-5">
								<h3 className="font-semibold text-lg text-gray-900">{car.name}</h3>

								{/* Specs */}
								<div className="flex gap-4 text-gray-500 text-sm mt-3">
									<span className="flex items-center gap-1">
										<Gauge size={14} /> 12k
									</span>

									<span className="flex items-center gap-1">
										<Fuel size={14} /> Petrol
									</span>

									<span className="flex items-center gap-1">
										<Settings size={14} /> Auto
									</span>
								</div>

								{/* Price */}
								<div className="flex justify-between items-center mt-5">
									<span className="text-xl font-bold text-gray-900">{car.price}</span>

									<button className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md transition hover:bg-blue-600 hover:text-white">
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-[1320px] mx-auto px-6 py-16 font-sans">
				{/* MAIN CARD */}
				<div className="group grid lg:grid-cols-2 overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(64,100,227,0.1)]">
					{/* LEFT IMAGE */}
					<div className="relative h-[360px] lg:h-[380px] overflow-hidden">
						<Image
							src="/Car/car2.png"
							alt="Sell your car"
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>

						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

						{/* Play Button */}
						<button className="absolute inset-0 flex items-center justify-center group/btn">
							<div className="relative">
								<div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />

								<div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover/btn:scale-110">
									<Play size={24} className="fill-[#4064E3] text-[#4064E3] ml-1" />
								</div>
							</div>
						</button>
					</div>

					{/* RIGHT CONTENT */}
					<div className="flex flex-col justify-center bg-[#F8FAFC] px-8 md:px-12 py-10">
						<span className="text-[#4064E3] font-semibold tracking-wider text-xs uppercase mb-3">
							Trusted Car Buying Service
						</span>

						<h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 leading-tight">
							Get A Fair Price
							<br />
							<span className="text-[#4064E3]">For Your Car Today</span>
						</h2>

						<p className="text-gray-600 text-sm mb-6 max-w-md">
							Skip the haggle. We provide competitive pricing and a seamless selling process
							designed for your convenience.
						</p>

						{/* BENEFITS */}
						<div className="space-y-3 mb-8">
							{[
								"UK's largest provider with nationwide patrols",
								'Guaranteed 24/7 roadside assistance',
								'Professional appraisal & instant valuation',
							].map((item, i) => (
								<div key={i} className="flex items-center gap-3">
									<CheckCircle2 size={20} className="text-[#4064E3] shrink-0" />

									<span className="text-gray-700 text-sm font-medium">{item}</span>
								</div>
							))}
						</div>

						{/* BUTTON */}
						<button className="bg-[#4064E3] text-white px-6 py-3 rounded-lg w-fit flex items-center gap-2 text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all active:scale-95">
							Get Started Now
							<MoveUpRight size={18} />
						</button>
					</div>
				</div>

				{/* STATS */}
				<div className="relative mt-14 px-4">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
						{[
							['836M', 'CARS FOR SALE'],
							['738M', 'DEALER REVIEWS'],
							['100M', 'DAILY VISITORS'],
							['238M', 'VERIFIED DEALERS'],
						].map((stat, i) => (
							<div key={i} className="relative text-center group">
								<h3 className="text-3xl font-black text-[#0F172A] mb-1 transition-colors group-hover:text-[#4064E3]">
									{stat[0]}
								</h3>

								<p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
									{stat[1]}
								</p>

								{i !== 3 && (
									<div className="hidden lg:block absolute right-[-12%] top-1/4 h-1/2 w-[1px] bg-gray-200" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto py-16 px-6 bg-[#F8FAFC] rounded-3xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
					Why Choose Us?
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{ icon: ShieldCheck, title: 'Special Financing' },
						{ icon: BadgeCheck, title: 'Trusted Dealers' },
						{ icon: Tag, title: 'Transparent Pricing' },
						{ icon: Headphones, title: 'Expert Support' },
					].map((item, i) => {
						const Icon = item.icon

						return (
							<div
								key={i}
								className="group bg-white p-8 rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
							>
								{/* Icon */}
								<div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-50 flex items-center justify-center transition group-hover:bg-blue-600">
									<Icon size={28} className="text-blue-600 transition group-hover:text-white" />
								</div>

								{/* Title */}
								<h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>

								{/* Description */}
								<p className="text-gray-500 text-sm leading-relaxed">
									Trusted by thousands of customers worldwide with reliable service and support.
								</p>
							</div>
						)
					})}
				</div>
			</section>

			<section className="bg-[#07112B] text-white py-20">
				<div className="max-w-[1320px] mx-auto px-6">
					<h2 className="text-3xl font-bold mb-10">Popular Makes</h2>

					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								img: '/Car/car3.png',
								name: 'Audi A5 – 2023',
								price: '$45,000',
							},
							{
								img: '/Car/car4.png',
								name: 'BMW X5 – 2022',
								price: '$52,000',
							},
						].map((car, i) => (
							<div
								key={i}
								className="bg-[#0E1A3A] rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:bg-[#13224a] transition"
							>
								{/* IMAGE */}

								<div className="relative w-full sm:w-[180px] h-[140px] rounded-lg overflow-hidden">
									<Image src={car.img} alt={car.name} fill className="object-cover" />
								</div>

								{/* CONTENT */}

								<div className="flex flex-col justify-center">
									<h3 className="font-semibold text-lg">{car.name}</h3>

									<p className="text-sm text-gray-400 mt-2 max-w-xs">
										Premium luxury vehicle with modern technology and powerful performance.
									</p>

									<p className="mt-3 font-bold text-white">{car.price}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="max-w-[1320px] mx-auto px-6 py-20">
				{/* HEADER */}
				<div className="flex items-center justify-between mb-12">
					<h2 className="text-3xl font-bold text-gray-900">Latest Blog Posts</h2>

					<button className="text-sm flex items-center gap-2 text-gray-500 hover:text-blue-600 transition font-medium">
						View All
						<MoveUpRight size={16} />
					</button>
				</div>

				{/* BLOG GRID */}
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							img: '/blog/blog1.png',
							category: 'Sound',
							title: '2024 BMW ALPINA XB7 with exclusive details, extraordinary',
						},
						{
							img: '/blog/blog1.png',
							category: 'Accessories',
							title: 'BMW X6 M50i is designed to exceed your sportiest.',
						},
						{
							img: '/blog/blog1.png',
							category: 'Exterior',
							title: 'BMW X5 Gold 2024 Sport Review: Light on Sport',
						},
					].map((blog, i) => (
						<div
							key={i}
							className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
						>
							{/* IMAGE */}
							<div className="relative h-[220px] overflow-hidden">
								<Image
									src={blog.img}
									alt={blog.title}
									fill
									className="object-cover transition duration-500 group-hover:scale-110"
								/>

								{/* CATEGORY */}
								<span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
									{blog.category}
								</span>
							</div>

							{/* CONTENT */}
							<div className="p-5">
								{/* META */}
								<p className="text-xs text-gray-400 mb-2">Admin • November 22, 2023</p>

								{/* TITLE */}
								<h3 className="font-semibold text-lg leading-snug text-gray-900 group-hover:text-blue-600 transition">
									{blog.title}
								</h3>

								{/* READ MORE */}
								<div className="mt-4 text-sm font-medium text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
									Read More
									<MoveUpRight size={14} />
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
				<div className="relative bg-[#e8eef8] rounded-2xl p-10 flex items-center justify-between overflow-hidden">
					<div className="max-w-sm">
						<h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-snug">
							Are You Looking <br /> For a Car ?
						</h3>

						<p className="text-gray-600 text-sm mb-6">
							We are committed to providing our customers with exceptional service.
						</p>

						<button className="bg-[#4064E3] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
							Get Started →
						</button>
					</div>

					<div className="relative w-[90px] h-[90px]">
						<Image src="/electric-car.png" alt="Buy car" fill className="object-contain" />
					</div>
				</div>

				<div className="relative bg-[#f2dbe2] rounded-2xl p-10 flex items-center justify-between overflow-hidden">
					<div className="max-w-sm">
						<h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-snug">
							Do You Want to <br /> Sell a Car ?
						</h3>

						<p className="text-gray-600 text-sm mb-6">
							We are committed to providing our customers with exceptional service.
						</p>

						<button className="bg-[#0F172A] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition">
							Get Started →
						</button>
					</div>

					<div className="relative w-[90px] h-[90px]">
						<Image src="/electric-car2.png" alt="Sell car" fill className="object-contain" />
					</div>
				</div>
			</section>
		</main>
	)
}
