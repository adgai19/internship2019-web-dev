var student={
        firstname:"john",
        lastname:"doe",
        address:{
                state:"goa",
                country:"india"
        },
        rollNo:12345,
        marks:[60,45,60,45,60,45],
        sum:function(){return parseInt(this.marks[0])+parseInt(this.marks[1])+parseInt(this.marks[2])+parseInt(this.marks[3])+parseInt(this.marks[4])+parseInt(this.marks[5]);},
        sum2:function(){
                let sum=0,i;
                for(i=0;i<this.marks.length;i++){
                        console.log(this.marks[i]);
                        sum+=this.marks[i];
                }
                return sum; 
                    
                          
        },
};      
window.onload=()=>{
        
        console.log(student);

};
