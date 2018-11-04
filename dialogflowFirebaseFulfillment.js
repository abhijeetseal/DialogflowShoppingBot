// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

'use strict';
const {dialogflow} = require('actions-on-google');
const DialogFlowApp = require('actions-on-google').DialogFlowApp;
const {
  BrowseCarousel,
  Suggestions,
  BasicCard,
  Button,
  SimpleResponse,
  BrowseCarouselItem,
} = require('actions-on-google');
const app = dialogflow({debug: true});
//var https = require ('https');

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
const agent = new WebhookClient({ request, response });
let action = request.body.queryResult.action;
let inputContexts = request.body.queryResult.outputContexts;
console.log('inputContexts',inputContexts);
response.setHeader('Content-Type','applicaiton/json');
console.log('action '+action);
const parameters = request.body.queryResult.parameters;
let session = (request.body.session) ? request.body.session : undefined;
console.log('session '+session);
var itemType = parameters['shop-item'] ? parameters['shop-item'] : undefined;
console.log('itemType '+itemType);
var brand = parameters['device-brand']? parameters['device-brand'] : undefined;
console.log('brand '+brand);
var cartItems = parameters['cart-item']? parameters['cart-item'] : undefined;
console.log('cartItems '+cartItems);


var plan = parameters['plan-item'] ? parameters['plan-item'] : undefined;
console.log('plan '+plan);

    if(action === 'shop'){
        if(itemType !== undefined && brand !== undefined){
            var phoneBrandListResponse = {
                  "fulfillmentText" : "Here is the list of Phones, which one would you like to buy? ",
                  "fulfillmentMessages": [
                      {
                        "text": {
                          "text": [
                            "Here is the list of Phones, which one would you like to buy? "
                          ]
                        },
                        "platform": "FACEBOOK"
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType][brand][0].name,
                          "subtitle": devices[itemType][brand][0].price,
                          "imageUri": devices[itemType][brand][0].image,
                          "buttons": [
                            {
                              "text": devices[itemType][brand][0].name,
                              "postback": devices[itemType][brand][0].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType][brand][1].name,
                          "subtitle": devices[itemType][brand][1].price,
                          "imageUri": devices[itemType][brand][1].image,
                          "buttons": [
                            {
                              "text": devices[itemType][brand][1].name,
                              "postback": devices[itemType][brand][1].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType][brand][2].name,
                          "subtitle": devices[itemType][brand][2].price,
                          "imageUri": devices[itemType][brand][2].image,
                          "buttons": [
                            {
                              "text": devices[itemType][brand][2].name,
                              "postback": devices[itemType][brand][2].name
                            }
                          ]
                        }
                      }
                      
                  ],
                  "outputContexts" : [
                      {
                        "name": session+"/contexts/shop-followup",
                        "lifespanCount": 2,
                        "parameters": {
                          "shop-item.original": itemType,
                          "shop-item": itemType,
                          "device-brand":brand
                          
                        }
                      },
                      {
                        "name": session+"/contexts/session-var",
                        "lifespanCount": 5,
                        "parameters": {
                          "shop-item.original": itemType,
                          "shop-item": itemType,
                          "device-brand":brand,
                          "device-brand.original": brand
                        }
                      }
                      ]
              };
              sendResponse(phoneBrandListResponse,response);
        }
        else if(itemType !== undefined && brand === undefined){
            var phoneListResponse = {
                  "fulfillmentText" : "Here is the list of Phones, which one would you like to buy? ",
                  "fulfillmentMessages": [
                      {
                        "text": {
                          "text": [
                            "Here is the list of Phones, which one would you like to buy? "
                          ]
                        },
                        "platform": "FACEBOOK"
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Apple[0].name,
                          "subtitle": devices[itemType].Apple[0].price,
                          "imageUri": devices[itemType].Apple[0].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Apple[0].name,
                              "postback": devices[itemType].Apple[0].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Apple[1].name,
                          "subtitle": devices[itemType].Apple[1].price,
                          "imageUri": devices[itemType].Apple[1].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Apple[1].name,
                              "postback": devices[itemType].Apple[1].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Apple[2].name,
                          "subtitle": devices[itemType].Apple[2].price,
                          "imageUri": devices[itemType].Apple[2].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Apple[2].name,
                              "postback": devices[itemType].Apple[2].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Samsung[0].name,
                          "subtitle": devices[itemType].Samsung[0].price,
                          "imageUri": devices[itemType].Samsung[0].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Samsung[0].name,
                              "postback": devices[itemType].Samsung[0].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Samsung[1].name,
                          "subtitle": devices[itemType].Samsung[1].price,
                          "imageUri": devices[itemType].Samsung[1].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Samsung[1].name,
                              "postback": devices[itemType].Samsung[1].name
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": devices[itemType].Samsung[2].name,
                          "subtitle": devices[itemType].Samsung[2].price,
                          "imageUri": devices[itemType].Samsung[2].image,
                          "buttons": [
                            {
                              "text": devices[itemType].Samsung[2].name,
                              "postback": devices[itemType].Samsung[2].name
                            }
                          ]
                        }
                      }
                  ],
                  "outputContexts" : [
                      {
                        "name": session+"/contexts/shop-followup",
                        "lifespanCount": 2,
                        "parameters": {
                          "shop-item.original": itemType,
                          "shop-item": itemType,
                          "device-brand":brand
                          
                        }
                      },
                      {
                        "name": session+"/contexts/session-var",
                        "lifespanCount": 5,
                        "parameters": {
                          "shop-item.original": itemType,
                          "shop-item": itemType,
                          "device-brand":brand,
                          "device-brand.original": brand
                        }
                      }
                      ]
              };
              sendResponse(phoneListResponse,response);
        }
        else{
            sendResponse('Sorry, I dont know how to respond to that, yet',response);   
        }
    }

    if(action === 'Shop.plans'){
        console.log('Cart-------------',inputContexts[1].parameters['cart-item']);
        var planSelectedResponse = {
                  "fulfillmentText" : plan+" is added to cart, Please view cart",
                  "fulfillmentMessages": [
                      {
                        "text": {
                          "text": [
                            plan+" is added to cart, Please view cart"
                          ]
                        },
                        "platform": "FACEBOOK"
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": 'Cart',
                          "subtitle": "",
                          "imageUri": "",
                          "buttons": [
                            {
                              "text": "View Cart",
                             "postback": "View Cart",
                            }
                          ]
                        }
                      }
                  ],
                  "outputContexts" : [
                      {
                        "name": session+"/contexts/session-var",
                        "lifespanCount": 5,
                        "parameters": {
                          "cart-item": inputContexts[1].parameters['cart-item'],
                          "plan-item": plan
                        }
                      }
                      ]
              };
              sendResponse(planSelectedResponse,response);  

        //sendResponse(plan+" is added to cart",response);
        
        //response.send(buildResponse('Here is the list of Plans '+plans['Plans'][0]+' '+plans['Plans'][1]+', Which one would you like to buy?'));
    }

    if(action === 'Select.device'){
      var cart = [];    
      var deviceSelectedResponse = {
                  "fulfillmentText" : cartItems+" is added to cart, Please select Plan",
                  "fulfillmentMessages": [
                      {
                        "text": {
                          "text": [
                           cartItems+" is added to cart, Please select Plan",
                          ]
                        },
                        "platform": "FACEBOOK"
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": 'Plan',
                          "subtitle": "$75/month",
                          "imageUri": "",
                          "buttons": [
                            {
                              "text": plans.Plans[0],
                             "postback": plans.Plans[0],
                            }
                          ]
                        }
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": 'Plan',
                          "subtitle": "$85/month",
                          "imageUri": "",
                          "buttons": [
                            {
                              "text": plans.Plans[1],
                             "postback": plans.Plans[1],
                            }
                          ]
                        }
                      }
                  ],
                  "outputContexts" : [
                      {
                        "name": session+"/contexts/shop-brand-followup",
                        "lifespanCount": 2,
                        "parameters": {
                          "cart-item": cartItems
                        }
                      },
                      {
                        "name": session+"/contexts/session-var",
                        "lifespanCount": 5,
                        "parameters": {
                          "cart-item": cartItems
                        }
                      }
                      ]
              };
              sendResponse(deviceSelectedResponse,response);    
    }
    
    
    if(action === 'input.viewcart'){
        var sessionCtx = inputContexts.find(function(element) {
          return element.name === session+'/contexts/session-var' ;
        });
       
        var device = sessionCtx.parameters['cart-item'];
        var planItem = sessionCtx.parameters['plan-item'];
        var viewCartResponse = {
                   
                  "fulfillmentText" : planItem+" is added to cart, Please view cart",
                  "fulfillmentMessages": [
                      {
                        "text": {
                          "text": [
                           "You have "+ device + " and  "+ planItem +" in your cart, please proceed to checkout"
                          ]
                        },
                        "platform": "FACEBOOK"
                      },
                      {
                        "platform": "FACEBOOK",
                        "card": {
                          "title": 'Checkout',
                          "subtitle": "",
                          "imageUri": "",
                          "buttons": [
                            {
                              "text": "Checkout",
                              "postback": "https://vshopdemo.herokuapp.com/pages/desktop/checkout1.html",
                            }
                          ]
                        }
                      }
                  ],
                  "outputContexts" : [
                      {
                        "name": session+"/contexts/session-var",
                        "lifespanCount": 5,
                        "parameters": {
                          "cart-item": device,
                          "plan-item": planItem
                        }
                      }
                      ]
              };
              console.log("inputContexts", viewCartResponse);  
              sendResponse(viewCartResponse,response);  


        //response.send(buildResponse('Here is the list of Plans '+plans['Plans'][0]+' '+plans['Plans'][1]+', Which one would you like to buy?'));
    }
    
    
    if(action === 'Shop.add-to-cart.Shop-Add-to-Cart-no.Shop-Add-to-Cart-no-yes'){
        response.send(buildResponse('Here is the list of Phones '+devices[itemType][brand][0]+' '+devices[itemType][brand][1]
        +' '+devices[itemType][brand][2]+', Which one would you like to buy?'));
    }
    if(action === 'checkout.start'){
      response.send(buildResponse('Great ! we are ready for checkout with items '+cartItems +' and '+plan));
    }
    
    
    
    
