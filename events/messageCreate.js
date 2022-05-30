module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.author.bot) return;
		const messageMember = message.guild.members.cache.find((user) => user.id === message.author.id);
		let messageMemberNick = messageMember.nickname;
		if (messageMemberNick === null) messageMemberNick = message.author.username;
		if (
			//  日文觸發詞
			message.content === 'サラおはよう' ||
			message.content === 'おはよう' ||
			// 中文觸發詞
			message.content === '星川早安' ||
			message.content === '早安' ||
			// 中日混和觸發詞
			message.content === '星川おはよう' ||
			message.content === 'サラ早安'
		) {
			const RandomMorning =
			[
				'おはよう～♪',
				'早安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${messageMemberNick}${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				},
			);
		}
		if (
			//  日文觸發詞
			message.content === 'サラおやすみ' ||
			message.content === 'おやすみ' ||
			// 中文觸發詞
			message.content === '星川晚安' ||
			message.content === '晚安',
			// 中日混和觸發詞
			message.content === '星川おやすみ' ||
			message.content === 'サラ晚安'
		) {
			const RandomMorning =
			[
				'おやすみ～♪',
				'晚安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${messageMemberNick}${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				},
			);
		}
		if (
			message.content.match('起來嗨') != null ||
			message.content.match('嗨起來') != null
		) {
			const RandomMorning =
			[
				'去睡覺',
				'不要',
				'再說',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				});
		}
	},
};
