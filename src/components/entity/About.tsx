import type { Image as ImageType, CTA as CTAType } from "@yext/types";
// import { Link, Image } from "@yext/sites-components";

type AboutProps = {
  image?: ImageType;
  title: string;
  description?: string;
  cta?: CTAType;
};

const About = (props: AboutProps) => {
  return (
    <section className="about_menu">
      <div className="about col-50">
        <h2>{props.title}</h2>
        {props.description && (
          <p className="about-description">{props.description}</p>
        )}
      </div>
      <div id="menu" className="menu col-50">
        <h2>Menu</h2>
      </div>
    </section>
  );
};

export default About;
