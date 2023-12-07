import { HoursTable } from "@yext/sites-react-components";
import { Link, getDirections } from "@yext/sites-components";
import type { Address, Hours, CTA, Image as ImageType } from "@yext/types";
import type { LocationProfile } from "src/types/entities";
import "src/styles/fonts.css";

type HeroProps = {
  name: string;
  address: Address;
  background?: ImageType;
  cta1?: CTA;
  cta2?: CTA;
  hours?: Hours;
  happyHours?: Hours;
  entityId: string;
  profile: LocationProfile;
};

const Hero = (props: HeroProps) => {
  return (
    <section className="nap">
      <div
        className="addressBlock  col-50 with-overlay"
        style={{
          backgroundImage: `url(${props.background.url})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="addressBlock_after">
          <div className="addressBlock_inner">
            <h1 className="">
              <span>
                {props.name} {props.entityId}
              </span>
              <span className="hero--after"></span>
            </h1>

            <div className="address">
              <h2 className="address--header">Address:</h2>
              <div className="address--address">
                {props.address.line1} <br /> {props.address.city},{" "}
                {props.address.region} {props.address.postalCode}{" "}
              </div>
            </div>
            <div className="phone">
              Phone:
              <Link
                className="phone--number hover:text-pb-red-500"
                href={`tel:${props.profile.mainPhone}`}
              >
                {" "}
                {props.profile.mainPhone}
              </Link>
            </div>
            <Link
              className="btn hover:bg-black"
              href={`${getDirections(
                props.profile.address,
                props.profile.ref_listings,
                props.profile.googlePlaceId
              )}`}
            >
              Get Directions
            </Link>
          </div>
        </span>
      </div>
      <div className="col-50 hours_cta">
        <div className="hours-wrapper">
          {props.hours && (
            <div className="regular-hours">
              <h2 className="h2-hours ">Regular Hours</h2>
              <HoursTable hours={props.hours} startOfWeek="Monday" />
            </div>
          )}
          {props.hours && (
            <div className="holiday-hours">
              <h2 className="h2-hours">
                {" "}
                <span className="fa fa-beer"></span>Half Price Happy Hour
              </h2>
              <HoursTable hours={props.happyHours} startOfWeek="Monday" />
            </div>
          )}
        </div>
        <div className="cta_wrapper buttonContainerWrapper">
          {(props.cta1 || props.cta2) && (
            <div className="buttonContainerWrapper">
              {props.cta1 && (
                <Link className="btn hover:bg-black" cta={props.cta1} />
              )}
              {props.cta2 && (
                <Link className="btn hover:bg-black" cta={props.cta2} />
              )}
              {props.cta1 && (
                <Link className="btn hover:bg-black" cta={props.cta1} />
              )}
              {props.cta2 && (
                <Link className="btn hover:bg-black" cta={props.cta2} />
              )}
              {props.cta2 && (
                <Link className="btn hover:bg-black" cta={props.cta2} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
