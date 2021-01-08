import { Action } from 'redux'

export type Actions = Action & {
  payload?: any
}