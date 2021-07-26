/*
30.6.2021. Sre.
Kod za realizaciju Electron.js cross-platform desktop aplikacije...
*/

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

//SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;

//Čeka trenutak kada je aplikacija spremna

app.on('ready', function(){
//Kreiranje novog prozora

mainWindow = new BrowserWindow({width: 800, height: 900, icon: __dirname + 'ico.png'});
//Učitavanje html fajla u prozoru
mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 't2g.htm'),
    protocol: 'file:', 
    slashes: true
})); // file://dirname/dct.html
});