// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron')
const momentz = require('moment-timezone')
const moment = require('moment')
const adhan = require('adhan')

contextBridge.exposeInMainWorld( 'api', {
    send: ( channel, data ) => ipcRenderer.invoke( channel, data ),
    handle: ( channel, func) => ipcRenderer.on( channel, (event, ...args) => func(...args) ),
    coordinates: (lat, lon) => adhan.Coordinates(lat, lon),
    getClock: (format) => moment(new Date()).format(format),
    getTimes: (times,timezone, format) => moment(momentz(times).tz(timezone)).format(format),
    getFromStore: (key) => ipcRenderer.invoke('getStoreValue', key),
    setToStore: (key, value) => ipcRenderer.invoke('setStoreValue', key , value),
    timeZoneGuess: () => momentz.tz.guess(),
    timeZoneList: () => momentz.tz.names(),
} )

