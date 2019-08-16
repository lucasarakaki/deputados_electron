const { app, BrowserWindow } = require('electron')

let window 

function createWindow() {
  window = new BrowserWindow({
    width:600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    fullscreen: true
  })


  window.loadFile('index.html')

  window.on('closed', function () {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (window === null) createWindow()
})

