
var shoppingarray = []
var wishlistarray = []

//iam trying to activate the modal
function clickintitalization() {
    var demoitems = document.getElementsByClassName("w3-col l3 s6")
    var demotitles = document.getElementsByClassName("title")
    var demoimages = document.getElementsByClassName("imagesclass")

    for (var i = 0; i < demoitems.length; i++) {
        demoitems[i].onclick = function () {
            document.getElementById('id02').style.display = 'block'
            //we are getting the index of every clicked element
            var indexclicked = Number(this.getAttribute('data-title'))
            //using the data index from the list, we are able to get the text value of the elemem
            var namemodal = demotitles[indexclicked].childNodes[0].data
            //and the images
            var picturemodal = demoimages[indexclicked].src
            var year = this.getAttribute('data-year')
            var bpm = this.getAttribute('data-bpm')
            var duration = this.getAttribute('data-duration')
            var price = this.getAttribute('data-price')
            var id = this.getAttribute('data-id')

            document.getElementById("updatedclick").innerHTML = '<div class="w3-padding-16"><img id="pictureElement" src="' + picturemodal + '" style="width:25%;"><br></div><h1>N<span id="pricetag">' + price + '</span></h1><button id = "previewmodal" style="margin-top: 10px;" class="w3-button w3-blue">Preview</button><br><audio   id="musicmodal" controls><source src="../dist/Musicmp3/' + namemodal + '.mp3" type="audio/mpeg"></audio><div  class="w3-panel w3-leftbar w3-sand  w3-serif"><table class="w3-table-all"><tr><th>Name</th><td id="songname">' + namemodal + '</td></tr><tr><th>Bpm</th><td>' + bpm + '</td></tr><tr><th>Year</th><td>' + year + '</td></tr><tr><th>Duration</th><td>' + duration + '</td></tr></table></div>'
            var element = extract(shoppingarray)
            var elementwishlist = extract(wishlistarray)
            var joined = element.toString()
            var joinedwishlist = elementwishlist.toString()



            if (joined.indexOf(namemodal) > -1) {
                document.getElementById('footer').innerHTML = '<p><button id="addtocartel" class="w3-btn w3-block w3-green '+hidelement+'">Added To Cart</button></p>'
            } else {
                document.getElementById('footer').innerHTML = '<p><button  id="addtocartel" class="w3-btn w3-block w3-blue '+hidelement+'">Add to Cart</button></p>'
            }


            if (joinedwishlist.indexOf(namemodal) > -1) {
                document.getElementById('footer2').innerHTML = '<p><button id="addtowishlist" class="w3-btn w3-block w3-brown '+hidelement+'">Added To Wishlist</button></p>'
            } else {
                document.getElementById('footer2').innerHTML = '<p><button id="addtowishlist" class="w3-btn w3-block w3-yellow '+hidelement+'">Add To Wishlist</button></p>'
            }



            //adding item to cart
            document.getElementById("addtocartel").onclick = function () {

                if (this.innerText != 'Added To Cart') {
                    var itemtosell = {
                        name: document.getElementById("songname").innerText,
                        image: document.getElementById("pictureElement").src,
                        price: document.getElementById('pricetag').innerText,
                        id: id
                    }

                    this.className = this.className.replace('w3-blue', 'w3-green')
                    this.innerText = 'Added To Cart'
                    shoppingarray.push(itemtosell)
                    document.getElementById("shoppingnumbers").innerText = shoppingarray.length
                } else {
                    alert('Item Already included in Cart')
                }
            }



            document.getElementById("addtowishlist").onclick = function () {

                if (this.innerText != 'Added To Wishlist') {
                    var itemtosell = {
                        name: document.getElementById("songname").innerText,
                        image: document.getElementById("pictureElement").src,
                        price: document.getElementById("pricetag").innerText
                    }

                    this.className = this.className.replace('w3-yellow', 'w3-brown')
                    this.innerText = 'Added To Wishlist'
                    wishlistarray.push(itemtosell)
                    document.getElementById("wishnumbers").innerText = wishlistarray.length
                } else {
                    alert('Item Already included in Wishlist')
                }
            }



            try {

                document.getElementById('previewmodal').onclick = function () {


                }
            } catch (err) {

            }
            document.getElementById("closemodal").onclick = function () {
                document.getElementById('id02').style.display = 'none'
                document.getElementById('musicmodal').pause()
            }


        }
    }

}



