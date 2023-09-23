[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/aInPaS?referralCode=ref)

# Discord Bot Template 🤖
Welcome to this versatile Discord Bot template. Designed with simplicity and flexibility in mind, it's ideal for both beginners eager to dive into the world of Discord bots and for advanced users seeking a reliable starting point.
## Features ✨
* **Slash Commands Support**: Use Discord's new native slash commands feature to create commands directly accessible from the chat interface.
* **Event-driven Architecture**: Respond to a variety of Discord events seamlessly, such as when a message is sent, when a new member joins, and many more.
* **Modular Structure**: Organized file structure makes adding new commands or events a breeze.
* **Easy Configuration**: Just update the configuration file or environment variables, and you're good to go!

## Quick Start 🚀
1. **Setup**: Clone the repository and install the necessary dependencies. 
```
git clone https://github.com/nateloeffel/BaseDiscordBot.git
cd BaseDiscordBot
npm install
```
2. **Configuration**: Update the .env file with your Discord bot token and other relevant settings.
3. **Run**: Start the bot and watch it come to life!
```
npm start
```
## Adding Commands and Events 🛠
### Slash Commands
1. Navigate to the `/slash` directory.
2. Create a new file for your command, e.g., `mycommand.js.`
3. Follow the template structure, ensuring you export the necessary data for your command.
4. Restart the bot, and your new command will automatically be available!
### Events
1. Navigate to the `/events` directory.
2. Create a new file for your event, e.g., `myevent.js.`
3. Follow the template structure, ensuring you export the necessary data for your event.
4. Restart the bot, and it will automatically start listening for your new event!

## Support and Contribution 👥
Found a bug? Want to add a new feature? Feel free to open an issue or submit a pull request. All contributions are welcomed! [Report an issue.](https://github.com/nateloeffel/BaseDiscordBot/issues/new/choose)
