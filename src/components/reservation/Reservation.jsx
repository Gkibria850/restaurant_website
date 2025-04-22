import React, {useState} from 'react'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegUser,FaRegEnvelope,FaPhone,FaUserGroup,FaRegCalendarDays, FaClock,FaCircleArrowRight, FaCalendarDays} from 'react-icons/fa6'
import './reservation.css';
import { Scrollbar } from 'swiper/modules';
const optionsGuest = [
  { value: '', label: 'Choose Guest' },
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
];
const optionsTiming = [
  { value: '', label: 'Choose Time' },
  { value: '1', label: '08:00 AM - 10:00 AM' },
  { value: '2', label: '09:30 AM - 11:30 AM' },
  { value: '3', label: '10:00 AM - 12:00 PM' },
  { value: '4', label: '11:30 AM - 01:30 PM' },
  { value: '5', label: '12:00 PM - 02:00 PM' },
  { value: '6', label: '01:30 PM - 03:30 PM' },
  { value: '7', label: '03:30 PM - 05:30 PM' },
  { value: '8', label: '04:00 PM - 06:00 PM' },
  { value: '9', label: '05:30 PM - 07:30 PM' },
];
 const customStyles= {
  ValueContainer: (provided) =>({
    ...provided,
    paddimg:'.75rem 1.25rem 1rem 3rem'
  }),
  control: () => ({
 display: 'flex',
  }),
  input:(provided) =>({
    ...provided,
    padding:0,
    margin: 0,

  }),
  option:(provided, state) =>({
    ...provided,
    color: state.isSelected ? 'var(--first-color)' : 'var(--title-color)',
    backgroundColor: state.isFocused ? 'var(--container-color)' : 'transparent',
 

  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--text-color)',
    transform:state.isFocused ? 'rotate(-180deg)' : 'rotate(0)',
    transition: 'transform 0.5s'
  }),
  menuList: (provided) =>({
    ...provided,
    maxHeight: '210px',
    overflowy: 'auto',
    scrollbarWidth: 'thin',
    ScrollbarColor: 'var(--first-color) var(--container-color)'
  }),
 }

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="reservation-container container">
      <form action="" className="reservation-form grid">
         <div className="reservation-group grid">
              <h3 className="reservation-title">Book Your Table</h3>
              <div className="reservation-div">
                <FaRegUser className='reservation-icon'/>
                <input type="text" placeholder='Enter Name' className="reservation-input" />
              </div>
              <div className="reservation-div">
                <FaRegEnvelope className='reservation-icon'/>
                <input type="text" placeholder='Enter Email' className="reservation-input" />
              </div>
              <div className="reservation-div">
                <FaPhone className='reservation-icon'/>
                <input type="text" placeholder='Enter Phone' className="reservation-input" />
              </div>
            
          </div>


        <div className="reservation-group grid">
        
        <div className="reservation-div">
            <FaUserGroup className='reservation-icon'/>
           <Select options={optionsGuest} styles={customStyles} defaultValue={optionsGuest[0]}/>
          </div>
          <div className="reservation-div">
            <FaCalendarDays className='reservation-icon'/>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className='reservation-input'/>
          </div>
          <div className="reservation-div">
            <FaClock className='reservation-icon'/>
            <Select options={optionsTiming } styles={customStyles} defaultValue={optionsTiming [0]}/>
          </div>
         <button className="button reservation-button">Book Now <FaCircleArrowRight className='button-icon' /></button>
        </div> 
      </form>
    </section>
  )
}

export default Reservation