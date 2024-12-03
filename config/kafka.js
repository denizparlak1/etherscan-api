const { Kafka } = require('kafkajs');
require('dotenv').config();

const kafka = new Kafka({
  clientId: 'etherscan-kafka-client',
  brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer();

const connectKafka = async () => {
  try {
    await producer.connect();
    console.log('Connected to Kafka');
  } catch (error) {
    console.error('Error connecting to Kafka', error);
  }
};

const sendToKafka = async (message) => {
  try {
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ value: message }],
    });
  } catch (error) {
    console.error('Error sending message to Kafka:', error);
  }
};


module.exports = { connectKafka, sendToKafka };
