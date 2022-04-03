// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer, app } = require('electron')
const momentz = require('moment-timezone')
const moment = require('moment')
const adhan = require('adhan')
const settings = require('../common/common.js')
const language = require('../common/language.js')
const shell = require('electron').shell

contextBridge.exposeInMainWorld( 'api', {
    send: ( channel, data ) => ipcRenderer.invoke( channel, data ),
    handle: ( channel, func) => ipcRenderer.on( channel, (event, ...args) => func(...args) ),
    coordinates: (lat, lon) => adhan.Coordinates(lat, lon),
    getClock: (format) => moment(new Date()).format(format),
    getTimes: (times,timezone, format) => moment(momentz(times).tz(timezone)).format(format),
    getFromStore: (key, def) => ipcRenderer.invoke('getStoreValue', key, def),
    setToStore: (key, value) => ipcRenderer.invoke('setStoreValue', key , value),
    timeZoneGuess: () => momentz.tz.guess(),
    timeZoneList: () => momentz.tz.names(),
    setTheme: (darkmode, css) => settings.toggleDarkMode(darkmode, css),
    getLanguage: (lang, value) => language.loadTrans(lang, value),
    getSunnah: (prayerTimes) => new adhan.SunnahTimes(prayerTimes),
    getPrayerTimes: (coordinates, date, parameters) => new adhan.PrayerTimes(coordinates, date, parameters),
    openExternal: (link) => shell.openExternal(link)
})

