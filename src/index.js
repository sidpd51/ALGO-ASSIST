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
});

mainMenuOptions.forEach((element) => {
    if (element === "algorithm") {
        bot.action(element, (ctx) => {
            algoMenu(ctx);
            ctx.reply(
                "🔘 Select an option:",
                Markup.inlineKeyboard([
                    [Markup.button.callback("🔙 Back to Menu", "menu")],
                ]).resize()
            );
        });
    } else {
        bot.action(element, (ctx) => {
            ctx.reply(
                `${getRandomx(codingJokes)}`,
                Markup.inlineKeyboard([
                    [Markup.button.callback("🔙 Back to Menu", "menu")],
                ]).resize()
            );
        });
    }
});

bot.action("menu", (ctx) => mainMenu(ctx));
bot.hears("menu", (ctx) => mainMenu(ctx));
bot.command("menu", (ctx) => mainMenu(ctx));

bot.action("algomenu", (ctx) => algoMenu(ctx));
bot.hears("algomenu", (ctx) => algoMenu(ctx));
bot.command("algomenu", (ctx) => algoMenu(ctx));

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

bot.launch();
