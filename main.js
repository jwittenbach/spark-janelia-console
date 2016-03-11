const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWinow = null;

app.on('window-all-closed', function() {
   if (process.platform != 'darwin') {
      app.quit();
   }
});

app.on('ready', function() {
   mainWindow = new BrowserWindow({width: 800, height: 600});
   mainWindow.loadURL('file://' + __dirname + '/login.html');
   mainWindow.on('close', function() {
      mainWindow = null;
   });
});
