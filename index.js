const Util = require('./Abstract/src/Util.js'), ErrorHandler = require('./Abstract/Errors.js'), { ZedDjs } = require('./Abstract/src/Log.js'), Chalk = require('chalk');

module.exports.Client = class {
  constructor({ Log } = {}){
  	this.messageSend = Util.messageSend,
  	this.connect = Util.connect,
  	this.ready = Util.ready,
  	this.disconnect = Util.disconnect,
  	this.messageDm = Util.messageDm,
  	this.react = Util.react,
  	this.fetchGuildSize = Util.fetchGuildSize,
  	this.fetchUsersSize = Util.fetchUsersSize,
  	this.fetchEmojisSize = Util.fetchEmojisSize,
  	this.hasEmoteRegex = Util.hasEmoteRegex,
  	this.animatedEmoteRegex = Util.animatedEmoteRegex,
  	this.emoteRegex = Util.emoteRegex,
  	this.joinVC = Util.joinVC,
  	this.disjoinVC = Util.disjoinVC,
  	this.createGuild = Util.createGuild
  	if(Log) {
  	if(typeof Log !== 'boolean') {
  		ErrorHandler.incorrect_option('log option')
  	}
  	if(Log === true) {
  	   console.log(ZedDjs)
  	} else {
  		return;
  	}
  	}
  }
}