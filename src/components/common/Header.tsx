import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="relative transition left-0"
      style={{ left: isOpen ? "-381px" : "0" }}
    >
      <header
        id="header"
        className="sticky top-0 w-full bg-custom bg-cover z-50 "
        style={{
          backgroundImage:
            'url("https://locations.primantibros.com/images/footer-graphics.2.png")',
        }}
      >
        <a href="#content-skipped" className="sr-only sr-only-focusable">
          Skip to main content
        </a>
        <div className="flex justify-between">
          <div className="block w-3/5 xl:w-4/5 p-2 md:pr-24 xl:pr-48 bg-black flex flex-row justify-end items-start">
            <div className="header-location-btn relative">
              <a
                href="https://primantibros.com/locations"
                className="flex flex-row justify-end items-start p-2 rounded-sm hover:bg-red-600 location-link ga_w2gi_lp"
                data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
                data-gaact="Click_to_FindPrimantiBros"
                style={{}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current inline-block w-6 h-6 text-red-100 mr-2"
                >
                  <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561C8 4.73 9.869 3 12 3zm0-2C8.852 1 6 3.553 6 6.702 6 9.85 8.602 13.609 12 19c3.398-5.391 6-9.15 6-12.298C18 3.553 15.149 1 12 1zm0 8a2 2 0 11-.001-3.999A2 2 0 0112 9zm8 6h-3.135a118.64 118.64 0 01-1.232 2h3.131l.5 1H15l-.344.544-.289.456h.558l.858 2H8.295l.858-2h.479l-.289-.456L9 18H6.958l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2H4l-4 8h24l-4-8zM7.206 21h-3.97L5 17.472 6.516 19h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                </svg>
                <span className="font-bold text-red-100">
                  <span className="title">FIND MY PRIMANTI BROS.</span>
                  <span className="block font-medium text-2xs uppercase">
                    For menus, online ordering, &amp; more
                  </span>
                </span>
              </a>
            </div>
          </div>
          <a
            href="https://order.primantibros.com/locations"
            className="order-now--header online-order-link flex items-center justify-center block w-2/5 xl:w-1/5 p-4 font-bold text-sm md:text-md lg:text-lg xl:text-xl text-center text-white hover:text-white uppercase transition ga_w2gi_lp"
            data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
            data-gaact="Click_to_OrderNow"
          >
            Order Now
          </a>
        </div>
        <div className="container">
          <div className="py-6">
            <div className="flex justify-between items-center flex-no-wrap sm:flex-wrap ">
              <div className="brand-logo w-3/5 sm:w-auto ">
                <a
                  href="https://primantibros.com/"
                  aria-label="primanti bros"
                  data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
                  data-gaact="Click_to_CorporateSite"
                >
                  <img
                    src="https://primantibros.com/imager/7bc0ee636b3b83484fc3b9348863bd22/2760/testing-logo-for-web-header_2bca39983d9d2b5572265e026f5a0c31.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="site-navigation pl-4 sm:pl-0">
                <ul className="flex flex-wrap items-center sm:justify-center m-0 p-0">
                  <li className="hidden lg:block">
                    <a
                      href="https://primantibros.com/locations"
                      className="transition py-2 px-4 text-xl text-black hover:text-red-500 font-bold font-body header--text"
                    >
                      Locations
                    </a>
                  </li>
                  <li className="hidden lg:block">
                    <a
                      href="https://www.ezcater.com/brand/pvt/primanti-bros-1?utm_medium=comarketing&utm_source=ezo&utm_campaign=primanti25&afp=288109740254"
                      className="transition py-2 px-4 text-xl text-black hover:text-red-500 font-bold font-body header--text"
                      target="_blank"
                      rel="noopener"
                      aria-label="Catering - opens in new tab"
                      data-uw-remediation="redirect"
                    >
                      Catering
                    </a>
                  </li>
                  <li className="hidden lg:block">
                    <a
                      href="https://primantibros.myguestaccount.com/guest/"
                      className="transition py-2 px-4 text-xl text-black hover:text-red-500 font-bold font-body header--text"
                      target="_blank"
                      rel="noopener"
                      aria-label="loyalty"
                      data-uw-remediation="redirect"
                    >
                      Fanfare Rewards
                    </a>
                  </li>
                  <li className="flex items-center menu-toggler md:ml-4 xl:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="transition py-2 px-4 text-xl text-black hover:text-red-500 font-bold font-body pr-4 hidden sm:block md:hidden xl:block header--text"
                      aria-label="Click to toggle additional header links"
                      data-uw-remediation="link"
                      id="moreToggle"
                    >
                      More
                      <span className="sr-only">
                        {" "}
                        - click to toggle additional header links
                      </span>
                    </a>
                    <div
                      className={`nav-icon ${isOpen ? "open" : ""}`}
                      onClick={handleNavIconClick}
                    >
                      <span className="nav-1" />
                      <span className="nav-2" />
                      <span className="nav-3" />
                      <span className="nav-4" />
                    </div>
                  </li>
                </ul>
              </div>
              <div
                id="nav-drawer"
                className={`fixed w-4/5 sm:w-2/5 xl:w-1/5 transition inset-y-0 right-0 bg-black p-6 overflow-y-auto ${
                  isOpen ? "nav-drawer-open" : "nav-drawer"
                }`}
                aria-expanded="false"
                // style={{ height: 100, transform: "translateX(100%)" }}
              >
                <ul className="list-none p-0 m-0">
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Home
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/locations"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Locations &amp; Menu
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.myguestaccount.com/guest/"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                      target="_blank"
                      rel="noopener"
                      aria-label="FanFare Rewards - opens in new tab"
                      data-uw-rm-ext-link=""
                      uw-rm-external-link-id="https://primantibros.myguestaccount.com/guest/$fanfarerewards"
                    >
                      FanFare Rewards
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://catering.primantibros.com/"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Catering
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/promotions"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Promotions
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.myguestaccount.com/guest/egift"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Buy Gift Cards
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.myguestaccount.com/guest/nologin/account-balance"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Check Gift Card Balance
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/fundraisers"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Fundraising
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://www.rallyhouse.com/a/local/yb/primanti-bros"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                      target="_blank"
                      rel="noopener"
                      aria-label="Shop - opens in new tab"
                      data-uw-rm-ext-link=""
                      uw-rm-external-link-id="https://www.rallyhouse.com/a/local/yb/primanti-bros$shop"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/careers"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/our-story"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/contact-us"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="ml-0">
                    <a
                      href="https://primantibros.com/missingpoints"
                      className="block py-2 px-4 text-gray-100 hover:text-red-100 hover:bg-red-500 font-bold font-body text-xl transition"
                    >
                      FanFare Rewards: Missing Points
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Header };
