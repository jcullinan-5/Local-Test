import type { CTA } from "@yext/types";
import { Link } from "@yext/sites-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  copyrightMessage: string;
  youtube?: string;
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  footerLinks: CTA[];
}

const Footer = (props: FooterProps) => {
  const copyrightMessage = props.copyrightMessage;

  const socialLinks = [
    { link: props.facebook, label: <FaFacebook className="w-5 h-5 mr-4" /> },
    { link: props.instagram, label: <FaInstagram className="w-5 h-5 mr-4" /> },
    { link: props.youtube, label: <FaYoutube className="w-5 h-5 mr-4" /> },
    { link: props.linkedIn, label: <FaLinkedinIn className="w-5 h-5 mr-4" /> },
    { link: props.twitter, label: <FaTwitter className="w-5 h-5 mr-4" /> },
  ].filter((link) => link.link);

  const footerLinks = props.footerLinks || [];

  return (
    <footer id="footer" className="relative bg-white z-40">
      <div className="footer-navigation bg-white">
        <div className="container px-0 border-b border-pb-red-500">
          <ul className="flex flex-wrap p-0 m-0">
            <li className="w-1/2 lg:w-1/4 text-center">
              <a
                href="https://primantibros.com/our-story"
                className="block p-3 sm:p-6 hover:text-white hover:bg-pb-red-500 font-medium text-base text-black sm:text-lg md:text-2xl xl:text-3xl px-2 uppercase"
              >
                Our Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current inline-block w-4 h-4 ml-2"
                >
                  <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
                </svg>
              </a>
            </li>
            <li className="w-1/2 lg:w-1/4 text-center">
              <a
                href="https://primantibros.cardfoundry.com"
                className="block p-3 sm:p-6 hover:text-white hover:bg-pb-red-500 font-medium text-base text-black sm:text-lg md:text-2xl xl:text-3xl px-2 uppercase"
              >
                Gift Cards
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current inline-block w-4 h-4 ml-2"
                >
                  <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
                </svg>
              </a>
            </li>
            <li className="w-1/2 lg:w-1/4 text-center">
              <a
                href="https://recruiting.ultipro.com/PRI1017PRIMA"
                className="block p-3 sm:p-6 hover:text-white hover:bg-pb-red-500 font-medium text-base text-black sm:text-lg md:text-2xl xl:text-3xl px-2 uppercase"
                target="_blank"
                rel="noopener"
                aria-label="careers"
                data-uw-remediation="redirect"
              >
                Careers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current inline-block w-4 h-4 ml-2"
                >
                  <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
                </svg>
              </a>
            </li>
            <li className="w-1/2 lg:w-1/4 text-center">
              <a
                href="https://primantibros.myguestaccount.com/guest/"
                className="block p-3 sm:p-6 hover:text-white hover:bg-pb-red-500 font-medium text-base text-black sm:text-lg md:text-2xl xl:text-3xl px-2 uppercase"
                target="_blank"
                rel="noopener"
                aria-label="loyalty"
                data-uw-remediation="redirect"
              >
                Loyalty
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current inline-block w-4 h-4 ml-2"
                >
                  <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="footer-contact py-4 md:py-8 bg-custom"
        style={{
          backgroundImage:
            'url("https://locations.primantibros.com/images/footer-graphics.png")',
        }}
      >
        <div className="container ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-2/5 lg:w-1/3 p-4 ">
              <div className="">
                <a
                  href="https://primantibros.com/"
                  className="block mb-4"
                  aria-label="primanti bros"
                >
                  <img
                    src="https://primantibros.com/images/brand-logo-footer.svg"
                    alt="Primanti Bros Footer Logo"
                  />
                </a>
                <p className="mb-3 text-black">
                  <strong>World Sandwich Headquarters</strong>
                </p>{" "}
                <a
                  href="tel:+14123252455"
                  className="block font-bold mb-3 text-black"
                  aria-label="call +14123252455"
                  data-uw-remediation="link"
                >
                  +1 (412) 325-2455
                </a>{" "}
                <span className="block mb-3 text-black">
                  2100 Wharton Street, #720{" "}
                  <br role="presentation" data-uw-remediation="screen-reader" />
                  Pittsburgh, PA 15203
                </span>
                <a
                  href="mailto:info@primantibros.com"
                  className="block text-black"
                  aria-label="empty control"
                  data-uw-remediation="link"
                >
                  info@primantibros.com
                </a>{" "}
              </div>
            </div>
            <div className="w-full sm:w-1/5 lg:w-1/3 p-4 footer-links ">
              <ul className="pt-3 sm:pt-0 sm:pl-0">
                <li className="mb-3">
                  <a
                    href="https://primantibros.com/nutritional-information"
                    className="text-black"
                  >
                    Nutritional Information
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://primantibros.com/accessability"
                    className="text-black"
                  >
                    Accessibility
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://recruiting.ultipro.com/PRI1017PRIMA"
                    className="text-black"
                    aria-label="careers"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://primantibros.myguestaccount.com/guest/"
                    className="text-black"
                    aria-label="loyalty"
                  >
                    Loyalty
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://primantibros.com/fundraisers"
                    className="text-black"
                  >
                    Fundraising
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://primantibros.com/contact-us"
                    className="text-black"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-2/5 lg:w-1/3 p-4">
              <h2 className="text-2xl mb-2 text-black">Stay in Touch</h2>
              <div className="flex mb-4">
                <a
                  href="https://twitter.com/primantibros"
                  className="mb-3"
                  target="_blank"
                  rel="noopener"
                  aria-label="twitter - opens in new tab"
                  data-uw-remediation="redirect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block w-6 h-6 social--logo  hover:text-black"
                  >
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765a9.286 9.286 0 01-5.032-1.475 6.605 6.605 0 004.86-1.359 3.285 3.285 0 01-3.066-2.28 3.3 3.3 0 001.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 015.612 6.6a9.32 9.32 0 006.766 3.43 3.286 3.286 0 015.594-2.993 6.583 6.583 0 002.086-.796 3.296 3.296 0 01-1.443 1.816A6.578 6.578 0 0020.5 7.54a6.66 6.66 0 01-1.639 1.697z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/PrimantiBrothers/"
                  className="ml-3 mb-3"
                  target="_blank"
                  rel="noopener"
                  aria-label="facebook - opens in new tab"
                  data-uw-remediation="redirect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block w-6 h-6 social--logo hover:text-black"
                  >
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16v3z" />
                  </svg>
                </a>
                <a
                  href="http://www.instagram.com/primantibros"
                  className="ml-3 mb-3"
                  target="_blank"
                  rel="noopener"
                  aria-label="instagram - opens in new tab"
                  data-uw-remediation="redirect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block w-6 h-6 social--logo  hover:text-black"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zM12 16.108a4.108 4.108 0 110-8.215 4.108 4.108 0 010 8.215zm4.271-7.418a.96.96 0 110-1.92.96.96 0 010 1.92zM14.667 12a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654C4.009 14.445 4 14.173 4 12c0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653C9.556 4.009 9.827 4 12 4s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@primantibros.com"
                  className="ml-3 mb-3"
                  aria-label="empty control"
                  data-uw-remediation="empty-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block w-6 h-6 social--logo  hover:text-black"
                  >
                    <path d="M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>
              <div>
                <h2 className="text-2xl mb-2 text-black">
                  Download Our Rewards App
                </h2>
                <div className="flex flex-wrap">
                  <a
                    href="https://apps.apple.com/us/app/primanti-bros-fanfare-rewards/id1146368528"
                    target="_blank"
                    rel="noopener"
                    className="mr-4 mb-2"
                    aria-label="Download our app on the App Store - opens in new tab"
                    data-uw-remediation="redirect"
                  >
                    <img
                      src="https://primantibros.com/imager/1f5ba471da175dd70cac8235d091e2ed/app-store-image_2bca39983d9d2b5572265e026f5a0c31.webp"
                      alt="Download our app on the App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.punchh.primanti&hl=en_US"
                    target="_blank"
                    rel="noopener"
                    className="mr-4 mb-2"
                    aria-label="Download our app at Google Play - opens in new tab"
                    data-uw-remediation="redirect"
                  >
                    <img
                      src="https://primantibros.com/imager/1f5ba471da175dd70cac8235d091e2ed/play-store-image_2bca39983d9d2b5572265e026f5a0c31.webp"
                      alt="Download our app at Google Play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-center py-2 md:text-right ">
          <p>© 2021 Primanti Bros | All Rights Reserved.</p>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    footer h2 {\n    font-weight: 800;\n    margin: 10px 0px 10px 5px;\n    text-align: left;\n    vertical-align: top;\n    clear: both;\n    }\n    ",
        }}
      />
    </footer>
  );
};

export { Footer };
