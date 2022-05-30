module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.author.bot) return;
		if
		(
			message.content === 'まつりおはよう' ||
			message.content === '祭おはよう' ||
			message.content === 'まつり早安' ||
			message.content === '祭早安'
		) {
			const RandomMorning =
			[
				'おはよう！',
				'早安呀～',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				},
			);
		}
		if (
			message.content === 'まつりおやすみ' ||
			message.content === '祭おやすみ' ||
			message.content === 'まつり晚安' ||
			message.content === '祭晚安'
		) {
			const RandomMorning =
			[
				'おやすみ！',
				'晚安呀～',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
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
