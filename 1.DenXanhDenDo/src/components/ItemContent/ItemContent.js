

import './ItemContent.css';

const ItemContent = props => {
  const { title, src, content } = props;
  return (
    <>
    <img src={src} alt={title} />
    {content}
    </>
  );
  };

const ItemText = () => {
  return (

    <div className="ItemContainer">

    <div className="ItemContent">

    <div className="ItemContent1">
      <ItemContent src="images/Item-1.png" title="NavPhoto" />
    </div>
    <div className="ItemContent2">
      <ItemContent content = {<p>EARRINGS</p>} />
    </div>
   </div>

    <div className="ItemContent">
    <div className="ItemContent1">
      <ItemContent src="images/Item-2.png" title="NavPhoto" />
    </div>
    <div className="ItemContent2">
      <ItemContent content = {<p>NECKLACES</p>} />
    </div>
    </div>

  < div className="ItemContent">
    <div className="ItemContent1">
      <ItemContent src="images/Item-3.png" title="NavPhoto" />
    </div>
    <div className="ItemContent2">
      <ItemContent content = {<p>BRACELETS</p>} />
    </div>
    </div>

   < div className="ItemContent">
    <div className="ItemContent1">
      <ItemContent src="images/Item-4.png" title="NavPhoto" />
    </div>
    <div className="ItemContent2">
      <ItemContent content = {<p>ALL RINGS</p>} />
    </div>
    </div>

   < div className="ItemContent">
    <div className="ItemContent1">
      <ItemContent src="images/Item-5.png" title="NavPhoto" />
    </div>
    <div className="ItemContent2">
      <ItemContent content = {<p>ENGAGEMENT RINGS</p>} />
    </div>
    </div>
    </div>
  
    
  );
};


export default ItemText;



