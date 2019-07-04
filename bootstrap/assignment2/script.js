//let displayText =() => document.getElementById('dataOut').innerHTML="Product Name: "+document.getElementById('productName').value+"Question"+document.getElementById('productQuestion').value+"\nName"+document.getElementById('firstName').value+" "+document.getElementById('lastName').value;
function displayText(){
        let textRow=document.createElement('div');
        let textColumn1=document.createElement('div');
        let textColumn2=document.createElement('div');
        let newh1=document.createElement('h5');
        let newh2=document.createElement('h5');
        let firstnamecol=document.createElement('p');
        let firstname=document.createElement('p');
        let lastnamecol=document.createElement('p');
        let lastname=document.createElement('p');
        let productnamecol=document.createElement('p');
        let productname=document.createElement('p');
        let productquestioncol=document.createElement('p');
        let productquestion=document.createElement('p');
        let emailcol=document.createElement('p');
        let email=document.createElement('p');
        let contactcol=document.createElement('p');
        let contact=document.createElement('p');
        
        newh1.textContent="Field";
        firstnamecol.textContent="First Name";
        lastnamecol.textContent="Last Name";
        contactcol.textContent="contact Number";
        productnamecol.textContent="product Name";
        emailcol.textContent="Email";
        productquestioncol.textContent="Question";

        newh2.textContent="value";
        firstname.textContent=document.getElementById('firstName').value;
        lastname.textContent=document.getElementById('lastName').value;
        productname.textContent=document.getElementById('productName').value;
        contact.textContent=document.getElementById('contactNo').value;
        email.textContent=document.getElementById('email').value;
        
        productquestion.textContent=document.getElementById('productQuestion').value
        textRow.classList.add('row');
        textColumn1.classList.add('column');
        textColumn2.classList.add('column');
        textColumn1.classList.add('border');
        textColumn1.classList.add('border-info');
        textColumn2.classList.add('border');
        textColumn2.classList.add('border-info');
        textColumn1.classList.add('px-4');
        textColumn2.classList.add('px-4');
        textRow.appendChild(textColumn1);
        textRow.appendChild(textColumn2);

        textColumn1.appendChild(newh1);
        textColumn1.appendChild(productnamecol);
        textColumn1.appendChild(productquestioncol);
        textColumn1.appendChild(firstnamecol);
        textColumn1.appendChild(lastnamecol);
        textColumn1.appendChild(emailcol);
        textColumn1.appendChild(contactcol);

        textColumn2.appendChild(newh2);
        textColumn2.appendChild(productname);
        textColumn2.appendChild(productquestion);
        textColumn2.appendChild(firstname);
        textColumn2.appendChild(lastname);
        textColumn2.appendChild(email);
        textColumn2.appendChild(contact);

        document.getElementById('dataOut').appendChild(textRow);




}
var LoginCredentials=[{
        username:"user1",
        password:"password"
},{
        username:"user2",
        password:"password"

}]
let logindirect=()=>{
        console.log("hwllo ");
        let uid=document.getElementById('exampleUid1').value;
        let pword=document.getElementById('exampleInputPassword1').value;
        let i,authorized=false;
        for(i=0;i<LoginCredentials.length;i++){
                if(LoginCredentials[i].username==uid && LoginCredentials[i].password==pword){
                        authorized=true;
                        console.log()
                }
        console.log(authorized);
        if(authorized){
                document.getElementById('submitbtn').setAttribute("href","home.html");
        }
        else{
                document.getElementById('submitbtn').setAttribute("href","login-denied.html");        }
        }

}