const { SlashCommandBuilder } = require('discord.js');
const { createDefaultEmbed } = require('../../embedBuild.js'); // Importation of the Custom Default embed builder 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Provides information about the server.'),
  async execute(interaction) {
    const serverEmbed = createDefaultEmbed(interaction)
      .setTitle(`Information serveur`);

    await interaction.channel.send({ embeds: [serverEmbed] });
  },
};
