import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

const NetWorth = ({networth=[{
    id: 1,
    netWorth: 2260000,
    date: "2023-01-01",
    user_id: 2
}]}) => {
    const [user, token] = useAuth();

    const options = {
        title: "Net Worth",
        legend: 'none',
        is3d: true,
        lineWidth: 1,
        corsshair: {trigger: 'focus'}, 

    };

    let data = [
        ['Date', 'NetWorth'],

    ];
    let changeInNetWorth = networth[0]['netWorth'] - networth[1]['netWorth']
    data = data.concat(networth.map(el => Object.values(el).splice(0,2)).reverse())
    // console.log(networth)
    return ( 
        <div>
            <div>
            <h3 className="networth_cash">Net Worth ${networth[0]['netWorth']} ({changeInNetWorth})</h3>
              <div>
                {console.log(networth)}
                
                <Chart
                chartType="LineChart"
                width = "80%"
                height = "200px"
                data={data}
                options={options}
                />
              </div>
            </div>
        </div>
     );
}
 
export default NetWorth;

// {userAssets[0]['asset_type'] !== null ? (
//     <div>
//       <Link to="/monthlyinfo">
//         not null Add your Asset/Liability info here
//         {/* {userAssets[2]['asset_type']} */}
//       </Link>
//       <div>
//     </div>
//     </div>
//   ) : (
//     <Link to="/monthlyinfo">
//       Add your Asset/Liability info here
//     </Link>
//   )}