
// import '../css';
import './Nav-menu.css';

// Install reactjs icons
// npm install react-icons --save
import { FaBell, FaBellSlash, FaRegBell } from 'react-icons/fa';

const Navitem = props => {
  const { title, src } = props;
  return <a href={src}>{title}</a>;
};

const Navmenu = () => {
  return (
    <div className="Nav-menu">
      <Navitem src="#" title={<h2> BAYSIDE FINE JEWELRY</h2>} />
      <Navitem src="#" title="Home" />
      <Navitem src="#" title="Shop" />
      <Navitem src="#" title="Service" />
      <Navitem src="#" title="About" />
      <Navitem src="#" title="Contact" />
      <i className="bell-icon"><FaRegBell /></i>


    </div>
  );
};

export default Navmenu;



// Để import font từ lineicons.com vào dự án ReactJS, bạn có thể thực hiện các bước sau:

// Tải font từ trang web của LineIcons (https://lineicons.com/).
// Giải nén file tải về và chuyển các file font (.woff, .woff2) vào thư mục "public/fonts" của dự án ReactJS của bạn.
// Tạo một file css mới (ví dụ: lineicons.css) trong thư mục "public/css" của dự án ReactJS của bạn.
// Copy nội dung của tệp style.css từ thư mục giải nén và dán vào trong file css mới bạn đã tạo.
// Ví dụ, nếu bạn đã giải nén tệp tải về vào thư mục "Downloads", bạn có thể sao chép file font vào thư mục "public/fonts" và tạo một tệp "lineicons.css" trong thư mục "public/css". Sau đó, bạn có thể copy nội dung của tệp style.css từ thư mục giải nén vào tệp lineicons.css.

// Trong file index.html, thêm đường dẫn đến file css mới bạn vừa tạo. Bạn có thể thêm đoạn mã sau vào thẻ head của file index.html:
// perl
// Copy code
// <link rel="stylesheet" href="%PUBLIC_URL%/css/lineicons.css" />
// Bây giờ, bạn có thể sử dụng icon LineIcons bằng cách sử dụng các class tương ứng trong file css mới bạn vừa tạo.
// Ví dụ:

// javascript
// Copy code
// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div>
//       <h1>My Component</h1>
//       <i className="lni lni-heart"></i>
//     </div>
//   );
// };

// export default MyComponent;
// Trong ví dụ trên, chúng ta đã sử dụng class "lni" và "lni-heart" từ file css mới để hiển thị icon trái tim của LineIcons.