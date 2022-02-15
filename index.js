var express = require('express');
var app = require('express')();
app.get('/',(r,s)=>s.sendFile('./index.html'))
app.listen(process.env.PORT);
