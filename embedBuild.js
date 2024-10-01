const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Function generate a custom default EmbedBuilder  
function createDefaultEmbed(interaction) {
  return new EmbedBuilder()
    .setColor(0xA30000)
    .setThumbnail(interaction.client.user.displayAvatarURL())
    .setFooter({ text: `Informations demandées par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
    .setTimestamp();
}

module.exports = { createDefaultEmbed };
