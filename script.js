const qrcode = require('qrcode-terminal');

const {
    Client,
    LocalAuth
} = require('whatsapp-web.js');

const allSessionsObject = {};
const client = new Client({
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    },
    puppeteer: {
        headless: false,
    },
    authStrategy: new LocalAuth({
        clientId: ''
    }),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {
        small: true
    });
});

client.on('ready', () => {
    console.log('CONECTADO!');
});



client.on('message', msg => {
    const greetings = [
        'BOM DIA', 'BOA TARDE', 'BOA NOITE', 'OLÁ', 'OLA', 'OI', 'OII', 'TUDO BEM',
        'TUDO BEM?', 'COMO VAI?', 'EAI', 'O', 'HORARIO', '?'
    ];

    if (greetings.includes(msg.body.toLocaleUpperCase())) {
        msg.reply(`Olá! Bem-vindo à Delíciar-te! Como posso ajudar você hoje? 🎂😍❤ `)
        msg.reply(`
        1-Horário de Funcionamento: 
        Para saber nossos horários de funcionamento.
        2-Produtos: 
        Para informações sobre nossos doces.
        3-Pedidos: 
        Para fazer um pedido ou saber sobre opções de entrega.
        4-Localização: 
        Para saber onde estamos localizados.
        5-Detalhar pedido: 
        fez um pedido pelo site e quer detalhá-lo? 
        `)
        msg.reply(` 📌Digite o número correspondente à sua consulta! 🙂❤ `)
    }  if (msg.body.toLocaleLowerCase() == '1' || msg.body.toLocaleLowerCase() == 'um' || msg.body.toLocaleLowerCase() == 'horario' || msg.body.toLocaleLowerCase() == 'horário' || msg.body.toLocaleLowerCase() == 'funcionamento' || msg.body.toLocaleLowerCase() == 'horario de funcionamento' || msg.body.toLocaleLowerCase() == 'horário de funcionamento') {
        msg.reply(`Nosso horário de funcionamento é de segunda a sábado, das 10h às 17:30h🤩. (Estamos fechados aos domingos!)`);
    }  if (msg.body.toLocaleLowerCase() == '2' || msg.body.toLocaleLowerCase() == 'dois' || msg.body.toLocaleLowerCase() == 'produtos' || msg.body.toLocaleLowerCase() == 'doces' || msg.body.toLocaleLowerCase() == 'informações' || msg.body.toLocaleLowerCase() == 'bolos') {
        msg.reply(`Oferecemos uma variedade de bolos para aniversários, eventos, kit festas, kit bento e muito mais!🍰 Qualquer coisa específica que você esteja procurando? Você pode conferir nosso cardápio disponível completo aqui: https://deliciar-te-atelie-de-delicias.ola.click/products ! 🥰😍`)
         msg.reply( `📌NÃO TEMOS ENTREGA PRÓPRIA, ENTÃO FICA A CARGO DO CLIENTE RETIRAR NA LOJA OU UBER FLASH (CARRO) E A GENTE ENTREGA AO MOTORISTA!`)
         msg.reply( `Algumas referências:`);
    }  if (msg.body.toLocaleLowerCase() == '3' || msg.body.toLocaleLowerCase() == 'três' || msg.body.toLocaleLowerCase() == 'tres' || msg.body.toLocaleLowerCase() == 'pedidos' || msg.body.toLocaleLowerCase() == 'encomendar' || msg.body.toLocaleLowerCase() == 'pedido') {
        msg.reply(`📌Você pode fazer um pedido diretamente através do nosso site: https://deliciar-te-atelie-de-delicias.ola.click/products, além de conferir todo nosso cardápio, você pode conferir também as opções de entrega! ❤🥰`);
         msg.reply( `📌Você também pode fazer o pedido via whatsapp aqui comigo! Caso deseje fazer por aqui, digite “quero encomendar aqui”`);
        
    }
     if (msg.body.toLocaleLowerCase() == 'quero encomendar aqui' || msg.body.toLocaleLowerCase() == 'sim') {
        msg.reply(`Ótimo! 🥰 O que deseja encomendar hoje?😋 (escreva uma das opções abaixo)`);
         msg.reply( `
        📌Kit Festa em Casa
        📌Bentô Cakes
        📌Naked Cakes
        📌Bolos de Chocolate
        📌Bolos Decorados Com Chantilly
        📌Bolos Temáticos (PRAZO 3 DIAS)
        📌Bolos 2 Andares (PRAZO 5 DIAS)
        📌Docinhos Tradicionais
        📌Docinhos Premium
        📌Docinhos Brigadeiro Supreme
        📌Salgadinhos Fritos
        📌Tortas
        📌Brownie/CupCake
        📌Bem Casados
        📌Chocolates
        📌Bebidas
        `);
    } 
    
    
     if (msg.body.toLocaleLowerCase() == 'kit' || msg.body.toLocaleLowerCase() == 'kit festa em casa' || msg.body.toLocaleLowerCase() == 'kit festa' || msg.body.toLocaleLowerCase() == 'kit casa') {
        msg.reply(`Kit Festa em Casa? ótima escolha! escolha uma das opções:`);
         msg.reply( `
        📌Mini Kit Festa Casal: Monte seu Kit Mini (até 2 pessoas) composto de um bolo bento de 300g (massa e recheios a sua escolha), 8 unidades de docinhos gourmet de 15g (sabor a escolher) e 20 unidades de salgadinhos fritos (sabor a escolher).
        Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.

        📌Kit Festa PP: Monte seu Kit P (até 6 pessoas) composto de bolo aro 15 Gran Bentô (massa, 1 recheio e decoração a sua escolha), 10 unidades de docinhos gourmet de 15g (sabor a escolher) e 40 salgadinhos fritos (sabores a escolher). Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.

        📌Kit Festa P: Monte seu Kit P (até 10 pessoas) composto de bolo aro 15 (massa, recheios e decoração a sua escolha), 15 unidades de docinhos gourmet de 15g (sabor a escolher) e 60 salgadinhos fritos (sabores a escolher).
        Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.

        📌Kit Festa M: Monte seu Kit M (até 20 pessoas) composto de bolo aro 20 (massa,  recheios e decoração a sua escolha), 30 unidades de docinhos gourmet de 15g (sabores a escolher) e 100 salgadinhos (sabores a escolher).
        Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.

        📌Kit Festa G: Monte seu Kit G (até 30 pessoas) composto de bolo aro 25 (massa, recheios e decoração a sua escolha), 50 unidades de docinhos gourmet de 15g (sabores a escolher) e 160 salgadinhos fritos (sabores a escolher).
        Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.
    
        📌 Kit Festa GG:Monte seu Kit GG (até 50 pessoas) composto de bolo aro 30 (massa, recheios e decoração a sua escolha), 100 unidades de docinhos gourmet de 15g (sabores a escolher) e 240 salgadinhos fritos (sabores a escolher).
        Escreva no campo 'observações' as informações sobre a decoração desejada para o seu bolo.            
        `);
        msg.reply( `por qual você se interessaria?`)
    } 

    if (msg.body.toLocaleLowerCase() == 'Mini Kit Festa Casal' || msg.body.toLocaleLowerCase() == 'Kit Festa PP' || msg.body.toLocaleLowerCase() == 'Kit Festa P' || msg.body.toLocaleLowerCase() == 'Kit Festa M' || msg.body.toLocaleLowerCase() == 'Kit Festa G' || msg.body.toLocaleLowerCase() == 'Kit Festa GG') {
        msg.reply('ótima escolha!')
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    } 
    
    if (msg.body.toLocaleLowerCase() == 'bentô cakes' || msg.body.toLocaleLowerCase() == 'bentô' || msg.body.toLocaleLowerCase() == 'bento'|| msg.body.toLocaleLowerCase() == 'bento cakes'|| msg.body.toLocaleLowerCase() == 'bento cake'|| msg.body.toLocaleLowerCase() == 'bentô cake' ) {
        msg.reply(`Bentô Cakes? ótima escolha! escolha uma das opções:`);
         msg.reply( `
        📌Bentô Cake Flork:Mini bolo Aro 10cm, em torno de 300g. 
        Escolha o sabor da massa, recheio que preferir e cor da fita decorativa.
        Você ainda pode escolher um desenho do Flork  e deixar seu bolo mais divertido! (10cm)

        📌Kit Presente Bento Cake e Docinhos: Kit Presente contendo um Bento Cake de 300g (massa e recheios a sua escolha) e uma caixinha de presente com 9 docinhos (sabor a escolher). Você ainda pode escolher um desenho do Flork e deixar seu bolo mais divertido!       

        📌Gran Bento Chantilly Nome e Idade:Bolo aro 15, rendimento de 6 a 8 fatias
        Escolha o sabor da massa, recheio que preferir e cor do chantilly decorativo.
        Em seguida, informe nas observações o nome e a idade!

        📌Bento Chantilly Nome e Idade :Mini bolo Aro 10cm, em torno de 300g. 
        Escolha o sabor da massa, recheio que preferir e cor do chantilly decorativo.
        Em seguida, informe nas observações o nome e a idade!(10 cm)

        📌Gran Bento Naked com Flork: Bolo aro 15, rendimento de 6 a 8 fatias
        Escolha o sabor da massa, recheio que preferir e cor da fita decorativa.
        Você ainda pode escolher um tema desenho do Flork e deixar seu bolo mais divertido!(15cm)
        `);
    }  
    
    if (msg.body.toLocaleLowerCase() == 'Bentô Cake Flork' || msg.body.toLocaleLowerCase() == 'Kit Presente Bento Cake e Docinhos' || msg.body.toLocaleLowerCase() == 'Gran Bento Chantilly Nome e Idade' || msg.body.toLocaleLowerCase() == 'Bento Chantilly Nome e Idade' || msg.body.toLocaleLowerCase() == 'Gran Bento Naked com Flork') {
        msg.reply('ótima escolha!')
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    } 
     if (msg.body.toLocaleLowerCase() == 'Naked Cakes' || msg.body.toLocaleLowerCase() == 'Naked') {
        msg.reply(`Naked Cakes? ótima escolha! escolha uma das opções:`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }
    
    if (msg.body.toLocaleLowerCase() == 'bolos de chocolate' || msg.body.toLocaleLowerCase() == 'bolo de chocolate') {
        msg.reply(`Bolos de chocolate? ótima escolha! escolha uma das opções:`);
         msg.reply( `
        📌Bolo Drip Ganache Branco e Preto: Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.

        📌Bolo Cobertura de Brigadeiro:Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.

        📌Bolo Drip Ganache Preto:Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.
        `);
    } 
    
    if (msg.body.toLocaleLowerCase() == 'Bolo Drip Ganache Branco e Preto' || msg.body.toLocaleLowerCase() == 'Bolo Cobertura de Brigadeiro' || msg.body.toLocaleLowerCase() == 'Bolo Drip Ganache Preto' || msg.body.toLocaleLowerCase() == 'Bolo Drip Ganache' || msg.body.toLocaleLowerCase() == 'Brigadeiro' || msg.body.toLocaleLowerCase() == 'Bolo Drip Ganache') {
         msg.reply( `Agora, descreva seu pedido!`);
        msg.reply(`Bolos de chocolate? ótima escolha! escolha uma das opções:`);
         msg.reply( `
        📌Bolo Drip Ganache Branco e Preto: Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.

        📌Bolo Cobertura de Brigadeiro:Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.

        📌Bolo Drip Ganache Preto:Escolha o tamanho do seu bolo (P, M, G ou GG)
        Escolha sua massa, 2 recheios e cor da decoração.
        Em seguida você pode adicionar uma decoração especial se desejar:  topo em papelaria.
        `);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  
    
    if (msg.body.toLocaleLowerCase() == 'Bolos Decorados Com Chantilly' || msg.body.toLocaleLowerCase() == 'Bolo Decorado Com Chantilly' || msg.body.toLocaleLowerCase() == 'Bolos Com Chantilly' || msg.body.toLocaleLowerCase() == 'Bolo Com Chantilly') {
        msg.reply(`Bolos Com Chantilly? ótima escolha! escolha uma das opções:`);
         msg.reply( `
        📌Bolo Decorado 1 - Nome e Idade
        📌Bolo Decorado 3- Espatulado Colorido
        📌Bolo Decorado 5 - Barra Espatulada
        📌Bolo Decorado 7 - Liso em uma cor
        📌 Bolo Decorado 2 Coração Nome e Idade
        📌Bolo Decorado 4 - Pétalas
        📌Bolo Decorado 6 - Saia Colorida
        `);
    }
    
    if (msg.body.toLocaleLowerCase() == 'Bolo decorado 1' || msg.body.toLocaleLowerCase() == 'Bolo decorado 2' || msg.body.toLocaleLowerCase() == 'Bolo decorado 3' || msg.body.toLocaleLowerCase() == 'Bolo decorado 4' || msg.body.toLocaleLowerCase() == 'Bolo decorado 5' || msg.body.toLocaleLowerCase() == 'Bolo decorado 6' || msg.body.toLocaleLowerCase() == 'Bolo decorado 7') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    } 
    
    if (msg.body.toLocaleLowerCase() == 'bolos 2 andares' || msg.body.toLocaleLowerCase() == 'bolo 2 andares' || msg.body.toLocaleLowerCase() == 'bolo 2 andar' || msg.body.toLocaleLowerCase() == 'bolos 2 andar' || msg.body.toLocaleLowerCase() == '2 andares' || msg.body.toLocaleLowerCase() == 'bolos dois andares') {
        msg.reply(`Bolos de 2 Andares? Excelente escolha! Escolha um dos tamanhos:`);
         msg.reply( `
        📌Bolo de 2 andares-PP (PRAZO 5 DIAS)
        📌Bolo de 2 andares-M (PRAZO 5 DIAS)
        📌Bolo de 2 andares-GG (PRAZO 5 DIAS)
        📌Bolo de 2 andares-P (PRAZO 5 DIAS)
        📌Bolo de 2 andares-G (PRAZO 5 DIAS)
        `);
    }  if (msg.body.toLocaleLowerCase() == 'Bolo de 2 andares-PP' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andares-M' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andares-GG' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andares-P' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andares-G' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andar-PP' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andar-M' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andar-GG' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andar-P' || msg.body.toLocaleLowerCase() == 'Bolo de 2 andar-G' || msg.body.toLocaleLowerCase() == 'Bolos de 2 andares-PP' || msg.body.toLocaleLowerCase() == 'Bolos de 2 andares-M' || msg.body.toLocaleLowerCase() == 'Bolos de 2 andares-GG' || msg.body.toLocaleLowerCase() == 'Bolos de 2 andares-P' || msg.body.toLocaleLowerCase() == 'Bolos de 2 andares-G') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'docinhos tradicionais' || msg.body.toLocaleLowerCase() == 'tradicionais') {
        msg.reply(`Docinhos Tradicionais? Ótima escolha! Escolha a quantidade:`);
         msg.reply( `
        📌15 Docinhos Tradicionais
        📌50 Docinhos Tradicionais
        📌30 Docinhos Tradicionais
        📌100 Docinhos Tradicionais
        `);
    }  if (msg.body.toLocaleLowerCase() == '15 docinhos Tradicionais' || msg.body.toLocaleLowerCase() == '50 docinhos Tradicionais' || msg.body.toLocaleLowerCase() == '30 Docinhos Tradicionais' || msg.body.toLocaleLowerCase() == '100 Docinhos Tradicionais' || msg.body.toLocaleLowerCase() == '15 docinho Tradicionais' || msg.body.toLocaleLowerCase() == '50 docinho Tradicionais' || msg.body.toLocaleLowerCase() == '30 Docinho Tradicionais' || msg.body.toLocaleLowerCase() == '100 Docinho Tradicionais') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'docinhos premium' || msg.body.toLocaleLowerCase() == 'premium') {
        msg.reply(`Docinhos Premium? Delícia! Escolha a quantidade:`);
         msg.reply( `
        📌15 Docinhos Especiais
        📌50 Docinhos Especiais
        📌30 Docinhos Especiais
        📌100 Docinhos Especiais
        `);
    }  if (msg.body.toLocaleLowerCase() == '15 Docinhos Especiais' || msg.body.toLocaleLowerCase() == '50 Docinhos Especiais' || msg.body.toLocaleLowerCase() == '30 Docinhos Especiais' || msg.body.toLocaleLowerCase() == '100 Docinhos Especiais' || msg.body.toLocaleLowerCase() == '15 Docinho Especiais' || msg.body.toLocaleLowerCase() == '50 Docinho Especiais' || msg.body.toLocaleLowerCase() == '30 Docinho Especiais' || msg.body.toLocaleLowerCase() == '100 Docinho Especiais') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'docinhos brigadeiro supreme' || msg.body.toLocaleLowerCase() == 'brigadeiro supreme' || msg.body.toLocaleLowerCase() == 'docinho brigadeiro supreme' || msg.body.toLocaleLowerCase() == 'supreme') {
        msg.reply(`Docinhos Brigadeiro Supreme? Maravilha! Escolha a quantidade:`);
         msg.reply( `
        📌15 Brigadeiros Supreme
        📌50 Brigadeiros Supreme
        📌30 Brigadeiros Supreme
        📌100 Brigadeiros Supreme
        `);
    }  if (msg.body.toLocaleLowerCase() == '15 brigadeiros supreme' || msg.body.toLocaleLowerCase() == '50 Brigadeiros Supreme' || msg.body.toLocaleLowerCase() == '30 Brigadeiros Supreme' || msg.body.toLocaleLowerCase() == '100 Brigadeiros Supreme') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'salgadinhos fritos' || msg.body.toLocaleLowerCase() == 'salgadinhos') {
        msg.reply(`Salgadinhos Fritos? Ótimo! Escolha a quantidade:`);
         msg.reply( `
        📌20 salgadinhos fritos
        📌60 salgadinhos fritos
        📌100 salgadinhos fritos
        `);
    }  if (msg.body.toLocaleLowerCase() == '20 salgadinhos fritos' || msg.body.toLocaleLowerCase() == '60 salgadinhos fritos' || msg.body.toLocaleLowerCase() == '100 salgadinhos fritos') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'tortas' || msg.body.toLocaleLowerCase() == 'torta') {
        msg.reply(`Tortas? Escolha a sua preferida:`);
         msg.reply( `
        📌Torta Banoffee (PRAZO 1 DIA)
        📌Torta Morangoffee (PRAZO 1 DIA)
        📌Torta de Limão (PRAZO 1 DIA)
        📌Torta de Brownie (PRAZO 1 DIA)
        `);
    }  if (msg.body.toLocaleLowerCase() == 'Torta Banoffee' || msg.body.toLocaleLowerCase() == 'Torta Morangoffee' || msg.body.toLocaleLowerCase() == 'Torta de Limão' || msg.body.toLocaleLowerCase() == 'Torta de Brownie' || msg.body.toLocaleLowerCase() == 'Banoffee' || msg.body.toLocaleLowerCase() == 'Morangoffee' || msg.body.toLocaleLowerCase() == 'Limão') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'brownie/cupcake' || msg.body.toLocaleLowerCase() == 'brownie' || msg.body.toLocaleLowerCase() == 'cupcake' || msg.body.toLocaleLowerCase() == 'brownie e cupcake' || msg.body.toLocaleLowerCase() == 'brownies e cupcakes' || msg.body.toLocaleLowerCase() == 'brownies' || msg.body.toLocaleLowerCase() == 'cupcakes') {
        msg.reply(`Brownie/CupCake? Delicioso! Escolha a sua opção:`);
         msg.reply( `
        📌Mini Brownie Recheado (15 unidades) (PRAZO 1 DIA)
        📌Cupcake Tradicional (10 unidades) (PRAZO 1 DIA)
        📌Mini Cupcake (12 unidades) (PRAZO 1 DIA)
        `);
    }  if (msg.body.toLocaleLowerCase() == 'Mini Brownie Recheado' || msg.body.toLocaleLowerCase() == 'Cupcake Tradicional' || msg.body.toLocaleLowerCase() == 'Mini Cupcake') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'bem casados' || msg.body.toLocaleLowerCase() == 'bem casado') {
        msg.reply(`Bem Casados? Uma doçura! Escolha a quantidade:`);
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'chocolates' || msg.body.toLocaleLowerCase() == 'chocolate') {
        msg.reply(`Chocolates? Uma tentação! Escolha a sua opção:`);
         msg.reply( `
        📌Pirulito de Chocolate (20 unidades) (PRAZO 1 DIA)
        📌Copinho de Chocolate (20 unidades) (PRAZO 1 DIA)
        `);
    }  if (msg.body.toLocaleLowerCase() == 'Pirulito de Chocolate' || msg.body.toLocaleLowerCase() == 'Pirulitos de Chocolate' || msg.body.toLocaleLowerCase() == 'Pirulito' || msg.body.toLocaleLowerCase() == 'Copinho de Chocolate' || msg.body.toLocaleLowerCase() == 'Copinhos de Chocolate' || msg.body.toLocaleLowerCase() == 'Copinhos') {
         msg.reply( `ótima escolha!`);
         msg.reply( `Agora, descreva seu pedido!`);
         msg.reply( `como você quer que seja?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    }  if (msg.body.toLocaleLowerCase() == 'bebidas') {
        msg.reply(`Bebidas? Refrescante! Escolha a sua opção:`);
         msg.reply( `
        📌Coca-Cola 1,5L
        📌Guaraná 1,5L
        📌Coca-Cola Zero 1,5L
        📌Guaraná Zero 1,5L
        `);
    }  if (msg.body.toLocaleLowerCase() == 'Coca-Cola 1,5L' || msg.body.toLocaleLowerCase() == 'Guaraná 1,5L' || msg.body.toLocaleLowerCase() == 'Coca-Cola Zero 1,5L' || msg.body.toLocaleLowerCase() == 'Guaraná Zero 1,5L' || msg.body.toLocaleLowerCase() == 'Coca-Cola' || msg.body.toLocaleLowerCase() == 'Guaraná' || msg.body.toLocaleLowerCase() == 'Coca-Cola Zero' || msg.body.toLocaleLowerCase() == 'Guaraná Zero' || msg.body.toLocaleLowerCase() == 'Coca Cola' || msg.body.toLocaleLowerCase() == 'Coca Cola zero' || msg.body.toLocaleLowerCase() == 'Coca' || msg.body.toLocaleLowerCase() == 'guarana' || msg.body.toLocaleLowerCase() == 'guarana zero') {
         msg.reply( `qual seria a quantidade?`);
         msg.reply( `Descreva que logo logo uma colaboradora entrará em contato! 🥰😘`);
    } 
     if (msg.body.toLocaleLowerCase() == '4' || msg.body.toLocaleLowerCase() == 'localização' || msg.body.toLocaleLowerCase() == 'localizacao' || msg.body.toLocaleLowerCase() == 'onde' || msg.body.toLocaleLowerCase() == 'localizado' || msg.body.toLocaleLowerCase() == 'onde fica' || msg.body.toLocaleLowerCase() == 'onde fica localizado?' || msg.body.toLocaleLowerCase() == 'google maps' || msg.body.toLocaleLowerCase() == 'maps' || msg.body.toLocaleLowerCase() == 'loja') {
        console.log("entrouuuuuu")
        msg.reply('📌Estamos localizados na Barra World Shopping & Park - Loja 201C - Recreio dos Bandeirantes, Rio de Janeiro.');
        msg.reply('📌Você pode nos encontrar facilmente no Google maps também: https://maps.app.goo.gl/sDMBkUqM2UP8UcEV7');
        msg.reply(`📌NÃO TEMOS ENTREGA PRÓPRIA, ENTÃO FICA A CARGO DO CLIENTE RETIRAR NA LOJA OU UBER FLASH (CARRO) E A GENTE ENTREGA AO MOTORISTA!`)
    }  if (msg.body.toLocaleLowerCase() == '5') {
        msg.reply(`📌Atualmente, estamos experimentando uma alta demanda de pedidos. Para oferecer um serviço mais eficiente, gostaríamos de verificar se você já fez um pedido através do nosso site e deseja apenas detalhar aqui?
            Escreva: Quero detalhar aqui
            Escreva: ainda não`);
    }  if (msg.body.toLocaleLowerCase() == 'quero detalhar aqui' || msg.body.toLocaleLowerCase() == 'detalhar aqui' || msg.body.toLocaleLowerCase() == 'quero detalhar') {
        msg.reply(`okay, aguarde até um dos nosso colaboradores responder você! 😍🥰`);
        msg.reply(`Para agilizarmos, me informe o pedido feito no site e o que deseja comentar sobre ele?✏`);
        
    }  if (msg.body.toLocaleLowerCase() == 'Vou continuar no site' || msg.body.toLocaleLowerCase() == ' nao quero detalhar aqui' || msg.body.toLocaleLowerCase() == ' não quero detalhar aqui' || msg.body.toLocaleLowerCase() == 'ainda não' || msg.body.toLocaleLowerCase() == 'ainda nao') {
        msg.reply('Para agilizarmos o processo, pedimos que os pedidos sejam feitos pelo site! Oferecemos uma variedade de bolos, doces, cupcakes, e muito mais!🍰 Qualquer coisa específica que você esteja procurando? Você pode conferir nosso cardápio disponível completo aqui: https://deliciar-te-atelie-de-delicias.ola.click/products !');
    }
});


client.initialize();