//     if (action!= 'Shop.brand' && action!= 'Shop.add-to-cart.Shop-Add-to-Cart-yes'){
//       console.log('Inside input function');
//            response.send(buildResponse("I'm sorry, I don't know this"));
//            return;
//     }
    
        
});


function buildResponse(deviceList) {
                return JSON.stringify({"fulfillmentText": deviceList});
}


  function sendResponse (responseToUser,response) {
    // if the response is a string send it as a response to the user
    if (typeof responseToUser === 'string') {
      let responseJson = {fulfillmentText: responseToUser}; // displayed response
      response.json(responseJson); // Send response to Dialogflow
    } else {
      // If the response to the user includes rich responses or contexts send them to Dialogflow
      let responseJson = {};
      // Define the text response
      responseJson.fulfillmentText = responseToUser.fulfillmentText;
      // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
      if (responseToUser.fulfillmentMessages) {
        responseJson.fulfillmentMessages = responseToUser.fulfillmentMessages;
      }
      // Optional: add contexts (https://dialogflow.com/docs/contexts)
      if (responseToUser.outputContexts) {
        responseJson.outputContexts = responseToUser.outputContexts;
      }
      // Send the response to Dialogflow
      console.log('Response to Dialogflow: ' + JSON.stringify(responseJson));
      response.json(responseJson);
    }
  }


