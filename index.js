var express = require('express');
var app = require('express')();
app.get('/',(r,s)=>s.render('./index.html'))
app.listen(process.env.PORT);
