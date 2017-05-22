'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('events', data)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.indexOfSurveys()
    .then(ui.indexOfSurveysSuccess)
    .catch(ui.indexOfSurveysFailure)
}

const onShow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.show(data.survey.id)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  const surveyId = $(this).attr('surveyId')
  api.destroy(surveyId)
    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const surveyId = $(this).attr('surveyId')
  const data = getFormFields(event.target)
  api.update(surveyId, data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onRevealAddQuestion = function (event) {
  console.log('events')
  $('form#create-survey').show()
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#show-surveys').on('click', onIndex)
  $('.show').on('submit', onShow)
  $('#content').on('click', '.delete-survey-button', onDestroy)
  $('#content').on('submit', '.update-survey-by-id-form', onUpdate)
  // $('.destroy').on('submit', onDestroy)
  // $('.update').on('submit', onUpdate)
  $('#create-survey-nav').on('click', onRevealAddQuestion)
}

module.exports = {
  addHandlers
}
