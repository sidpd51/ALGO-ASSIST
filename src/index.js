import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import { getRandomx } from "./utils/collectionUtils.js";
import { codingJokes, greetings } from "./data/msgCollection.js";
import { mainMenu, algoMenu, helpMenu } from "./utils/menuUtils.js";
import { algoCollection } from "./data/algorithms.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
//action: click, command: /, hears: handles specific text messages

const eventTypes = ["action", "hears", "command"];

bot.start((ctx) => {
    ctx.reply(getRandomx(greetings));
    mainMenu(ctx);
});

/**
 * Support all three events action, hears, command
 *
 */

//algorithm
eventTypes.forEach((method) => {
    bot[method]("algorithm", (ctx) => algoMenu(ctx));
});

//joke
eventTypes.forEach((method) => {
    bot[method]("joke", (ctx) => {
        ctx.reply(
            `${getRandomx(codingJokes)}`,
            Markup.inlineKeyboard([
                [Markup.button.callback("🔙 Back to Menu", "menu")],
            ]).resize()
        );
    });
});

// main menu
eventTypes.forEach((method) => {
    bot[method]("menu", (ctx) => mainMenu(ctx));
});

// algo menu
eventTypes.forEach((method) => {
    bot[method]("algomenu", (ctx) => algoMenu(ctx));
});

//triggers for algocollection
for (const key in algoCollection) {
    let trigger_msg = key.toLowerCase().trim().replace(" ", "");
    bot.action(trigger_msg, (ctx) =>
        ctx.reply(
            `${key} \n\n${algoCollection[key]}`,
            Markup.inlineKeyboard([
                [Markup.button.callback("🔙 Back to Algo Menu", "algomenu")],
                [Markup.button.callback("🔙 Back to Menu", "menu")],
            ]).resize()
        )
    );
    bot.hears(trigger_msg, (ctx) =>
        ctx.reply(`${key} \n\n${algoCollection[key]}`)
    );
    bot.command(trigger_msg, (ctx) =>
        ctx.reply(`${key} \n\n${algoCollection[key]}`)
    );
}

bot.help((ctx) => ctx.reply("How can i help you? \n\njoke: /joke \n\n"));

// handle random messages
bot.hears(/.*/, (ctx) => {
    ctx.reply(
        "I didn't understand that. Try one of these:",
        Markup.inlineKeyboard([
            [Markup.button.callback("📜 See Commands", "help")],
            [Markup.button.callback("🔙 Back to Menu", "menu")],
        ])
    );
});

bot.launch();
