const fs = require('fs/promises');
const botConfig = require('../config/config.json');
const env = require('dotenv');
env.config();

const writeFile = async file => {
  await fs.writeFile('./config/config.json', JSON.stringify(file, null, 2));
};

const setNewPermissionRole = async role => {
  if (channelMutes.botPermissionRoles.includes(role)) return;
  channelMutes.botPermissionRoles.push(role);
  await writeFile(channelMutes);
};

const setChannelID = async id => {
  botConfig.channelID = id;
  await writeFile(botConfig);
};

const setRoleID = async id => {
  botConfig.roleID = id;
  await writeFile(botConfig);
};

const muteChannelMembers = async channel => {
  const currentMutes = [];
  channel.members.forEach(async member => {
    if (member.roles.cache.some(role => role.name == 'muted')) return;
    if (!member.roles.cache.some(role => process.env.ROLE_PERMISSIONS == role.name)) {
      currentMutes.push(member.displayName);
      await member.roles.add(botConfig.roleID);
    }
  });
  return currentMutes;
};

const unmuteChannelMembers = async channel => {
  let currentUnmutedMembers = 0;
  channel.members.forEach(async member => {
    if (member.roles.cache.some(role => role.name == 'muted')) {
      currentUnmutedMembers++;
      await member.roles.remove(botConfig.roleID);
    }
  });
  return currentUnmutedMembers;
};

module.exports = { setNewPermissionRole, muteChannelMembers, unmuteChannelMembers, setRoleID, setChannelID };
