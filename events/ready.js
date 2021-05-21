// -Bot giriş kısmı- 
module.exports = (client) => {

var oynuyorkısımları = [
"mc.storikanw.net",
"oyna.storikanw.net",
"play.storikanw.net"]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'PLAYING' });
        }, 2 * 3000);

    console.log("Bot başarı ile giriş yaptı.")
}