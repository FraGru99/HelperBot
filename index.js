var TelegramBot = require('node-telegram-bot-api');

var token = '324820618:AAFR127iDIR-GUSjpVTspEWrLPQW23I81x8';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/ordina/, function(msg, match) {
  var fromId = msg.from.id;
  var ordina  ="Stay Tuned!";
  bot.sendMessage(fromId, ordina);
});

bot.onText(/\/start/, function(msg, match) {
  var fromId = msg.from.id;
  var start  ="Ciao, benvenuto nel bot di assistenza di SpeedUp!\nCosa posso fare per te?\nCome aiutante, posso:\nFarti ordinare tramite il comando /ordina\nSpiegarti come funziona Girada e la lista tramite il comando /faq\nDarti prove del funzionamento di questa lista rimandandoti al nostro canale di Unboxing, in cui postiamo anche tutte le novità della nostra lista! @speedupchannel";
  bot.sendMessage(fromId, start);
});



bot.onText(/\/faq/, function(msg, match) {
  var fromId = msg.from.id;
  var faq = "Allora, iniziamo.\nCome funziona Girada?\n\n\nGirada è un normalissimo sito di e-commerce,ma con un funzionamento particolare.\nOrdini il tuo prodotto a prezzo scontatissimo,ma per ricevere questo prodotto, hai bisogno di 3 codici amico che, otterrai invitando 3 persone che spendono almeno quanto te con un ordine.\nFantastico,vero? Sì, ma solo per te, infatti i tuoi amici dovranno a loro volta trovare 3 amici,che dovranno poi fare lo stesso.\nEd ecco che entriamo in gioco noi con la nostra lista!\nIl nostro scopo è assicurare a tutti la ricezione del prodotto,avendo però un po' di pazienza.\nIl funzionamento della lista è semplice:\nOrdini entrando in ultima posizione nella tua fascia di prezzo,poichè sei stato l'ultimo ad ordinare,nel momento in cui gli altri prima di te completano il 3/3,tu diventi primo. Una volta primo, i primi 3 ordini con costo pari al tuo, ti assegnano i 3 codici amico, facendoti completare.\n\n\nQuanto ci vuole per ricevere il prodotto?\nPrima di ricevere il prodotto, ci vogliono in media dai 25 ai 55 gg per trovare i 3 amici, bisogna poi aggiungere 15 gg di attesa in cui girada controlla che nessuno chieda il rimborso, per poi spedirti tramite corriere espresso il prodotto(1-2gg , 3 se su un isola)\n\n\nChe ci guadagna Girada?\nLoro (Girada) mettono il costo ufficiale del prodotto (esempio iPhone 7: 1000 euro circa), ma non quello in commercio (che è attorno agli 800 euro circa). Per ogni prodotto 3 persone acquistano, e pagano in 4 persone, quindi se tu dovessi acquistare un iPhone 7 280 euro tuoi + 840 euro di tre acquirenti. E già così superi ampiamente il costo ufficiale del prodotto, ma loro non lo pagano al prezzo che lo pagheremmo noi all'apple store. Loro, avendo una partita iva regolare da sito e-commerce, pagano il prodotto senza tasse e senza iva, quindi un iPhone 7 in stock lo pagheranno al massimo 500-600 euro, ma probabile anche di meno.\nEcco il loro guadagno.";

bot.sendMessage(fromId, faq);

});


bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "Ciao,eccoti la lista dei comandi disponibili su questo Bot:\n/ordina - Ti permette di ordinare\n/faq - La risposta alle domande più frequenti, sono qui!");
});
