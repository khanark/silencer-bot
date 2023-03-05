# Silencer Bot

Discord bot for muting members

## Description

Discord bot that mutes voice activation in specific channels. Scans for members with voice activation on and prompts to use "Push To Talk" instead. Prevents disruptions and maintains order in the community.

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

- Before executing the program you should create a discord role that restricts members

  - ex. "muted"

### Bot Commands

- Bot configuration
  - **channel_id**  
    the id of the voice channel you want the bot to run on  
    **_Right click the voice channel and Copy ID_**
  - **role_id**  
    the id of the role that the bot assigns to members  
    **_Server settings => Roles => More => Copy ID_**

```
/config
```

- Mutes all the members in the channels

```
/mute
```

- Unmutes all the members in the channel

```
/unmute
```

### Executing program

- To run the program install the npm package

```bash
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
