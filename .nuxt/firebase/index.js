import createApp from './app.js'

import firestoreService from './service.firestore.js'

const appConfig = {"apiKey":"AIzaSyCKI2_7ahQXN38HN6Fa_wuczofVYslk2-U","authDomain":"blog-2451e.firebaseapp.com","projectId":"blog-2451e","storageBucket":"blog-2451e.appspot.com","messagingSenderId":"613400125848","appId":"1:613400125848:web:e11e3e4cd0b653ef960bed","measurementId":"G-PKCF3P8G5B"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}