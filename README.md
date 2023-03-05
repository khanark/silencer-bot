# Project Title

SilencerBot

## Description

SilencerBot is a Discord bot that can mute members in a specific channel to help manage online communities. It automatically scans the channel for members who have their voice activation on and restricts their ability to speak, instead a pop up appears with notification to turn the "Push To Talk" feature. This can prevent disruptive behavior and maintain order in the community.

## Getting Started

### Dependencies

- [Discord.js](https://discord.js.org/#)
- [Nodemon](https://nodemon.io)

### Installing

- Clone the repo to your own computer
- Open with Visual Studio Code or any other IDE/Code Editor

```
npm install
```

Before executing the program you should create a discord role that restricts members

- ex "muted"

### Bot Commands

- Bot configuration
  channel_id (the id of the channel you want the bot to run)
  role_id (the id of the role that the bot assigns to members)

```
/config
```

- Mutes all the members in the channels

```
/mute
```

### Executing program

- To run the program simply put this in the terminal

```
npm start
```

## Help

Any advise for common problems or issues.

```
command to run if program contains helper info
```

## Authors

[@BorislavGodumov](https://www.linkedin.com/in/borislav-godumov-7245b61a2/)

## Version History

- Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
