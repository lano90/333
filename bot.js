
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); // كههربا (حسن ياسر)
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); // كههربا (حسن ياسر)
const client20 = new Discord.Client();
// كههربا (حسن ياسر)


const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", // كههربا (حسن ياسر)
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    // كههربا (حسن ياسر)
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});


client6.on("message", message => {
if (message.author.bot) return;

 let prefix = ">"
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// +say
if (command === "say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join(" "));
} 

if (command == "embed") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor(0x23b2d6);
message.channel.sendEmbed(say);
message.delete();
}
});














// ======= [ MODE - Join Server , add Friend   ] ======== //
client.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
// ======= [ MODE - Join Server , add Friend END  ] ======== //

// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error: ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "waravoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـاتـم😂..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});


client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هـاتـم😂..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});
client20.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "waravoice") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**DONE ..**!");
})
.catch(console.log);
} else {
message.reply("**- لازم تخش روم صوتي!**");
}
}
});








 


client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channl.send("c");
  }
});
client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});

// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client6.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send("#profile");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client12.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client13.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

// ======= [ PROFILE - INFO end ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.login("");
client2.login("");
client3.login("NzQ0NjA4NDIxMTc2ODAzNDI5.XzltgA.cdCxt7rmwDn6M244Z54rk0FrooA"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client4.login("NzQyNzYyODkyOTY4OTg0NjI2.XzK2EQ.IgILnVvolK-nuca5uLwK97AM7YU");
client5.login("NzQ0ODY1MjEzNDk2Njg4NzMx.XzpdhA.sJRl9y4W28fFxhvC84zEyYryI9g");
client6.login("NzQ0ODY3MTg5MzU3ODA1NTk4.Xzpelw.xESoPFA3eft7mluzIyGJ5bLPNLU");
client7.login("NzQ0NjA4NDIxMTc2ODAzNDI5.XzltgA.cdCxt7rmwDn6M244Z54rk0FrooA");
client8.login("");
client9.login("");
client10.login("");
client11.login("");
client12.login("");
client13.login(""); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client14.login("");
client15.login("");
client16.login("");
client17.login("");
client18.login("");
client19.login("");
client20.login("");



