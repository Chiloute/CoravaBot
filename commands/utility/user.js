const { SlashCommandBuilder } = require('discord.js');
const { createDefaultEmbed } = require('../../embedBuild.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Give information about the user'),
  async execute(interaction) {

    const userEmbed = createDefaultEmbed(interaction)
      .setTitle(`Informations de  ( ${interaction.user.username}) `)
      .addFields(
        { name: `Nom d'utilisateur`, value: interaction.user.username },
        { name: 'ID', value: interaction.user.id },
        { name: 'A rejoint le :', value: interaction.member.joinedAt.toDateString() }
      )

    await interaction.channel.send({ embeds: [userEmbed] });
  },
};
