//iam trying to activate the modal
var demoitems = document.getElementsByClassName("w3-col l3 s6")
var pics = document.getElementsByClassName('w3-circle')
for(var i = 0; i<demoitems.length;i++){
    demoitems[i].onclick = function(){
        document.getElementById('id01').style.display='block'

var index = this.getAttribute('data-title')

        var picturemodal = pics[index].src
var year = this.getAttribute('data-year')
var bpm = this.getAttribute('data-bpm')
var duration = this.getAttribute('data-duration')

var name = this.getAttribute('data-name')
        document.getElementById("populatemodal").innerHTML = '<div class="w3-padding-16"><img id="pictureElement" src="'+picturemodal+'" style="width:25%;"><br></div> <button id = "previewmodal" style="margin-top: 10px;" class="w3-button w3-blue">Preview</button><br><audio   id="musicmodal" controls><source src="../dist/Musicmp3/'+name+'.mp3" type="audio/mpeg"></audio><div  class="w3-panel w3-leftbar w3-sand  w3-serif"><table class="w3-table-all"><tr><th>Name</th><td id="songname">'+name+'</td></tr><tr><th>Bpm</th><td>'+bpm+'</td></tr><tr><th>Year</th><td>'+year+'</td></tr><tr><th>Duration</th><td>'+duration+'</td></tr></table></div>'

    }
}

