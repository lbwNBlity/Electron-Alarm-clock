const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path')

const createToolBar = ()=>{
  let toolbarWin;
  return ()=>{
    if(!toolbarWin || (toolbarWin&&toolbarWin.isDestroyed())){
      toolbarWin = new BrowserWindow({
        width: 100,
        height: 100,
        type: 'toolbar',
        alwaysOnTop: true,
        // transparent: true,  //设置透明
        frame: false,
      })
    }
    return toolbarWin;
  };
};

const createWindow = () => {
    const getToolBar = createToolBar();
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
    win.on('minimize', ()=>{
      const toolbarWin = getToolBar()
      toolbarWin.loadURL('http://localhost:3000/toolbar.html/');
    });
    win.on('restore', ()=>{
      getToolBar().destroy();
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