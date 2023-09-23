const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    TextInputBuilder,
    ModalBuilder,
    TextInputStyle,
    InteractionType,
} = require("discord.js");
module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        const client = interaction.client;
        async function handleInteraction() {
            if (!interaction.inGuild()) return;
            if (interaction.type === InteractionType.ApplicationCommand) {
                const slashcmd = client.slashcommands.get(
                    interaction.commandName
                );

                if (!slashcmd) return interaction.reply("Not a valid slash command");
                    
                await slashcmd.run({ client, interaction });
            }
        }
        handleInteraction();
    },
};
