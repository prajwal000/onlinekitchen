import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Aboutus() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="pb-5">
          <h1 className="pt-5 pb-3">Online Kitchen Stories</h1>
          <h6>Feed Your Hustle</h6>
        </div>
        <div className=" pb-5">
          <Link className="pe-3 font" to="/">
            Home
          </Link>
          /<span className="ps-3">About</span>
        </div>
        <h1 className="py-2">About</h1>
        <div className="row">
          <div className="col-lg-7">
            <div className="py-4 text-secondary about-text">
              <p>
                Our story dates back to July 2018. Back then, we were a group of
                young energetic hospitality hustlers and technology engineers
                who used to work relentlessly day and night to deliver
                exceptional results within our strict deadlines. The long
                working hours meant no time and energy to cook and do the
                dishes. Despite our desires, the restaurants were closed beyond
                normal hours. The idea of “Online Kitchen” took root when we
                started to relate to the same problems. We envisioned
                entrepreneurs, hustlers, gamers, party people, and late-night
                workers just like us who were not provided with the service they
                deserved and desired. We have always believed that a digital
                city cannot be confined only to the daylight and need services
                that extend beyond the conventional working hours. Just as they
                say that the change begins with you, we decided to do something
                about it. Khaanpin initially started as an initiative carried
                out to help and support netizens and industrious ones like us to
                work and play on their own time and schedule and not be limited
                by the constraints of the service providers.
              </p>
              <p>
                With the vision to transform the Nepalese service industry, we
                commenced from a mere 700 square ft. apartment in a remote
                corner of Lalitpur. We strived to become a smaller part of a
                bigger change by providing versatility and varieties of food to
                the comfort and convenience of homes during the unconventional
                hours i.e. 7pm – 3am. With very limited tools, resources, and
                manpower, we were working ceaselessly towards a better future
                for all. Even with a compact yet very efficient kitchen and
                narrow range of food selection, we at Khaanpin managed to
                receive immense love and support. The goal was to create more
                choices for people and it most certainly always begins with
                Food!!
              </p>
              <p>
                3 years later, we now have a fully equipped kitchen, a corporate
                house, and more than 100 team members, who believe in that same
                vision and are continually growing with online kitchen. The
                service has extended from only 8 hours a day to all day all
                night, 365 days a year. Within a short period, we expanded to
                Pokhara and added multi-cuisine dishes, beverages, bakery, and
                grocery products under our wing. Our Digital presence has also
                improved significantly over the years. From just calling to
                order and a website we updated to an application available on
                both apple and android platforms. We are also on various social
                media platforms mainly: Instagram, Facebook, Twitter, Linkedin,
                and Viber. We can be contacted through various sources of one’s
                preference.
              </p>
              <p>
                At Online Kitchen, we are hustling to provide the best possible
                services to our Online kitcheners and would like to thank all
                our Online kitcheners for their love and support over the years.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Aboutus;
