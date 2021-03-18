const DjsClient = require('discord.js').Client,
	TestClient = new DjsClient(),
	ZedDjsClient = require('../../index.js').Client,
	ZedDjs = new ZedDjsClient({ Log: true }); //Optional! Log is a Part and Settings that logs a Object about the Package, rather only true or false

ZedDjs.connect(
	TestClient,
	'Nzg5MjY2Mzg0OTYxOTI5MjY4.X9vjmg.Ul3NclqNO_QZOSo-_68R9M2vcw4'
); //Your Bot's Client, Your bot's token
ZedDjs.ready(TestClient, 'Bot is Online!', 'With discord.js-zed!', 'PLAYING'); //Your bots' client, Log when the bot is ready, the bot's status, the bot's status type Rather 'PLAYING, STREAMING, or LISTENING'!

TestClient.on('message', async msg => {
	switch (msg.author.bot) {
		case true:
			return;
			break;
	}
	switch (msg.content) {
		case 'Ping':
			ZedDjs.messageSend('Pong', msg); //Your message, Your bot's message event
			break;
		case 'Pong':
			ZedDjs.messageSend('Ping', msg);
			break;
		case 'Send':
			ZedDjs.messageSend('Sent!', msg, '774492952247402506', TestClient)
			break;
		case 'Destroy':
			ZedDjs.disconnect(TestClient, 'Disconnected!'); //Your bot's client, Log when the bot is disconnected!
			break;
		case 'Dm':
			ZedDjs.messageDm('Ive dm\'ed You!', msg); //Dm the author of the message, your message, Your bot's message event
			break;
		case 'DmAUser':
			ZedDjs.messageDm('Ive dm\'ed A user!', msg, '704697854207459419', Client); //your message, your bots message event, User id you wanna Get DM'ED, Your bot's client
			break;
		case 'React':
			await ZedDjs.react(msg, '🌙'); //NOTE ONLY LOCAL REACT, NO EVENT LISTENERS AND ONLY YOUR MESSAGE CAN BE REACTED NOT THE BOT'S MESSAGE!
		case 'Guilds':
			let Guilds = await ZedDjs.fetchGuildSize(TestClient);
			ZedDjs.messageSend(Guilds + ' Server(s)!', msg);
			break;
		case 'Users':
			let Users = await ZedDjs.fetchUsersSize(TestClient);
			ZedDjs.messageSend(Users + ' User(s)!', msg);
			break;
		case 'Emojis':
			let Emojis = await ZedDjs.fetchEmojisSize(TestClient);
			ZedDjs.messageSend(Emojis + ' Emoji(s)!', msg);
			break;
		case 'Roles':
			let Roles = await ZedDjs.fetchRolesSize(TestClient);
			ZedDjs.messageSend(Roles + ' Role(s)!', msg);
			break;
		case 'Join':
			//let channel = TestClient.channels.cache.get('760334802707808261')
			//channel.join()
			await ZedDjs.joinVC('760334802707808261', TestClient).then(connection => {
				console.log('Connected!')
			}).catch(err => {
				console.log('Error occured!')
			})
			break;
		case 'DisJoin':
			//let channel = TestClient.channels.cache.get('760334802707808261')
			//channel.disconnect()
			await ZedDjs.disjoinVC(msg).then(disconnection => {
				console.log('Disconnected!')
			}).catch(err => {
				console.log('Error occured!')
			})
			break;
		case 'GuildCreate':
			let Server = await ZedDjs.createGuild(TestClient, 'Server Name')
			ZedDjs.messageSend(Server, msg)
			break;
	}
});
