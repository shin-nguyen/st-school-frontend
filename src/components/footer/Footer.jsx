import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">

			<div className="footer-left">

				<h3>ST School</h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Course</a>
				
					<a href="#">Blog</a>
				
					<a href="#">About</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">ST School © 2021</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>1 Vo Van Ngan</span> Thu Duc, Ho Chi Minh</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>0339234189</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:stschools2000@gmail.com">stschools2000@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About ST School</span>
					This is amazing website.
				</p>

				<div className="footer-icons">

					<a href="#"><i className='bx bxl-facebook-circle'></i></a>
					<a href="#"><i class='bx bxl-instagram'></i></a>
					<a href="#"><i class='bx bxl-twitter' ></i></a>
					<a href="#"><i class='bx bxl-github'></i></a>

				</div>

			</div>

		</footer>
        </>
    )
}

export default Footer
