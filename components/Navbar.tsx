"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.ico";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const router = useRouter();
	return (
		<nav className='bg-gray-800'>
			<div className='relative flex h-16 items-center justify-center'>
				<div className='flex flex-1 sm:items-stretch sm:justify-start ml-2.5'>
					<div className='flex flex-shrink-0 items-center cursor-pointer'>
						<Image
							className='h-8 w-auto'
							src={logo}
							alt='Your Company'
							onClick={() => router.push("/")}
						/>
						<p className='hidden sm:block m-2 font-semibold text-gray-300'>
							Color Picker
						</p>
					</div>
				</div>
				<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mr-2.5'>
					<div className='sm:ml-6 sm:block'>
						<div className='flex space-x-4'>
							{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
							<Link
								href='/'
								className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
								Home
							</Link>
							<Link
								href='/about'
								className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
								About
							</Link>
							<Link
								href='/feedback'
								className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
								Feedback
							</Link>
							<Link
								href='/privacy'
								className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
								Privacy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
