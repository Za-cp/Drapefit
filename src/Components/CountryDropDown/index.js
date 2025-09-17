import React, { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, [context.countryList]); // Include context.countryList in the dependency array

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='label'>Your Location</span>
          <span className='name'>
            {context.selectedCountry !== "" 
              ? context.selectedCountry.length > 10 
                ? context.selectedCountry.substr(0, 10) + '...'
                : context.selectedCountry
              : 'Select Location'}
          </span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className='locationModal'
        TransitionComponent={Transition}
      >
        <div className='locationModalContent'>
          <Button className='close_' onClick={() => setisOpenModal(false)}>
            <IoIosCloseCircle />
          </Button>
          <h2>Choose your location</h2>
          <p>Enter the address and we will specify the area</p>
          <div className='headerSearch w-100'>
            <input type='text' placeholder='Search your area...' onChange={filterList} />
            <Button><IoSearch /></Button>
          </div>
          <ul className='countryList mt-3'>
            {countryList?.length !== 0 && countryList?.map((item, index) => (
              <li key={index}>
                <Button 
                  onClick={() => selectCountry(index, item.country)}
                  className={selectedTab === index ? 'active' : ''}
                >
                  
                  {item.country}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
