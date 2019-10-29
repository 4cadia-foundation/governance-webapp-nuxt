import messageData from '../utils/messages.json'

// initial state
export const state = () => ({
  success: messageData.success,
  errors: messageData.errors,
  exceptions: messageData.exceptions
})

// getters
export const getters = {
  getErrors: (state) => state.errors,
  getErrorByType: (state, getters) => (type) => {
    return state.errors.find((error) => error.type === type).text
  },
  errorMatchHttp: (state, getters) => (httpCode) => {
    return state.errors.find((error) => error.httpCode === httpCode).text
  },
  getExceptionByType: (state, getters) => (type) => {
    return state.exceptions.find((exception) => exception.type === type).text
  }
}

// actions
export const actions = {}

// mutations
export const mutations = {}
