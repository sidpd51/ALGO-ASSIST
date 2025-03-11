# ALGO-ASSIST

ALGO-ASSIST is a Telegram bot that provides coding jokes, algorithm codes, and a main menu for easy navigation. The bot is built using the Telegraf library and is configured to respond to various commands and actions.

## Features

- **Jokes**: Get a random coding joke.
- **Algorithms**: Access various algorithm implementations.
- **Help Menu**: Display a help menu with available commands.
- **Main Menu**: Navigate through different options easily.
- **About**: Information about the bot.

## Commands

- `/start`: Start the bot.
- `/help`: Show the help menu.
- `/menu`: Show the main menu.
- `/joke`: Get a random joke.
- `/algorithm`: Get information about algorithms.
- `/compiler`: Get compiler options.
- `/algo`: Get specific algorithm options.
- `/test_box`: Display a test message in a box format.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ALGO-ASSIST.git
    ```

2. Navigate to the project directory:
    ```sh
    cd ALGO-ASSIST
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your Telegram bot token:
    ```env
    BOT_TOKEN=your-telegram-bot-token
    ```

5. Start the bot:
    ```sh
    npm start
    ```

## File Structure

- [index.js](http://_vscodecontentref_/0): Main file to initialize and launch the bot.
- [menuUtils.js](http://_vscodecontentref_/1): Contains functions to display various menus.
- [collectionUtils.js](http://_vscodecontentref_/2): Utility function to get a random element from a collection.
- [msgCollection.js](http://_vscodecontentref_/3): Contains collections of messages like jokes and greetings.
- [algorithms.js](http://_vscodecontentref_/4): Contains algorithm implementations.

## Example Usage

### Main Menu

Displays the main menu with options to get a joke, algorithm information, or about the bot.

```javascript
import { mainMenu } from "./utils/menuUtils.js";

mainMenu(ctx);