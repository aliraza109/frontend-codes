// keep all contacts 
let contactBook = [];

const ellipsisListIcon= document.getElementById("ellipsis-list-icon");

const ellipsisList= document.getElementById("ellipsis-list");

const saveBtn = document.getElementById('btn-save');
const modal2= document.getElementById('myModal2');

ellipsisListIcon.addEventListener('click', function(){
   
    if (ellipsisList.style.display === "none") {
        ellipsisList.style.display = "block";
    } else {
        ellipsisList.style.display = "none";
    }
});

const addinputfield = document.getElementById("add-input-field")

const modalBody = document.getElementById("modal-body");

addinputfield.addEventListener('click', function(){
    //Create New Div
const newDiv = document.createElement("div");
newDiv.classList.add("form-group");
//create New input
const newInput =document.createElement("input");
newInput.classList.add('form-control');
newInput.classList.add('contact-number');
newInput.setAttribute("type","number");

newDiv.appendChild(newInput);
//create new icon
const removeIcon=document.createElement("i");
removeIcon.classList.add('fas');
removeIcon.classList.add('fa-minus');
removeIcon.setAttribute("id","remove-input-field");
newDiv.appendChild(removeIcon);
modalBody.appendChild(newDiv);
removeIcon.addEventListener('click', function(){
    removeIcon.parentElement.remove();
});
});



function saveContact(){

const contactName = document.getElementById('contact-name').value;
let jsonobject = {};

if(contactName != ""){
    jsonobject ['contactName'] = contactName;

    const contactNumberElementsArray = document.getElementsByClassName('contact-number');

    let contactNumbers=[];
    for(let i=0; i<contactNumberElementsArray.length;i++){
        
        const contactNumber =  contactNumberElementsArray[i].value;
        if(contactNumber != ""){
        contactNumbers.push(contactNumber);

        }
    }

    if(contactNumbers.length != 0){
        jsonobject ['contactNumbers'] = contactNumbers;  
             
        addContactToContactBook(jsonobject);
        renderContactBook()
    }

}

document.getElementById('btn-cancel').click();

}

const cancelbtn = document.getElementById('btn-cancel');

cancelbtn.addEventListener('click',function(){
    document.getElementById('contact-name').value="";
    const contactNumberElementsArray = document.getElementsByClassName('contact-number');

for(let i=0; i<contactNumberElementsArray.length;i++){
    contactNumberElementsArray[i].value ='';
}
})

const closebtn = document.getElementById('close');

closebtn.addEventListener('click',function(){
    clearForm();
});

function clearForm(){
    document.getElementById('contact-name').value="";
    const contactNumberElementsArray = document.getElementsByClassName('contact-number');

    for(let i=0; i<contactNumberElementsArray.length;i++){
        contactNumberElementsArray[i].value ='';
    }
}
    function addContactToContactBook(newContact){

        contactBook.push(newContact);

    }
    function renderContactBook(){
        const contactList = document.getElementById('contact-list');
        contactList.innerHTML="";

        for(let i=0;i<contactBook.length;i++){
            const contact= document.createElement('li');
            contact.classList.add('contact');
            const span = document.createElement('span');
            span.setAttribute("id",i);
            span.innerHTML=contactBook[i].contactName;
            contact.appendChild(span);
            contactList.appendChild(contact);
            const contactListClear= document.getElementById('contactListClear');
            contactListClear.addEventListener('click', function(){
           document.getElementById('numbersList').innerHTML="";
        } );
        const contactListClearBtn =document.getElementById('contactListClearBtn');
        contactListClearBtn.addEventListener('click', function(){
       
            document.getElementById('numbersList').innerHTML="";
             });
            span.addEventListener('click', function(){
               $('#myModal2').modal('show');
             
             const contact= contactBook[this.id]
        document.getElementById('name').innerHTML =contact.contactName;
        
       const numbersList=document.getElementById('numbersList');
       for(let i=0;i<contact.contactNumbers.length;i++){
       const numbers =document.createElement('li');
       numbers.classList.add('numbers');
       numbers.innerHTML=contact.contactNumbers[i];
       numbersList.appendChild(numbers);

        };
            });
        }

    };
    