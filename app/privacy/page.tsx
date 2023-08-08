import ".././globals.css";
const Privacy = () => {
	return (
		<div>
			<header>
				<h1>Privacy Policy</h1>
			</header>
			<main>
				<section>
					<h2>Information Collection and Use</h2>
					<p>
						Your privacy is important to us. This privacy policy
						outlines how our extension handles personal or sensitive
						user data.
					</p>
					<p>
						When you use our extension, we may collect and store
						certain information, including but not limited to:
					</p>
					<ul>
						<li>
							The color data captured and copied using the
							extension
						</li>
						<li>Any user preferences or settings</li>
						<li>Usage analytics to improve our services</li>
					</ul>
					<p>
						We do not collect any personally identifiable
						information (PII) or sensitive data.
					</p>
				</section>

				<section>
					<h2>Data Sharing</h2>
					<p>
						We do not share any personal or user data collected
						through our extension with third parties.
					</p>
				</section>

				<section>
					<h2>Security</h2>
					<p>
						We take the security of your data seriously. We use
						industry-standard security measures to protect your
						information from unauthorized access, alteration, or
						disclosure.
					</p>
				</section>

				<section>
					<h2>Changes to This Privacy Policy</h2>
					<p>
						We may update our privacy policy from time to time. Any
						changes will be reflected on this page.
					</p>
				</section>

				<section>
					<h2>Contact Us</h2>
					<p>
						If you have any questions or concerns about our privacy
						policy or data practices, please contact us at{" "}
						<a href='mailto:adityapal1409@gmail.com'>
							adityapal1409@gmail.com
						</a>
						.
					</p>

					<p>
						Feel free to reach out to us via the following channels:
					</p>
					<ul className='social-icons'>
						<li>
							<a
								href='https://twitter.com/aditya_k87'
								target='_blank'>
								<i className='fab fa-twitter'>Twitter</i>
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/adityak87'
								target='_blank'>
								<i className='fab fa-linkedin'>linkedIn</i>
							</a>
						</li>
						<li>
							<a
								href='https://github.com/adityak87'
								target='_blank'>
								<i className='fab fa-github'>GitHub</i>
							</a>
						</li>
						<li>
							<a
								href='https:/adityapal.netlify.app'
								target='_blank'>
								<i className='fas fa-external-link-alt'>
									Portfolio
								</i>
							</a>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Privacy;
