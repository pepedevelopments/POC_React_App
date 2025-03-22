# POC_React_App

A POC for an application using React and FastAPI to manage a planning of persons

## Table of Contents

1. [Installation](#installation)
2. [Prerequisites](#Prerequisites)
3. [Installation Steps](#Installation Steps)
4. [Usage](#Usage)

## Installation

Follow the steps below to install and set up the project on your local machine.

### Prerequisites

Before installing, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- react-router_dom: can be installed using the command: 
    ```bash
    npm install react-router-dom
    ```
- Python: (only tested with 3.13.2)



### Installation Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/pepedevelopments/POC_React_App.git
    ```
2. Navigate into the project folder:
    ```bash
    cd POC_React_App
    ```
3. Create a python virtual environment:
    ```bash
    py -m venv env
    ```

4. Activate the virtual environment:
    ```bash
    env\Scripts\activate
    ```

5. Install dependencies:
    ```bash
    Pip install -r .\requirements.txt
    ```

## Usage

Once the dependencies are installed, you can start the development server by running:

In one console the FastAPI app:

1. Activate the virtual environment:
    ```bash
    env\Scripts\activate
    ```

2. Navigate into the project folder:
    ```bash
    cd FastAPI
    ```

3. Run the app:
    ```bash
    uvicorn main:app --reload
    ```

In another console, the React app:

1. Activate the virtual environment:
    ```bash
    env\Scripts\activate
    ```

2. Navigate into the project folder:
    ```bash
    cd React-App
    ```

3. Install the app:
    ```bash
    npm install
    npm run dev
    ```