const { SlashCommandBuilder } = require('discord.js');
const env = require('dotenv');
env.config();
const { setChannelID, setRoleID } = require('../services/users');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('config')
    .setDescription('Sets the configuration of the bot')
    .addStringOption(option =>
      option
        .setName('channel_id')
        .setDescription('Sets the id of the channel on which the bot operates')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('role_id')
        .setDescription('Sets the id of the role that is going to be used to mute members')
        .setRequired(true)
    ),

  async execute(interaction) {
    let replyMsg;
    if (interaction.member.roles.cache.some(role => role.name == process.env.ROLE_PERMISSIONS)) {
      const channelID = interaction.options.getString('channel_id');
      const roleID = interaction.options.getString('role_id');
      await setChannelID(channelID);
      await setRoleID(roleID);
      replyMsg = 'The bot has been configured!\nENJOY! ^^';
    } else {
      replyMsg = 'No permission';
    }

    await interaction.reply(replyMsg);
  },
};
