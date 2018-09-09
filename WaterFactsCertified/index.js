/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 *
 * @author Albert Su
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Everyone who has died has consumed Water.',
                'The atomic weight of H2O is 18',
                'Di-Hydrogen Monoxide will kill you',
                'Nearly 97% of the world is satlty or undrinkable.',
                '2% of water is ice',
                'Nearly one-half of the water used by Americans is used for thermoelectric power generation',
                'Water can dissolve more substances than any other liquid including sulfuric acid.',
                'About 6,800 gallons of water is required to grow a day’s food for a family of four.',
                'Unsafe water kills 200 children every hour.'
            ],
            SKILL_NAME: 'Water Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a water fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Everyone who has died has consumed Water.',
                'The atomic weight of H2O is 18',
                'Di-Hydrogen Monoxide will kill you',
                'Nearly 97% of the world is satlty or undrinkable.',
                '2% of water is ice',
                'Nearly one-half of the water used by Americans is used for thermoelectric power generation',
                'Water can dissolve more substances than any other liquid including sulfuric acid.',
                'About 6,800 gallons of water is required to grow a day’s food for a family of four.',
                'Unsafe water kills 200 children every hour.'
            ],
            SKILL_NAME: 'Water Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'Everyone who has died has consumed Water.',
                'The atomic weight of H2O is 18',
                'Di-Hydrogen Monoxide will kill you',
                'Nearly 97% of the world is satlty or undrinkable.',
                '2% of water is ice',
                'Nearly one-half of the water used by Americans is used for thermoelectric power generation',
                'Water can dissolve more substances than any other liquid including sulfuric acid.',
                'About 6,800 gallons of water is required to grow a day’s food for a family of four.',
                'Unsafe water kills 200 children every hour.'
            ],
            SKILL_NAME: 'British Space Facts',
        },
    },
    'de': {
        translation: {
            FACTS: [
'Gutentag, no comprendo '
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
