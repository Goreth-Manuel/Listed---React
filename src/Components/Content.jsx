import React from 'react';
import '../Styles/fontAwesome.css';
import '../Styles/Content.css';

function Content() {
  return (
    <>
      <h1 className="title">Find Nearby Appartments</h1>
      <h5 className="att">
        Explore top-roted attractions, activities and more!
      </h5>
      <div className="Content">
        <input type="text" placeholder="What are you Looking For??" />
        <input type="text" placeholder="Location" />
        <i className="fa fa-map-marker"></i>
        <input type="text" placeholder="All Categories" />
        <i className="fa fa-angle-down"></i>
        <button>Seach</button>
      </div>
    </>
  );
}

export default Content;
