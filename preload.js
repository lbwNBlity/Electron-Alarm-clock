const {ipcRenderer, contextBridge} =require('electron');
contextBridge.exposeInMainWorld('myApi', {
    ipcRenderer,
});