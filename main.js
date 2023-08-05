// main.js
// const { app, BrowserWindow } = require('electron');
// const path = require('path');
// const isDev = require('electron-is-dev');

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   if (isDev) {
//     win.loadURL('http://localhost:3000');
//   } else {
//     win.loadFile(path.join(__dirname, '../build/index.html'));
//   }
// }

// app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 1350, height: 800});


    mainWindow.loadURL('http://localhost:3000');


    mainWindow.webContents.openDevTools();


    mainWindow.on('closed', function () {

        mainWindow = null
    })
}


app.on('ready', createWindow);


app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

