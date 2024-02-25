import React from 'react'
import Buyphoneherosection from './Buyphoneherosection'
import Sellphonesafly from '../Home/Sellphonesafly'
import Needquestion from '../Home/Needquestion'
import Pagination from '../Sellphone/Pagination'
import Buyphonecard from './Buyphonecard'
 
const Buyphone = () => {
  return (
    <>
<section>
<Buyphoneherosection />
<Buyphonecard />
<Pagination />
<Sellphonesafly/>
      <Needquestion />
        </section>
    </>
  )
}

export default Buyphone