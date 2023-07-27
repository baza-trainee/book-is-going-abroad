// eslint-disable-next-line react/prop-types
const FooterContactsItem = ({ text, icon }) => (
  <li>
    <img src={icon} />
    <a href={`tel:${+text}`}>{text}</a>
  </li>
);

export default FooterContactsItem;
