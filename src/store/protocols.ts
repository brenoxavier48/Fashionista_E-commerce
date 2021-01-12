import { Action } from 'redux'

export type Actions<payloadType> = Action & {
  payload: payloadType
}