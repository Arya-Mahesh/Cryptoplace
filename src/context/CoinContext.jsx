import { useEffect } from "react";
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin,setAllCoin] = useState([]);
    const [currency,setCurrency] = useState({
        name: "usd",
        symbol: "$",
        value: 1
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-G1sBktKFsFHDUnbn3WWae2f8'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));

        };
        
       useEffect(() => {
         fetchAllCoin();
          },[currency]);

    const contextValue = {
        allCoin,
        currency,
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
        {props.children}
        </CoinContext.Provider>
    );
    }
    CoinContextProvider.propTypes = {
        children: PropTypes.node.isRequired
    };

export default CoinContextProvider;