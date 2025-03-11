import { Markup } from "telegraf";
import { algoCollection } from "../data/algorithms.js";

export function mainMenu(ctx) {
    ctx.reply(
        "Choose an option:",
        Markup.inlineKeyboard([
            [Markup.button.callback("Joke", "joke")],
            [Markup.button.callback("Algorithm", "algorithm")],
            [Markup.button.callback("Compiler", "compiler")],
        ])
    );
}

//algo menu logic
export function algoMenu(ctx) {
    const collection = [];
    for (const key in algoCollection) {
        collection.push([
            Markup.button.callback(
                key,
                key.toLowerCase().trim().replace(" ", "")
            ),
        ]);
    }

    ctx.reply("Choose an algorithm:", Markup.inlineKeyboard(collection));
}

export function helpMenu(ctx) {
    ctx.reply(
        `🤖 Help Menu  
        Here are the available commands:  

        🔹 /start - Start the bot  
        🔹 /menu - Show main menu  
        🔹 /help - Show this help message  
        🔹 /joke - Get a random joke  
        🔹 /algomenu - Learn about algorithms

        Click a button below to explore! ⬇️`,
        Markup.inlineKeyboard([
            [Markup.button.callback("💡 About", "about")],
            [Markup.button.callback("🔙 Back to Menu", "menu")],
        ]).resize()
    );
}
