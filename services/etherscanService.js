const axios = require('axios');
require('dotenv').config();

const BASE_URL = process.env.ETHERSCAN_BASE_URL;
const API_KEY = process.env.ETHERSCAN_API_KEY;
const ADDRESS = process.env.ETHERSCAN_ADDRESS;

const getTransactions = async () => {
  const url = `${BASE_URL}?chainid=1&module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status !== '1') {
      throw new Error('Error fetching data from Etherscan API');
    }
    return response.data.result;
  } catch (error) {
    console.error('Error fetching data from Etherscan:', error);
    throw new Error('Etherscan API Error');
  }
};

module.exports = { getTransactions };
