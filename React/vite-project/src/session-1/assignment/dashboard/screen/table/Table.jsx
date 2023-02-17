import React from 'react';
import Ticket from './Ticket';
import { useState } from 'react';

const ticketList =[ 
{
    customerAvatar :'customer-1.png',
    customerName : 'Tom Cruise',
    customerDate : 'on 24.05.2019',
    ticketName : 'Contact Email not Linked',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 26, 2019',
    timeLabel : '6:30 PM',
    ticketPriority : 'High',
    ticketColor : '#F12B2C'      
},

{
    customerAvatar :'customer-2.png',
    customerName : 'Matt Damon',
    customerDate : 'on 24.05.2019',
    ticketName : 'Adding Images to Featured Posts',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 26, 2019',
    timeLabel : '8:00 PM',
    ticketPriority : 'Low',
    ticketColor : '#FEC400'         
},

{
    customerAvatar :'customer-3.png',
    customerName : 'Robert Downey',
    customerDate : 'on 24.05.2019',
    ticketName : 'When will I be charged this month?',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 26, 2019',
    timeLabel : '7:30 PM',
    ticketPriority : 'High',
    ticketColor : '#F12B2C'         
},

{
    customerAvatar :'customer-4.png',
    customerName : 'Christian Bale',
    customerDate : 'on 24.05.2019',
    ticketName : 'Payment not going through',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 25, 2019',
    timeLabel : '5:00 PM',
    ticketPriority : 'Normal',
    ticketColor : '#29CC97'         
},

{
    customerAvatar :'customer-5.png',
    customerName : 'Henry Cavil',
    customerDate : 'on 24.05.2019',
    ticketName : 'Unable to add replies',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 25, 2019',
    timeLabel : '4:00 PM',
    ticketPriority : 'High',
    ticketColor : '#F12B2C'         
},

{
    customerAvatar :'customer-6.png',
    customerName : 'Chris Evans',
    customerDate : 'on 24.05.2019',
    ticketName : 'Downtime since last week',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 25, 2019',
    timeLabel : '2:00 PM',
    ticketPriority : 'Normal',
    ticketColor : '#29CC97'   
},

{
    customerAvatar :'customer-7.png',
    customerName : 'Sam Smith',
    customerDate : 'on 24.05.2019',
    ticketName : 'Referral Bonus',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 25, 2019',
    timeLabel : '11:30 PM',
    ticketPriority : 'Low ',
    ticketColor : '#FEC400'         
},

{
    customerAvatar :'customer-7.png',
    customerName : 'Steve Rogers ',
    customerDate : 'on 24.05.2019',
    ticketName : 'How do I change my password?',
    ticketInformation : 'Updated 1 day ago',
    dateLabel : 'May 24, 2019',
    timeLabel : '1:00 PM',
    ticketPriority : 'Normal',
    ticketColor : '#29CC97'      
},
]    

const Table = () =>{
    const [tickets, setTickets] = useState(ticketList);

    const handleDelete = (number) => {
        console.log(number);
        let updatedTickets = [...tickets].filter(
          (item ,index) => number !== index
        );
        console.log(updatedTickets);
        setTickets(updatedTickets);
      };

    return(
        <div className='table'>
            <div className="table_header">
                <div className="table_header_title">
                    All Tickets
                </div>
                <div className="table_header_icons">
                    <span><i className='icon-sort'></i>Sort</span>
                    <span><i className='icon-filter'></i>Filter</span>
                </div>
            </div>
            <table className='table_content'>
                <thead>
                    <th>Ticket details</th>
                    <th>Customer name</th>
                    <th>Date</th>
                    <th>Priority</th>
                </thead>
                <tbody>
                    {ticketList.map((item,index)=>{
                        return (
                        <Ticket 
                            ticketDetails = {item}
                            key = {index}
                            index = {index}
                            handleDelete = {handleDelete}
                        />
                        );    
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;




