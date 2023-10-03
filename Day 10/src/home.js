import React from 'react';
import './home.css';
function Hometicket() {
  return (

    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo"> <button class="shadow__btn">AMITY DROPSHIP</button></a>
          <ul className="links">
            <li></li>
            <li><a class="btn" href="#">Start Now</a></li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Become an Authorized Amity Seller</h1>
            <p> Amity Dropship is a cutting-edge e-commerce platform that connects multiple vendors with eager customers, streamlining the dropshipping process. With our app, vendors can easily list their products for sale, while customers can explore a wide range of products from various suppliers—all in one convenient place.</p>
            <button>START NOW</button>
          </div>
          {/* <div className="image">
            <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Flagship_100_Blog_2880x1800_Appa.width-1200.format-webp.webp" />
          </div> */}
        </div>
      </div>
      

{/* Product category cards */}
<div class="pack-section">
		<ul class="pack-grig">
			<li>
				<div class="pack-box pack-img-1">
					<div class="pack-info">
						<h3>LUXE FASHION</h3>
						<p>Express your style with our curated collection of fashionable clothing.</p>
						{/* <button>view</button> */}
					</div>
				</div>
			</li>
			<li>
				<div class="pack-box pack-img-2">
					<div class="pack-info">
						<h3>Hijab Dressing</h3>
						<p>A beaultiful collection of luxe hijabs and other essentials imported.</p>
						{/* <button>view</button> */}
					</div>
				</div>
			</li>
			<li>
				<div class="pack-box pack-img-3">
					<div class="pack-info">
						<h3>Niqab Dressing</h3>
						<p>Smart and beaultiful niqab sets making you smarter.</p>
						{/* <button>view</button> */}
					</div>
				</div>
			</li>
			<li>
				<div class="pack-box pack-img-4">
					<div class="pack-info">
						<h3>BOOKS</h3>
						<p>Explore worlds, gain knowledge, and escape through the pages of our captivating books.</p>
					  {/* <button>view</button> */}
					 </div>
				</div>
			</li>
			<li>
				<div class="pack-box pack-img-5">
					<div class="pack-info">
						<h3>SELF CARE</h3>
						<p>Fine skin and hair care essentials and acessories.</p>
						{/* <button>View</button> */}
					</div>
				</div>
			</li>
			<li>
				<div class="pack-box pack-img-6">
					<div class="pack-info">
						<h3>TECH ACESSORIES</h3>
						<p>Smart and wider options</p>
					{/* <button>View</button> */}
				</div>
				</div>
			</li>
			
		</ul>
	</div>
{/* before footer */}
      <div class="text">
        <h3>Never Stop To </h3> 
        <h3>Explore The OPTIONS</h3>
        <p>Amity Dropship - Your Gateway to Effortless E-Commerce. Discover a world of possibilities with our curated selection of products, seamless order fulfillment, and hassle-free dropshipping solutions.</p>
      <a href="#">START NOW</a>
      </div>

    {/* footer */}
    <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">AMITY</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br/>
          
      {/* <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a> */}
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Services</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Fast Delivery</a>
        </li>
        
        <li>
          <a href="#">easy Shipping</a>
        </li>
        
        <li>
          <a href="#">User friendly</a>
        </li>
{/*         
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li> */}
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023 Amity. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> from Amity☮️</span>
    </div>
  </div>
</footer>
    
    </div>
    
  );
}

export default Hometicket;