import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import { getRandomx } from "./utils/collectionUtils.js";
import { aboutMessage, codingJokes, greetings } from "./data/msgCollection.js";
import { mainMenu, algoMenu, helpMenu } from "./utils/menuUtils.js";
import { algoCollection } from "./data/algorithms.js";

// Load environment variables from .env file
dotenv.config();

try {
	// Initialize the bot with the token from environment variables
	const bot = new Telegraf(process.env.BOT_TOKEN);

	// Define the types of events to listen for
	const eventTypes = ["action", "hears", "command"];

	// Handle the /start command
	bot.start((ctx) => {
		ctx.reply(getRandomx(greetings));
		setTimeout(() => {
			mainMenu(ctx);
		}, 200);
	});

	// Handle the /help command
	bot.help((ctx) => helpMenu(ctx));

	// Handle the "help" action
	bot.action("help", (ctx) => helpMenu(ctx));

	// Set bot commands
	bot.telegram.setMyCommands([
		{ command: "start", description: "Start the bot" },
		{ command: "help", description: "Show help menu" },
		{ command: "menu", description: "Show command menu" },
		{ command: "joke", description: "Get a random joke" },
		{ command: "algorithms", description: "Algorithms info" },
		{ command: "algo", description: "desired algo options" },
	]);

	// Handle "algorithm" events
	eventTypes.forEach((method) => {
		bot[method]("algorithms", (ctx) => algoMenu(ctx));
	});

	// Handle "joke" events
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

	// Handle "menu" events
	eventTypes.forEach((method) => {
		bot[method]("menu", (ctx) => mainMenu(ctx));
	});

	// Handle "about" events
	eventTypes.forEach((method) => {
		bot[method]("about", (ctx) =>
			ctx.reply(
				aboutMessage,
				Markup.inlineKeyboard([
					[Markup.button.callback("📜 See Commands", "help")],
					[Markup.button.callback("🔙 Back to Menu", "menu")],
				]).resize()
			)
		);
	});

	// Handle specific algorithm actions
	for (const key in algoCollection) {
		let trigger_msg = key.toLowerCase().trim().replace(" ", "");
		
		bot.action(trigger_msg, (ctx) =>
			ctx.reply(`\`\`\`\n${algoCollection[key]}\n\`\`\``, {
				parse_mode: "MarkdownV2",
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: "🔙 Back to Algo Menu",
								callback_data: "algorithms",
							},
						],
						[{ text: "🔙 Back to Menu", callback_data: "menu" }],
					],
				},
			})
		);
	}

	// Handle the /algo command
	bot.command("algo", (ctx) => {
		const args = ctx.message.text.split(" ").slice(1);
		const query = args.join("").trim().replace(" ", "").toLowerCase();
		if (!query) {
			return ctx.reply(
				"Please provide an algorithm name. Example: `/algo sorting`"
			);
		}

		for (const key in algoCollection) {
			if (key.replace(" ", "").toLowerCase() === query) {
				ctx.reply(`\`\`\`\n${algoCollection[key]}\n\`\`\``, {
					parse_mode: "MarkdownV2",
					reply_markup: {
						inline_keyboard: [
							[
								{
									text: "🔙 Back to Algo Menu",
									callback_data: "algorithms",
								},
							],
							[
								{
									text: "🔙 Back to Menu",
									callback_data: "menu",
								},
							],
						],
					},
				});
				return;
			}
		}

		ctx.reply(
			`No information found for "${query}". Try another algorithm.`
		);
	});

	bot.action("explain_algorithm", (ctx) => {
		console.log("explain algorithm triggered");
	});

	// Handle any other messages
	bot.hears(/.*/, (ctx) => {
		ctx.reply(
			"I didn't understand that. Try one of these:",
			Markup.inlineKeyboard([
				[Markup.button.callback("📜 See Commands", "help")],
				[Markup.button.callback("🔙 Back to Menu", "menu")],
			]).resize()
		);
	});

	// Launch the bot
	bot.launch();
} catch (err) {
	// Log any errors
	console.log("Something went wrong", err);
}
