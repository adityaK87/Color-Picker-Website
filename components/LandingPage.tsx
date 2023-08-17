"use client";
import Image from "next/image";
import Logo from "./extension.png";
import "./landing.css";

const LandingPage = () => {
	return (
		<div className='h-[85vh] landing-page flex flex-row justify-evenly items-center overflow-y-hidden'>
			<header className='text-center'>
				<h1>Capture and Copy Colors</h1>
				<p>
					A Chrome Extension to easily pick and copy colors from web
					pages.
				</p>
				<a
					href='https://chrome.google.com/webstore/detail/color-picker/odlceielnakdomibdflildnbfllnjmgk/related?hl=en-GB&authuser=0'
					className='cta-button rounded-sm'>
					Add To Chrome
				</a>
			</header>

			<div className='landing-right' id='demo'>
				<Image
					src={Logo}
					width={500}
					height={500}
					alt='Capture and Copy Colors Demo'
				/>
			</div>
		</div>
	);
};

export default LandingPage;
