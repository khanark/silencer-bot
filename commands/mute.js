const { SlashCommandBuilder } = require('discord.js');
const { muteChannelMembers } = require('../services/users');
const env = require('dotenv');
env.config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Mutes the members of a selected channel if they are not muted already!'),

  async execute(interaction) {
    let replyMsg = '';
    if (interaction.member.roles.cache.some(role => process.env.ROLE_PERMISSIONS == role.name)) {
      const voiceChannel = await interaction.member.voice.channel;
      const currentMutes = await muteChannelMembers(voiceChannel);
      console.log(currentMutes);
      replyMsg = currentMutes.length
        ? `Oops there are muted members ${currentMutes.length}:\n${currentMutes.join(', ')}`
        : 'Everybody is safe, 0 muted users ^^';
    } else {
      replyMsg = 'No permissions';
    }

    await interaction.reply(replyMsg);
  },
};
