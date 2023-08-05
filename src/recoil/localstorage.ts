// import { Catalog } from "../types"

export enum Options {
  SPACE = 'espace', DEBIT = 'debit',
  CATALOG = 'catalogue', MATERIALS = 'materiaux',
  HANDLE = 'poignees', PREFS = 'prefs', VALIDATE = 'valider'
}

export enum DATA {
  MODELS = 'models',
  FINITIONS = 'finitions',
  MODULES = 'modules',
  PRESETS = 'presets_items',
  CHANT = 'chant',
  PANELS = 'panels'
}

const listeners = {} as { [key: string]: ((value: any) => void)[] }

const unlisten = (key: string, handler: (value: any) => void) => {
  if (handler) listeners[key].splice(listeners[key].indexOf(handler), 1)
  else delete listeners[key]
}

const listen = (key: string, handler: (value: any) => void) => {
  if (!listeners[key]) listeners[key] = []
  listeners[key].push(handler)
}

const LocalData = new Proxy(window.localStorage as any, {
  get: function (target: Storage, prop: string) {
    if (prop === 'listen') return listen
    else if (prop === 'unlisten') return unlisten
    return target[prop] && target[prop] !== 'undefined' && JSON.parse(target[prop])
  },
  set: function (target: Storage, prop: string, value: any) {
    (listeners[prop] || []).forEach(handler => handler(value))
    return Reflect.set(target, prop, JSON.stringify(value));
  }
})

export default LocalData as {
  [key: string]: any
  listen: typeof listen,
  unlisten: typeof unlisten,
//   models: Catalog,
//   finitions: Catalog
}