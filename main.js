const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });
    const wc= win.webContents;
    wc.openDevTools();
    win.loadURL('http://localhost:3000/');
    ipcMain.on('showDialog', (event, message)=>{
      dialog.showMessageBox({
        message,
      });
    });
    return win;
}

app.whenReady().then(() => {
    const win= createWindow();
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
      });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })