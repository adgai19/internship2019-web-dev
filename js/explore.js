var f1 = function() { console.log("hello");};
//works in reload
window.onload = function(){
        document.getElementById('hello').innerHTML="hello";
        
        


};

//self invoking function
(function(){console.log("welcome");})();
