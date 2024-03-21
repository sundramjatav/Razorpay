import React, { useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Slider from './component/Slider';
import { Route, Router } from 'react-router-dom';

const cards = [
  { title: 'Card 1', content: 'Content for card 1' },
  { title: 'Card 2', content: 'Content for card 2' },
  { title: 'Card 3', content: 'Content for card 3' },
  { title: 'Card 3', content: 'Content for card 3' },
  { title: 'Card 3', content: 'Content for card 3' },  
  { title: 'Card 3', content: 'Content for card 3' },
  // Add more cards as needed
];

const App = () => {

  var line = function () {
    document.querySelectorAll(".box").forEach(function (box) {
      var flag = 0;
      box.addEventListener("click", function () {
        if (flag == 0) {
          box.style.height = "30vh"
          flag = 1
        }
        else {
          box.style.height = "14vh"
          flag = 0
        }
      })

    })
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / cards.length)}%)`,
  };

  return (
    <div>
      <div className='page1'>
        <div className="page1in">
          <div className='nav'>
            <div className='svg'>
              <img src='https://cdn.iconscout.com/icon/free/png-256/free-razorpay-1649771-1399875.png' alt="" />
              <div className='nav-prt'>
                <p>Payments</p>
                <p>Banking+</p>
                <p>Payroll</p>
                <p>Partries</p>
                <p>Resources</p>
                <p>Support</p>
                <p>Pricing</p>
              </div>
            </div>
            <div className='svg1'>
              <img className='flag' src="https://razorpay.com/build/browser/static/indian-flag.a7d181aa.svg" alt="" />
              <h4>Log In</h4>
              <button>Sign Up</button>
            </div>
          </div>
          <div className='center'>
            <h4>#RazorpayX</h4>
            <h1>Banking made <br /> awesome for <br /> startups</h1>
            <p>Automate your banking and finances in one place with RazorpayX. So now say no to financial hassle, and get more time to grow your business, build a better product, or just take that vacation.</p>
            <div className='icon'>
              <h5><small>Get started in 2 easy steps</small><i class="ri-user-add-line"></i> Signup </h5>
              <h5><i class="ri-fingerprint-line"></i>KYC</h5>
            </div>
            <div className="btn">
              <button>Signup now <i class="ri-arrow-right-s-line"></i></button>
              <button id='btn'>View Demo</button>
            </div>
          </div>
        </div>
      </div>
      <div className='page2'>
        <h1>90% of India’s top tech startups <br /> are on RazorpayX</h1>
        <div className='marqee'>
          <div className="marquee">
            <div className='image'>
              <img src="https://razorpay.com/build/browser/static/zupee.54dfe550.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/urban-kisan.b44df5a6.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/upgrad.b265e572.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/unacademy.e8fe1875.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/the-whole-truth.557a02e3.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/swiggy.7bce04e3.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/orange-health.8bbc221a.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/nykaa.80873e82.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/meesho.800abdd5.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/hotstar.9f81827d.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/dunzo.12218f4d.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/fampay.3ecdae25.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/doubtnut.1274289b.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/cred.20e94ce6.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/chingari.9c388ed5.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/ather.f49da176.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/bijak.a0a4fe5c.png" alt="" />
            </div>
            <div className='image'>
              <img src="https://razorpay.com/build/browser/static/zupee.54dfe550.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/urban-kisan.b44df5a6.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/upgrad.b265e572.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/unacademy.e8fe1875.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/the-whole-truth.557a02e3.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/swiggy.7bce04e3.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/orange-health.8bbc221a.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/nykaa.80873e82.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/meesho.800abdd5.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/hotstar.9f81827d.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/dunzo.12218f4d.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/fampay.3ecdae25.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/doubtnut.1274289b.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/cred.20e94ce6.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/chingari.9c388ed5.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/ather.f49da176.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/bijak.a0a4fe5c.png" alt="" />
            </div>
          </div>
        </div>
        <div class='cardcontainer'>
          <div className='card'>
            <div>
              <img className='cardlogo1' src="https://razorpay.com/build/browser/static/the-whole-truth.557a02e3.png" alt="" />
              <p className='text'>If you're a startup founder, RazorpayX is perfect for you. It’s a great product which makes managing business finances easy, simple, and efficient.</p>
            </div>
            <div class='carduser'>
              <div>
                <h1>Shashank <br />  mehta</h1>
                <h5>Founder & CEO,</h5>
                <p>The Whole Truth Foods</p>
              </div>
              <img src="https://razorpay.com/build/browser/static/shashank-mehta.03e510b9.png" alt="" />
            </div>
          </div>
          <div className='card'>
            <div>
              <img className='cardlogo2' src="https://razorpay.com/build/browser/static/nearbuy.038e00c9.svg" alt="" />
              <p className='text'>RazorpayX saved us 70% of the time that would go into manually handling invoices, paying vendors, calculating TDS & making tax payments. It even brought down our payroll processing time from one day to 10 minutes.</p>
            </div>
            <div class='carduser'>
              <div>
                <h1>Ankur Warikoo</h1>
                <h5>Founder,</h5>
                <p>Nearbuy</p>
              </div>
              <img src="https://razorpay.com/build/browser/static/ankur-warikoo.6697761b.png" alt="" />
            </div>
          </div>
          <div className='card'>
            <div>
              <img className='cardlogo3' src="https://razorpay.com/build/browser/static/orange-health.8bbc221a.png" alt="" />
              <p className='text'>RazorpayX is a great boon for us. We have had far better compliance. Taxes were paid properly. Provident Fund, ESIC - all those requirements were met easily. They have helped us manage our growth.</p>
            </div>
            <div class='carduser'>
              <div>
                <h1>Tarun Bhambra</h1>
                <h5>Co-Founder,</h5>
                <p>Orange Health</p>
              </div>
              <img src="https://razorpay.com/build/browser/static/tarun.6875aa1e.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='page3'>
        <h1>Bank like it's 22nd century</h1>
        <p>Supercharge finances & scale faster with RazorpayX built for new-age founders.</p>
        <div className='images'>
          <div className='img1'>
            <img id='image1' src="https://razorpay.com/build/browser/static/invoice.6fc14fa5.svg" alt="" />
            <img id='image2' src="https://razorpay.com/build/browser/static/forex.62a6f2a7.svg" alt="" />
            <img id='image3' className='img' src="https://razorpay.com/build/browser/static/collateral.06af6732.png" alt="" />
          </div>
          <div className='img1'>
            <img id='image4' src="https://razorpay.com/build/browser/static/all-your-taxes.414003c7.svg" alt="" />
            <img id='image5' src="https://razorpay.com/build/browser/static/current-account.c6420f54.svg" alt="" />
            <img id='image6' className='imag' src="https://razorpay.com/build/browser/static/payroll.7a02c003.svg" alt="" />
          </div>
          <div className='img1'>
            <img id='image7' className='imgs' src="https://razorpay.com/build/browser/static/payouts-on-the-go.5d981a0e.png" alt="" />
            <img className='imgss' src="https://razorpay.com/build/browser/static/integrations.07b70813.png" alt="" />
            <img id='image9' src="https://razorpay.com/build/browser/static/custom-access.a87ac616.svg" alt="" />
          </div>
          <p className='p'><small><small>Current Account powered by</small></small> <img className='bank' src="https://razorpay.com/build/browser/static/icici-bank.37820140.png" alt="" /> <img className='bank' src="https://razorpay.com/build/browser/static/icici-bank.37820140.png" alt="" /> <img className='bank' src="https://razorpay.com/build/browser/static/yes-bank.b631ef43.png" alt="" /></p>
        </div>
      </div>
      <div className='page4'>
        <h1>RazorpayX is designed for how <br /> startups run instead of how banks <br /> operate</h1>
        <p>Manage finances effortlessly, no matter where you are</p>
        <div className='page4in'>
          <img className='centerImg' src="https://razorpay.com/build/browser/static/Main.0235944e.png" alt="" />
          <div className='page4inImg'>
            <img src="https://razorpay.com/build/browser/static/L1.030f975a.png" alt="" />
            <img className='img' src="https://razorpay.com/build/browser/static/L1tooltip.993aa7de.png" alt="" />
          </div>
          <div className='page4inImg1'>
            <img src="https://razorpay.com/build/browser/static/L2.fc6b05f3.png" alt="" />
            <img className='img' src="https://razorpay.com/build/browser/static/L2tooltip.912e8c11.png" alt="" />
          </div>
          <div className='page4inImg3'>
            <img className='img' src="https://razorpay.com/build/browser/static/R2tooltip.f89c33d0.png" alt="" />
            <img src="https://razorpay.com/build/browser/static/R2.afcdb5b7.png" alt="" />
          </div>
          <div className='page4inImg2'>
            <img className='img' src="https://razorpay.com/build/browser/static/R1tooltip.419ce581.png" alt="" />
            <img src="https://razorpay.com/build/browser/static/R1.7b7db56f.png" alt="" />
          </div>
        </div>
      </div>
      <div className='page5'>
        <h3>All-in-one finances built for scale</h3>
        <p>Gear up to scale faster with a powerful range of solutions.</p>
        <div className='page5in'>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/current-account.f8d2f783.png" alt="" />
            <div className='cardsin'>
              <h1>Not just any Current <br /> Account. It's better.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/smart-payouts.5eb656f0.png" alt="" />
            <div className='cardsin'>
              <h1>Smart payouts, <br /> anytime, anywhere.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/escrow-account.6e346adf.png" alt="" />
            <div className='cardsin'>
              <h1>Your all-in-one Escrow <br /> management platform</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/forex.5e6bc044.png" alt="" />
            <div className='cardsin'>
              <h1>Forex fuss-free. Bring <br /> FDI to India or make <br /> transfers against <br /> invoices easily!</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/payroll.4b3ead14.png" alt="" />
            <div className='cardsin'>
              <h1>Automated payroll, tax <br /> filings, and benefits. In <br /> one place.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/bulk-payouts.c3ab540f.png" alt="" />
            <div className='cardsin'>
              <h1>Bulk Payouts that are <br /> 10X Smarter.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/tax-payments.4a193f71.png" alt="" />
            <div className='cardsin'>
              <h1>Pay TDS, Advance Tax, <br /> GST in 30 seconds.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/tracking.77b9b236.png" alt="" />
            <div className='cardsin'>
              <h1>Add, track, and pay <br /> invoices by just <br /> forwarding an email.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/integration-tools.2f5fe413.png" alt="" />
            <div className='cardsin'>
              <h1>Easy integrations with <br /> accounting softwares <br /> you use.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="cards">
            <img src="https://razorpay.com/build/browser/static/suite.59725009.png" alt="" />
            <div className='cardsin'>
              <h1>Get paid seamlessly <br /> with Razorpay Suite.</h1>
              <h2>Learn More</h2>
            </div>
          </div>
        </div>
        <div className='bttn'>
          <button className='b'><img className='arr' src="https://razorpay.com/build/browser/static/arrow.1c83ae8e.svg" alt="" /></button>
          <button><img src="https://razorpay.com/build/browser/static/arrow.1c83ae8e.svg" alt="" /></button>
        </div>
      </div>
      <div className="page6">
        <h1>Why startups love us</h1>
        <div className="page6in">
          <div className="page6inContainer">
            <div className="scrollwar">
              <div className="page6container">
                <div className="lft left1">
                  <img src="https://razorpay.com/build/browser/static/play.317eb1c4.png" alt="" />
                </div>
                <div className="rgt">
                  <div className="r1">
                    <p>“</p>
                    <h1>RazorpayX was of great help <br /> in bringing FDI into our Indian <br /> account</h1>
                    <h4>They ensured that the transfer was smooth, KYC, FIRC for <br /> FCGPR were on point and conversion done on priority. <br /> I recommend startups to use it for all their forex needs!</h4>
                  </div>
                  <div className="r2">
                    <div>
                      <h1>Srinivas Sarkar</h1>
                      <h4>CEO & Co-Founder,<b>Coupl</b></h4>
                    </div>
                    <img src="https://razorpay.com/build/browser/static/coupl.65f0ff1f.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="page6container">
                <div className="lft left2">
                  <img src="https://razorpay.com/build/browser/static/play.317eb1c4.png" alt="" />
                </div>
                <div className="rgt">
                  <div className="r1">
                    <p>“</p>
                    <h1>RazorpayX helps us make <br /> decisions on the go</h1>
                    <h4>With RazorpayX we could on-board hundreds of <br /> beneficiaries in an instant, rather than waiting for 2-3 days & <br /> have complete visibility. It helps us make payments & be on <br /> top of things on the go.</h4>
                  </div>
                  <div className="r2">
                    <div>
                      <h1>Nishant Chandra</h1>
                      <h4>Co-founder,<b>Newton School</b></h4>
                    </div>
                    <img src="https://razorpay.com/build/browser/static/newton_school.8b675159.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="page6container">
                <div className="lft left3">
                  <img src="https://razorpay.com/build/browser/static/play.317eb1c4.png" alt="" />
                </div>
                <div className="rgt">
                  <div className="r1">
                    <p>“</p>
                    <h1>RazorpayX has helped us manage <br /> our growth</h1>
                    <h4>Everything from direct access to managers for uploading <br /> invoices, easy approvals, on-time employee salaries, to <br /> automatic compliances has been nothing short of a boon for <br /> us</h4>
                  </div>
                  <div className="r2">
                    <div>
                      <h1>Tarun Bhambra</h1>
                      <h4>Co-founder, <b>Orange Health</b></h4>
                    </div>
                    <img src="https://razorpay.com/build/browser/static/orange_health.2853c506.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="page6container">
                <div className="lft left4">
                  <img src="https://razorpay.com/build/browser/static/play.317eb1c4.png" alt="" />
                </div>
                <div className="rgt">
                  <div className="r1">
                    <p>“</p>
                    <h1>RazorpayX is a lifesaver</h1>
                    <h4>My whole world runs on Razorpay. Be it receiving payments, <br /> or making vendor payments, or running my payroll. If this <br /> company didn't exist I would have to struggle to make these <br /> pieces come together.</h4>
                  </div>
                  <div className="r2">
                    <div>
                      <h1>Ankur Warikoo</h1>
                      <h4>Entrepreneur & <b>founder,Nearbuy</b></h4>
                    </div>
                    <img src="https://razorpay.com/build/browser/static/nearbuy.8da0fd0d.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="page6container1"></div>
            </div>
          </div>
          <div className='bttn'>
            <button className='b'><img className='arr' src="https://razorpay.com/build/browser/static/arrow.1c83ae8e.svg" alt="" /></button>
            <button><img src="https://razorpay.com/build/browser/static/arrow.1c83ae8e.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <div className="page7">
        <div className="page7in">
          <div className="lft">
            <h1>Bank smart, scale faster with RazorpayX powered Current Account</h1>
            <p>Be in control of your growth with credit cards, expenses, payments, and accounting — automated with a RazopayX powered Current Account</p>
            <div className='ss'>
              <div className='icons'>
                <p>Get started in 2 easy steps</p>
                <div className='icon'>
                  <h5><i class="ri-user-add-line"></i> Signup </h5>
                  <h5><i class="ri-fingerprint-line"></i>KYC</h5>
                </div>
              </div>
              <button>Signup now <i class="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
          <div className="rgt">
            <img src="https://razorpay.com/build/browser/static/mobile-card.e2ad7b9a.png" alt="" />
          </div>
        </div>
      </div>
      <div className="page8">
        <h1>Build the next unicorn with RazorpayX </h1>
        <h1>supercharged banking</h1>
        <p>Read our blogs on how RazorpayX supercharged banking is helping businesses scale faster</p>
        <div className="page8in">
          <div className="card">
            <div className="prt1">
              <img src="https://razorpay.com/build/browser/static/business-banking.b63a2830.svg" alt="" />
            </div>
            <div className="prt2">
              <h4>Business Banking 101: <br />What is it & why your <br /> business needs it</h4>
              <h6>Business banking also known as <br /> commercial banking refers to a <br /> company’s financial interactions...</h6>
              <h5>read more</h5>
            </div>
          </div>
          <div className="card">
            <div className="prt1">
              <img src="https://razorpay.com/build/browser/static/startup-current-account.fb5b6e1a.svg" alt="" />
            </div>
            <div className="prt2">
              <h4>Startup Current Account: <br /> The best way to bank for <br /> Indian startups</h4>
              <h6>Startups require a current account for streamlined withdrawals, deposits and other business transactions...</h6>
              <h5>read more</h5>
            </div>
          </div>
          <div className="card">
            <div className="prt1">
              <img src="https://razorpay.com/build/browser/static/vendor-payments.bc0228df.svg" alt="" />
            </div>
            <div className="prt2">
              <h4>Vendor Payments: <br /> Why businesses should automate & not outsource</h4>
              <h6>Processing vendor payments is one of the final steps of the purchase cycle. Generally, large enterprises...</h6>
              <h5>read more</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="page9">
        <div className="page9in">
          <h1>Wall of love</h1>
          <p>As it turns out, people love RazorpayX. <br />
            Here is what some of our users have to say.</p>
          <div className="slider">
            <button className="prev-button" onClick={prevSlide}><i class="ri-arrow-left-s-line"></i></button>
            <div className="slide" style={slideStyle}>
              <div className="card1">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="https://media.shoutout.io/media/ugc/5982a7d6-87e8-49de-bdd1-8595359887b6.jpg" alt="" />
                    </div>
                    <div >
                      <h3 >Rahul Mathur</h3>
                      <a href='#'><small>@rahul_mathur</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Our CA & I have abandoned our "read me" <br /> password  doc - Razorpay has automated <br /> filings for TDS (26A & 26Q), <br /> Profession Tax (state wise) + GST</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
              <div className="card2">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="https://media.shoutout.io/media/ugc/2e55684e-f7c7-410b-9c87-81b46304b5be.jpg" alt="" />
                    </div>
                    <div >
                      <h3 >Kamna jain</h3>
                      <a href='#'><small>@kamnajain001</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Our CA & I have abandoned our "read me" <br /> password  doc - Razorpay has automated <br /> filings for TDS (26A & 26Q), <br /> Profession Tax (state wise) + GST</h6> <br />
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
              <div className="card3">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="https://media.shoutout.io/media/ugc/5df82330-0b9c-435c-a21c-0c54a517aaf7.jpg" alt="" />
                    </div>
                    <div >
                      <h3 >Jani</h3>
                      <a href='#'><small>@abhayjani4</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Our CA & I have abandoned our "read me" <br /> password  doc - Razorpay has automated <br /> filings for TDS (26A & 26Q), <br /> Profession Tax (state wise) + GST</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
              <div className="card4">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="https://media.shoutout.io/media/ugc/bd9381a3-e4f0-4897-88ef-98762468cf84.jpg" alt="" />
                    </div>
                    <div >
                      <h3 >SoL</h3>
                      <a href='#'><small>@LodhaSourav</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Our CA & I have abandoned our "read me" <br /> password  doc - Razorpay has automated <br /> filings for TDS (26A & 26Q), <br /> Profession Tax (state wise) + GST</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
              <div className="card5">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div >
                      <h3 >Sundram Jatav</h3>
                      <a href='#'><small>@Sundram_jatav_777</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Our CA & I have abandoned our "read me" <br /> password  doc - Razorpay has automated <br /> filings for TDS (26A & 26Q), <br /> Profession Tax (state wise) + GST</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
              <div className="card6">
                <div className="text">
                  <div className='textusers'>
                    <div className="textuser">
                      <img src="https://media.shoutout.io/media/ugc/49651c69-7e39-48ed-aa76-ec133c296dc2.jpg" alt="" />
                    </div>
                    <div >
                      <h3 >Vaibhav Sisintry</h3>
                      <a href='#'><small>@VaibhavSisntry</small></a>
                    </div>
                  </div>
                  <i class="ri-twitter-fill"></i>
                </div>
                <div className='txt'>
                  <h6>Love how @Razorpay X has  solved <br /> the major headache of multiple <br /> Govt website logins with their workflows</h6> <br />
                  <h6>Absolute blessing of  a product</h6>
                </div>
                <div><span><i class="ri-heart-line text-xl"></i> 448</span> <span>08 Nov 2021</span></div>
              </div>
            </div>
            <button className="next-button" onClick={nextSlide}><i class="ri-arrow-right-s-line"></i></button>
          </div>
        </div>
      </div>
      <div className='page10'>
        <div className="page10in">
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What exactly is RazorpayX?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What is the difference between Razorpay and RazorpayX?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What can I use RazorpayX for?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What type of accounts do I get with RazorpayX?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What are the benefits of  Business banking?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
          <div className="box" onClick={line}>
            <div class="txt1">
              <div className='txt2'>
                <div className='circle'></div>
                <h4>What kind of features are available with RazorpayX which supercharge my banking experience?</h4>
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <p>RazorpayX is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.
              Note: Banking Services and Razorpay Current Account is provided by Scheduled Banks.</p>
          </div>
        </div>
      </div>
      <div className="page11">
        <div className="page11in">
          <div className="page11left">
            <div>
              <h3>We work with partners you can trust</h3>
              <p>Keeping your business safe is our priority</p>
            </div>
            <div className='lastimg'>
              <div className="banking">
                <h5>SECURITY PARTNERS</h5>
                <div className="imgdiv">
                  <img src="https://razorpay.com/build/browser/static/iso.e6ce542a.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/pci.1f8a27d9.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/digicert.4d05e572.png" alt="" />
                </div>
              </div>
              <div className="banking1">
                <h5>BANKING PARTNERS</h5>
                <div className="imgdiv">
                  <img src="https://razorpay.com/build/browser/static/rbl.2fef3f1a.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/yes-bank.39632c78.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/icici.eee4771c.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/visa.5fe50aa1.png" alt="" />
                  <img src="https://razorpay.com/build/browser/static/sbm.6af2faef.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className='icon'>
                <h5><small>Get started in 2 easy steps</small><i class="ri-user-add-line"></i> Signup </h5>
                <h5><i class="ri-fingerprint-line"></i>KYC</h5>
              </div>
              <div className="btn">
                <button>Signup now <i class="ri-arrow-right-s-line"></i></button>
              </div>
            </div>
          </div>
          <div className="page11right">
            <h3>Download the Mobile App now!</h3>
            <img src="https://razorpay.com/build/browser/static/QR.a8181d4e.png" alt="" />
          </div>
        </div>
      </div>
      <div className='page12'>
        <div className="page12in">
          <div className="page12prt1 page12prt">
            <img className='logo' src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="" />
            <h6>Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</h6> <br />
            <h6>RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</h6> <br />
            <h6>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</h6> <br />
            <h6><small>Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</small></h6> <br />
            <div className="imgss">
              <img src="https://razorpay.com/build/browser/static/pci-compliant.f0aea468.png" alt="" />
              <img src="https://razorpay.com/build/browser/static/iso-certified.4fd701ec.jpg" alt="" />
            </div>
            <img src="https://razorpay.com/build/browser/static/soc.b98ab8dc.png" alt="" />
          </div>
          <div className="page12prt2 page12prt">
            <div className='footer1'>
              <h4>BANKING PLUS</h4>
              <h6>RazorpayX</h6>
              <h6>Source to pay</h6>
              <h6>Current Account</h6>
              <h6>Payouts</h6>
              <h6>Payout links</h6>
              <h6>Corporate Credit Card</h6>
            </div>
            <div className='footer1'>
              <h4>LENDING</h4>
              <h6>Razorpay Capital</h6>
              <h6>Instant Settlements</h6>
              <h6>Line of Credit</h6>
              <h6>Working Capital Lons</h6>
              <h6>Marketpalce Instant Settlements</h6>
            </div>
            <div className='footer1'>
              <h4>BECOME A PARTNER</h4>
              <h6>Refer and Earn</h6>
              <h6>Onboarding APIs</h6>
            </div>
            <div className='footer1'>
              <h4>MORE</h4>
              <h6>Route</h6>
              <h6>Invoices</h6>
              <h6> Freelancer Payments</h6>
              <h6>International</h6>
              <h6>Flash Checkout</h6>
              <h6>UPI</h6>
              <h6>ePOS</h6>
              <h6>Check Demo</h6>
              <h6>RazorpayX PayRoll</h6>
            </div>
          </div>
          <div className="page12prt3 page12prt">
            <div className='footer1'>
              <h4>ACCEPT PAYMENTS</h4>
              <h6>RazorpayX</h6>
              <h6>Source to pay</h6>
              <h6>Current Account</h6>
              <h6>Payouts</h6>
              <h6>Payout links</h6>
              <h6>Corporate Credit Card</h6>
            </div>
            <div className='footer1'>
              <h4>DEVELOPERS</h4>
              <h6>Docs</h6>
              <h6> Integrations</h6>
              <h6>API Reference</h6>
            </div>
            <div className='footer1'>
              <h4>RESOURCES</h4>
              <h6>Blog</h6>
              <h6>Customer Stories</h6>
              <h6>Events</h6>
              <h6>Chargeback Guide</h6>
              <h6>Settlement Guide</h6>
              <h6></h6>
            </div>
            <div className='footer1'>
              <h4>SOLUTIONS</h4>
              <h6>Education</h6>
              <h6>E-Commerce</h6>
              <h6>SaaS</h6>
              <h6>BFSI</h6>
            </div>
            <div className='footer1'>
              <h4>GST Calculator</h4>
              <h6>Online TDS Payment</h6>
              <h6>GST Number Search</h6>
              <h6>GST Search by PAN</h6>
              <h6>ROI Calculator</h6>
              <h6>Calculator</h6>
              <h6>EBCalculator</h6>
            </div>
          </div>
          <div className="page12prt4 page12prt">
            <div className='footer1'>
              <h4>COMPANY</h4>
              <h6>About Us</h6>
              <h6>Careers</h6>
              <h6>Terms of Use</h6>
              <h6>Privacy Policy</h6>
              <h6>Grievance Redressal</h6>
              <h6>Responsible Disclosure</h6>
              <h6>Partners</h6>
              <h6>White papers</h6>
              <h6>Corporate Information</h6>
            </div>
            <div className='footer1'>
              <h4>HELP & SUPPORT</h4>
              <h6>Support</h6>
              <h6>Knowledge base</h6>
            </div>
            <div className='footer1'>
              <h4>FIND US ONLINE</h4>
              <div className='icons'>
              <i class="ri-facebook-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-twitter-line"></i>
              <i class="ri-github-fill"></i>
              <i class="ri-linkedin-fill"></i>
              </div>
            </div>
            <div className='footer1'>
              <h6 id='h6'>Razorpay Software Private Limited,
                Ground Floor, SJR Cyber,
                22 Laskar Hosur Road, Adugodi,
                Bengaluru, 560030,
                Karnataka, India
                CIN: U72900KA2020PTC139072</h6>
            </div>
            <div className="footer1">
              <h6 id='h6'>© Razorpay 2024
                All Rights Reserved</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App