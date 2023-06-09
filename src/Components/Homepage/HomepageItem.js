import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/HomepageItem.css';
import company from '../../images/company.png';

const HomepageItem = (props) => {
  const { title } = props;
  HomepageItem.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <span className="arrow">➜</span>
        <img className="icon" src={company} alt="company" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default HomepageItem;
