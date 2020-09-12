


document.getElementById('Submitbutton').onclick = function(){

    var inputs  = document.getElementsByClassName('form-control')
    var filesequence = []
    for(var  i = 0; i<inputs.length;i++){
        filesequence.push(inputs[i].value)
    }
   var section =  document.getElementById('drop').innerText
    var finalobject = {name:filesequence[0], bpm:filesequence[1], year:filesequence[2], duration:filesequence[3], price:filesequence[4],section:section}
    
    console.log(finalobject)
}


var sectionbutton =  document.getElementsByClassName('dropdown-item')





for(var i = 0; i<sectionbutton.length;i++){
    sectionbutton[i].onclick = function(){
        document.getElementById('drop').value = this.innerText
    }

}

var twobutttons = document.getElementsByClassName('selectitem')
var filehtml = ''
var audiohtml = ''
for(var i = 0; i<twobutttons.length;i++){
    twobutttons[i].onclick = function(){
        if(this.innerText == 'Choose Image'){
            for(var i = 0; i<imagenamecommarray.length;i++){
                filehtml += ' <div class="column " style=""><img src="../dist/Homepage_files/'+imagenamecommarray[i]+'" class="w3-round" alt="Norway" style="width:100px;height: 100px;object-fit: cover;"><div class = " w3-panel "><p class="text-dark" style="text-overflow: ellipsis; width: 100px;text-align: middle;overflow: hidden">'+imagenamecommarray[i]+'</p></div></div>'
                }

                document.getElementById('imagepopulation').innerHTML = filehtml
                filehtml=''
        }else{
            for(var i = 0; i<mp3commaarray.length;i++){
                audiohtml += ' <div class="column " style=""><img src="../dist/Homepage_files/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg" class="w3-round" alt="Norway" style="width:100px;height: 100px;object-fit: cover;"><div class = " w3-panel "><p class="text-dark" style="text-overflow: ellipsis; width: 100px;text-align: middle;overflow: hidden">'+mp3commaarray[i]+'</p></div></div>'
                }
                document.getElementById('imagepopulation').innerHTML = audiohtml
                audiohtml = ''
        }
    }
}
















console.log(finalimagepath)


