
const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow () {
  win = new BrowserWindow({
	icon: path.join(__dirname, "/styles/logo.ico"),
    width: 800,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  win.removeMenu();
  win.loadFile(path.join(__dirname, '/index.html'));
};

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
	  app.quit()
  }
});