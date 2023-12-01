import type { Image as ImageType, CTA as CTAType } from "@yext/types";
import type { LocationProfile } from "src/types/entities";
import { Link, Image } from "@yext/sites-components";

type AboutProps = {
  image?: ImageType;
  title: string;
  description?: string;
  cta?: CTAType;
  profile?: LocationProfile;
};

const About = (props: AboutProps) => {
  return (
    <section className="about_menu">
      <div className="about col-50">
        <h2>{props.title}</h2>
        {/* {props.description && <div>{props.description}</div>} */}
        <p>
          Founded in Pittsburgh’s historic Strip District in 1933, our Primanti
          Bros. {props.profile?.address.city} location is your go-to for
          delicious handcrafted sandwiches piled high with house-made coleslaw
          and perfectly seasoned fresh-cut fries. Stop by for an ice-cold beer
          and a slice of our famous Primanti Bros pizza. No matter what you’re
          craving, our wide selection of tasty appetizers and delicious drinks
          at a great price is sure to keep you coming back for more!{" "}
        </p>
        <p>
          Check out our custom {props.profile?.address.city} menu and order
          online with ease.
        </p>
        <p>
          Hosting an upcoming event? Leave your guests delighted with Primanti
          Bros Catering and try our renowned boneless wings and mini bro
          sandwich platter.
        </p>
        <p>
          We’ve enjoyed serving our guests for over 80 years. Dedicated to
          providing best-in-class service, we will continue to treat you as a
          member of our family.
        </p>
      </div>
      <div id="menu" className="menu col-50">
        <h2>Menu</h2>
        <div id="mn-menu-container" data-bind="stopBinding: true" style={{}}>
          <div id="tabs-container">
            <div
              className="widget-heading cf"
              data-bind="visible: content.message() || content.phone() || content.url()"
              style={{ display: "none" }}
            >
              <div
                className="widget-message"
                data-bind="html: content.message, visible: content.message"
                style={{ display: "none" }}
              />
              <a
                data-bind="attr: { href: 'tel:' + content.phone }, visible: content.phone"
                href="tel:function c(){if(0<arguments.length)return c.Ua(c[F],arguments[0])&&(c.ia(),c[F]=arguments[0],c.ha()),this;a.l.sc(c);return c[F]}"
                style={{ display: "none" }}
              >
                <div className="widget-phone" data-bind="html: content.phone">
                  phone
                </div>
              </a>
              <a
                data-bind="attr: { href: content.url },  visible: content.url"
                target="_blank"
                style={{ display: "none" }}
              >
                <div className="widget-url" data-bind="html: content.urltext" />
              </a>
            </div>
            <ul
              className="tabs-menu"
              data-bind="foreach: menus, visible: show_tabs"
              style={{ display: "none" }}
            >
              <li
                data-bind="css: { active: tab_index == 0 }"
                className="active"
              >
                <a
                  data-bind="text: digital_display_name, attr: { href: tab_href }"
                  href="#tab-0"
                >
                  Main Menu
                </a>
              </li>
            </ul>
            <div
              className="tab"
              data-bind="template: {name: 'menu-template', foreach: menus, as: 'menu' } "
            >
              <div
                data-bind="attr: { id: tab_id }"
                className="tab-content"
                id="tab-0"
                style={{ display: "block" }}
              >
                <div
                  data-bind="attr: { id: slug }"
                  className="mn-menu"
                  id="mainmenu"
                >
                  <div className="mn-menu-header">
                    <div
                      className="mn-menu-title"
                      data-bind="text: digital_display_name"
                    >
                      Main Menu
                    </div>
                  </div>
                  <div className="mn-menu-sections cf">
                    <ul data-bind="template: {name: 'section-template', foreach: sections, as: 'section' }">
                      <li>
                        <div
                          className="mn-menu-section cf level-0 almost-famous-sandwiches"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Almost Famous Sandwiches
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            Stacked high since 1933. Italian white bread loaded
                            with meat, melted provolone, tomatoes, fresh-cut
                            fries and coleslaw.
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }">
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 originals"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-header"
                                    data-bind="text: header"
                                  >
                                    The Originals
                                  </div>
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Capicola &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Spicy Italian Ham
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.59
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.59
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Angus Sirloin Steak &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $11.59
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $13.59
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Ham &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.29
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Pitts-burger®
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              #2 Best Seller™
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.59
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.59
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Pastrami &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.79
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.79
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Corned Beef &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.49
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.49
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Roast Beef &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.79
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.79
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Oven-Roasted Turkey &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.49
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.49
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Cheese Combo
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $9.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $11.29
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Deluxe Double Egg &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $7.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $9.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Kielbasa &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.29
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Ragin’ Cajun Chicken
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $8.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Genoa Salami &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.59
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.59
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Italian Sausage &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $9.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $11.29
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Bacon &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $9.79
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $11.79
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Colossal Fish &amp; Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Southwest Bean Burger &amp;
                                                Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Classic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Big Bro
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-2"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Sandwich Add-Ons
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Extra cheese{" "}
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $69¢
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Add an egg{" "}
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $69¢
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Top with bacon
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $1.49
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Onions by request
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-3"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Add A Whole Kosher Pickle
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              >
                                                $1.00
                                              </div>
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Get A Side Of Coleslaw
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              >
                                                $1.99
                                              </div>
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }" />
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 tall-boys"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Tall Boys
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            Just like the original but stacked with even more
                            meat.
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Joe, Dick &amp; Stanley
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.49
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Capicola, turkey, roast beef, provolone
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        When Pigs Fly
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Turkey, ham, bacon, fried egg, provolone
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        The Capone
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $10.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Capicola, salami, Italian sausage,
                                      provolone
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Double Roast &amp; Cheddar
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.29
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ pound of roast beef, double cheddar,
                                      Parmesan horseradish mayo
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        PB Reuben
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ pound of corned beef, pastrami, Swiss
                                      cheese, Parmesan horseradish mayo and
                                      grilled slaw served on marble rye
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        The Don Big Boss Italian
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Capicola, salami, ham, pepperoni,
                                      provolone
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Deluxe Turkey &amp; Bacon
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Turkey, double bacon, Swiss cheese, Bacon
                                      Tomato Ranch sauce
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        New Yorker
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.69
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ pound of pastrami, corned beef, Swiss
                                      cheese, spicy beer mustard
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Buffalo Chicken
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.29
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Fried chicken breast covered in buffalo
                                      sauce and blue cheese dressing
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 appetizers"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Appetizers
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          />
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Crazy Big Bavarian Pretzel
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $9.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Served hot with cheese sauce and honey
                                      mustard
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Breaded Mozzarella Wedges
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Six wedges with homemade tomato sauce and
                                      Parmesan
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Batter-Dipped Pub Pickles
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $6.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Spicy pickles fried golden and served with
                                      ranch
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Crispy Zucchini Planks
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.29
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      With homemade tomato sauce and Parmesan
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Jumpin’ Jack Mac Balls
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.49
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Pepper jack mac &amp; cheese, breaded and
                                      fried with creamy Sweet Heat sauce
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Buffalo Cauliflower Bites
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Deep-fried cauliflower bites tossed in
                                      buffalo sauce with ranch or blue cheese to
                                      dip
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 loaded-fries"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Loaded Fries
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          />
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Reuben Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $9.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Pastrami, corned beef, melted Swiss
                                      cheese, grilled coleslaw and Parmesan
                                      horseradish mayo
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Bacon Cheddar Ranch Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Bacon, cheddar cheese, green onions and
                                      Bacon Tomato Ranch sauce
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Cheesesteak Bomb Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Grilled Angus steak, peppers, onions and
                                      cheddar cheese sauce
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Terror Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $7.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Cheese sauce, bacon, Sriracha and jalapeño
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Retro Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $5.29
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      with Parmesan horseradish mayo
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Fresh-Cut Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $4.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                      style={{ display: "none" }}
                                    />
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Cheese Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $5.49
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                      style={{ display: "none" }}
                                    />
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Primanti-Sized Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $9.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Piled high for the table
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                        <li className="cf">
                                          <div className="mn-item-option">
                                            <div
                                              className="mn-option-badges"
                                              data-bind="visible: badges != null, foreach: badges"
                                            />
                                            <div
                                              className="mn-item-option-title"
                                              data-bind="text: title"
                                            >
                                              Add Cheese
                                            </div>
                                            <div
                                              className="mn-option-refmarks"
                                              data-bind="visible: refmarks != null, foreach: refmarks"
                                            />
                                            <div
                                              className="mn-item-option-calories"
                                              data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                              style={{ display: "none" }}
                                            >
                                              (null)
                                            </div>
                                            <div
                                              className="mn-item-option-description"
                                              data-bind="text: description, visible: description != null"
                                            />
                                            <div
                                              className="mn-item-option-price"
                                              data-bind="text: price"
                                            >
                                              $1.00
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 salads"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Salads
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          />
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Angus Sirloin Steak Salad
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $13.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Mixed greens topped with egg, tomato, red
                                      onion, roasted red peppers, crumbled blue
                                      cheese, Angus sirloin steak, French fries
                                      and served with blue cheese dressing
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        The Original Chicken Salad
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Mixed greens topped with egg, tomato,
                                      cucumber, roasted corn, cheddar cheese,
                                      grilled or crispy chicken tossed in choice
                                      of sauce, croutons or French fries and
                                      dressing
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        House Side Salad
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $4.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Mixed greens topped with tomato, egg,
                                      roasted corn, cucumber, cheddar cheese and
                                      croutons
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 wings"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Wings
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            Blue cheese, ranch, celery? Just ask. The first
                            one’s on us.
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }">
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-1"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Boneless
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      5
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $7.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      10
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $12.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      15
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $16.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      20
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $19.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Bone-In
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              >
                                                <div
                                                  className="mn-icon ADVISORY"
                                                  data-bind="css: css_class, text: content"
                                                >
                                                  *
                                                </div>
                                              </div>
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      5
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $9.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      10
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $14.29
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      15
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $19.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      20
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $24.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Sauces
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Garlic Parmesan
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Honey BBQ
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Honey Mustard
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Smokey BBQ
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Honey Buffalo
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Buffalo Ranch
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Sweet Heat
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Authentic Buffalo
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Korean BBQ
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Nashville Hot
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      Spicy Garlic
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      XX Hot
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-2"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Sunday &amp; Monday - Wings
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              >
                                                $79¢
                                              </div>
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-3"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Chicken Tenders And Fries
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Choose any sauce on the side
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      4 piece
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $8.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      6 piece
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $10.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }" />
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 handhelds"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Handhelds
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            All handhelds are served with coleslaw or French
                            fries.
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        BBQ Bacon Cheddar Burger
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ lb smashed patty, BBQ sauce, bacon,
                                      cheddar cheese, lettuce, tomato and red
                                      onion
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Half-Pound Cheeseburger
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ lb smashed patty, lettuce, tomato, red
                                      onion, pickle, mayo and double cheese -
                                      American, Swiss or provolone
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                        <li className="cf">
                                          <div className="mn-item-option">
                                            <div
                                              className="mn-option-badges"
                                              data-bind="visible: badges != null, foreach: badges"
                                            />
                                            <div
                                              className="mn-item-option-title"
                                              data-bind="text: title"
                                            >
                                              Add bacon for
                                            </div>
                                            <div
                                              className="mn-option-refmarks"
                                              data-bind="visible: refmarks != null, foreach: refmarks"
                                            />
                                            <div
                                              className="mn-item-option-calories"
                                              data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                              style={{ display: "none" }}
                                            >
                                              (null)
                                            </div>
                                            <div
                                              className="mn-item-option-description"
                                              data-bind="text: description, visible: description != null"
                                            />
                                            <div
                                              className="mn-item-option-price"
                                              data-bind="text: price"
                                            >
                                              $.99
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Oven-Baked Italian Crostini
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $10.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      10” crostini with capicola, salami, ham,
                                      pepperoni, mozzarella cheese, Italian
                                      vinaigrette, lettuce, tomato and white
                                      onion
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        The Brothers Burger
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.79
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      ½ lb smashed patty, bacon, pastrami, fried
                                      egg, double provolone cheese, lettuce,
                                      tomato, red onion and banana peppers
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Loaded Cheesesteak Bomb
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      >
                                        <div
                                          className="mn-icon ADVISORY"
                                          data-bind="css: css_class, text: content"
                                        >
                                          *
                                        </div>
                                      </div>
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $12.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Packed with grilled Angus steak, peppers,
                                      onions and American cheese; served on a
                                      fresh 10” crostini roll
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Crispy Chicken Sandwich
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $10.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Crispy chicken breast with provolone
                                      cheese, lettuce, tomato, red onion, pickle
                                      and fresh Cajun sauce; served on a brioche
                                      bun
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Buffalo Chicken Sandwich
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $10.59
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Crispy chicken breast tossed in buffalo
                                      sauce, lettuce, tomato, red onion, pickle
                                      and blue cheese; served on a brioche bun
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Grilled Chicken Spinach Club
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $11.29
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Grilled chicken breast, bacon, spinach,
                                      red onion, tomato, Swiss cheese and Bacon
                                      Tomato Ranch sauce; served on a brioche
                                      bun
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 housemade-pizza"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Housemade Pizza
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            Fresh Dough zesty sauce Whole Milk Mozzarella
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }">
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-1"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                You Build It
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Includes up to three toppings
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      14" - 8 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $17.49
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      18" - 12 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $20.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                White
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Garlic herb sauce, Parmesan
                                              cheese, mozzarella cheese, tomato
                                              and fresh spinach
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      14" - 8 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $14.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      18" - 12 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $18.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Classic Cheese
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Mozzarella cheese and homemade
                                              tomato sauce
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      14" - 8 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $14.99
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      18" - 12 Slices
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    />
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $17.79
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                9” Personal Deluxe
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              >
                                                $8.99
                                              </div>
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Includes up to three toppings
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-2"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Toppings
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              Extra Cheese Pepperoni Sausage
                                              Onions Green Peppers Mushrooms
                                              Spinach Ham Bacon Anchovies
                                              Tomatoes Black Olives Banana
                                              Peppers Jalapeños
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}">
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      14”
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    >
                                                      ea
                                                    </div>
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $1.89
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="cf">
                                                  <div className="mn-item-option">
                                                    <div
                                                      className="mn-option-badges"
                                                      data-bind="visible: badges != null, foreach: badges"
                                                    />
                                                    <div
                                                      className="mn-item-option-title"
                                                      data-bind="text: title"
                                                    >
                                                      18”
                                                    </div>
                                                    <div
                                                      className="mn-option-refmarks"
                                                      data-bind="visible: refmarks != null, foreach: refmarks"
                                                    />
                                                    <div
                                                      className="mn-item-option-calories"
                                                      data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      (null)
                                                    </div>
                                                    <div
                                                      className="mn-item-option-description"
                                                      data-bind="text: description, visible: description != null"
                                                    >
                                                      ea
                                                    </div>
                                                    <div
                                                      className="mn-item-option-price"
                                                      data-bind="text: price"
                                                    >
                                                      $1.99
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-3"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Really Big Pizza Slice
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              >
                                                $1.99
                                              </div>
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                            >
                                              • During Half-Priced Happy Hour •
                                              Toppings Extra •&nbsp;Dine In Only
                                            </div>
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }" />
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 pizza-feast"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Pizza Feast
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          >
                            Tuesday &amp; Thursday Dine In or Take Out Comes
                            with up to 3 toppings, salad &amp; pop
                          </div>
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        14”
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $18.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                      style={{ display: "none" }}
                                    />
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        18”
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $20.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                      style={{ display: "none" }}
                                    />
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 desserts"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Desserts
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          />
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Reese’s® Pie
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $6.49
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Pie with peanut butter, milk chocolate and
                                      cookie crust; topped with chocolate,
                                      caramel, Reese’s® Peanut Butter Cups and a
                                      drizzle of Hershey’s Chocolate Syrup
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Funnel Cake Fries
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $8.99
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Topped with powdered sugar and Hershey’s
                                      chocolate syrup for dipping - big enough
                                      for sharing
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mn-item cf">
                                  <div
                                    className="mn-item-img"
                                    data-bind="visible: image"
                                    style={{ display: "none" }}
                                  >
                                    <img data-bind="attr:{src: image}" alt="" />
                                  </div>
                                  <div
                                    data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                    className="mn-item-content"
                                  >
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'default'"
                                    >
                                      <div
                                        className="mn-item-badges"
                                        data-bind="visible: badges != null, foreach: badges"
                                      />
                                      <div
                                        className="mn-item-title"
                                        data-bind="text: title"
                                      >
                                        Deep-Fried Cheesecake Burrito
                                      </div>
                                      <div
                                        className="mn-item-refmarks"
                                        data-bind="visible: refmarks != null, foreach: refmarks"
                                      />
                                      <div
                                        className="mn-item-calories"
                                        data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                        style={{ display: "none" }}
                                      >
                                        (null)
                                      </div>
                                      <div
                                        className="mn-item-price"
                                        data-bind="text: price, visible: price != null"
                                      >
                                        $6.49
                                      </div>
                                    </div>
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'wine'"
                                    />
                                    <div
                                      className="cf"
                                      data-bind="if: item_type() == 'beer'"
                                    />
                                    <div
                                      className="mn-item-description"
                                      data-bind="text: description, visible: description() != null"
                                    >
                                      Cheesecake filling, wrapped and deep fried
                                      with strawberry puree and chocolate syrup
                                      drizzled on top
                                    </div>
                                    <div
                                      className="mn-item-options cf"
                                      data-bind="visible: options() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                    </div>
                                    <div
                                      className="mn-item-linelists cf"
                                      data-bind="visible: linelists() != null"
                                      style={{ display: "none" }}
                                    >
                                      <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="mn-menu-section cf level-0 drinks"
                          data-bind="css: css_class"
                        >
                          <div
                            className="mn-section-header"
                            data-bind="text: header"
                          >
                            Drinks
                          </div>
                          <div
                            className="mn-section-sub-head"
                            data-bind="text: subhead"
                          />
                          <div
                            className="mn-section-sub-sections cf"
                            data-bind="visible: subsections != null"
                          >
                            <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }">
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-1"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Coca-Cola
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Diet Coke
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Coca-Cola Cherry
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Sprite
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Barq’s Root Beer
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Barq’s Red Cream Soda
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Minute Maid Lemonade
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Fuze
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Red Bull
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="mn-menu-section cf level-1 no-header subsection-2"
                                  data-bind="css: css_class"
                                >
                                  <div
                                    className="mn-section-sub-head"
                                    data-bind="text: subhead"
                                  />
                                  <div
                                    className="mn-section-sub-sections cf"
                                    data-bind="visible: subsections != null"
                                  >
                                    <ul data-bind="template: {name: 'section-template', foreach: subsections, as: 'subsection' }" />
                                  </div>
                                  <div
                                    className="mn-section-items cf"
                                    data-bind="visible: items != null"
                                  >
                                    <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }">
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Arnold Palmer
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Fresh-Brewed Iced Tea
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Fresh-Brewed Sweet Tea
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Coffee
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Fruit Juices
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Hot Tea
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Hot Chocolate
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="mn-item cf">
                                          <div
                                            className="mn-item-img"
                                            data-bind="visible: image"
                                            style={{ display: "none" }}
                                          >
                                            <img
                                              data-bind="attr:{src: image}"
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            data-bind="css: {'mn-item-content': true , 'mn-item-has-image':  image  }"
                                            className="mn-item-content"
                                          >
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'default'"
                                            >
                                              <div
                                                className="mn-item-badges"
                                                data-bind="visible: badges != null, foreach: badges"
                                              />
                                              <div
                                                className="mn-item-title"
                                                data-bind="text: title"
                                              >
                                                Milk &amp; Chocolate Milk
                                              </div>
                                              <div
                                                className="mn-item-refmarks"
                                                data-bind="visible: refmarks != null, foreach: refmarks"
                                              />
                                              <div
                                                className="mn-item-calories"
                                                data-bind="text: '(' + cal_display() + ')', visible: calories() != null"
                                                style={{ display: "none" }}
                                              >
                                                (null)
                                              </div>
                                              <div
                                                className="mn-item-price"
                                                data-bind="text: price, visible: price != null"
                                              />
                                            </div>
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'wine'"
                                            />
                                            <div
                                              className="cf"
                                              data-bind="if: item_type() == 'beer'"
                                            />
                                            <div
                                              className="mn-item-description"
                                              data-bind="text: description, visible: description() != null"
                                              style={{ display: "none" }}
                                            />
                                            <div
                                              className="mn-item-options cf"
                                              data-bind="visible: options() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: options, as: 'option'}" />
                                            </div>
                                            <div
                                              className="mn-item-linelists cf"
                                              data-bind="visible: linelists() != null"
                                              style={{ display: "none" }}
                                            >
                                              <ul data-bind="template: {name: 'option-template', foreach: linelists, as: 'linelist'}" />
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="mn-section-statements cf"
                                    data-bind="visible: statements != null"
                                  >
                                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="mn-section-items cf"
                            data-bind="visible: items != null"
                          >
                            <ul data-bind="template: {name: 'item-template', foreach: items, as: 'item'}, css: { 'col-2': $root.item_cols() > 1 }" />
                          </div>
                          <div
                            className="mn-section-statements cf"
                            data-bind="visible: statements != null"
                          >
                            <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="mn-menu-statements cf"
                    data-bind="visible: statements != null"
                  >
                    <ul data-bind="template: {name: 'statement-template', foreach: statements, as: 'statement'}">
                      <li>
                        <div className="mn-statement cf">
                          <div
                            className="mn-statement-icons"
                            data-bind="visible: icons != null, foreach: icons, as: icon"
                          />
                          <div
                            className="mn-statement-message"
                            data-bind="text: message"
                          >
                            * Consuming raw or undercooked meats, poultry,
                            seafood, shellfish, or eggs may increase your risk
                            of foodborne illness. All prices and items subject
                            to change.
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mn-statement cf">
                          <div
                            className="mn-statement-icons"
                            data-bind="visible: icons != null, foreach: icons, as: icon"
                          />
                          <div
                            className="mn-statement-message"
                            data-bind="text: message"
                          >
                            2,000 calories a day is used for general nutrition
                            advice, but calorie needs vary. Additional nutrition
                            information available upon request.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mn-menu-footer">
                    <div
                      className="mn-menu-code"
                      data-bind="text: code"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      MAIN_GA5_1123
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t\t\t\t@media (min-width: 1569px){\n\t\t\t\t\t\t\t.hours_wrapper > div:nth-of-type(3){width: 200px;margin-left: 500px;}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbody{margin: 0;padding: 0;}\n\t\t\t\t\t\t#mn-menu-container{padding: 0 0 10px;}\n\t\t\t\t\t\t.mn-menu-section{margin: 0;}\n\t\t\t\t\t\t.level-0 > div{display: none;}\n\t\t\t\t\t\t.level-0 > div.mn-section-header {\n\t\t\t\t\t\t\tbackground-color: #EAC5CA;\n\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\tfont-family: \"Alternate Gothic Std No 1\", sans-serif;\n\t\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\tpadding: 8px 8px 8px 20px;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.level-0 > .mn-section-header:after {\n\t\t\t\t\t\t\tcolor: #000;\n\t\t\t\t\t\t\tcontent: '+';\n\t\t\t\t\t\t\tfont-family: \"Alternate Gothic Std No 1\", sans-serif;\n\t\t\t\t\t\t\tfont-size: 36px;\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\tright: 20px;\n\t\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\t\ttransform: translateY(-50%);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.level-0 > .mn-section-header.open:after{content: '\\2013';font-size: 24px;}\n\t\t\t\t\t\t.mn-item-title {\n\t\t\t\t\t\t\tfont-family: \"Alternate Gothic Std No 1\", sans-serif;\n\t\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mn-section-sub-head{text-align: left;}\n\t\t\t\t\t\t.mn-item-option, .mn-item-price, .mn-section-sub-head {\n\t\t\t\t\t\t\tfont-family: 'Uniform',sans-serif;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#tabs-container .mn-menu-header, .level-0 > .mn-section-items.cf,.mn-section-sub-head, .classic-mules > .mn-section-header, .mules .mn-section-sub-sections.cf, .mn-section-statements, .mn-menu-code {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mn-menu-code{font-size: 16px;}\n\t\t\t\t\t",
          }}
        />
      </div>
    </section>
  );
};

export default About;
