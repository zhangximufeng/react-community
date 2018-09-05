import AppStateClass from './app-state'

export const AppState = AppStateClass

export const createStoreMap = () => ({
  appState: new AppState(),
})

export default {
  AppState,
}