/////////////////////////////////
 document.getElementById('user_name').innerText =   parsedcurrentuser.name

 wishlistarray = parsedcurrentuser.wishlist
 console.log(parsedcurrentuser.wishlist)
 document.getElementById("wishnumbers").innerText = wishlistarray.length
 if(parsedcurrentuser.name=='Visitor'){
    document.getElementById('saveshoppinglist').style.display='none'
    document.getElementById('shoppingcart').style.display='none'
    document.getElementById('wishlist').style.display='none'
    var hidelement = 'hidelement'
}else{
    hidelement=''
}







/////////////////////////////////


//this function is used for extracting the 'name' values from an object
function extract(shoppingarray) {
    var emptyarray = []
    for (var i = 0; i < shoppingarray.length; i++) {
        emptyarray.push(shoppingarray[i].name)
    }
    return emptyarray
}

//a pagination solution


var HipHop = [{ name: "Super Bass", image: "jeans2", bpm: "128kbps", year: '2020', duration: '2:45', price: '300', id: 'a' }]
var RandB = [{ name: "Proud Vibes", image: "jeans1", bpm: "320kbps", year: '2020', duration: '3:30', price: '400', id: 'b' }]
var Electronic = [{ name: "Sharp Sound", image: "jeans3", bpm: "128kbps", year: '2020', duration: '4:45', price: '200', id: 'c' }]
var Afro = [{ name: "Clarity", image: "jeans4", bpm: "198kbps", year: '2020', duration: '2:30', price: '400', id: 'd' }]

var Trap = [{ name: "Take You Down", image: "jeans5", bpm: "198kbps", year: '2020', duration: '2:38', price: '500', id: 'e' }]



var totalelements = [{ name: "Proud Vibes", image: "jeans1", bpm: "320kbps", year: '2020', duration: '3:30', price: '400', id: 'b' }, { name: "Super Bass", image: "jeans2", bpm: "128kbps", year: '2020', duration: '2:45', price: '300', id: 'a' }, { name: "Sharp Sound", image: "jeans3", bpm: "128kbps", year: '2020', duration: '4:45', price: '200', id: 'c' }, { name: "Clarity", image: "jeans4", bpm: "198kbps", year: '2020', duration: '2:30', price: '400', id: 'd' },{ name: "Take You Down", image: "jeans5", bpm: "198kbps", year: '2020', duration: '2:38', price: '500', id: 'e' }]

var HipHopnum = paginationconversion(HipHop, 4)
var RandBnum = paginationconversion(RandB, 4)
var Electronicnum = paginationconversion(Electronic, 4)
var Afronum = paginationconversion(Afro, 4)
var Trapnum = paginationconversion(Trap, 4)


function paginationconversion(arrayelements, number) {

    var numbers2 = Number(number)

    var element = []
    var divisions = Math.ceil(arrayelements.length / 5)



    for (var i = 0; i < divisions; i++) {
        element[i] = arrayelements.slice(0 + numbers2 * i, numbers2 + numbers2 * i);


    }

    return element
}


//this is a function creatted for selecting pagination
function paginationselect(element) {
    var index
    var pagination = document.getElementsByClassName("w3-bar-item no w3-button  w3-hover-black")

    for (var i = 0; i < pagination.length; i++) {
        pagination[i].onclick = function () {


            index = Number(this.innerText)

            try {
                for (var j = 0; j < pagination.length; j++) {

                    if (index == j) {

                        pagination[j].className = pagination[j].className += ' w3-black'
                    }
                    else { pagination[j].className = pagination[j].className.replace(/ w3-black/g, ' ') }

                }
            } catch (err) {
                console.log(err)
            }
            //this is for loading content with pagination
            var loadingpage = element[Number(this.innerText) - 1]


            var figures = ''
            for (var i = 0; i < loadingpage.length; i++) {
                figures += '<div data-bpm = "' + loadingpage[i].bpm + '"  data-price = "' + loadingpage[i].price + '" data-year = "' + loadingpage[i].year + '"   data-duration = "' + loadingpage[i].duration + '"  data-id = "' + loadingpage[i].id + '"  data-title = ' + i + ' class="w3-col l3 s6 w3-animate-opacity"><div class="w3-container"><div class="w3-display-container"><span class="w3-tag w3-display-topleft">Free</span><img class = "imagesclass" src="../dist/Homepage_files/' + loadingpage[i].image + '.jpg" style="width:200px;height:250px;object-fit: cover;"><p class = "title">' + loadingpage[i].name + '<br><b>N' + loadingpage[i].price + '</b></p></div></div></div>'

            }
            document.getElementById('imagegallery').innerHTML = figures
            clickintitalization()
        }


    }
}






