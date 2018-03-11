/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data = [
    'The GDP of Nigeria is $481.1 billion.',
'The nominal GDP per capita is $5,900.',
'There are over 250 ethnic groups that live throughout Nigeria.',
'While English is the official language, there are over 500 indigenous languages in Nigeria.',
'Seven percent of the total languages spoken in the world are spoken in Nigeria.',
'Nigeria has a federal presidential republic government.',
'Nigerians must be at least 18 years old to vote.',
'Lagos is the most populous city in Nigeria.',
'Football, or soccer in the United States, is one of the country’s most popular sports. Its national team has won the Africa Cup of Nations a total of three times.',
'Nigeria is the most populous country in Africa, and it is the 17th most populous city in the world.',
'About half of Nigerians are Muslim, while approximately 40% are Christian.',
'In terms of size, Nigeria is about double the size of the state of California.',
'While some cultures believe it’s rude to not look someone in the eye, in Nigeria, it is customary to not look into someone’s eyes.',
'Nigerians operate on what has become known as “African time.” This means that they are rarely on time. The more high class a person is, the later they will be.',
'In some Islamic marriages in Nigeria, once a woman is married, she may no longer see any of her male relatives again.',
'Like other African countries, the left hand is considered dirty by Nigerians. It is in poor taste to eat, shake hands, or pass or receive items with the left hand.',
'The country is the 7th largest democracy in the world.',
'Oil accounts for over 70% of the country’s exports.',
'The Niger River, which spans 2,600 miles, is the third largest river in West Africa.',
'Speaking of the Niger River, it was the inspiration behind Nigeria’s name.',
'Nigeria’s movie industry is known as “Nollywood” and it is one of the largest movie industries in the world.',
'The life expectancy on average is 52 years, one of the lowest in the world. This is primarily due to poor healthcare, a lack of clean water, and poor living conditions.',
'The city of Abuja was built in the 1980s and eventually replaced Lagos as the capital.',
'Nigeria’s Third Mainland Bridge is the largest bridge in Africa.',
'Nigeria is the 12th largest producer of crude oil, pushing out over 2.5 million barrels per day.',
'Evidence of human life in Nigeria dates as far back as 9000 BC.',
'The nominal GDP of Nigeria is the 2nd largest in Africa.',
'Approximately 70% of Nigerians work in the agriculture industry.',
'The country’s cash crops include cocoa, wheat, peanuts, and cotton.',
'Nigeria is divided into 36 states.',
'It is thought that the area surrounding Calabar has the world’s most diverse species of butterflies.',
'The drill monkey is native to Nigeria, and it is only found in one other country – Cameroon.',
'Nigeria has launched the Nigeria Vision 20:2020 initiative that aims to put its economy in the world’s top 20 largest economies by the year 2020.',
'The richest man in Africa, Aliko Dangote, resides in Nigeria. He is worth an estimated $12 billion.',
'Social media is very popular in Nigeria, and there are over 3 million Facebook users in the country.',
'The Portuguese first reached Nigeria in 1472.',
'Nigeria’s population is estimated to reach 444 million by the year 2050.',
'Five of the 10 richest pastors in the world live in Nigeria, according to a report from Forbes. Their net worth ranges from $10 million to $150 million.',
'West Africa’s oldest civilization, the Nok, have been in the country since 1000 BC.',
'Africa’s oldest boat – and the third oldest boat in the world – was discovered in Yobe. The Dufana Canoe is over 6,500 years old.',
'The Yoruba group of Nigeria has the highest rate of twin births in the world. It is believed by some that the group’s consumption of yams contributes to this.',
'The Jos Plateau Indigobird is a bird species that can be found only in Nigeria.',
'Over 4,700 species of plants grow in Nigeria.',
'The city of Lagos’ population is more than all of the eastern United States combined.',
'Northern Nigeria takes over 80% of the country’s land.',
'The Ivory Coast is Nigeria’s top trading partner in Africa.',
'There are few national parks or protected areas in Nigeria, so many of its animals have become extinct or endangered.',
'Nigeria’s nickname is “Giant of Africa” because of the size of its land and the diversity of its people.',
'The Niger Delta located in Nigeria is the third largest delta in the world.',
'A new constitution was created in 1999 following years of military rule and corrupt leaders.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
