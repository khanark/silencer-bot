const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs/promises');
const mutedMembers = require('../data/muted_users.json');

const writeFile = async data => {
  if (mutedMembers.some(user => user.name == data.name)) return;
  mutedMembers.push(data);
  await fs.writeFile('./data/muted_users.json', JSON.stringify(mutedMembers, null, 2));
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .addStringOption(option => option.setName('channel').setDescription('select the desired channel'))
    .setDescription('Mutes the members of a selected channel if they are not muted already!'),

  async execute(interaction) {
    const permitedRoles = ['Admin'];
    const currentMutes = [];
    let replyMsg = '';

    if (interaction.member.roles.cache.some(async role => permitedRoles.includes(role.name))) {
      const voiceChannel = await interaction.member.voice.channel;

      voiceChannel.members.forEach(async member => {
        if (member.voice.mute == false) {
          // if (!member.roles.cache.some(role => permitedRoles.includes(role.name))) {
          const memberData = {
            id: member.id,
            name: member.displayName,
          };
          await writeFile(memberData);
          currentMutes.push(member.displayName);
          await member.voice.setMute(true);
          // }
        }
      });
    } else {
      replyMsg = 'No permissions';
    }

    console.log(mutedMembers.length);
    replyMsg = currentMutes.length
      ? `Current muted members: ${currentMutes.join(', ')}\nMembers added to the channel's mutes`
      : !replyMsg.length < 1
      ? 'No permissions'
      : 'Everybody is safe, 0 muted users ^^';
    await interaction.reply(replyMsg);
  },
};
