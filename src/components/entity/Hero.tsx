import { HoursTable } from "@yext/sites-react-components";
import { Link, getDirections } from "@yext/sites-components";
import type { Address, Hours, CTA, Image as ImageType } from "@yext/types";
import type { LocationProfile } from "src/types/entities";
// import Breadcrumbs from "src/components/common/Breadcrumbs";

type HeroProps = {
  name: string;
  address: Address;
  background?: ImageType;
  cta1?: CTA;
  cta2?: CTA;
  hours?: Hours;
  numReviews?: number;
  rating?: number;
  profile: LocationProfile;
  // directory: DirectoryProfile;
};

const Hero = (props: HeroProps) => {
  return (
    <section className="nap">
      {/* <Breadcrumbs
        breadcrumbs={props.directory.directoryParents || []}
        separator=">"
        className="container"
        addAnalytics={true}
      /> */}
      {/* main location info */}
      <div className="addressBlock col-50">
        {/* <nav aria-label="Breadcrumb" className="breadcrumbs">
          <ul> */}
        {/* <li>
              <a
                data-linktrack="Top index page"
                href="https://locations.primantibros.com/"
                id="firstCrumb"
                className="ga_w2gi_lp"
                data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
                data-gaact="Click_to_IndexPage"
              >
                Select a State
              </a>
              <span aria-hidden="true">&gt;</span>
            </li>
            <li>
              <a
                data-linktrack="State index page - Pennsylvania"
                href="https://locations.primantibros.com/pa/"
                className="ga_w2gi_lp"
                data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
                data-gaact="Click_to_StatePage"
              >
                Pennsylvania (PA)
              </a>
              <span aria-hidden="true">&gt;</span>
            </li>
            <li>
              <a
                data-linktrack="City index page - Dickson City"
                href="https://locations.primantibros.com/pa/dickson-city/"
                className="ga_w2gi_lp"
                data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
                data-gaact="Click_to_CityPage"
              >
                Dickson City
              </a>
            </li> */}
        {/* Dickson City */}
        {/* </ul>
        </nav> */}
        <div className="addressBlock_inner">
          <h1 className="adressBlock_header">
            <span style={{ textTransform: "capitalize" }}>{props.name}</span>
            <span className="addressBlock_headerafter" />
          </h1>
          <div className="address">
            <h2>Address:</h2>
            <div>
              {props.address.line1}
              <br />
              {props.address.city}, {props.address.region}
            </div>
          </div>
          <div className="phone">
            Phone:{" "}
            <a
              href="tel:(570) 230-7811"
              className="ga_w2gi_lp"
              data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
              data-gaact="Click_to_Call"
            >
              {props.profile.mainPhone}
            </a>
          </div>
          <Link
            className="btn"
            href={`${getDirections(
              props.profile.address,
              props.profile.ref_listings,
              props.profile.googlePlaceId
            )}`}
          >
            Driving Directions
          </Link>
        </div>
      </div>
      <div className="col-50 hours_cta">
        {/* {props.profile.additionalHoursText && (
          <div className="special_msg">
            <h2>What's Happening:</h2>
            {props.profile.additionalHoursText}
          </div>
        )} */}
        <div className="hours_wrapper">
          <div className="regular_hours">
            <h2 className="regular_hours_header">Restaurant Hours</h2>
            {props.hours && (
              <HoursTable
                className=""
                hours={props.hours}
                startOfWeek="Monday"
              />
            )}
          </div>
          {/* <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t\t\t\t\t.happy_hours h2 span.fa.fa-beer {\n\t\t\t\t\t\t\t\t\tcolor: #AC172C;\n\t\t\t\t\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\t\t\t\t\tmargin-left: 0;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
            }}
          /> */}
          <div className="holiday_hours">
            <h2 className="regular_hours_header">
              <span className="fa fa-beer" />
              Half-Price Happy Hour
            </h2>
            {props.hours && (
              <HoursTable
                className=""
                hours={props.hours}
                startOfWeek="Monday"
              />
            )}
          </div>
          {/* <div className=" hh2">
            <h2>Special Hours</h2>
            <div>11/23/2023 CLOSED, 11/24/2023 10:00AM-12:00AM</div>
          </div> */}
        </div>
        <div className="cta_wrapper buttonContainerWrapper">
          {/* <h2>Lorem Ipsum</h2> */}
          <Link
            className="online-ordering btn ga_w2gi_lp"
            data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
            data-gaact="Click_to_OrderOnline"
            href="https://order.primantibros.com/menu/primanti-bros-dickson-city?olonwp=JjBtp_vMLk25gkYh_bnoiQ"
            target="_self"
          >
            Order Online
          </Link>
          <Link
            className="reservations btn ga_w2gi_lp"
            data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
            data-gaact="Click_to_JoinWaitlist"
            href="https://waitlist.getwisely.com/primanti-bros-dickson-city/waitlist"
            target="_self"
          >
            Join The Waitlist
          </Link>
          <Link
            className="view-menu btn ga_w2gi_lp"
            data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
            data-gaact="Click_to_ViewMenu"
            href="javascript:void(0);"
          >
            View Menu
          </Link>
          <Link
            className="catering btn ga_w2gi_lp"
            data-galoc="Primanti Bros. Restaurant and Bar Dickson City - 38021"
            data-gaact="Click_to_OrderCatering"
            href="https://catering.primantibros.com/menu/primanti-bros-dickson-city-catering"
            target="_self"
          >
            Order Catering
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <div className="Hero py-8 sm:py-16">
// <div className="container flex flex-col lg:flex-row">
//   <div className="w-full lg:w-1/2 lg:mt-8 mb-6 lg:mb-0 lg:mr-8">
//     <h1 className="Heading Heading--sub mb-4 sm:mb-0">{props.name}</h1>
//     <div className="Heading Heading--lead mb-4">
//       {props.address.line1}
//     </div>
//     {props.hours && (
//       <div className="mb-4">
//         <HoursStatus
//           hours={props.hours}
//           separatorTemplate={() => <span className="bullet" />}
//           dayOfWeekTemplate={() => null}
//         />
//       </div>
//     )}
{
  /* TODO(aganesh) : use Reviews component when available */
}
//     {props.rating && (
//       <div className="mb-6 lg:mb-8">
//         <span> {props.rating} out of 5 </span>
//         <span>({props.numReviews} reviews)</span>
//       </div>
//     )}
//     {(props.cta1 || props.cta2) && (
//       <div className="flex flex-col lg:flex-row mb-4 gap-4">
//         {props.cta1 && (
//           <Link className="Button Button--primary" cta={props.cta1} />
//         )}
//         {props.cta2 && (
//           <Link className="Button Button--secondary" cta={props.cta2} />
//         )}
//       </div>
//     )}
//   </div>
//   {props.background && (
//     <div className="w-full lg:w-1/2">
//       <Image
//         className="w-full h-full object-cover"
//         image={props.background}
//       />
//     </div>
//   )}
// </div>
// </div>
