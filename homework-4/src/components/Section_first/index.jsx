import React from "react";
import "./section_first.scss";
const index = () => {
  return (
    <>
      <div className="section__first">
        <input
           type="text"
          className="section__first__input"
          placeholder="Search for a country…"/>
        <select id="select" className="section__first__select">
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </>
  );
};

export default index;
