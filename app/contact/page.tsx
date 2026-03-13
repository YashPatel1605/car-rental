'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setLoading(true)

		const form = e.currentTarget

		const formData = {
			firstName: (form.firstName as HTMLInputElement).value,
			lastName: (form.lastName as HTMLInputElement).value,
			email: (form.email as HTMLInputElement).value,
			phone: (form.phone as HTMLInputElement).value,
			subject: (form.subject as HTMLSelectElement).value,
			message: (form.message as HTMLTextAreaElement).value,
		}

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const data = await res.json()

			if (data.success) {
				toast.success('Message sent successfully!')

				form.reset()
			} else {
				toast.error('Failed to send message')
			}
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className="bg-[#F7F8FB] text-[#0F172A] min-h-screen pt-10 pb-20">
			<section className="max-w-[1320px] mx-auto px-6 relative z-20">
				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
					{/* LEFT SIDE */}

					<div className="lg:col-span-2 space-y-8">
						<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
							<h2 className="text-2xl font-bold mb-6">Contact Information</h2>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
										<MapPin className="text-[#4064E3]" />
									</div>

									<div>
										<h3 className="font-semibold">Our Location</h3>

										<p className="text-sm text-gray-500">
											123 Automotive Avenue
											<br />
											London, UK
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
										<Phone className="text-[#4064E3]" />
									</div>

									<div>
										<h3 className="font-semibold">Phone</h3>

										<p className="text-sm text-gray-500">+44 20 7946 0958</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
										<Mail className="text-[#4064E3]" />
									</div>

									<div>
										<h3 className="font-semibold">Email</h3>

										<p className="text-sm text-gray-500">info@carhut.com</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
										<Clock className="text-[#4064E3]" />
									</div>

									<div>
										<h3 className="font-semibold">Business Hours</h3>

										<p className="text-sm text-gray-500">Mon - Fri : 9AM - 6PM</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT FORM */}

					<div className="lg:col-span-3">
						<div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
							<h2 className="text-3xl font-bold mb-6">Send Us A Message</h2>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<input name="firstName" placeholder="First Name" required className="input" />

									<input name="lastName" placeholder="Last Name" required className="input" />
								</div>

								<input name="email" type="email" placeholder="Email" required className="input" />

								<input name="phone" placeholder="Phone" className="input" />

								<select name="subject" className="input">
									<option value="">Select Subject</option>

									<option value="buy">Buy Car</option>

									<option value="sell">Sell Car</option>
								</select>

								<textarea
									name="message"
									rows={5}
									required
									placeholder="Your Message"
									className="input"
								/>

								<button
									type="submit"
									disabled={loading}
									className="w-full bg-[#4064E3] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold"
								>
									{loading ? (
										<span className="animate-pulse">Sending...</span>
									) : (
										<>
											<Send size={18} />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
