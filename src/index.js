import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import { getRandomx } from "./utils/collectionUtils.js";
import { codingJokes, greetings } from "./data/msgCollection.js";
import { mainMenu, algoMenu, helpMenu } from "./utils/menuUtils.js";
import { algoCollection } from "./data/algorithms.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const mainMenuOptions = ["joke", "algorithm", "compiler"];


bot.start((ctx) => {
    ctx.reply(getRandomx(greetings));
    mainMenu(ctx);
    // algoMenu(ctx);
    // helpMenu(ctx);
});

mainMenuOptions.forEach((element) => {
    bot.action(element, (ctx) =>
        ctx.reply(
            `${element} kicked in`,
            Markup.inlineKeyboard([
                [Markup.button.callback("🔙 Back to Menu", "menu")],
            ]).resize()
        )
    );
});



for (const key in algoCollection) {
    bot.action(key, (ctx) => ctx.reply(algoCollection[key]));
    bot.hears(key, (ctx) => ctx.reply(algoCollection[key]));
    bot.command(key, (ctx) => ctx.reply(algoCollection[key]));
}

bot.help((ctx) => ctx.reply("How can i help you? \n\njoke: /joke \n\n"));

bot.launch();
