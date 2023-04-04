import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  useEffect(() => {
    const arrowLeft = document.querySelector(".recommend-head-arrow-left");
    const arrowRight = document.querySelector(".recommend-head-arrow-right");
    const swiperNext = document.querySelector(".swiper-button-next");
    const swiperPrev = document.querySelector(".swiper-button-prev");

    arrowLeft.addEventListener("click", () => {
      swiperPrev.click();
      arrowLeft.classList.add("active");
      arrowRight.classList.remove("active");
    });
    arrowRight.addEventListener("click", () => {
      swiperNext.click();
      arrowRight.classList.add("active");
      arrowLeft.classList.remove("active");
    });

    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar-toggler");
    const togglerIcon = document.querySelector("#my-toggler-icon");

    toggler.addEventListener("click", () => {
      if (togglerIcon.classList.contains("fa-x")) {
        togglerIcon.classList = "fa-solid fa-bars";
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-top");
      } else {
        togglerIcon.classList = "fa-solid fa-x";
        navbar.classList.add("scroll-down");
        navbar.classList.remove("scroll-top");
      }
    });
    var oldScrollY = window.scrollY;
    window.onscroll = function (e) {
      if (!window.scrollY && togglerIcon.classList.contains("fa-bars")) {
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-top");
      } else {
        navbar.classList.add("scroll-down");
        navbar.classList.remove("scroll-top");
      }
      oldScrollY = window.scrollY;
    };
  }, []);
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="my-toggler-icon" className="fa-solid fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Article
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="select-btn" data-bs-toggle="dropdown">
                      Property{" "}
                      <box-icon color="white" name="chevron-down"></box-icon>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          With garden
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          With garage
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Somthing else
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="orange-btn">sign up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="head-wrapper">
          <div className="container">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div className="head-text-content">
                <h1>
                  Good Living Better live <span> your dreams</span> easily here
                </h1>
                <p>
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you. Our furniture is made
                  from selected and best quality materials that are suitable for
                  your dream home
                </p>
                <div className="search-box">
                  <box-icon
                    color="#F2994A"
                    type="solid"
                    name="edit-location"
                  ></box-icon>
                  <input
                    type="text"
                    placeholder="Search for the location you want!"
                  />
                  <button className="orange-btn">
                    Search{" "}
                    <box-icon color="white" name="chevron-right"></box-icon>
                  </button>
                </div>

                <div className="partner">
                  <p>Our Partnership </p>
                  <div className="partner-content">
                    <img src="./images/traveloka1.png" alt="traveloka1" />
                    <img src="./images/traveloka2.png" alt="traveloka2" />
                    <img src="./images/traveloka3.png" alt="traveloka3" />
                    <img src="./images/traveloka4.png" alt="traveloka4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="head-absolute">
            <div className="head-absolute-item">
              <div className="absolute-inner">
                <div className="d-flex">
                  <img src="./images/absolute1.png" alt="absolute1" />
                  <img src="./images/absolute2.png" alt="absolute2" />
                  <img src="./images/absolute3.png" alt="absolute3" />
                </div>
                <div className="inner-text">
                  <h4>1K+ People</h4>
                  <p>Successfully Getting Home</p>
                </div>
              </div>
            </div>
            <div className="head-absolute-item">
              <img src="./images/absolute4.png" alt="absolute4" />
              <div className="inner-text">
                <h4>56 Houses</h4>
                <p>Sold Monthly</p>
              </div>
            </div>
            <div className="head-absolute-item">
              <img src="./images/absolute5.png" alt="absolute5" />
              <div className="inner-text">
                <h4>4K+</h4>
                <p>People Looking for New Homes</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="recommend">
        <div className="container">
          <div className="recommend-head">
            <div className="recommend-head-title">
              <span className="orange-subtitle">Our Recommendation</span>
              <h2>Featured House</h2>
            </div>
            <ul
              id="house-hunter-tab"
              role="tablist"
              className="list-unstyled recommend-head-list nav"
            >
              <li className="nav-item active">
                <button
                  className="active"
                  id="home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  role="tab"
                >
                  <i className="fa-solid fa-house"></i>
                  <span>house</span>
                </button>
              </li>
              <li>
                <button
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                >
                  <i className="fa-solid fa-warehouse"></i>
                  <span>villa</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                >
                  <i className="fa-solid fa-building"></i>
                  <span>apartment</span>
                </button>
              </li>
            </ul>
            <div className="recommend-head-arrow">
              <button className="recommend-head-arrow-left active">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="recommend-head-arrow-right">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="recommend-blog">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <Swiper
                slidesPerView={4.5}
                autoplay={{
                  delay: 5000,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                spaceBetween={40}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 50,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper1.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-home"></i>
                        new house
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>Woodlandside</h4>
                      <small>$ 20.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user1.png" alt="user" />
                      <div>
                        <h5>Robert Fox</h5>
                        <span>Dr. San Jose, South Dakota</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper2.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-clipboard"></i>
                        Best Deals
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>The Old Lighthouse</h4>
                      <small>$ 44.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user2.png" alt="user" />
                      <div>
                        <h5>Ronald Richards</h5>
                        <span>Santa Ana, Illinois</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper3.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-fire"></i>
                        Popular
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>Cosmo's House</h4>
                      <small>$ 22.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user3.png" alt="user" />
                      <div>
                        <h5>Jenny Wilson</h5>
                        <span>Preston Rd. Inglewood, Maine 98380</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper1.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-home"></i>
                        new house
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>Cosmo's House</h4>
                      <small>$ 22.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user1.png" alt="user" />
                      <div>
                        <h5>Jenny Wilson</h5>
                        <span>Preston Rd. Inglewood, Maine 98380</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper2.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-clipboard"></i>
                        Best Deals
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>The Old Lighthouse</h4>
                      <small>$ 44.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user2.png" alt="user" />
                      <div>
                        <h5>Ronald Richards</h5>
                        <span>Santa Ana, Illinois</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-card">
                    <div className="swiper-slide-card-top">
                      <img src="./images/swiper3.png" alt="house1" />
                      <button>
                        <i className="fa-solid fa-fire"></i>
                        Popular
                      </button>
                    </div>
                    <div className="swiper-slide-card-body">
                      <h4>Cosmo's House</h4>
                      <small>$ 22.000.000</small>
                    </div>
                    <div className="swiper-slide-card-foot d-flex align-items-center">
                      <img src="./images/user3.png" alt="user" />
                      <div>
                        <h5>Jenny Wilson</h5>
                        <span>Preston Rd. Inglewood, Maine 98380</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <h1>Hello</h1>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <h1>Last</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit">
        <div className="container">
          <div className="benefit-blog">
            <div className="benefit-blog-left">
              <div className="benefit-blog-left-title">
                <span className="orange-subtitle">Benefit</span>
              </div>
              <div className="benefit-blog-left-content">
                <h2>Benefit You Get When Using Our Services</h2>
                <p className="number">600+</p>
                <small>Home Furniture throughout Indonesia</small>
                <p className="number">135+</p>
                <small>Staff ready to help you</small>
              </div>
            </div>
            <div className="benefit-blog-right">
              <div className="benefit-blog-right-content">
                <div className="benefit-blog-right-content-item">
                  <span>
                    <i className="fa-solid fa-calendar-check"></i>
                  </span>
                  <div>
                    <h3>Best Quality</h3>
                    <p>
                      All of our funiture uses the best materials and choices
                      for our customers.
                    </p>
                  </div>
                </div>
                <div className="benefit-blog-right-content-item">
                  <span>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </span>
                  <div>
                    <h3>Free Shipping</h3>
                    <p>
                      All of our funiture uses the best materials and choices
                      for our customers.
                    </p>
                  </div>
                </div>
                <div className="benefit-blog-right-content-item">
                  <span>
                    <i className="fa-solid fa-sliders"></i>
                  </span>
                  <div>
                    <h3>Space Customization</h3>
                    <p>
                      All of our funiture uses the best materials and choices
                      for our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sell">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div className="sell-left">
                <div className="sell-left-title">
                  <span className="orange-subtitle">Ready to Sell!</span>
                  <h2>Let’s tour and see our house!</h2>
                  <p>
                    Houses recommended by our partners that have been curated to
                    become the home of your dreams!
                  </p>
                  <h6>House Detail</h6>
                </div>
                <ul className="sell-left-list list-unstyled mb-0">
                  <li>
                    <i className="fa-solid fa-bed"></i>
                    <span>4 Bedrooms</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-bath"></i>
                    <span>2 Bathrooms</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-square-parking"></i>
                    <span>1 Carport</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-stairs"></i>
                    <span>2 Floors</span>
                  </li>
                </ul>
                <div className="sell-left-contact">
                  <img src="./images/absolute3.png" alt="contact" />
                  <div className="sell-left-contact-info">
                    <h4>Dianne Russell</h4>
                    <p>Manager Director</p>
                  </div>
                  <button className="orange-btn">
                    <i className="fa-solid fa-phone"></i>Contact Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <div className="sell-right">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/MGrQa4ElR8M"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="overline-title">
              <span className="overline-subtitle">See Our Review</span>
              <h2>What Our User Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="about-carousel">
          <Swiper
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            spaceBetween={56}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide-item">
                <img
                  src="./images/swiper2.png"
                  alt="img"
                  className="img-fluid"
                />
                <div className="swiper-slide-item-content">
                  <h4>Through the Hounter, I can get a house for my self</h4>
                  <p>
                    Through this website I can get a house with the type and
                    specifications I want very easily, without a complicated
                    process to be able to find information on the house we want.
                  </p>
                  <div className="rate">
                    <div className="rate-left">
                      <img src="./images/user1.png" alt="user" />
                      <div className="rate-left-info">
                        <h5>Dianne Russell</h5>
                        <small>Manager Director</small>
                      </div>
                    </div>
                    <div className="rate-right">
                      <i className="fa-solid fa-star"></i>
                      <span>4.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-item">
                <img
                  src="./images/about2.png"
                  alt="img"
                  className="img-fluid"
                />
                <div className="swiper-slide-item-content">
                  <h4>Through the Hounter, I can get a house for my self</h4>
                  <p>
                    Through this website I can get a house with the type and
                    specifications I want very easily, without a complicated
                    process to be able to find information on the house we want.
                  </p>
                  <div className="rate">
                    <div className="rate-left">
                      <img src="./images/user1.png" alt="user" />
                      <div className="rate-left-info">
                        <h5>Dianne Russell</h5>
                        <small>Manager Director</small>
                      </div>
                    </div>
                    <div className="rate-right">
                      <i className="fa-solid fa-star"></i>
                      <span>4.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-item">
                <img
                  src="./images/swiper3.png"
                  alt="img"
                  className="img-fluid"
                />
                <div className="swiper-slide-item-content">
                  <h4>Through the Hounter, I can get a house for my self</h4>
                  <p>
                    Through this website I can get a house with the type and
                    specifications I want very easily, without a complicated
                    process to be able to find information on the house we want.
                  </p>
                  <div className="rate">
                    <div className="rate-left">
                      <img src="./images/user1.png" alt="user" />
                      <div className="rate-left-info">
                        <h5>Dianne Russell</h5>
                        <small>Manager Director</small>
                      </div>
                    </div>
                    <div className="rate-right">
                      <i className="fa-solid fa-star"></i>
                      <span>4.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-item">
                <img
                  src="./images/about2.png"
                  alt="img"
                  className="img-fluid"
                />
                <div className="swiper-slide-item-content">
                  <h4>Through the Hounter, I can get a house for my self</h4>
                  <p>
                    Through this website I can get a house with the type and
                    specifications I want very easily, without a complicated
                    process to be able to find information on the house we want.
                  </p>
                  <div className="rate">
                    <div className="rate-left">
                      <img src="./images/user1.png" alt="user" />
                      <div className="rate-left-info">
                        <h5>Dianne Russell</h5>
                        <small>Manager Director</small>
                      </div>
                    </div>
                    <div className="rate-right">
                      <i className="fa-solid fa-star"></i>
                      <span>4.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="find">
        <div className="container">
          <div className="row">
            <div className="overline-title">
              <span className="overline-subtitle">
                See tips and trick from our partnership
              </span>
              <h2>Find out more about selling and buying homes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="find-left">
                <div className="find-left-item">
                  <img src="./images/swiper4.png" alt="image" />
                  <div className="find-left-item-content">
                    <span>
                      <img src="./images/user3.png" alt="user" />
                      Dianne Russell
                    </span>
                    <h4>
                      The things we need to check when we want to buy a house
                    </h4>
                    <span>
                      <i className="fa-solid fa-clock"></i>4 min read | 25 Apr
                      2021
                    </span>
                  </div>
                </div>
                <div className="find-left-item">
                  <img src="./images/about1.png" alt="image" />
                  <div className="find-left-item-content">
                    <span>
                      <img src="./images/user2.png" alt="user" />
                      Courtney Henry
                    </span>
                    <h4>
                      7 Ways to distinguish the quality of the house we want to
                      buy
                    </h4>
                    <span>
                      <i className="fa-solid fa-clock"></i>6 min read | 24 Apr
                      2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="find-right">
                <div className="find-right-content">
                  <span>
                    <img src="./images/user1.png" alt="user" />
                    Cameron Williamson
                  </span>
                  <h3>12 Things to know before buying a house</h3>
                  <span className="right-time">
                    <i className="fa-solid fa-clock"></i>8 min read | 25 Apr
                    2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="foot-left">
                <img src="./images/logo.png" alt="logo" />
                <p>
                  We provide information about properties such as houses, villas
                  and apartments to help people find their dream home
                </p>
                <small>Subscribe to our newsletter!</small>
                <div className="foot-left-email">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="Your email here" />
                  <button className="orange-btn">Subsribe Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <div className="foot-right">
                    <h5>Property</h5>
                    <ul className="list-unstyled foot-right-list">
                      <li>
                        <a href="#">House</a>
                      </li>
                      <li>
                        <a href="#">Apartment</a>
                      </li>
                      <li>
                        <a href="#">Villa</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <div className="foot-right">
                    <h5>Article</h5>
                    <ul className="list-unstyled foot-right-list">
                      <li>
                        <a href="#">New Article</a>
                      </li>
                      <li>
                        <a href="#">Popular Article</a>
                      </li>
                      <li>
                        <a href="#">Most Read</a>
                      </li>
                      <li>
                        <a href="#">Tips & Tricks</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <div className="foot-right">
                    <h5>Contact</h5>
                    <ul className="list-unstyled foot-right-list">
                      <li>
                        <a href="#">Medan, South Sumatera</a>
                      </li>
                      <li>
                        <a href="#">(62) 81312120001</a>
                      </li>
                      <li>
                        <a href="#">halo@homedesk.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-between align-items-center foot-down">
            <div className="d-flex">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="foot-down-socials">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
