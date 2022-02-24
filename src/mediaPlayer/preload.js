// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld( 'api', {
    send: ( channel, data ) => ipcRenderer.invoke( channel, data ),
    handle: ( channel, func) => ipcRenderer.on( channel, (event, ...args) => func(...args) ),
    getFromStore: (key) => ipcRenderer.invoke('getStoreValue', key),
})