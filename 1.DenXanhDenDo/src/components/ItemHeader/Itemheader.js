


import './Itemheader.css';


const ItemheaderContent = props => {
  const { title, src } = props;
  return <a href={src}>{title}</a>;
};

const Itemheader = () => {
  return (
    <div className="Itemheader">
      <ItemheaderContent title={<h2> SHOP BY JEWELRY TYPE</h2>} />
    </div>
  );
};

export default Itemheader;


