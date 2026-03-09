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
			{/* HERO */}

			<section className="relative min-h-[720px] flex items-center justify-center">
				{/* BACKGROUND IMAGE */}
				<Image src="/Car/Background.png" alt="Hero car" fill priority className="object-cover" />

				{/* DARK OVERLAY */}
				<div className="absolute inset-0 bg-black/60" />

				{/* CONTENT */}
				<div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 text-center">
					<p className="text-white/80 text-sm mb-4">Find cars for sale and for rent near you</p>

					<h1
						className="text-white font-bold leading-tight mb-8
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
					>
						Find Your Perfect Car
					</h1>

					{/* FILTER */}
					<div className="flex justify-center gap-6 text-white text-sm mb-8">
						<span className="border-b-2 border-white pb-1">All</span>
						<span className="text-white/70 hover:text-white cursor-pointer">New</span>
						<span className="text-white/70 hover:text-white cursor-pointer">Used</span>
					</div>

					{/* SEARCH BAR */}

					{/* SEARCH BAR */}

					<div
						className="
  bg-white shadow-xl
  flex flex-col md:flex-row
  items-stretch md:items-center
  max-w-5xl mx-auto
  rounded-2xl md:rounded-full
  overflow-hidden
"
					>
						{/* MAKE */}
						<select
							className="
    flex-1 px-6 py-4 text-sm
    outline-none
    border-b md:border-b-0 md:border-r
  "
						>
							<option>Any Makes</option>
						</select>

						{/* MODEL */}
						<select
							className="
    flex-1 px-6 py-4 text-sm
    outline-none
    border-b md:border-b-0 md:border-r
  "
						>
							<option>Any Models</option>
						</select>

						{/* PRICE */}
						<select
							className="
    flex-1 px-6 py-4 text-sm
    outline-none
    border-b md:border-b-0 md:border-r
  "
						>
							<option>All Prices</option>
						</select>

						{/* BUTTON */}
						<button
							className="
    bg-[#4064E3]
    text-white
    px-8 py-4
    flex items-center justify-center gap-2
    font-semibold
    w-full md:w-auto
    md:rounded-full
    md:m-1
    hover:bg-blue-700 transition
  "
						>
							<Search size={18} />
							Search Cars
						</button>
					</div>

					{/* FEATURED MODELS */}
					<p className="text-white/70 mt-8 text-sm">Or Browse Featured Model</p>

					{/* TAGS */}

					<div className="flex flex-wrap justify-center gap-3 mt-4">
						{['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Hybrid'].map((type) => (
							<button
								key={type}
								className="bg-white/20 backdrop-blur 
          border border-white/20
          px-5 py-2 rounded-full text-white text-sm
          hover:bg-white/30 transition"
							>
								{type}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* BRANDS */}

			<section className="max-w-7xl mx-auto px-6 py-16 bg-[#F7F8FB]">
				<div className="flex justify-between items-center mb-10">
					<h2 className="text-3xl font-bold">Explore Our Premium Brands</h2>

					<button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black">
						Show All Brands <MoveUpRight size={16} />
					</button>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
							className="bg-white border border-gray-200 rounded-xl h-[110px] flex flex-col items-center justify-center hover:shadow-md transition"
						>
							<Image
								src={brand.img}
								alt={brand.name}
								width={70}
								height={50}
								className="object-contain"
							/>

							<span className="text-sm mt-2 font-semibold">{brand.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* VEHICLES */}

			<section className="max-w-7xl mx-auto px-6 py-6">
				<div className="flex justify-between mb-10">
					<h2 className="text-3xl font-bold">Explore All Vehicles</h2>

					<button className="text-blue-600 flex items-center gap-1">
						View All <MoveUpRight size={18} />
					</button>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{ img: '/Car/car1.png', name: 'Ford Transit – 2021', price: '$39,000' },
						{ img: '/Car/car2.png', name: 'BMW X6 – 2023', price: '$54,000' },
						{ img: '/Car/car3.png', name: 'Audi A5 – 2023', price: '$58,000' },
						{ img: '/Car/car4.png', name: 'Civic RS – 2022', price: '$45,000' },
					].map((car, i) => (
						<div
							key={i}
							className="bg-white rounded-xl overflow-hidden  hover:shadow-lg transition"
						>
							<div className="relative h-[200px]">
								<Image src={car.img} alt={car.name} fill className="object-cover" />
							</div>

							<div className="p-5">
								<h3 className="font-semibold text-lg">{car.name}</h3>

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

								<div className="flex justify-between items-center mt-5">
									<span className="text-xl font-bold">{car.price}</span>

									<button className="text-blue-600 text-sm font-medium hover:underline">
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* SELL CAR + STATS */}

			<section className="max-w-[1320px] mx-auto px-6 py-16">
				{/* CARD */}

				<div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-[#EEF1F7]">
					{/* LEFT IMAGE */}

					<div className="relative h-[420px]">
						<Image src="/Car/car2.png" alt="Sell your car" fill className="object-cover" />

						<button className="absolute inset-0 flex items-center justify-center">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
								<Play size={20} />
							</div>
						</button>
					</div>

					{/* RIGHT CONTENT */}

					<div className="flex flex-col justify-center px-12 py-12">
						<h2 className="text-3xl font-bold mb-4 leading-snug">
							Get A Fair Price For Your Car
							<br />
							Sell To Us Today
						</h2>

						<p className="text-gray-500 text-sm mb-6 max-w-md">
							We are committed to providing our customers with exceptional service, competitive
							pricing, and a wide range of vehicles.
						</p>

						<div className="space-y-3 mb-8">
							{[
								"We are the UK's largest provider, with more patrols in more places",
								'You get 24/7 roadside assistance',
								'We fix 4 out of 5 cars at the roadside',
							].map((item, i) => (
								<div key={i} className="flex items-start gap-3">
									<span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-blue-600 text-xs">
										✓
									</span>

									<span className="text-sm text-gray-700">{item}</span>
								</div>
							))}
						</div>

						<button className="bg-[#4064E3] text-white px-6 py-3 rounded-lg w-fit flex items-center gap-2 text-sm font-medium hover:bg-blue-700 transition">
							Get Started
							<MoveUpRight size={16} />
						</button>
					</div>
				</div>

				{/* STATS */}

				<div className="grid grid-cols-2 md:grid-cols-4 text-center mt-12 py-10 border-b border-gray-200">
					{[
						['836M', 'CARS FOR SALE'],
						['738M', 'DEALER REVIEWS'],
						['100M', 'VISITORS PER DAY'],
						['238M', 'VERIFIED DEALERS'],
					].map((stat, i) => (
						<div key={i}>
							<h3 className="text-3xl font-bold text-[#0F172A]">{stat[0]}</h3>

							<p className="text-xs text-gray-500 mt-1 tracking-widest">{stat[1]}</p>
						</div>
					))}
				</div>
			</section>
			{/* WHY CHOOSE */}

			<section className="max-w-7xl mx-auto py-6 px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>

				<div className="grid md:grid-cols-4 gap-10 text-center">
					{[
						{ icon: ShieldCheck, title: 'Special Financing' },
						{ icon: BadgeCheck, title: 'Trusted Dealers' },
						{ icon: Tag, title: 'Transparent Pricing' },
						{ icon: Headphones, title: 'Expert Support' },
					].map((item, i) => {
						const Icon = item.icon

						return (
							<div key={i}>
								<Icon className="mx-auto text-blue-600 mb-4" size={36} />

								<h3 className="font-semibold">{item.title}</h3>

								<p className="text-gray-500 text-sm mt-2">
									Trusted by thousands of customers worldwide.
								</p>
							</div>
						)
					})}
				</div>
			</section>

			{/* POPULAR MAKES */}

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
			{/* BLOGS */}

			<section className="max-w-[1320px] mx-auto px-6 py-20">
				{/* HEADER */}
				<div className="flex items-center justify-between mb-10">
					<h2 className="text-3xl font-bold">Latest Blog Posts</h2>

					<button className="text-sm flex items-center gap-1 text-gray-500 hover:text-black">
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
						<div key={i} className="group cursor-pointer">
							{/* IMAGE */}
							<div className="relative h-[220px] rounded-2xl overflow-hidden">
								<Image
									src={blog.img}
									alt={blog.title}
									fill
									className="object-cover group-hover:scale-105 transition duration-300"
								/>

								{/* CATEGORY BADGE */}
								<span className="absolute top-4 left-4 bg-white text-xs px-3 py-1 rounded-full font-medium shadow">
									{blog.category}
								</span>
							</div>

							{/* CONTENT */}
							<div className="mt-4">
								{/* META */}
								<p className="text-xs text-gray-500 mb-2">Admin • November 22, 2023</p>

								{/* TITLE */}
								<h3 className="font-semibold leading-snug text-[15px] group-hover:text-blue-600 transition">
									{blog.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}

			<section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
				<div className="bg-blue-100 rounded-2xl p-10">
					<h3 className="text-xl font-bold mb-3">Are You Looking For a Car ?</h3>

					<p className="text-gray-600 mb-6">Search through thousands of vehicles.</p>

					<button className="bg-blue-600 text-white px-6 py-3 rounded-full">Get Started</button>
				</div>

				<div className="bg-pink-100 rounded-2xl p-10">
					<h3 className="text-xl font-bold mb-3">Do You Want to Sell a Car ?</h3>

					<p className="text-gray-600 mb-6">Sell your car at the best market price.</p>

					<button className="bg-black text-white px-6 py-3 rounded-full">Sell Car</button>
				</div>
			</section>
		</main>
	)
}
