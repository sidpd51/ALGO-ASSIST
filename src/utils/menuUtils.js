import { Markup } from "telegraf";
import { algoCollection } from "../data/algorithms.js";

// Function to display the main menu
export function mainMenu(ctx) {
	ctx.reply(
		"📌 Choose an option:",
		Markup.inlineKeyboard([
			[Markup.button.callback("😂 Joke", "joke")],
			[Markup.button.callback("📚 Algorithms", "algorithms")],
			[Markup.button.callback("ℹ️ About", "about")],
		])
	);
}

// Function to display the algorithm menu
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
	collection.push([Markup.button.callback("🔙 Back to Menu", "menu")]);
	ctx.reply("Choose an algorithm:", Markup.inlineKeyboard(collection));
}

// Function to display the help menu
export function helpMenu(ctx) {
	ctx.reply(
		`📖 *Help Menu*  
        
        Here are the available commands:  

        🔹 */start* \\- Start the bot  
        🔹 */menu* \\- Show main menu  
        🔹 */help* \\- Show this help message  
        🔹 */joke* \\- Get a random joke  
        🔹 */algomenu* \\- Algorithms menu  

        Click a button below to explore\\! ⬇️`,
		{
			parse_mode: "MarkdownV2",
			reply_markup: {
				inline_keyboard: [
					[{ text: "ℹ️ About", callback_data: "about" }],
					[{ text: "🔙 Back to Menu", callback_data: "menu" }],
				],
			},
		}
	);
}
