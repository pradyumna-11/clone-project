import { Component } from "react";
import { GoVerified } from "react-icons/go";
import { CiMoneyBill } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { IoBed } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdGlobe } from "react-icons/io";
import { v4 } from "uuid";
import Header from "../Header";
import CityItem from "../CityItem";
import img1 from "../../images/austin.jpg";
import img2 from "../../images/barcelona.jpg";
import img3 from "../../images/boston.jpg";
import img4 from "../../images/brimingham.jpg";
import img5 from "../../images/chicago.jpg";
import img6 from "../../images/cork.jpg";
import img7 from "../../images/coventry.jpg";
import img8 from "../../images/dublin.jpg";
import img9 from "../../images/edinberg.jpg";
import img10 from "../../images/frankfurt.jpg";
import img11 from "../../images/goldcost.jpg";
import img12 from "../../images/hamburg.jpg";
import img13 from "../../images/leicester.jpg";
import img14 from "../../images/liverpool.jpg";
import img15 from "../../images/london.jpg";
import img16 from "../../images/melbourne.jpg";
import img17 from "../../images/miami.jpg";
import img18 from "../../images/minepolis.jpg";
import img19 from "../../images/montreal.jpg";
import img20 from "../../images/newyork.jpg";
import img21 from "../../images/nottingham.jpg";
import img22 from "../../images/salford.jpg";
import img23 from "../../images/sanfrancisco.jpg";
import img24 from "../../images/sydney.jpg";
import img25 from "../../images/tornoto.jpg";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CountryCard, CountryName } from "./StyledComponents";

import "./index.css";

const citiesSelectionData = [
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-uk.svg",
    name: "United Kingdom",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-aus.svg",
    name: "Australia",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-ire.svg",
    name: "Ireland",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-us.svg",
    name: "United States",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-can.svg",
    name: "Canada",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-ger.svg",
    name: "Germany",
  },
  {
    id: v4(),
    cityLogoUrl:
      "https://prod-static-assets.amberstudent.com/images/flag-esp.svg",
    name: "Spain",
  },
];

const imagesCountryData = [
  {
    id: v4(),
    imageUrl: img1,
    name: "austin",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img2,
    name: "barcelona",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img3,
    name: "barcelona",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img4,
    name: "boston",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img5,
    name: "brimingham",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img6,
    name: "chicago",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img7,
    name: "cork",
    country: "United Kingdom",
  },
  {
    id: v4(),
    imageUrl: img8,
    name: "coventry",
    country: "Australia",
  },
  {
    id: v4(),
    imageUrl: img9,
    name: "dublin",
    country: "Australia",
  },
  {
    id: v4(),
    imageUrl: img10,
    name: "edinberg",
    country: "Australia",
  },
  {
    id: v4(),
    imageUrl: img11,
    name: "frankfurt",
    country: "Australia",
  },
  {
    id: v4(),
    imageUrl: img12,
    name: "goldcost",
    country: "Ireland",
  },
  {
    id: v4(),
    imageUrl: img13,
    name: "hamburg",
    country: "Ireland",
  },
  {
    id: v4(),
    imageUrl: img14,
    name: "houston",
    country: "Ireland",
  },
  {
    id: v4(),
    imageUrl: img15,
    name: "leicester",
    country: "United States",
  },
  {
    id: v4(),
    imageUrl: img16,
    name: "liverpool",
    country: "United States",
  },
  {
    id: v4(),
    imageUrl: img17,
    name: "london",
    country: "United States",
  },
  {
    id: v4(),
    imageUrl: img18,
    name: "melbourne",
    country: "United States",
  },
  {
    id: v4(),
    imageUrl: img19,
    name: "miami",
    country: "Canada",
  },
  {
    id: v4(),
    imageUrl: img20,
    name: "minepolis",
    country: "Canada",
  },
  {
    id: v4(),
    imageUrl: img21,
    name: "montrel",
    country: "Germany",
  },
  {
    id: v4(),
    imageUrl: img22,
    name: "newyork",
    country: "Germany",
  },
  {
    id: v4(),
    imageUrl: img23,
    name: "nottingham",
    country: "Spain",
  },
  {
    id: v4(),
    imageUrl: img24,
    name: "salford",
    country: "Spain",
  },
  {
    id: v4(),
    imageUrl: img25,
    name: "sanfrancisco",
    country: "Spain",
  },
];

