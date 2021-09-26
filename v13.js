const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g; // All Invites will be removed

client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return; // If a bot sends an invite in the server, it does not warn the bot
  // anti invite
  const matched = message.content.match(regex);
  console.log(matched) // Logs the content that was sent in your server (the invite)
  if (matched) {
    if (message.member.permissions.has('KICK_MEMBERS')) return; // Here, you can change the permission to ADMININISTRATOR, BAN_MEMBERS, MANAGE_MESSAGES or something else!
    message.delete();
    message.reply('You Cannot Send Discord Invites In This Server!'); // Warns Members For Inviting! This can be edited too!
  }
})
