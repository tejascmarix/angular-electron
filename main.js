const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200, 
    height: 700,
    frame:false,
    transparent: true,
    icon: `file://${__dirname}/dist/angular-electron/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

  
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  //win.setMenu(null);
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})