import "./about.css";
import Footer from "../components/Footer";
const About = () => {
	return (
		<>
			<header>
				<h1 className='text-3xl'>About Color Picker Extension</h1>
			</header>
			<main>
				<section className='about-section'>
					<h2>Introduction</h2>
					<p>
						Welcome to the Color Picker Extension! This extension
						allows you to easily select colors from your active tab
						and copy their hex values. It is a convenient tool for
						designers, developers, and anyone who works with colors
						on the web.
					</p>
				</section>
				<section className='about-section'>
					<h2>Features</h2>
					<ul>
						<li>Select colors from the active tab</li>
						<li>Copy hex values with a single click</li>
						<li>Enhance your workflow while working with colors</li>
					</ul>
				</section>
				<section className='about-section'>
					<h2>Contact Us</h2>
					<p>
						If you have any questions, feedback, or suggestions,
						feel free to reach out to us on our social media
						profiles:
					</p>
					<ul className='social-links'>
						<li>
							<a
								href='https://twitter.com/aditya_k87'
								target='_blank'
								className='twitter'>
								Twitter
							</a>
						</li>
						<li>
							<a
								href='https://linkedin.com/in/adityak87'
								target='_blank'
								className='linkedin'>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href='https://github.com/adityaK87'
								target='_blank'
								className='github'>
								GitHub
							</a>
						</li>
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
