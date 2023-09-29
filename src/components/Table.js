import React from "react";
export default function Table({users}){
    return (
        <table className="myTable">
            <caption></caption>
        <thead>
        
            <tr>
                <thead>Update Pay Check-after tax</thead>
                <thead>Update Total Tax</thead>
                <thead>Update Total Tax</thead>
            </tr>    
        </thead>
         <tbody>
            {users.map((user,index) =>( //I could not get the users defined so I had to put it in({users})
            //up in the function Table, it was not the empty array I entered on App.js on line 27
             <tr key={index}>
             <td>{user.payCheck}</td>
             <td>{user.tax}</td>
             <td>{user.totalSaving}</td>
             <td>{user.totalTax}</td>
             </tr>   
            ))}
            </tbody>
        </table>
    )
}