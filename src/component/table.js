import React from 'react';

function Table(){
    return(
    <table style={{fontFamily:'sans-serif',fontWeight:'500'}}>
            <tr>
                <th style={{backgroundColor: 'antiquewhite'}}>Name</th>
                <th style={{backgroundColor:'lavender'}}>Details</th>
            </tr>
            <tr className="table_elements">
                <th><a href="http://153bstm32car.weebly.com">Wireless Control Car</a></th>
                <th>This project is designed as a wireless electrical car that is built and extended from a STM32 microprocessor board. We communicate with this car via bluetooth by implementing a software application with direction buttons.</th>
            </tr>
            <tr className="table_elements">
                <th><a href="https://150s20proj.wixsite.com/foodminder">Foodminder Android App</a></th>
                <th>This app can record all the food expiration dates, and it also can remind you few days right before the recorded dates. Not only it helps user to organize eating and grocery shopping schedule, it also reduces food waste.</th>
            </tr>
        </table>)
}

export default Table;