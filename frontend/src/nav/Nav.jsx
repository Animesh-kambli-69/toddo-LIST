import PillNav from './PillNav.jsx';
import logo from '../assets/react.svg';

function Nav() {
  return (
    <div >
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#1a1a1a"
      pillColor="#54abe0"
      hoveredPillTextColor="#387cd4"
      pillTextColor="#100834"
      theme="dark"
      initialLoadAnimation={false}
    />
  </div>) ;
}

export default Nav;
