const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextInputBuilder, ModalBuilder, TextInputStyle, InteractionType, SlashCommandBuilder, SelectMenuBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),

    run: async ({ client, interaction }) => {  
        return interaction.reply("Pong!");
    },
};