//this is for clicking the section buttons
var majorbutton = document.getElementsByClassName('w3-button w3-white major')

for (var i = 0; i < majorbutton.length; i++) {

    majorbutton[i].onclick = function () {
        var section = this.getAttribute('data-title')
        if (section == 'firstbutton') {
            populatepagination(HipHop)
            paginationselect(HipHopnum)

            document.getElementById('firstpage1').click()
            clickintitalization()
            majorbutton[0].className = majorbutton[0].className += ' w3-black'
        } else {

            majorbutton[0].className = majorbutton[0].className.replace(/ w3-black/g, ' ')
        }


        if (section == 'secondbutton') {
            populatepagination(RandB)
            paginationselect(RandBnum)

            document.getElementById('firstpage1').click()
            clickintitalization()
            majorbutton[1].className = majorbutton[1].className += ' w3-black'
        } else {

            majorbutton[1].className = majorbutton[1].className.replace(/ w3-black/g, ' ')
        }


        if (section == 'thirdbutton') {
            populatepagination(Electronic)
            paginationselect(Electronicnum)

            document.getElementById('firstpage1').click()
            clickintitalization()
            majorbutton[2].className = majorbutton[2].className += ' w3-black'
        } else {

            majorbutton[2].className = majorbutton[2].className.replace(/ w3-black/g, ' ')

        }



        if (section == 'fourthbutton') {
            populatepagination(Afro)
            paginationselect(Afronum)

            document.getElementById('firstpage1').click()
            clickintitalization()
            majorbutton[3].className = majorbutton[3].className += ' w3-black'
        } else {

            majorbutton[3].className = majorbutton[3].className.replace(/ w3-black/g, ' ')

        }



        if (section == 'fifthbutton') {
            populatepagination(Trap)
            paginationselect(Trapnum)
            document.getElementById('firstpage1').click()
            clickintitalization()
            majorbutton[4].className = majorbutton[4].className += ' w3-black'
        } else {

            majorbutton[4].className = majorbutton[4].className.replace(/ w3-black/g, ' ')

        }

        var sectionindex = Number(this.getAttribute('data-index'))




    }

}


//click the firstbutton


//this function is used for populating the numbers in pagination
// the id firstpage redirects all users to use the first page when they login
function populatepagination(arrayelements) {
    var divisions = Math.ceil(arrayelements.length / 5)
    var pages = '<a id="firstpage1" href="./MusicPage#" class="w3-bar-item no w3-button  w3-hover-black ">1</a>'

    for (var i = 1; i < divisions; i++) {

        pages += ' <a  href="./MusicPage#" class="w3-bar-item no w3-button w3-hover-black">' + (i + 1) + '</a>'

    }
    document.getElementById('paginationcontent').innerHTML = pages

}




//shopping items function

// number of lists = "shoppingnumbers"


document.getElementById("shoppingnumbers").innerText = shoppingarray.length



//opening the shopping cart
document.getElementById("shoppingcart").onclick = function () {

    document.getElementById('id03').style.display = 'block'
    var shoppinghtml = ''
    if (shoppingarray.length > 0) {
        for (var i = 0; i < shoppingarray.length; i++) {
            shoppinghtml += '<li class="w3-bar w3-card-2 mb-2"><span  data-item = ' + i + '  class="bg-light closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="' + shoppingarray[i].image + '" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><p class="w3-hide-small" >' + shoppingarray[i].name + '</p><p class="w3-hide-large w3-hide-medium" style="text-overflow: ellipsis; width: 70px;overflow: hidden">' + shoppingarray[i].name + '</p><span>N' + shoppingarray[i].price + '</span></div></li>'






        }


    } else {
        shoppinghtml += '<h>There is Currently No item</h>'

    }
    var sum = addallprices(shoppingarray, totalelements)
    document.getElementById('paymentsum').innerText = ' N' + sum



    document.getElementById('shoppingtable').innerHTML = shoppinghtml




    //the x button in the shopping cart items
    var closing = document.getElementsByClassName('bg-light closingx w3-bar-item ')
    var shoppingitem = document.getElementsByClassName('w3-bar w3-card-2 mb-2')

    for (var i = 0; i < closing.length; i++) {

        closing[i].onclick = function () {
            var index = Number(this.getAttribute('data-item'))
            shoppingitem[index].style.display = 'none'

            shoppingarray = deleteitem(index, shoppingarray)
            populateshoppinglist()



            document.getElementById("shoppingnumbers").innerText = shoppingarray.length
        }
    }

}


