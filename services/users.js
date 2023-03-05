const fs = require('fs/promises');
const config = require('../config/config.json');
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
  config.channelID = id;
  await writeFile(config);
};

const setRoleID = async id => {
  config.roleID = id;
  await writeFile(config);
};

const muteChannelMembers = async channel => {
  const currentMutes = [];
  channel.members.forEach(async member => {
    if (member.roles.cache.some(role => role.name == 'muted')) return;
    if (!member.roles.cache.some(role => process.env.ROLE_PERMISSIONS == role.name)) {
      currentMutes.push(member.displayName);
      await member.roles.add(config.roleID);
    }
  });
  return currentMutes;
};

const unmuteChannelMembers = async channel => {
  const currentMutes = [];
  channel.members.forEach(async member => {
    if (member.roles.cache.some(role => role.name == 'muted')) {
      await member.roles.remove('1081882243296940072');
    }
    // if (!member.roles.cache.some(role => channelMutes.botPermissionRoles.includes(role.name))) {
    //   consosle.log(member.roles);
    //   await member.roles.add('muted');
    //   currentMutes.push(member.displayName);
    //   // await member.voice.setMute(true);
    // }
  });
  // await writeFile(channelMutes);
  // return currentMutes;
};

module.exports = { setNewPermissionRole, muteChannelMembers, unmuteChannelMembers, setRoleID, setChannelID };
