module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
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
                    content: RandomMorning[Math.floor(Math.random() * RandomMorning.length)],
                    ephemeral: false,
                }
            );
        }
    },
};