//this function was created so that when an x was pressed to cancel an item , we could popultae the list with the right amount of items
function populateshoppinglist() {
    var shoppinghtml = ''
    for (var i = 0; i < shoppingarray.length; i++) {
        shoppinghtml += '<li class="w3-bar w3-card-2 mb-2"><span  data-item = ' + i + '  class="bg-light closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="' + shoppingarray[i].image + '" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><p class="w3-hide-small" >' + shoppingarray[i].name + '</p><p class="w3-hide-large w3-hide-medium" style="text-overflow: ellipsis; width: 70px;overflow: hidden">' + shoppingarray[i].name + '</p><span>N' + shoppingarray[i].price + '</span></div></li>'

    }
    document.getElementById('shoppingtable').innerHTML = shoppinghtml

    var sum = addallprices(shoppingarray, totalelements)
    document.getElementById('paymentsum').innerText = ' N' + sum
    //the x button in the shopping cart items
    var closing = document.getElementsByClassName('bg-light closingx w3-bar-item ')
    var shoppingitem = document.getElementsByClassName('w3-bar w3-card-2 mb-2')

    for (var i = 0; i < closing.length; i++) {

        closing[i].onclick = function () {
            var index = Number(this.getAttribute('data-item'))
            shoppingitem[index].style.display = 'none'

            shoppingarray = deleteitem(index, shoppingarray)
            populateshoppinglist()


            document.getElementById("shoppingnumbers").innerText = shoppingarray.length
        }
    }



}

function deleteitem(index, shoppingarray) {
    var newarray = []
    for (var j = 0; j < shoppingarray.length; j++) {
        if (j != index) {
            newarray.push(shoppingarray[j])

        }

    }
    return newarray
}


var signupbuttn =  document.getElementsByClassName('btn btn-primary dropdown-toggle ')
for(var i = 0; i<signupbuttn.length;i++){
    signupbuttn[i].onclick = function(){
        document.getElementById('id04').style.display = 'block'

        var loginpagehtml = '<form action="http://localhost:3000/MusicPage" method="POST"><label><b>Username</b></label><input class="form-control" type="text" placeholder="Enter Username" name="usrname" required><label><b>Password</b></label><input class="form-control" type="password" placeholder="Enter Password" name="psw" required><button id="submitloginform" class="w3-button w3-block btn w3-green w3-section w3-padding" type="submit">Login</button><a id="signupgenerator" class="text-white w3-button w3-block btn btn-primary  w3-padding" >Sign UP</a></form>'
    
        document.getElementById('signupsection').innerHTML = loginpagehtml
        document.getElementById("signupgenerator").onclick = function () {
            var signuppagehtml = '<form action="http://localhost:3000/MusicPage"  method="POST" ><label><b>Full Name</b></label><input class="form-control" type="text" placeholder="Full Name" name="fullnmsignup" required><label><b>Email</b></label><input class="form-control" type="email" placeholder="Enter Email" name="emlsignup" required><label><b>Username</b></label><input onkeyup="filter()" id= "userrname" class="form-control" type="text" placeholder="Enter Username" name="usrnamesignup" required><p id="usernamesuccess" class="w3-green text-light"></p><label><b>Password</b></label><input class="form-control" type="password" placeholder="Enter Password" name="pswsignup" required><button id="signupbtncheck" class="w3-button w3-block btn w3-green w3-section w3-padding" type="submit">Sign UP</button></form>'
            document.getElementById('signupsection').innerHTML = signuppagehtml
            
      



        }
    
    }

}






