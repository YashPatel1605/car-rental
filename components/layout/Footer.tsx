import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Apple, Play } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="bg-[#020B23] text-gray-300 pt-20">
			<div className="max-w-[1320px] mx-auto px-6">
				{/* Newsletter */}
				<div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-[#1A2747]">
					<div>
						<h3 className="text-white text-2xl font-semibold">Join CarHut</h3>

						<p className="text-sm text-gray-400 mt-1">
							Receive pricing updates, shopping tips & more!
						</p>
					</div>

					<div className="flex mt-6 md:mt-0 w-full md:w-auto">
						<input
							type="email"
							placeholder="Your email address"
							className="bg-[#0E1630] text-white px-6 py-3 rounded-l-full outline-none w-full md:w-72"
						/>

						<button className="bg-blue-600 px-6 py-3 rounded-r-full text-white font-medium hover:bg-blue-700">
							Sign Up
						</button>
					</div>
				</div>

				{/* Footer Links */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-14">
					{/* Company */}
					<div>
						<h4 className="text-white font-semibold mb-6">Company</h4>

						<ul className="space-y-4 text-sm">
							<li>
								<Link href="#">About Us</Link>
							</li>
							<li>
								<Link href="#">Blog</Link>
							</li>
							<li>
								<Link href="#">Services</Link>
							</li>
							<li>
								<Link href="#">FAQs</Link>
							</li>
							<li>
								<Link href="#">Terms</Link>
							</li>
							<li>
								<Link href="#">Contact Us</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white font-semibold mb-6">Quick Links</h4>

						<ul className="space-y-4 text-sm">
							<li>
								<Link href="#">Get in Touch</Link>
							</li>
							<li>
								<Link href="#">Help center</Link>
							</li>
							<li>
								<Link href="#">Live chat</Link>
							</li>
							<li>
								<Link href="#">How it works</Link>
							</li>
						</ul>
					</div>

					{/* Our Brands */}
					<div>
						<h4 className="text-white font-semibold mb-6">Our Brands</h4>

						<ul className="space-y-4 text-sm">
							<li>Toyota</li>
							<li>Porsche</li>
							<li>Audi</li>
							<li>BMW</li>
							<li>Ford</li>
							<li>Nissan</li>
							<li>Peugeot</li>
							<li>Volkswagen</li>
						</ul>
					</div>

					{/* Vehicle Types */}
					<div>
						<h4 className="text-white font-semibold mb-6">Vehicles Type</h4>

						<ul className="space-y-4 text-sm">
							<li>Sedan</li>
							<li>Hatchback</li>
							<li>SUV</li>
							<li>Hybrid</li>
							<li>Electric</li>
							<li>Coupe</li>
							<li>Truck</li>
							<li>Convertible</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-6">Our Mobile App</h4>

						<div className="space-y-4">
							{/* Apple Store */}
							<button className="bg-[#0E1630] px-5 py-4 rounded-xl w-full flex items-center gap-4 hover:bg-[#121b3a] transition">
								<Image src="/icons/apple1.png" alt="Apple Store" width={28} height={28} />

								<div className="text-left text-sm">
									<p className="text-gray-400 text-xs">Download on the</p>
									<p className="text-white font-semibold">Apple Store</p>
								</div>
							</button>

							{/* Google Play */}
							<button className="bg-[#0E1630] px-5 py-4 rounded-xl w-full flex items-center gap-4 hover:bg-[#121b3a] transition">
								<Image src="/icons/google-play.png" alt="Google Play" width={28} height={28} />

								<div className="text-left text-sm">
									<p className="text-gray-400 text-xs">Get it on</p>
									<p className="text-white font-semibold">Google Play</p>
								</div>
							</button>
						</div>

						{/* SOCIAL ICONS */}
						<div className="mt-8">
							<h5 className="text-white mb-4">Connect With Us</h5>

							<div className="flex gap-6">
								<Image src="/icons/facebook1.png" alt="Facebook" width={30} height={30} />

								<Image src="/icons/twitter1.png" alt="Twitter" width={30} height={30} />

								<Image src="/icons/instagram1.png" alt="Instagram" width={30} height={30} />

								<Image src="/icons/linkedin1.png" alt="LinkedIn" width={30} height={30} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className="border-t border-[#1A2747] py-6">
				<div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
					<p>© 2025 example.com. All rights reserved.</p>

					<div className="flex gap-6 mt-3 md:mt-0">
						<Link href="#">Terms & Conditions</Link>
						<Link href="#">Privacy Notice</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
