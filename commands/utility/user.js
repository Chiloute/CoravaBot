const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Give information about the user'),
  async execute(interaction) {

    const userEmbed = new EmbedBuilder()
      .setColor(0xA30000)
      .setTitle(`Informations de  ( ${interaction.user.username}) `)
      .setThumbnail(interaction.client.user.displayAvatarURL())
      .addFields(
        { name: `Nom d'utilisateur`, value: interaction.user.username },
        { name: 'ID', value: interaction.user.id },
        { name: 'A rejoint le :', value: interaction.member.joinedAt.toDateString() }
      )
      .setFooter({ text: `Informations demandées par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp();

    await interaction.channel.send({ embeds: [userEmbed] });
  },
};