document.getElementById("wishlist").onclick = function () {

    document.getElementById('id05').style.display = 'block'


    var wishlisthtml = ''
    if (wishlistarray.length > 0) {
        for (var i = 0; i < wishlistarray.length; i++) {
            wishlisthtml += '<li data-item = ' + i + ' class="w3-bar wish w3-card-2 mb-2"><span  data-item = ' + i + '  class="bg-light wish closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><span  data-item = ' + i + ' class="bg-light wish btn btn-alert file w3-bar-item w3-button w3-white w3-xlarge w3-right fontsize">View File</span><img src="' + wishlistarray[i].image + '" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><p style="text-overflow: ellipsis; width: 190px;text-align: middle;overflow: hidden" class="w3-large nameelement">' + wishlistarray[i].name + '</p><span>N' + wishlistarray[i].price + '</span> <span><br></span></div></li>'






        }


    } else {
        wishlisthtml += '<h>There is Currently No item</h>'

    }

    
    ////input string of elements
    var wishliststring = JSON.stringify(wishlistarray)
   document.getElementById("shoppinglistinputstring").value= wishliststring
   document.getElementById("shoppinglistinputindex").value= userindex
   
    document.getElementById('wishtable').innerHTML = wishlisthtml

    //the x button in the wish cart items
    var closingwishlist = document.getElementsByClassName('bg-light wish closingx w3-bar-item ')
    var wishitem = document.getElementsByClassName('w3-bar wish w3-card-2 mb-2')

    for (var i = 0; i < closingwishlist.length; i++) {

        closingwishlist[i].onclick = function () {
            var index = Number(this.getAttribute('data-item'))
            wishitem[index].style.display = 'none'

            wishlistarray = deleteitem(index, wishlistarray)
            populatewishlist()

            for (var j = 0; j < wishlistarray.length; j++) {

            }




            document.getElementById("wishnumbers").innerText = wishlistarray.length

        }

    }

    var wishname = document.getElementsByClassName('w3-large nameelement')
    wishfunction()

}






//this function was created so that when an x was pressed to cancel an item , we could popultae the list with the right amount of items
function populatewishlist() {
    var wishlisthtml = ''
    for (var i = 0; i < wishlistarray.length; i++) {
        wishlisthtml += '<li data-item = ' + i + ' class="w3-bar wish w3-card-2 mb-2"><span  data-item = ' + i + '  class="bg-light wish closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><span data-item = ' + i + '  class="bg-light wish btn btn-alert file w3-bar-item w3-button w3-white w3-xlarge w3-right fontsize">View File</span><img src="' + wishlistarray[i].image + '" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><p style="text-overflow: ellipsis; width: 190px;text-align: middle;overflow: hidden" class="w3-large nameelement">' + wishlistarray[i].name + '</p><span>N' + wishlistarray[i].price + '</span> <span><br></span></div></li>'

    }
    document.getElementById('wishtable').innerHTML = wishlisthtml
    wishfunction()
    //the x button in the shopping cart items
    var closingwishlist = document.getElementsByClassName('bg-light wish closingx w3-bar-item ')
    var wishitem = document.getElementsByClassName('w3-bar wish w3-card-2 mb-2')

    for (var i = 0; i < closingwishlist.length; i++) {

        closingwishlist[i].onclick = function () {
            var index = Number(this.getAttribute('data-item'))
            wishitem[index].style.display = 'none'

            wishlistarray = deleteitem(index, wishlistarray)
           
            populatewishlist()
            
          

         
            document.getElementById("wishnumbers").innerText = wishlistarray.length
              ////input string of elements
    var wishliststring = JSON.stringify(wishlistarray)
    document.getElementById("shoppinglistinputstring").value= wishliststring
    document.getElementById("shoppinglistinputindex").value= userindex
           
        }


    }





}


function addallprices(shoppingarray, totalelements) {
    var priceValue = 0
    for (var i = 0; i < shoppingarray.length; i++) {
        for (var j = 0; j < totalelements.length; j++) {
            if (shoppingarray[i].id == totalelements[j].id) {


                priceValue += Number(totalelements[j].price)

            }
        }
    }

    return priceValue
}




document.getElementById('firstbutton').click()




