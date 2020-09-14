const express = require("express")
const app = express()
const path = require('path')
const router = express.Router()
const serverless = require("serverless-http")
const bodyParser = require('body-parser')
const fs = require('fs')
const ejs = require('ejs')
const os = require('os')

app.use('src/dist', express.static(__dirname + 'src/dist'))


var abpath = JSON.stringify(fs.readdirSync('./src'))
router.get('/', function (req, res) {
  
  
var pagename = 'Homepage'
var arrayofnames = []
var arrayofobj = []
var arrayofvarnm = []
var arrofarr = []
var arrofobj = []
var arrayofvarobj = []

sendData(pagename,arrayofnames,arrayofobj,arrayofvarnm ,arrofarr,arrofobj,arrayofvarobj )

  res.send(abpath)
})








//var nameofpage = 'Homepage'
//var array_nameofarrays = ['firstarray','secondarray']
///var array_nameofobjects = ['firstobject','secondobject']
//var varnamearray = ['Sum','Total']

//var arrayofarrays = [['first_element1','first_element2','first_element3'],['second_element1','second_element2','second_element3']]
//var arrayofobjects = [{name:"daniel",class:"400l"},{name:"eguono",class:"500l"}]
//var varresultsarray = ['1','4']



//if you want to put in an array then you will need to give the array name string inside an array of names => ['foo'] , then put the array you want to store
//in array of arrays res


 




//////////////////////
////////////////////////

app.use('/.netlify/functions/api',router)

module.exports.handler = serverless(app)




















































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function sendData(nameofpage,array_nameofarrays,array_nameofobjects,arrayofnamevariables,arrayofarrays,arrayofobjects,arrayofarrayvariables){
  var textofarrays = ''
  var textofobj = ''
  var textfunction = ''
for(var i=0;i<array_nameofarrays.length;i++){
textofarrays += 'var '+array_nameofarrays[i]+' = '+ '"'+arrayofarrays[i].join()+'";'
textofarrays += array_nameofarrays[i]+' = '+array_nameofarrays[i]+'.split(",");'
textofarrays += 'console.log('+array_nameofarrays[i]+');'

}



for(var i=0;i<array_nameofobjects.length;i++){
textofobj+= 'var '+array_nameofobjects[i]+' = JSON.stringify('+ JSON.stringify(arrayofobjects[i])+');'
textofobj+= array_nameofobjects[i]+' =  JSON.parse('+array_nameofobjects[i]+');'
textofobj += 'console.log('+array_nameofobjects[i]+');'
}

for(var i=0;i<arrayofnamevariables.length;i++){
  textfunction += 'var '+arrayofnamevariables[i]+' = '+ '"'+arrayofarrayvariables[i]+'";'
  textfunction += 'console.log('+arrayofnamevariables[i]+');'
  
  }







var fullstatement = textofarrays + textofobj + textfunction



var HtmlString = await  fs.readFileSync((path.resolve('src/FormerHtml/'+nameofpage+'.html')),'utf-8')

var valueHtml = await  HtmlString.replace('<script thevaluesthatchange></script>',' <script >'+fullstatement+'</script>')

var writinghtml = await fs.writeFileSync((path.resolve('src/files/'+nameofpage+'.html')),valueHtml)

}
