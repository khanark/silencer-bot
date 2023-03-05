const { SlashCommandBuilder } = require('discord.js');
const { unmuteChannelMembers } = require('../services/users');

module.exports = {
  data: new SlashCommandBuilder().setName('unmute').setDescription('Unmutes previously muted members of the channel.'),
  async execute(interaction) {
    let replyMsg = '';
    const voiceChannel = await interaction.member.voice.channel;
    const unmutedMembersCount = await unmuteChannelMembers(voiceChannel);
    if (!unmutedMembersCount) {
      replyMsg = 'No unmuted members! o,O';
    } else {
      await interaction.reply('Everyone in the channel has been unmuted.\nFeel free to talk again!');
    }
  },
};
