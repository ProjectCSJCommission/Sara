module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
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
                    content: messageMemberNick + RandomMorning[Math.floor(Math.random() * RandomMorning.length)],
                    ephemeral: false,
                },
            );
        }
    },
}
