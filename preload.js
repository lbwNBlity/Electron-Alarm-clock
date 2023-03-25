const {ipcRenderer, contextBridge} =require('electron');
console.log(5, 458);
contextBridge.exposeInMainWorld('myApi', {
    ipcRenderer,
});