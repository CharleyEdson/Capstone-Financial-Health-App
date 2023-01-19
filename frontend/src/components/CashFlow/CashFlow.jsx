import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";


const CashFlow = (props) => {
    return ( 
        <div>
              <h3 className="networth_cash">Net Cash Flow </h3>
        </div>
     );
}
 
export default CashFlow;