var devices = {
    "Phones":{
       "Apple" :[
              { "name": "IPhone X" ,
                "image": "https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?hei=200&wid=200",
				"price": "$999"
              },
              { "name": "IPhone XS" ,
                "image": "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphonexs-spacegrey?hei=200&wid=200",
				"price": "$799"
              },
              { "name": "IPhone XR" ,
                "image": "https://ss7.vzw.com/is/image/VerizonWireless/iPhoneXr_Coral_PureAngles?hei=200&wid=200",
				"price": "$899"
              }
            ],
        "Samsung" :[
               { "name": "Samsung S9" ,
                "image": "https://ss71.vzw.com/is/image/VerizonWireless/SAMSUNG_Galaxy_S9_Blue?hei=200&wid=200",
				"price": "$999"
              },
              { "name": "Samsung S9 Plus" ,
                "image": "https://ss7.vzw.com/is/image/VerizonWireless/SAMSUNG_Galaxy_S9_Plus_Black?hei=200&wid=200",
				"price": "$799"
              },
              { "name": "Samsung S8" ,
                "image": "https://ss72.vzw.com/is/image/VerizonWireless/Samsung_Galaxy_S8_Orchid_Gray?hei=200&wid=200",
				"price": "$899"
              }
            ]
    }
};

var plans = {
    "Plans":[
              "Go Unlimited",
              "Beyond Unlimited"
            ]
};

