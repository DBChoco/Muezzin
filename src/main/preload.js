// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer} = require('electron')
const settings = require('../common/common.js')
const language = require('../common/language.js');
const shell = require('electron').shell;

contextBridge.exposeInMainWorld( 'api', {
    send: ( channel, data ) => ipcRenderer.invoke( channel, data ),
    handle: ( channel, func) => ipcRenderer.on( channel, (event, ...args) => func(...args) ),
    getFromStore: (key, def) => ipcRenderer.invoke('getStoreValue', key, def),
    setToStore: (key, value) => ipcRenderer.invoke('setStoreValue', key , value),
    setTheme: (darkmode, css) => settings.toggleDarkMode(darkmode, css),
    getLanguage: (lang, value) => language.loadTrans(lang, value),
    openExternal: (link) => shell.openExternal(link)
})