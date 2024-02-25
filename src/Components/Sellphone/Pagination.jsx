import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/SellerProduct/Pagination.css';

const Pagination = ({}) => {
  return (
    <>
      <section className='d-none d-lg-block  d-xl-block d-xxl-block '>
        <nav aria-label="Page navigation example   ">
          <ul className="pagination justify-content-center">
            <li>
              <NavLink className="page-link" to="#"><span>1</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link" to="#"><span>2</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link" to="#"><span>3</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link disabled" to="#"><span>...</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link" to="#"><span>23</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link" to="#"><span>24</span></NavLink>
            </li>
            <li>
              <NavLink className="page-link" to="#"><span>25</span></NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Pagination;
