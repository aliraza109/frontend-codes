function setup(){
    loadJSON("https://api.jsonbin.io/b/5ebd336b8284f36af7bb0907",gotData,'jsopn');
}
function gotData(data){
    console.log(data);
}
setup();
$.getJSON('http://192.168.1.104:8081/api/v1/contact-books', function(data) {
    //data is the JSON string
    contactBook=data
});
https://api.jsonbin.io/b/5ebd336b8284f36af7bb0907
contactBook.push(newContact);