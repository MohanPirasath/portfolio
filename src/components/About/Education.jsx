

import React from "react";
import "./education.css"

const Education=()=>{
    return(
       <table className="table">
        <thead>
            <tr>
                <th>
                    Studies
                </th>
                <th>
                    Department
                </th>
                <th>
                    Institute
                </th>
                <th>
                    Year
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    B.Tech
                </td>
                <td>
                    Mechatronics
                </td>
                <td>
                Bharath Institute of Higher Education And Research 
                </td>
                <td>
                2017-2021
                </td>
            </tr>
            <tr>
                <td>
                    +2
                </td>
                <td>
                    Bio-Maths
                </td>
                <td>
                Sacred heart matriculation higher secondary school
                </td>
                <td>
                2016-2017
                </td>
            </tr>
            <tr>
                <td>
                    SSLC
                </td>
                <td>
                   General
                </td>
                <td>
                Sacred heart matriculation higher secondary school
                </td>
                <td>
                2014-2015
                </td>
            </tr>
        </tbody>
       </table>
    )
}

export default Education;