import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/CompaniesList';
import '../../styles/HomepageList.css';
import HomepageItem from './HomepageItem';

const HomepageList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { companyList } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div className="context">
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Company"
          value={search}
        />
      </div>

      <div className="container">
        {companyList
          .filter((company) => {
            if (search === '') {
              return company;
            } if (
              company.symbol.toLowerCase().includes(search.toLowerCase())
            ) {
              return company;
            }
            return null;
          })
          .map((company) => (
            <div
              key={company.symbol}
              onClick={() => navigate(`/details/${company.symbol}`)}
              aria-hidden="true"
            >
              <HomepageItem title={company.symbol} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomepageList;
