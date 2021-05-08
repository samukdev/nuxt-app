export const state = () => ({
  token: null,
  userId: null,
  tokenExpiration: null,
})

export const getters = {}

export const mutations = {
  setUser(state, payload) {
    const { token, userId, tokenExpiration } = payload

    state.token = token
    state.userId = userId
    state.tokenExpiration = tokenExpiration
  },
}

export const actions = {
  async login(context, payload) {
    const { email, password } = payload
    const returnSecureToken = true

    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJj8zob_1whsFxdLBzcHzcxnLcJrwF5b4',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken,
        }),
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)

      const error = new Error(
        responseData.error.message ||
          'Something went wrong, please try again later...'
      )

      throw error
    }

    console.log(responseData)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },
  async signUp(context, payload) {
    const { email, password } = payload
    const returnSecureToken = true

    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJj8zob_1whsFxdLBzcHzcxnLcJrwF5b4',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken,
        }),
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)

      const error = new Error(
        responseData.error.message ||
          'Something went wrong, please try again later...'
      )

      throw error
    }

    console.log(responseData)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },
}
