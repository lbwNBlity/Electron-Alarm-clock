const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: 'preload.js',
      },
    });
    const wc= win.webContents;
    // wc.openDevTools();
    win.loadURL('http://localhost:3000/');
    
    return win;
}

app.whenReady().then(() => {
    const win= createWindow()
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
      });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })