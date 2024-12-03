# Etherscan API Integration Project

This project integrates with the [Etherscan API](https://etherscan.io/apis) to retrieve Ethereum blockchain data and processes it using Kafka and Flink. The application also interacts with PostgreSQL for storing analyzed data, enabling further analytics and real-time insights.

## Features

- Fetches Ethereum blockchain transactions using Etherscan API.
- Processes transaction data via Apache Kafka.
- Includes Docker support for simplified setup.

## Project Structure

- **bin/**: Contains scripts for running or managing the application.
- **config/**: Configuration files (e.g., Kafka, database connections).
- **controller/**: Handles request processing and business logic.
- **routes/**: API endpoints for application interaction.
- **services/**: Backend logic for Kafka, database, or other integrations.
- **app.js**: Entry point for the Node.js application.
- **docker-compose.yml**: Defines the services (Kafka, Zookeeper, PostgreSQL) needed for the application.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/) and Docker Compose
- Etherscan API Key

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/denizparlak1/etherscan-api.git
   cd etherscan-api

2. Set Up .env File Create a .env file in the root directory with the following content:
    ```bash
    ETHERSCAN_API_KEY=R3FGC2
    ETHERSCAN_ADDRESS=0xdAC17F958D2ee523a2206206994597C13D831ec7
    KAFKA_BROKER=localhost:9092
    KAFKA_TOPIC=incoming-transactions
    ETHERSCAN_BASE_URL=https://api.etherscan.io/v2/api
 
3. Run Docker Containers Start the infrastructure using Docker Compose:
   ```bash
   docker-compose up -d

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project as per the license terms.

## Good Luck & Happy Coding! 🚀

We hope this project inspires you to explore blockchain analytics and build innovative solutions. If you encounter any issues or have suggestions for improvement, feel free to contribute or reach out.

Enjoy working with Ethereum data and uncovering insights!