class Home extends Component {
  state = { activeCountryItem: citiesSelectionData[0].name };

  changeActiveCountryItem = (value) => {
    this.setState({ activeCountryItem: value });
  };

  render() {
    const { activeCountryItem } = this.state;
    const slidesCountriesList = imagesCountryData.filter(
      (each) => each.country === activeCountryItem
    );
    console.log(slidesCountriesList);
    return (
      <div className="home-bg">
        <div className="home-banner-section">
          <Header />
          <div className="home-banner-content-section">
            <h1 className="home-banner-heading">Home away from home!</h1>
            <p className="home-banner-tag-line">
              Book student accomodations near top universities across the globe
            </p>
            <ul className="home-banner-items-container">
              <li className="home-banner-item">
                <GoVerified color="#Fe2c54" />
                <p className="home-banner-item-text">Verified Properties</p>
              </li>
              <li className="home-banner-item">
                <TfiHeadphoneAlt color="#Fe2c54" />
                <p className="home-banner-item-text">24X7 Assistance</p>
              </li>
              <li className="home-banner-item">
                <CiMoneyBill color="#Fe2c54" />
                <p className="home-banner-item-text">Pricce Math Gaurentee</p>
              </li>
            </ul>
            <div className="banner-search-container">
              <input
                type="text"
                placeholder="Search by property,university or city"
                className="banner-input"
              />
              <button className="banner-search-button" type="button">
                <CiSearch size="25px" color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <ul className="site-provision-container">
            <li className="site-provision-item">
              <IoBed size="30px" color="pink" />
              <h1 className="site-provision-heading">1M + beds</h1>
              <p className="site-provision-description">
                Book your perfect place from an extensive list of options
              </p>
            </li>
            <li className="site-provision-item">
              <GiGraduateCap size="30px" color="pink" />
              <h1 className="site-provision-heading">800+ Universities</h1>
              <p className="site-provision-description">
                We collaborated with more than 800 companies
              </p>
            </li>
            <li className="site-provision-item">
              <IoMdGlobe size="30px" color="pink" />
              <h1 className="site-provision-heading">250+ Global Cities</h1>
              <p className="site-provision-description">
                We are connected with 250+ global cites
              </p>
            </li>
            <li className="site-provision-item">
              <img
                src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
                alt="rating"
                className="site-provision-item-img"
              />
              <h1 className="site-provision-heading">4.5/5 Trust Rate</h1>
              <p className="site-provision-description">
                More than 3000 customers gave 4+ rating.
              </p>
            </li>
          </ul>

          <div className="cities-container">
            <h1 className="cities-container-heading">
              Popular Cities across the Globe
            </h1>
            <p className="cities-container-description">
              Book student accomodations near top cities and universities around
              the world.
            </p>
            <ul className="cities-list">
              {citiesSelectionData.map((each) => (
                <CityItem
                  key={each.id}
                  cityItemDetails={each}
                  changeActiveCountryItem={this.changeActiveCountryItem}
                  activeCountryItem={activeCountryItem}
                />
              ))}
            </ul>
            <div className="countries-slider-real">
              <Slider dots="false" slidesToShow={2} slidesToScroll={2}>
                {slidesCountriesList.map((each) => (
                  <CountryCard
                    className="city-visit-container"
                    url={each.imageUrl}
                    key={each.id}
                  >
                    <CountryName>{each.name}</CountryName>
                  </CountryCard>
                ))}
              </Slider>
            </div>
          </div>

          <div className="promotion-div">
            <h1 className="promotion-heading">
              Amber Referal Program and offers
            </h1>
            <p className="promotion-description">
              Several promotions, deals and special offers are available.
            </p>
            <div className="promotions-list">
              <div className="promotion-item-1">
                <h1 className="prom-heading">
                  Earn upto $50 by just refering a friend
                </h1>
                <p className="prom-tag">
                  Just send a referal code and earn $50
                </p>
                <button className="prom-button" type="button">
                  Refer now
                </button>
              </div>
              <div className="promotion-item-2">
                <h1 className="prom-heading">
                  Unlock your academic scholarship by our company
                </h1>
                <p className="prom-tag">
                  Just join and fill details to get a scholarship.
                </p>
                <button className="prom-button" type="button">
                  Apply now
                </button>
              </div>
            </div>
          </div>

          <div className="assurance-container">
            <h1 className="acc-heading">Book perfect accomodation</h1>
            <p className="acc-para">Take out the confusion and apply now</p>
            <ul className="site-assurance-container">
              <li className="site-assurance-item">
                <FaHeartCircleCheck size="30px" color="pink" />
                <h1 className="site-assurance-heading">
                  Quick and easy booking
                </h1>
                <p className="site-assurance-description">
                  There are lots of booking options available.
                </p>
              </li>
              <li className="site-assurance-item">
                <AiFillDollarCircle size="30px" color="pink" />
                <h1 className="site-assurance-heading">price match</h1>
                <p className="site-assurance-description">
                  The exact price matches for you.
                </p>
              </li>
              <li className="site-assurance-item">
                <FaHandHoldingHeart size="30px" color="pink" />
                <h1 className="site-assurance-heading">24X7 assurance</h1>
                <p className="site-assurance-description">
                  We provide you 24X7 assurance
                </p>
              </li>
              <li className="site-assurance-item">
                <MdVerifiedUser size="30px" color="pink" />
                <h1 className="site-assurance-heading">100% verified</h1>
                <p className="site-assurance-description">
                  Things involved are 100% Gaurentee
                </p>
              </li>
            </ul>
          </div>

          <div className="cities-container">
            <h1 className="cities-container-heading">
              Popular Cities across the Globe
            </h1>
            <p className="cities-container-description">
              Book student accomodations near top cities and universities around
              the world.
            </p>
            <ul className="cities-list">
              {citiesSelectionData.map((each) => (
                <CityItem
                  key={each.id}
                  cityItemDetails={each}
                  changeActiveCountryItem={this.changeActiveCountryItem}
                  activeCountryItem={activeCountryItem}
                />
              ))}
            </ul>
            <div className="countries-slider">
              {slidesCountriesList.map((each) => (
                <CountryCard
                  className="city-visit-container"
                  url={each.imageUrl}
                  key={each.id}
                >
                  <CountryName>{each.name}</CountryName>
                </CountryCard>
              ))}
            </div>
          </div>

          <div className="end-section">
            <div className="end-1">
              <h1 className="end-1-heading">amber</h1>
              <p className="end-1-para">
                Book your student accommodation near top universities across the
                globe
              </p>
              <div className="end-card">
                <img
                  src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
                  alt="rating"
                  className="site-provision-item-img"
                />
                <h1 className="site-provision-heading">4.5/5 Trust Rate</h1>
                <p className="site-provision-description">
                  More than 3000 customers gave 4+ rating.
                </p>
              </div>
            </div>

            <div className="end-2">
              <a href="https://www.google.com" className="end-anchor">
                About
              </a>
              <a href="https://www.google.com" className="end-anchor">
                How it works
              </a>
              <a href="https://www.google.com" className="end-anchor">
                Refer a friend
              </a>
              <a href="https://www.google.com" className="end-anchor">
                Book a room
              </a>
              <a href="https://www.google.com" className="end-anchor">
                Live with us
              </a>
              <a href="https://www.google.com" className="end-anchor">
                Partner with us
              </a>
              <a href="https://www.google.com" className="end-anchor">
                Career
              </a>
            </div>
            <div className="follow">
              <h1 className="follow-heading">Follow us</h1>
              <div className="follow-section">
                <FaFacebookSquare size="25px" color="blue" />
                <FaWhatsappSquare size="25px" color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
