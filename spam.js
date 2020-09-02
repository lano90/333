const Discord = require("discord.js");
const fs = require("fs");
const cmd = require("node-cmd");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client(); // كههربا (حسن ياسر)
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client(); // كههربا (حسن ياسر)
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client(); // كههربا (حسن ياسر)
const client16 = new Discord.Client();
const client17 = new Discord.Client(); // كههربا (حسن ياسر)
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client();
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client();
const client100 = new Discord.Client();
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
const tstop = dinfo.timestop * 1000 * 60 * 60; // العملية الحسابية بـ الساعات عشان البوت يوقف اسبام
const nstop = dinfo.timestop * 1000 * 60 * 60 - 10000; // العملية الحسابية بـ الساعات ناقصة 10 ثواني لارسال رسالة كم جمع البوت

const filename = "spam";
client.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client2.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n"); // كههربا (حسن ياسر)
    setInterval(() => {
      client2.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client3.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client3.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client4.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client5.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client6.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client6.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client7.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client7.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client8.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client8.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client9.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client9.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client10.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client10.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client11.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client11.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client12.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client12.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client13.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + ""; // كههربا (حسن ياسر)
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client13.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client14.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err; // كههربا (حسن ياسر)
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client14.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000); // كههههرباااا
  });
});
client15.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client15.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client16.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client16.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client17.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client17.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client18.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client18.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client19.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client19.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});
client20.on("ready", async () => {
  fs.readFile(`./${filename}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var Kahrbaa = data.split("\n");
    setInterval(() => {
      client20.guilds
        .get(dinfo.serverid)
        .channels.get(dinfo.channelid)
        .send(`${Kahrbaa[Math.floor(Math.random() * Kahrbaa.length)]}`);
    }, dinfo.timespam * 1000);
  });
});

// ======= [ #Credit NOTICE ] ======== //

client.on("ready", async () => {
  setInterval(() => {
    client.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client2.on("ready", async () => {
  setInterval(() => {
    client2.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client3.on("ready", async () => {
  setInterval(() => {
    client3.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client4.on("ready", async () => {
  setInterval(() => {
    client4.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client5.on("ready", async () => {
  setInterval(() => {
    client5.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client6.on("ready", async () => {
  setInterval(() => {
    client6.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client7.on("ready", async () => {
  setInterval(() => {
    client7.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client8.on("ready", async () => {
  setInterval(() => {
    client8.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client9.on("ready", async () => {
  setInterval(() => {
    client9.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client10.on("ready", async () => {
  setInterval(() => {
    client10.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client11.on("ready", async () => {
  setInterval(() => {
    client11.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client12.on("ready", async () => {
  setInterval(() => {
    client12.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client13.on("ready", async () => {
  setInterval(() => {
    client13.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client14.on("ready", async () => {
  setInterval(() => {
    client14.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client15.on("ready", async () => {
  setInterval(() => {
    client15.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client16.on("ready", async () => {
  setInterval(() => {
    client16.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client17.on("ready", async () => {
  setInterval(() => {
    client17.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client18.on("ready", async () => {
  setInterval(() => {
    client18.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client19.on("ready", async () => {
  setInterval(() => {
    client19.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});
client20.on("ready", async () => {
  setInterval(() => {
    client20.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`#credit`);
  }, nstop);
});

// ======= [ #Credit Notice END ] ======== //

// ======= [ Refresh MODE] ======== //

client.on("ready", async () => {
  setInterval(() => {
    client.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`** تم أعادة تشغيل البوتات .. **`);
    client.guilds
      .get(dinfo.serverid)
      .channels.get(dinfo.channelid)
      .send(`@everyone , @here`);
    cmd.run("refresh");
  }, tstop);
});
// ======= [ Refresh MODE end] ======== //

// ======= [ Spam MODE OFF ] ======== //
const config = require("./config.json");
const prefix = config.prefix;
client.on("message", message => {
  if (message.content === prefix + "spam off") {
    if (!dinfo.owner.includes(message.author.id)) return;
    message.channel.send(`**⚠️ SPAM OFF , <@${dinfo.owner}>**`);
    console.log(`⚠️ SPAM OFFING ..`);
    client.destroy();
    client2.destroy();
    client3.destroy();
    client4.destroy();
    client5.destroy();
    client6.destroy();
    client7.destroy();
    client8.destroy();
    client9.destroy();
    client10.destroy();
    client11.destroy();
    client12.destroy();
    client13.destroy();
    client14.destroy();
    client15.destroy();
    client16.destroy();
    client17.destroy();
    client18.destroy();
    client19.destroy();
    client20.destroy();
    console.log(`SPAM OFF By : ${dinfo.owner}`);
  }
});
// ======= [ Refresh MODE end] ======== //

