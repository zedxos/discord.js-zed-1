const ErrorHandler = require('../Errors.js'), Version = require('../../package.json').version;
module.exports.messageSend = function(Reply, msg, ID, Client) {
	if(!Reply) {
      ErrorHandler.empty('Reply');
    } else if(!msg) {
        ErrorHandler.undefined('message')
    } else if(!ID) {
        msg.channel.send(Reply);
    } else {
    let channel = Client.channels.cache.get(ID)
     if(!channel) {
      ErrorHandler.invalid('Channel ID')
    } else {
      channel.send(Reply);
    }
    }
    };
module.exports.connect = function(Client, Token) {
	if(!Client) {
      ErrorHandler.undefined('Client');
    } else if(!Token) {
      ErrorHandler.undefined('Token')
    } else {
      Client.login(Token);
    }
};
module.exports.ready = function(Client, ReadyMsg, Activity, Type) {
	if(!Client) {
      ErrorHandler.undefined('Client')
    } else {
    let ReadyLog = new Object();
    if(!ReadyMsg) {
     ReadyLog = 'Your bot is ready!'
    } else {
      ReadyLog = ReadyMsg;
    }
    Client.on('ready', async () => {
        console.log(ReadyLog)
        if(!Activity) return;
        Client.user.setActivity(Activity)
        if(!Type) return;
        let Types = ['LISTENING', 'STREAMING', 'PLAYING']
        if(!Types.includes(Type)) {
        	ErrorHandler.incorrect_option('type of activity')
        } else {
        	Client.user.setActivity(Activity, { type: Type })
        }
      })
    }
};
module.exports.disconnect = function(Client, Log) {
	let Loge = new Object();
    if(!Client) {
      ErrorHandler.not_specified('Client')
    } else if(!Log) {
    Loge = 'Disconnected!'
    } else {
      Loge = Log;
    }
    Client.destroy();
    console.log(Loge)
};
module.exports.messageDm = function(Reply, msg, ID, Client) {
	if(!Reply) {
      ErrorHandler.empty('Reply')
    } else if(!msg) {
      ErrorHandler.undefined('message')
    } else if(!ID) {
      msg.author.send(Reply)
    } else {
    let author = Client.users.cache.get(ID)
    if(!author) {
      ErrorHandler.invalid('User ID')
    } else {
      author.send(Reply);
    }
  }
};
module.exports.react = async function(msg, Reaction) {
	if(!msg) {
  		ErrorHandler.undefined('msg')
  	} else if(!Reaction) {
  		ErrorHandler.not_specified('Emoji for reaction')
  	}
  	await msg.react(Reaction)
};
module.exports.fetchGuildSize = async function(Client) {
	if(!Client) {
		ErrorHandler.not_specified('Client')
	}
	return Client.guilds.cache.size
}
module.exports.fetchUsersSize = async function(Client) {
	if(!Client) {
		ErrorHandler.not_specified('Client')
	}
	return Client.users.cache.size
}
module.exports.fetchEmojisSize = async function(Client) {
	if(!Client) {
		ErrorHandler.not_specified('Client')
	}
	return Client.emojis.cache.size
}
module.exports.hasEmoteRegex = /<a?:.+:\d+>/gm;
module.exports.animatedEmoteRegex = /<a:.+:(\d+)>/gm;
module.exports.emoteRegex = /<:.+:(\d+)>/gm;
module.exports.joinVC = async function(ID, Client) {
	if(!ID) {
		ErrorHandler.not_specified('Voice Channel ID')
	} else if(!Client) {
		ErrorHandler.not_specified('Client')
	} else {
		let channel = Client.channels.cache.get(ID)
		if(!channel) {
			ErrorHandler.invalid('Voice Channel ID')
		} else {
			channel.join()
		}
	}
}
module.exports.disjoinVC = async function(msg) {
	if(!msg) {
		ErrorHandler.not_specified('Message Event')
	} else {
		msg.guild.me.voice.channel.leave()
	}
}
/*
ZedDjs = {
  connect: function (Client, Token) {
    if(!Client) {
      ErrorHandler.undefined('Client');
    } else if(!Token) {
      ErrorHandler.undefined('Token')
    } else {
      Client.login(Token);
    }
  },
  messageSend: function (Reply, msg) {
    if(!Reply) {
      ErrorHandler.empty('Reply');
    } else if(!msg) {
        ErrorHandler.undefined('message')
      } else {
        msg.channel.send(Reply);
      }
    },
  ready: function (Client, ReadyMsg, Activity, Type) {
    if(!Client) {
      ErrorHandler.undefined('Client')
    } else {
    let ReadyLog = new Object();
    if(!ReadyMsg) {
     ReadyLog = 'Your bot is ready!'
    } else {
      ReadyLog = ReadyMsg;
    }
    Client.on('ready', async () => {
        console.log(ReadyLog)
        if(!Activity) return;
        Client.user.setActivity(Activity)
        if(!Type) return;
        let Types = ['LISTENING', 'STREAMING', 'PLAYING']
        if(!Types.includes(Type)) {
        	ErrorHandler.incorrect_option('type of activity')
        } else {
        	Client.user.setActivity(Activity, { type: Type })
        }
      })
    }
  },
  disconnect: function (Client, Log) {
    let Loge = new Object();
    if(!Client) {
      ErrorHandler.not_specified('Client')
    } else if(!Log) {
    Loge = 'Disconnected!'
    } else {
      Loge = Log;
    }
    Client.destroy();
    console.log(Loge)
  },
  messageDm: function(Reply, msg, ID, Client) {
    if(!Reply) {
      ErrorHandler.empty('Reply')
    } else if(!msg) {
      ErrorHandler.undefined('message')
    } else if(!ID) {
      msg.author.send(Reply)
    } else {
    let author = Client.users.cache.get(ID)
    if(!author) {
      ErrorHandler.invalid('User ID')
    } else {
      author.send(Reply);
    }
  }
  },
  react: async function(msg, Reaction) {
  	if(!msg) {
  		ErrorHandler.undefined('msg')
  	} else if(!Reaction) {
  		ErrorHandler.not_specified('Emoji for reaction')
  	}
  	await msg.react(Reaction)
  }
}

module.exports = { ZedDjs }
*/