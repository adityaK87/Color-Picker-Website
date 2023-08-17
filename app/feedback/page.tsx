import React from "react";

const Feedback = () => {
	return (
		<section>
			<div className='w-full max-w-2xl mx-auto p-4 flex flex-col justify-between'>
				<header className='text-center'>
					<h1 className='font-bold text-3xl text-white'>Feedback</h1>
					<p className='pb-4 text-white'>
						Give us your valuable feedback to help us improve
					</p>
				</header>
				<form
					className='rounded px-8 pt-6 pb-8 mb-4'
					action='https://formspree.io/f/xnqkpkzl'
					method='POST'>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-semibold mb-2 text-base'
							htmlFor='name'>
							Name:
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							name='message'
							placeholder='Your Name'
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-semibold mb-2 text-base'
							htmlFor='email'>
							Email:
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='email'
							name='email'
							placeholder='Your Email'
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-semibold mb-2 text-base'
							htmlFor='message'>
							Message:
						</label>
						<textarea
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='message'
							name='message'
							rows={4}
							placeholder='Your Message'></textarea>
					</div>
					<div className='flex items-center justify-center'>
						<button
							className='bg-blue-500  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'>
							Submit Feedback
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Feedback;
