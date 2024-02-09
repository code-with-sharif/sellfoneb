import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import '../../Styles/SellerProduct/Pagination.css';

export default function Pagination() {
  return (
    <nav aria-label='...' className=''>
      <MDBPagination style={{   }} className='mb-0 justify-content-center '>
        <MDBPaginationItem>
          {/* <MDBPaginationLink to='#' tabIndex={-1} aria-disabled='true'>
            Previous
          </MDBPaginationLink> */}
        </MDBPaginationItem>
        <MDBPaginationLink 
  to='#' 
  className=' active' 
  style={{backgroundColor:"#92C43E"  , color:"white", borderRadius:"80%"}}
>
  1
</MDBPaginationLink>

        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem'>4</MDBPaginationLink>
        </MDBPaginationItem>
    
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem'>...</MDBPaginationLink>
        </MDBPaginationItem>

        {/* Make sure to use the "active" class for the active item */}
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem  '>23</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem  '>24</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink to='#' className='paginationItem  '>25</MDBPaginationLink>
        </MDBPaginationItem>

        {/* <MDBPaginationItem>
          <MDBPaginationLink to='#'>Next</MDBPaginationLink>
        </MDBPaginationItem> */}
      </MDBPagination>
    </nav>
  );
}
