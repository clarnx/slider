import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  return (
   
    <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Quicklearn IELTS &amp; IT Institute Bahria Town-Islamabad/Rawalpindi</title>
    <meta name="description" content />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Favicon */}
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
    {/* CSS
============================================ */}
    {/* Bootstrap CSS */}
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    {/* Icon Font CSS */}
    <link rel="stylesheet" href="assets/css/icons.min.css" />
    {/* Plugins CSS */}
    <link rel="stylesheet" href="assets/css/plugins.css" />
    {/* Main Style CSS */}
    <link rel="stylesheet" href="assets/css/style.css" />
    {/* Modernizer JS */}
    
    <header className="header-area">
      <div className="header-top bg-img" style={{backgroundImage:"url(assets/img/icon-img/header-shape.png)"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12 col-sm-8">
              <div className="header-contact">
                <ul>
                  <li><i className="fa fa-phone" />0300-5391851</li>
                  <li><i className="fa fa-envelope-o" /><a href="#">Bahria Town</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-12 col-sm-4">
              <div className="login-register">
                <ul>
                  <li><a href="login-register.html">Login</a></li>
                  <li><a href="login-register.html">Register</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom sticky-bar clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-4">
              <div className="logo">
                <a href="index.html">
                  <img alt="" src="assets/img/logo/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-6 col-8">
              <div className="menu-cart-wrap">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li><a href="index.html"> HOME </a>
                        <ul className="submenu">
                          <li><a href="index.html">home version 1</a></li>
                          <li><a href="index-2.html">home version 2</a></li>
                          <li><a href="index-3.html">home version 3</a></li>
                        </ul>
                      </li>
                      <li><a href="about-us.html"> ABOUT</a></li>
                      <li className="mega-menu-position top-hover"><a href="shop.html"> SHOP <i className="fa fa-angle-down" /> </a>
                        <ul className="mega-menu">
                          <li>
                            <ul>
                              <li className="mega-menu-title"><a href="#">Categories 01</a></li>
                              <li><a href="shop.html">bag</a></li>
                              <li><a href="shop.html">Pen</a></li>
                              <li><a href="shop.html">Erasers</a></li>
                              <li><a href="shop.html">Glue sticks</a></li>
                              <li><a href="shop.html">Lunchbox </a></li>
                              <li><a href="shop.html">Pencil box </a></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li className="mega-menu-title"><a href="#">Categories 02</a></li>
                              <li><a href="shop.html">bag</a></li>
                              <li><a href="shop.html">Pen</a></li>
                              <li><a href="shop.html">Erasers</a></li>
                              <li><a href="shop.html">Glue sticks</a></li>
                              <li><a href="shop.html">Lunchbox </a></li>
                              <li><a href="shop.html">Pencil box </a></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li className="mega-menu-title"><a href="#">Categories 03</a></li>
                              <li><a href="shop.html">bag</a></li>
                              <li><a href="shop.html">Pen</a></li>
                              <li><a href="shop.html">Erasers</a></li>
                              <li><a href="shop.html">Glue sticks</a></li>
                              <li><a href="shop.html">Lunchbox </a></li>
                              <li><a href="shop.html">Pencil box </a></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li className="mega-menu-title"><a href="#">Categories 04</a></li>
                              <li><a href="shop.html">bag</a></li>
                              <li><a href="shop.html">Pen</a></li>
                              <li><a href="shop.html">Erasers</a></li>
                              <li><a href="shop.html">Glue sticks</a></li>
                              <li><a href="shop.html">Lunchbox </a></li>
                              <li><a href="shop.html">Pencil box </a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#"> PAGES <i className="fa fa-angle-down" /> </a>
                        <ul className="submenu">
                          <li><a href="course.html">course page</a></li>
                          <li><a href="event.html">event page</a></li>
                          <li><a href="shop.html">shop page</a></li>
                          <li><a href="course-details.html">course details</a></li>
                          <li><a href="event-details.html">event details</a></li>
                          <li><a href="single-product.html">single product</a></li>
                          <li><a href="cart.html">cart page</a></li>
                          <li><a href="checkout.html">checkout</a></li>
                          <li><a href="wishlist.html">wishlist</a></li>
                          <li><a href="login-register.html">login / register</a></li>
                        </ul>
                      </li>
                      <li><a href="course.html"> COURSES / PROGRAMMES</a></li>
                      <li><a href="blog.html"> BLOG </a>
                        <ul className="submenu">
                          <li><a href="blog.html">blog</a></li>
                          <li><a href="blog-details.html">blog details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html"> CONTACT </a></li>
                    </ul>
                  </nav>
                </div>
                <div className="cart-search-wrap">
                  <div className="cart-wrap">
                    <button className="icon-cart">
                      <i className="fa fa-cart-plus" />
                      <span className="count-style">02</span>
                    </button>
                    <div className="shopping-cart-content">
                      <ul>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="#"><img alt="" src="assets/img/cart/cart-1.png" /></a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="#">Color Box </a></h4>
                            <h6>Qty: 02</h6>
                            <span>$260.00</span>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#"><i className="fa fa-times-circle" /></a>
                          </div>
                        </li>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="#"><img alt="" src="assets/img/cart/cart-2.png" /></a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="#">Color Box </a></h4>
                            <h6>Qty: 02</h6>
                            <span>$260.00</span>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#"><i className="fa fa-times-circle" /></a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-total">
                        <h4>Shipping : <span>$20.00</span></h4>
                        <h4>Total : <span className="shop-total">$260.00</span></h4>
                      </div>
                      <div className="shopping-cart-btn">
                        <a className="default-btn btn-hover" href="cart.html">view cart</a>
                        <a className="default-btn btn-hover" href="checkout.html">checkout</a>
                      </div>
                    </div>
                  </div>
                  <div className="header-search">
                    <button className="search-toggle">
                      <i className="fa fa-search" />
                    </button>
                    <div className="search-content">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                        <button>
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-area">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul className="menu-overflow">
                  <li><a href="index.html">HOME</a>
                    <ul>
                      <li><a href="index.html">home version 1</a></li>
                      <li><a href="index-2.html">home version 2</a></li>
                      <li><a href="index-3.html">home version 3</a></li>
                    </ul>
                  </li>
                  <li><a href="about-us.html">About</a></li>
                  <li><a href="shop.html">Shop</a>
                    <ul>
                      <li><a href="#">Categories 01</a>
                        <ul>
                          <li><a href="shop.html">bag</a></li>
                          <li><a href="shop.html">Pen</a></li>
                          <li><a href="shop.html">Erasers</a></li>
                          <li><a href="shop.html">Glue sticks</a></li>
                          <li><a href="shop.html">Lunchbox </a></li>
                          <li><a href="shop.html">Pencil box </a></li>
                        </ul>
                      </li>
                      <li><a href="#">Categories 02</a>
                        <ul>
                          <li><a href="shop.html">bag</a></li>
                          <li><a href="shop.html">Pen</a></li>
                          <li><a href="shop.html">Erasers</a></li>
                          <li><a href="shop.html">Glue sticks</a></li>
                          <li><a href="shop.html">Lunchbox </a></li>
                          <li><a href="shop.html">Pencil box </a></li>
                        </ul>
                      </li>
                      <li><a href="#">Categories 03</a>
                        <ul>
                          <li><a href="shop.html">bag</a></li>
                          <li><a href="shop.html">Pen</a></li>
                          <li><a href="shop.html">Erasers</a></li>
                          <li><a href="shop.html">Glue sticks</a></li>
                          <li><a href="shop.html">Lunchbox </a></li>
                          <li><a href="shop.html">Pencil box </a></li>
                        </ul>
                      </li>
                      <li><a href="#">Categories 04</a>
                        <ul>
                          <li><a href="shop.html">bag</a></li>
                          <li><a href="shop.html">Pen</a></li>
                          <li><a href="shop.html">Erasers</a></li>
                          <li><a href="shop.html">Glue sticks</a></li>
                          <li><a href="shop.html">Lunchbox </a></li>
                          <li><a href="shop.html">Pencil box </a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul>
                      <li><a href="course.html">course page</a></li>
                      <li><a href="event.html">event page</a></li>
                      <li><a href="shop.html">shop page</a></li>
                      <li><a href="course-details.html">course details</a></li>
                      <li><a href="event-details.html">event details</a></li>
                      <li><a href="single-product.html">single product</a></li>
                      <li><a href="cart.html">cart page</a></li>
                      <li><a href="checkout.html">checkout</a></li>
                      <li><a href="wishlist.html">wishlist</a></li>
                      <li><a href="login-register.html">login / register</a></li>
                    </ul>
                  </li>
                  <li><a href="about-us.html">About us</a></li>
                  <li><a href="blog.html">Blog</a>
                    <ul>
                      <li><a href="blog.html">blog</a></li>
                      <li><a href="blog-details.html">blog details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="slider-area">
      <div className="slider-active owl-carousel">
        <div className="single-slider slider-height-1 bg-img" style={{backgroundImage: 'url(assets/img/slider/slider-1.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                <div className="slider-content slider-animated-1 pt-230">
                  <h1 className="animated">IELTS Preparation</h1>
                  <p className="animated">Learn and master essential skills required to score band 7 and higher in IELTS Academic and General </p>
                  <div className="slider-btn">
                    <a className="animated default-btn btn-green-color" href="about-us.html">ABOUT US</a>
                    <a className="animated default-btn btn-white-color" href="contact.html">CONTACT US</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-single-img slider-animated-1">
              <img className="animated" src="assets/img/slider/single-slide-1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="single-slider slider-height-1 bg-img" style={{backgroundImage: 'url(assets/img/slider/slider-1.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                <div className="slider-content slider-animated-1 pt-230">
                  <h1 className="animated">MakeYour Own World</h1>
                  <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                  <div className="slider-btn">
                    <a className="animated default-btn btn-green-color" href="about-us.html">ABOUT US</a>
                    <a className="animated default-btn btn-white-color" href="contact.html">CONTACT US</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-single-img slider-animated-1">
              <img className="animated" src="assets/img/slider/single-slide-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="choose-us section-padding-1">
      <div className="container-fluid">
        <div className="row no-gutters choose-negative-mrg">
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-light-blue">
              <div className="choose-img">
                <img className="animated" src="assets/img/icon-img/service-1.png" alt="" />
              </div>
              <div className="choose-content">
                <h3>Scholarship Facility</h3>
                <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-yellow">
              <div className="choose-img">
                <img className="animated" src="assets/img/icon-img/service-2.png" alt="" />
              </div>
              <div className="choose-content">
                <h3>Scholarship Facility</h3>
                <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-blue">
              <div className="choose-img">
                <img className="animated" src="assets/img/icon-img/service-3.png" alt="" />
              </div>
              <div className="choose-content">
                <h3>Scholarship Facility</h3>
                <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-green">
              <div className="choose-img">
                <img className="animated" src="assets/img/icon-img/service-4.png" alt="" />
              </div>
              <div className="choose-content">
                <h3>Scholarship Facility</h3>
                <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-us pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about-content">
              <div className="section-title section-title-green mb-30">
                <h2>About <span>Us</span></h2>
                <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
              </div>
              <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven  iam, quis nostrud exer citation ullamco laboris nisi ut perspiciatis unde omnis iste natus error sit voluptate.</p>
              <div className="about-btn mt-45">
                <a className="default-btn" href="about-us.html">ABOUT US</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-img default-overlay">
              <img src="assets/img/banner/banner-1.jpg" alt="" />
              <a className="video-btn video-popup" href="https://www.youtube.com/watch?v=sv5hK4crIRc">
                <img className="animated" src="assets/img/icon-img/video.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="course-area bg-img pt-130 pb-10" style={{backgroundImage: 'url(assets/img/bg/bg-1.jpg)'}}>
      <div className="container">
        <div className="section-title mb-75">
          <h2> <span>Our</span> Courses</h2>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        </div>
        <div className="course-slider-active nav-style-1 owl-carousel">
          <div className="single-course">
            <div className="course-img">
              <a href="course-details.html"><img className="animated" src="assets/img/course/course-1.jpg" alt="" /></a>
              <span>Addmission Going On</span>
            </div>
            <div className="course-content">
              <h4><a href="course-details.html">Apparel Manufacturing</a></h4>
              <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
            </div>
            <div className="course-position-content">
              <div className="credit-duration-wrap">
                <div className="sin-credit-duration">
                  <i className="fa fa-diamond" />
                  <span>Credits : 125</span>
                </div>
                <div className="sin-credit-duration">
                  <i className="fa fa-clock-o" />
                  <span>Duration : 4yrs</span>
                </div>
              </div>
              <div className="course-btn">
                <a className="default-btn" href="#">APPLY NOW</a>
              </div>
            </div>
          </div>
          <div className="single-course">
            <div className="course-img">
              <a href="course-details.html"><img className="animated" src="assets/img/course/course-2.jpg" alt="" /></a>
            </div>
            <div className="course-content">
              <h4><a href="course-details.html">Grphic Design &amp; Multimedia</a></h4>
              <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
            </div>
            <div className="course-position-content">
              <div className="credit-duration-wrap">
                <div className="sin-credit-duration">
                  <i className="fa fa-diamond" />
                  <span>Credits : 125</span>
                </div>
                <div className="sin-credit-duration">
                  <i className="fa fa-clock-o" />
                  <span>Duration : 4yrs</span>
                </div>
              </div>
              <div className="course-btn">
                <a className="default-btn" href="#">APPLY NOW</a>
              </div>
            </div>
          </div>
          <div className="single-course">
            <div className="course-img">
              <a href="course-details.html"><img className="animated" src="assets/img/course/course-3.jpg" alt="" /></a>
            </div>
            <div className="course-content">
              <h4><a href="course-details.html">Computer Engineering</a></h4>
              <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
            </div>
            <div className="course-position-content">
              <div className="credit-duration-wrap">
                <div className="sin-credit-duration">
                  <i className="fa fa-diamond" />
                  <span>Credits : 125</span>
                </div>
                <div className="sin-credit-duration">
                  <i className="fa fa-clock-o" />
                  <span>Duration : 4yrs</span>
                </div>
              </div>
              <div className="course-btn">
                <a className="default-btn" href="#">APPLY NOW</a>
              </div>
            </div>
          </div>
          <div className="single-course">
            <div className="course-img">
              <a href="course-details.html"><img className="animated" src="assets/img/course/course-4.jpg" alt="" /></a>
              <span>Post Graduation Course</span>
            </div>
            <div className="course-content">
              <h4><a href="course-details.html">Fashion &amp; Technology</a></h4>
              <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
            </div>
            <div className="course-position-content">
              <div className="credit-duration-wrap">
                <div className="sin-credit-duration">
                  <i className="fa fa-diamond" />
                  <span>Credits : 125</span>
                </div>
                <div className="sin-credit-duration">
                  <i className="fa fa-clock-o" />
                  <span>Duration : 4yrs</span>
                </div>
              </div>
              <div className="course-btn">
                <a className="default-btn" href="#">APPLY NOW</a>
              </div>
            </div>
          </div>
          <div className="single-course">
            <div className="course-img">
              <a href="course-details.html"><img className="animated" src="assets/img/course/course-2.jpg" alt="" /></a>
            </div>
            <div className="course-content">
              <h4><a href="course-details.html">Apparel Manufacturing</a></h4>
              <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
            </div>
            <div className="course-position-content">
              <div className="credit-duration-wrap">
                <div className="sin-credit-duration">
                  <i className="fa fa-diamond" />
                  <span>Credits : 125</span>
                </div>
                <div className="sin-credit-duration">
                  <i className="fa fa-clock-o" />
                  <span>Duration : 4yrs</span>
                </div>
              </div>
              <div className="course-btn">
                <a className="default-btn" href="#">APPLY NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="achievement-area pt-130 pb-115">
      <div className="container">
        <div className="section-title mb-75">
          <h2>Our <span>Achievement</span></h2>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-one">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-1.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">890</h2>
                <span>STUDENTS</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-two">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-2.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">670</h2>
                <span>GRADUATE</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-three">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-3.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">160</h2>
                <span>AWARD WINNING</span>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-four">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-4.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">200</h2>
                <span>FACULTIES</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slider-wrap mt-45">
          <div className="testimonial-text-slider">
            <div className="testi-content-wrap">
              <div className="testi-big-img">
                <img alt="" src="assets/img/testimonial/testi-b1.jpg" />
              </div>
              <div className="row g-0">
                <div className="ms-auto col-lg-6 col-md-12">
                  <div className="testi-content bg-img default-overlay" style={{backgroundImage: 'url(assets/img/bg/testi.png)'}}>
                    <div className="quote-style quote-left">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit </p>
                    <div className="testi-info">
                      <h5>AYESHA HOQUE</h5>
                      <span>Students Of AMMT Department</span>
                    </div>
                    <div className="quote-style quote-right">
                      <i className="fa fa-quote-right" />
                    </div>
                    <div className="testi-arrow">
                      <img alt="" src="assets/img/icon-img/testi-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-content-wrap">
              <div className="testi-big-img">
                <img alt="" src="assets/img/testimonial/testi-b3.jpg" />
              </div>
              <div className="row g-0">
                <div className="ms-auto col-lg-6 col-md-12">
                  <div className="testi-content bg-img default-overlay" style={{backgroundImage: 'url(assets/img/bg/testi.png)'}}>
                    <div className="quote-style quote-left">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
                    <div className="testi-info">
                      <h5>Tayeb Rayed</h5>
                      <span>Students Of AMMT Department</span>
                    </div>
                    <div className="quote-style quote-right">
                      <i className="fa fa-quote-right" />
                    </div>
                    <div className="testi-arrow">
                      <img alt="" src="assets/img/icon-img/testi-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-content-wrap">
              <div className="testi-big-img">
                <img alt="" src="assets/img/testimonial/testi-b2.jpg" />
              </div>
              <div className="row g-0">
                <div className="ms-auto col-lg-6 col-md-12">
                  <div className="testi-content bg-img default-overlay" style={{backgroundImage: 'url(assets/img/bg/testi.png)'}}>
                    <div className="quote-style quote-left">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Sed ut perspiciatis unde omnis iste natus error sit </p>
                    <div className="testi-info">
                      <h5>Robiul siddikee</h5>
                      <span>Students Of AMMT Department</span>
                    </div>
                    <div className="quote-style quote-right">
                      <i className="fa fa-quote-right" />
                    </div>
                    <div className="testi-arrow">
                      <img alt="" src="assets/img/icon-img/testi-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-content-wrap">
              <div className="testi-big-img">
                <img alt="" src="assets/img/testimonial/testi-b2.jpg" />
              </div>
              <div className="row g-0">
                <div className="ms-auto col-lg-6 col-md-12">
                  <div className="testi-content bg-img default-overlay" style={{backgroundImage: 'url(assets/img/bg/testi.png)'}}>
                    <div className="quote-style quote-left">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit </p>
                    <div className="testi-info">
                      <h5>Modhu Dada</h5>
                      <span>Students Of AMMT Department</span>
                    </div>
                    <div className="quote-style quote-right">
                      <i className="fa fa-quote-right" />
                    </div>
                    <div className="testi-arrow">
                      <img alt="" src="assets/img/icon-img/testi-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-image-slider">
            <div className="sin-testi-image">
              <img src="assets/img/testimonial/testi-s2.jpg" alt="" />
            </div>
            <div className="sin-testi-image">
              <img src="assets/img/testimonial/testi-s1.jpg" alt="" />
            </div>
            <div className="sin-testi-image">
              <img src="assets/img/testimonial/testi-s3.jpg" alt="" />
            </div>
            <div className="sin-testi-image">
              <img src="assets/img/testimonial/testi-s3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-text-img">
          <img alt="" src="assets/img/icon-img/testi-text.png" />
        </div>
      </div>
    </div>
    <div className="register-area bg-img pt-130 pb-130" style={{backgroundImage: 'url(assets/img/bg/bg-2.jpg)'}}>
      <div className="container">
        <div className="section-title-2 mb-75 white-text">
          <h2>Register <span>Now</span></h2>
          <p>Winter Admission Is Going On. We are announcing  Special discount for winter batch 2019.</p>
        </div>
        <div className="register-wrap">
          <div id="register-3" className="mouse-bg">
            <div className="winter-banner">
              <img src="assets/img/banner/regi-1.png" alt="" />
              <div className="winter-content">
                <span>WINTER </span>
                <h3>2019</h3>
                <span>ADMISSION </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-8">
              <div className="register-form">
                <h4>Get A free Registration</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="First Name" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="Last Name" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="Phone" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="Email" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-style">
                        <textarea name="message" placeholder="Message" defaultValue={""} />
                        <button className="submit default-btn" type="submit">SUBMIT NOW</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="register-1" className="mouse-bg" />
      <div id="register-2" className="mouse-bg" />
    </div>
    <div className="teacher-area pt-130 pb-100">
      <div className="container">
        <div className="section-title mb-75">
          <h2>Best <span>Teacher</span></h2>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        </div>
        <div className="custom-row">
          <div className="custom-col-5">
            <div className="single-teacher mb-30">
              <div className="teacher-img">
                <img src="assets/img/teacher/teacher-1.jpg" alt="" />
              </div>
              <div className="teacher-content-visible">
                <h4>Robi Khan</h4>
                <h5>Lecturer</h5>
              </div>
              <div className="teacher-content-wrap">
                <div className="teacher-content">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                  <p>Tempor incididunt magna aliqua.</p>
                  <div className="teacher-social">
                    <ul>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play" /></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col-5">
            <div className="single-teacher mb-30">
              <div className="teacher-img">
                <img src="assets/img/teacher/teacher-2.jpg" alt="" />
              </div>
              <div className="teacher-content-visible">
                <h4>Jui Khan</h4>
                <h5>Lecturer</h5>
              </div>
              <div className="teacher-content-wrap">
                <div className="teacher-content">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                  <p>Tempor incididunt magna aliqua.</p>
                  <div className="teacher-social">
                    <ul>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play" /></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col-5">
            <div className="single-teacher mb-30">
              <div className="teacher-img">
                <img src="assets/img/teacher/teacher-3.jpg" alt="" />
              </div>
              <div className="teacher-content-visible">
                <h4>Fawd Khan</h4>
                <h5>Lecturer</h5>
              </div>
              <div className="teacher-content-wrap">
                <div className="teacher-content">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                  <p>Tempor incididunt magna aliqua.</p>
                  <div className="teacher-social">
                    <ul>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play" /></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col-5">
            <div className="single-teacher mb-30">
              <div className="teacher-img">
                <img src="assets/img/teacher/teacher-4.jpg" alt="" />
              </div>
              <div className="teacher-content-visible">
                <h4>Fawd Khan</h4>
                <h5>Lecturer</h5>
              </div>
              <div className="teacher-content-wrap">
                <div className="teacher-content">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                  <p>Tempor incididunt magna aliqua.</p>
                  <div className="teacher-social">
                    <ul>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play" /></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col-5">
            <div className="single-teacher mb-30">
              <div className="teacher-img">
                <img src="assets/img/teacher/teacher-5.jpg" alt="" />
              </div>
              <div className="teacher-content-visible">
                <h4>Jui Khan</h4>
                <h5>Lecturer</h5>
              </div>
              <div className="teacher-content-wrap">
                <div className="teacher-content">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                  <p>Tempor incididunt magna aliqua.</p>
                  <div className="teacher-social">
                    <ul>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play" /></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="event-area bg-img default-overlay pt-130 pb-130" style={{backgroundImage: 'url(assets/img/bg/bg-3.jpg)'}}>
      <div className="container">
        <div className="section-title mb-75">
          <h2><span>Our</span> Event</h2>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        </div>
        <div className="event-active owl-carousel nav-style-1">
          <div className="single-event event-white-bg">
            <div className="event-img">
              <a href="event-details.html"><img src="assets/img/event/event-1.jpg" alt="" /></a>
              <div className="event-date-wrap">
                <span className="event-date">1st</span>
                <span>Dec</span>
              </div>
            </div>
            <div className="event-content">
              <h3><a href="event-details.html">Aempor incididunt ut labore ejam.</a></h3>
              <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
              <div className="event-meta-wrap">
                <div className="event-meta">
                  <i className="fa fa-location-arrow" />
                  <span>Mascot Plaza ,Uttara</span>
                </div>
                <div className="event-meta">
                  <i className="fa fa-clock-o" />
                  <span>11:00 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-event event-white-bg">
            <div className="event-img">
              <a href="event-details.html"><img src="assets/img/event/event-2.jpg" alt="" /></a>
              <div className="event-date-wrap">
                <span className="event-date">10th</span>
                <span>Dec</span>
              </div>
            </div>
            <div className="event-content">
              <h3><a href="event-details.html">Global Conference on Business.</a></h3>
              <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
              <div className="event-meta-wrap">
                <div className="event-meta">
                  <i className="fa fa-location-arrow" />
                  <span>Shubastu ,Dadda</span>
                </div>
                <div className="event-meta">
                  <i className="fa fa-clock-o" />
                  <span>08:30 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-event event-white-bg">
            <div className="event-img">
              <a href="event-details.html"><img src="assets/img/event/event-3.jpg" alt="" /></a>
              <div className="event-date-wrap">
                <span className="event-date">1st</span>
                <span>Dec</span>
              </div>
            </div>
            <div className="event-content">
              <h3><a href="event-details.html">Academic Conference Maui.</a></h3>
              <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
              <div className="event-meta-wrap">
                <div className="event-meta">
                  <i className="fa fa-location-arrow" />
                  <span>Banasree ,Rampura</span>
                </div>
                <div className="event-meta">
                  <i className="fa fa-clock-o" />
                  <span>10:00 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-event event-white-bg">
            <div className="event-img">
              <a href="event-details.html"><img src="assets/img/event/event-2.jpg" alt="" /></a>
              <div className="event-date-wrap">
                <span className="event-date">1st</span>
                <span>Dec</span>
              </div>
            </div>
            <div className="event-content">
              <h3><a href="event-details.html">Social Sciences &amp; Education.</a></h3>
              <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
              <div className="event-meta-wrap">
                <div className="event-meta">
                  <i className="fa fa-location-arrow" />
                  <span>Shubastu ,Badda</span>
                </div>
                <div className="event-meta">
                  <i className="fa fa-clock-o" />
                  <span>10:30 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="blog-area pt-130 pb-100">
      <div className="container">
        <div className="section-title mb-75">
          <h2>Our <span>Newsfeed</span></h2>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="blog-details.html"><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4><a href="blog-details.html">Testing is a great thing.</a></h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li><a href="#"><i className="fa fa-user" /> Adrin Azra</a></li>
                      <li><a href="#"><i className="fa fa-comments-o" /> 15</a></li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <a href="#"><i className="fa fa-calendar-o" /> Jun, 24th 2018</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="blog-details.html"><img src="assets/img/blog/blog-2.jpg" alt="" /></a>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4><a href="blog-details.html">A variation of the ordinary.</a></h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li><a href="#"><i className="fa fa-user" /> Tayeb Jon</a></li>
                      <li><a href="#"><i className="fa fa-comments-o" /> 12</a></li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <a href="#"><i className="fa fa-calendar-o" /> Feb, 18th 2017</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="blog-details.html"><img src="assets/img/blog/blog-3.jpg" alt="" /></a>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4><a href="blog-details.html">In publishing and graphic.</a></h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li><a href="#"><i className="fa fa-user" /> Rifat Al</a></li>
                      <li><a href="#"><i className="fa fa-comments-o" /> 20</a></li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <a href="#"><i className="fa fa-calendar-o" /> Oct, 14th 2018</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="blog-details.html"><img src="assets/img/blog/blog-4.jpg" alt="" /></a>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4><a href="blog-details.html">Learn English in ease.</a></h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li><a href="#"><i className="fa fa-user" />Md Tamim</a></li>
                      <li><a href="#"><i className="fa fa-comments-o" /> 08</a></li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <a href="#"><i className="fa fa-calendar-o" /> Jun, 21th 2017</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer-area">
      <div className="footer-top bg-img default-overlay pt-130 pb-80" style={{backgroundImage: 'url(assets/img/bg/bg-4.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>ABOUT US</h4>
                </div>
                <div className="footer-about">
                  <p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu</p>
                  <div className="f-contact-info">
                    <div className="single-f-contact-info">
                      <i className="fa fa-home" />
                      <span>Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <div className="single-f-contact-info">
                      <i className="fa fa-envelope-o" />
                      <span><a href="#">education@email.com</a></span>
                    </div>
                    <div className="single-f-contact-info">
                      <i className="fa fa-phone" />
                      <span> +98 558 547 589</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>QUICK LINK</h4>
                </div>
                <div className="footer-list">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="course.html">Courses</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-widget negative-mrg-30 mb-40">
                <div className="footer-title">
                  <h4>COURSES</h4>
                </div>
                <div className="footer-list">
                  <ul>
                    <li><a href="#">Under Graduate Programmes </a></li>
                    <li><a href="#">Graduate Programmes </a></li>
                    <li><a href="#">Diploma Courses</a></li>
                    <li><a href="#">Others Programmes</a></li>
                    <li><a href="#">Short Courses</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>GALLERY</h4>
                </div>
                <div className="footer-gallery">
                  <ul>
                    <li><a href="#"><img src="assets/img/gallery/gallery-1.png" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/gallery-2.png" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/gallery-3.png" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/gallery-4.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>News Latter</h4>
                </div>
                <div className="subscribe-style">
                  <p>Dugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde</p>
                  <div id="mc_embed_signup" className="subscribe-form">
                    <form id="mc-embedded-subscribe-form" className="validate" noValidate target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef">
                      <div id="mc_embed_signup_scroll" className="mc-form">
                        <input className="email" type="email" required placeholder="Your E-mail Address" name="EMAIL" defaultValue />
                        <div className="mc-news" aria-hidden="true">
                          <input type="text" defaultValue tabIndex={-1} name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                        </div>
                        <div className="clear">
                          <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" defaultValue="SUBMIT" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-15 pb-15">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="copyright">
                <p>
                  Copyright ©
                  <a href="#">GLAXDU</a>
                  . All Right Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="footer-menu-social">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#">Privecy &amp; Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions of Use</a></li>
                  </ul>
                </div>
                <div className="footer-social">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="youtube" href="#"><i className="fa fa-youtube-play" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
