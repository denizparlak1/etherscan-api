const { getTransactions } = require('../services/etherscanService');
const { sendToKafka } = require('../config/kafka');

const fetchData = async (req, res) => {
  try {
    const transactions = await getTransactions();

    const sendPromises = transactions.map(async (transaction) => {
      await sendToKafka(JSON.stringify(transaction));
    });

    await Promise.all(sendPromises);

    res.status(200).json({ success: true, message: 'Messages sent to Kafka' });
  } catch (error) {
    console.error('Error in fetchData:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { fetchData };
