import { create} from '@wppconnect-team/wppconnect';
import { stages, getStage,getType } from './stages.js';
import * as dotenv from 'dotenv'


dotenv.config()

global.globalUser = "";
global.globalDescricao = "";
global.bolCurso = false;
global.botTriggerMaster = false
create({
    session: 'vendas',
    whatsappVersion: '2.2307.10',
    deviceName: 'Celular Sam',
    catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
        console.log('Number of attempts to read the qrcode: ', attempts);
        console.log('Terminal qrcode: ', asciiQR);
        console.log('base64 image string qrcode: ', base64Qrimg);
        console.log('urlCode (data-ref): ', urlCode);
      },
      statusFind: (statusSession, session) => {
        console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
        //Create session wss return "serverClose" case server for close
        console.log('Session name: ', session);
      },
      onLoadingScreen: (percent, message) => {
        console.log('LOADING_SCREEN', percent, message);
      },
    
    })
    .then((client) => start(client))
    .catch((error) => console.log(error));


  function start(client) {
  let botTrigger = false;
     /*  client.onMessage((message) => {
        if(message.body ==='Vi isto no Facebook...' || message.body === 'Vi isto no Instagram...'){ 
          botTrigger = true
        } 
      }); */
      client.onMessage(async(message) => {
          
          if (!message.isGroupMsg ) {
              const currentStage = getStage({ from: message.from });
             const currentType =  getType({ from: message.from });
             // const currentItems = getItems({ from: message.from });
              console.log(currentType)
             
              console.log(currentStage)
          
              const messageResponse = await stages[currentStage].stage.exec({
                from: message.from,
                message: message.body,
                client,
              });
      
              if (messageResponse) {
               await client.sendText(message.from, messageResponse).then(() => {
                  console.log('Menu simples.');
                }).catch(error => console.error('Error when sending message', error));
              }


            /*   if (messageResponse && currentType==2) {
              //console.log(message.listResponse.singleSelectReply.selectedRowId)
             
               console.log('menu tipo lista')
               await client.sendListMessage(message.from, messageResponse).then(() => {
                  console.log('Message sent.');
                }).catch(error => console.error('Error when sending message', error));
              }  */ 
          }
        
        
        });
    };