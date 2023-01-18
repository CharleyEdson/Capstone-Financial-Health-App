import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const NetWorth = ({userAssets}) => {
    const [netWorth, setNetWorth] = useState(0)

    return ( 
        <div>
            
            {userAssets && userAssets.reduce(function(netWorth, asset) {
                return netWorth + asset.value
            },0
            )}
            <div>
           
            </div>
            {/* {userAssets && userAssets.map(asset => <div key={asset.id}>{asset.value}</div> )} */}
        </div>
     );
}
 
export default NetWorth;