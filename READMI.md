# HODLINFO - Cryptocurrency Data Viewer

HODLINFO is a web application designed to fetch and display the top 10 cryptocurrency tickers from the WazirX API. It features a backend implemented in Node.js with Express and MongoDB, and a simple frontend to visualize the data.

## Features

- **Fetch and Store Data**: Retrieves the top 10 cryptocurrency tickers based on trading volume and stores them in a MongoDB database.
- **View Data**: Provides an endpoint to retrieve the stored data and display it to users.
- **Simple UI**: A straightforward frontend to view the fetched data.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Frontend**: HTML/CSS (served from the `public` directory)

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (Running locally or via a cloud service)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/hodlinfo.git
   cd hodlinfo
