const { SlashCommandBuilder } = require('discord.js');
const { unmuteChannelMembers } = require('../services/users');

module.exports = {
  data: new SlashCommandBuilder().setName('unmute').setDescription('Unmutes previously muted members of the channel.'),
  async execute(interaction) {
    const voiceChannel = await interaction.member.voice.channel;
    await unmuteChannelMembers(voiceChannel);
    await interaction.reply('Everyone in the channel has been unmuted.\nFeel free to talk again!');
  },
};
