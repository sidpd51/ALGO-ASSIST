import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import { getRandomx } from "./utils/collectionUtils.js";
import { codingJokes, greetings } from "./data/msgCollection.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
	ctx.reply(getRandomx(greetings));
	ctx.reply("help: /help");
});
bot.command('joke', (ctx) => ctx.reply(getRandomx(codingJokes)))
bot
bot.help((ctx) => ctx.reply("How can i help you? \n\njoke: /joke \n\n"));
bot.launch();
