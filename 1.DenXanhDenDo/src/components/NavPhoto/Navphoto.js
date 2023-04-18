

import './Navphoto.css';

const NavPhotoItem = props => {
  const { title, src } = props;
  return <img src={src} alt={title} />;
};

const NavPhoto = () => {
  return (
    <div className="NavPhoto">
      <NavPhotoItem src="images/navphoto-1.png" title="NavPhoto" />
    </div>
  );
};

export default NavPhoto;



