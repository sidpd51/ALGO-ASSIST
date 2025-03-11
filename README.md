# ALGO-ASSIST

ALGO-ASSIST is a Telegram bot that provides coding jokes, algorithm explanations, and a main menu for easy navigation. The bot is built using the Telegraf library and is configured to respond to various commands and actions.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Commands](#commands)
-   [File Structure](#file-structure)
-   [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/algo-assist.git
    cd algo-assist
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Telegram bot token:
    ```env
    BOT_TOKEN="your-telegram-bot-token"
    ```

## Usage

To start the bot in development mode with nodemon:

```sh
npm run dev
```

## Commands

-   `/start` - Start the bot and show the main menu.
-   `/menu` - Show the main menu.
-   `/help` - Show the help message.
-   `/joke` - Get a random coding joke.
-   `/algomenu` - Learn about algorithms.

## File Structure

```
.env
.gitignore
package.json
src/
    index.js
    data/
        algorithms.js
        msgCollection.js
    utils/
        collectionUtils.js
        menuUtils.js
```

-   `index.js`: Main entry point of the bot.
-   `data/algorithms.js`: Contains algorithm explanations.
-   `data/msgCollection.js`: Contains coding jokes and greetings.
-   `utils/collectionUtils.js`: Utility functions for collections.
-   `utils/menuUtils.js`: Functions for generating menus.

## License

This project is licensed under the ISC License.
