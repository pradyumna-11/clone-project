import "./index.css";

const CityItem = (props) => {
  const { cityItemDetails, changeActiveCountryItem, activeCountryItem } = props;
  const { name, cityLogoUrl } = cityItemDetails;
  const changeActive = () => {
    changeActiveCountryItem(name);
  };
  const listItemClassName =
    activeCountryItem === name ? "city-item active" : "city-item";
  return (
    <li className={listItemClassName}>
      <button type="button" className="city-item-button" onClick={changeActive}>
        <img src={cityLogoUrl} alt={name} className="city-logo" />
        <p className="city-item-name">{name}</p>
      </button>
    </li>
  );
};

export default CityItem;
