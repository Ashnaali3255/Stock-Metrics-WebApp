import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCompanyDetails } from '../redux/CompaniesList';
import '../styles/Detailspage.css';

const Detailspage = () => {
  const { companyDetails } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const { smbl } = useParams();
  useEffect(() => {
    dispatch(getCompanyDetails(smbl));
  }, [dispatch, smbl]);

  return (
    <div className="parent" data-testid="detailspage">
      <div className="items">
        <img className="image" src={companyDetails.image} alt="company" />
        <p className="symbol">
          (
          {companyDetails.symbol}
          )
        </p>
        <h1 className="company-name">{companyDetails.companyName}</h1>
        <table className="details-table">
          <tbody>
            <tr>
              <th scope="col">CEO</th>
              <td>{companyDetails.ceo}</td>
            </tr>
            <tr>
              <th scope="col">Sector</th>
              <td>{companyDetails.sector}</td>
            </tr>
            <tr>
              <th scope="col">Price</th>
              <td>{companyDetails.price}</td>
            </tr>
            <tr>
              <th scope="col">Currency</th>
              <td>{companyDetails.currency}</td>
            </tr>
            <tr>
              <th scope="col">Full Time Employees</th>
              <td>{companyDetails.fullTimeEmployees}</td>
            </tr>
            <tr>
              <th scope="col">Country</th>
              <td>{companyDetails.country}</td>
            </tr>
            <tr>
              <th scope="col">City</th>
              <td>{companyDetails.city}</td>
            </tr>
            <tr>
              <th scope="col">Phone</th>
              <td>{companyDetails.phone}</td>
            </tr>
            <tr>
              <th scope="col">Address</th>
              <td>{companyDetails.address}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Detailspage;
