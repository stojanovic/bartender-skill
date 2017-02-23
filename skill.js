'use strict'

const alexaSkillKit = require('alexa-skill-kit')
const flow = require('./lib/flow')

exports.handler = function(event, context) {
  alexaSkillKit(event, context, parsedMessage => {
    console.log(JSON.stringify(parsedMessage))
    return flow(parsedMessage)
  })
}