function wishfunction(){
    var wishitem = document.getElementsByClassName('w3-bar wish w3-card-2 mb-2')
    var wishname = document.getElementsByClassName('w3-large nameelement')
    var wishlink = document.getElementsByClassName('bg-light wish btn btn-alert file w3-bar-item w3-button w3-white w3-xlarge w3-right')

    for (var i = 0; i < wishlink.length; i++) {
        wishlink[i].onclick = function () {
            var index = Number(this.getAttribute('data-item'))

console.log('index')


            for (var j = 0; j < totalelements.length; j++) {
                if (wishname[index].innerHTML == totalelements[j].name) {
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    document.getElementById('id02').style.display = 'block'
                    //we are getting the index of every clicked element

                    //using the data index from the list, we are able to get the text value of the elemem
                    var namemodal = totalelements[j].name
                    //and the images
                    var picturemodal = totalelements[j].image
                    var year = totalelements[j].year
                    var bpm = totalelements[j].bpm
                    var duration = totalelements[j].duration
                    var price = totalelements[j].price
                    var id = totalelements[j].id

console.log('working')
                    document.getElementById("updatedclick").innerHTML = '<div class="w3-padding-16"><img id="pictureElement" src="../dist/Homepage_files/' + picturemodal + '.jpg" style="width:25%;"><br></div><h1>N<span id="pricetag">' + price + '</span></h1> <button id = "previewmodal" style="margin-top: 10px;" class="w3-button w3-blue">Preview</button><br><audio   id="musicmodal" controls><source src="../dist/Musicmp3/' + namemodal + '.mp3" type="audio/mpeg"></audio><div  class="w3-panel w3-leftbar w3-sand  w3-serif"><table class="w3-table-all"><tr><th>Name</th><td id="songname">' + namemodal + '</td></tr><tr><th>Bpm</th><td>' + bpm + '</td></tr><tr><th>Year</th><td>' + year + '</td></tr><tr><th>Duration</th><td>' + duration + '</td></tr></table></div>'
                    var element = extract(shoppingarray)
                    var elementwishlist = extract(wishlistarray)
                    var joined = element.toString()
                    var joinedwishlist = elementwishlist.toString()



                    if (joined.indexOf(namemodal) > -1) {
                        document.getElementById('footer').innerHTML = '<p><button id="addtocartel" class="w3-btn w3-block w3-green">Added To Cart</button></p>'
                    } else {
                        document.getElementById('footer').innerHTML = '<p><button id="addtocartel" class="w3-btn w3-block w3-blue">Add to Cart</button></p>'
                    }


                    if (joinedwishlist.indexOf(namemodal) > -1) {
                        document.getElementById('footer2').innerHTML = '<p><button id="addtowishlist" class="w3-btn w3-block w3-brown">Added To Wishlist</button></p>'
                    } else {
                        document.getElementById('footer2').innerHTML = '<p><button id="addtowishlist" class="w3-btn w3-block w3-yellow">Add To Wishlist</button></p>'
                    }



                    //adding item to cart
                    document.getElementById("addtocartel").onclick = function () {

                        if (this.innerText != 'Added To Cart') {
                            var itemtosell = {
                                name: document.getElementById("songname").innerText,
                                image: document.getElementById("pictureElement").src,
                                price: Number(document.getElementById('pricetag').innerText),
                                id:id
                            }

                            this.className = this.className.replace('w3-blue', 'w3-green')
                            this.innerText = 'Added To Cart'
                            shoppingarray.push(itemtosell)
                            document.getElementById("shoppingnumbers").innerText = shoppingarray.length
                        } else {
                            alert('Item Already included in Cart')
                        }
                    }

                    document.getElementById('id05').style.display = 'none'

                    document.getElementById("addtowishlist").onclick = function () {

                        if (this.innerText != 'Added To Wishlist') {
                            var itemtosell = {
                                name: document.getElementById("songname").innerText,
                                image: document.getElementById("pictureElement").src
                            }

                            this.className = this.className.replace('w3-yellow', 'w3-brown')
                            this.innerText = 'Added To Wishlist'
                            wishlistarray.push(itemtosell)
                            document.getElementById("wishnumbers").innerText = wishlistarray.length
                        } else {
                            alert('Item Already included in Wishlist')
                        }
                    }



                    try {

                        document.getElementById('previewmodal').onclick = function () {


                        }
                    } catch (err) {

                    }
                    document.getElementById("closemodal").onclick = function () {
                        document.getElementById('id02').style.display = 'none'
                        document.getElementById('musicmodal').pause()
                    }



                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                



                }else{
                    console.log('else')
                }



            }
        }
    }
}



function filter(){

    var input = document.getElementById("userrname");
    var FilterValue = input.value.toUpperCase();
    var k;
    var count = 0;
    for( k = 0; k<usersarray.length; k++){
    var a = usersarray[k];
    if(a.toUpperCase().indexOf(''+FilterValue+'')> -1){

    }else{
count++
    //console.log(a.toUpperCase().includes(FilterValue));
    
    }
    
    }
    var usercheck =  document.getElementById('usernamesuccess')
if(count==usersarray.length){
    usercheck.innerText = 'Good Username'
    usercheck.style.display = 'block'
    usercheck.className =usercheck.className.replace('w3-red','w3-green')
}else{
    usercheck.style.display = 'block'
 usercheck.className =usercheck.className.replace('w3-green','w3-red')
 usercheck.innerText='Bad Username'
}

if(FilterValue==''){
    usercheck.style.display = 'none'
}
    }
    