client1.login("NzM5MjMwNDEwNDk1NzU0MzI0.XyqbdQ.rrtgDK3jftWJ9hifEZt8DAaP0os");
client2.login("NzQwNTM1Mjg0MDI1Nzg2NDI4.Xyqbuw.zlmjir7z2C-lwPTrMkNkXiP8coA");
client3.login("NzQwNTM1NzY3MDUwMjIzNjk3.XyqiIw.9nEStS0ix0Kfb6TymzFGob4W2nQ");
client4.login("NzQwNTQxMzUxMjQxODQyNzYw.Xyqiuw._C7WHKUuWqcBjluKSDR_0uXI-3E");
client5.login("NzQwNTQzMjU3Mzc2NzE4ODc4.XyqjVA.fz32BlO9yn832HB7SuuUYVCsXsc");
client6.login("NzQwNTQ2MzY5NDgzMzA5MDc2.XyqmEg.APBskpXEtkE2b_YMgYMytnQGeAA");
client7.login("NzQwNjA0NjMzMDk3MTc1MTcx.XyreKw.d2KioYWOeCfzqNBYKXOdl8FfeAQ");
client8.login("NzQwNjA3MDg2NzkwMTgwODc1.Xyri4g.UekUtq02YJvZ0ki2EbbvmPfrcjw");
client9.login("NzQwNjEyMTUyMDUzODU4Mzgz.Xyrjqw.o2crZpdvmC_pE1wVqNhIj4MXO3Q");
client10.login("NzQwNjEzMDAwMDI0Njg2NjAz.XyrlYg.BWFvrKCgFHlaZ_fkvKvCUIyl2hg");
client11.login("NzQwNjE0Nzg3MjY3ODIxNjgx.XyrprQ.POHG6nS71Mc6OqlWwSwkq7TosFI");
client12.login("NzQwNjE5NDUzODM3ODY5MDU4.XyrqaA.sQVM0u8pi-zbMx0Cs8IjrWg1oNU");
client13.login("NzQwNjIwMjQ3NzA2MzcwMDc5.Xyrr9Q.wdkooq9uClYSM3DO_-hB_-r3i0A");
client14.login("NzQwNjIxOTA5NjI4MDI2ODk0.Xyrs3g.Q6uk0kRBNOzbsBn0F8N8PmdRKrQ");
client15.login("NzQwNjIyODg4MjEzNjc2MDcx.Xyrt6Q.fOwNFEj9tRPipVft4cXRJj1jIkI");
client16.login("NzQwNjI0MDA2NjE2NDQ5MDM1.XyrvRw.uL17g2x94_gBjjxVIy-1jOxm7qY");
client17.login("NzQwNjI1NDcwNTE2ODg3NjUz.XyrwBw.v9X8re-G1oaCHhmGYuylcIDjv6c");
client18.login("NzQwNjI2Mjc3NDcxNDg1OTcy.Xyrwyg.lJSChDuxsA08-7Sjuox-YVcLIHo");
client19.login("NzQwNjI3MTA0OTU3MzMzNTk1.XyrxVA.-68kj7t0YwngscHGnoMW_-tn1k0");
client20.login("NzQwNjI3Njc2ODg4NTYzODMy.Xyrybw.SkkpE2E-039ZlpMJNS8WrC5RfB4");
client21.login("");
client22.login("");
client23.login("");
client24.login("");
client25.login("");
client26.login("");
client27.login("");
client28.login("");
client29.login("");
client30.login("");
client31.login("");
client32.login("");
client33.login("");
client34.login("");
client35.login("");
client36.login("");
client37.login("");
client38.login("");
client39.login("");
client40.login("");
client41.login("");
client42.login("");
client43.login("");
client44.login("");
client45.login("");
client46.login("");
client47.login("");
client48.login("");
client49.login("");
client50.login("");
client51.login("");
client52.login("");
client53.login("");
client54.login("");
client55.login("");
client56.login("");
client57.login("");
client58.login("");
client59.login("");
client60.login("");
client61.login("");
client62.login("");
client63.login("");
client64.login("");
client65.login("");
client66.login("");
client67.login("");
client68.login("");
client69.login("");
client70.login("");
client71.login("");
client72.login("");
client73.login("");
client74.login("");
client75.login("");
client76.login("");
client77.login("");
client78.login("");
client79.login("");
client80.login("");
client81.login("");
client82.login("");
client83.login("");
client84.login("");
client85.login("");
client86.login("");
client87.login("");
client88.login("");
client89.login("");
client90.login("");
client91.login("");
client92.login("");
client93.login("");
client94.login("");
client95.login("");
client96.login("");
client97.login("");
client98.login("");
client99.login("");
client100.login("");