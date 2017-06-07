'use strict'
const store = require('../store.js')
// const api = require('./api.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

// const resetFormFields = () => {
//   document.getElementById('sign-up').value = ""
//   document.getElementById('sign-in').value = ""
//   document.getElementById('sign-out').value = ""
//   document.getElementById('change-password').value = ""
//   document.getElementById('create-survey').value = ""
//   document.getElementById('create-question').value = ""
// }

const resetFormFields = () => {
  $('form#sign-up').trigger('reset')
  $('form#sign-in').trigger('reset')
  $('form#sign-out').trigger('reset')
  $('form#change-password').trigger('reset')
  $('form#create-survey').trigger('reset')
  $('form#create-question').trigger('reset')
}

const signUpSuccess = (data) => {
  $('.alert').text('You Have Successfully Signed Up')
  setTimeout(function () { $('.alert').text('') }, 4000)

  resetFormFields()
}

const signUpFailure = () => {
  $('.alert').text('You Have Failed to Sign Up')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
}

const signInSuccess = (data) => {
  store.user = data.user

  $('.alert').text('You have successfully signed in')
  $('#sign-in-nav').hide()
  $('#sign-up-nav').hide()
  $('form#sign-up').hide()
  $('form#sign-in').hide()
  $('a.dropdown-toggle').css('visibility', 'visible')
  $('#indexOfSurveys').hide()
  $('#indexOfUserSurveys').show()
  $('#create-survey-nav').show()
  $('#handlebar-target').html('')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
//   $('button#nav-add-instrument').show()
//   $('button#nav-sign-up').hide()
//   $('button#nav-sign-in').hide()
//   $('form#sign-in').hide()
//   $('button#sign-out').show()
//   $('button#view-instruments').show()
//   $('button#nav-change-password').show()
//   $('div.error-handling').text('')
}

const signInFailure = (data) => {
  $('.alert').text('You Have Failed to Sign In')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
}

const signOutSuccess = (data) => {
  $('#sign-in-nav').show()
  $('#sign-up-nav').show()
  $('a.dropdown-toggle').css('visibility', 'invisible')
  $('#indexOfSurveys').show()
  $('#indexOfUserSurveys').hide()
  $('#create-survey-nav').hide()
  $('form').hide()
  $('#handlebar-target').html('')
  $('div#content').text('')
  $('.alert').text('You have signed out')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
}

const signOutFailure = (data) => {
  $('.alert').text('You Have Failed to Sign Out')
  setTimeout(function () { $('.alert').text('') }, 4000)
  document.querySelector('.core').style.visibility = 'hidden'
  resetFormFields()
}

const changePasswordSuccess = (data) => {
  $('#handlebar-target').text('Password Changed')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
}

const changePasswordFailure = () => {
  $('#handlebar-target').text('You Must Give us the Correct Password If You Want to Change It')
  setTimeout(function () { $('.alert').text('') }, 4000)
  resetFormFields()
}

module.exports = {
  resetFormFields,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
