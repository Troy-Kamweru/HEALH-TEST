function myFunction() {
    var Disease = document.getElementById("Disease").val;
    if (Disease == "Malaria"){
        confirm("fever");
        confirm("fatigue");
        confirm("body ache");
        confirm("head ache");
        confirm("cough");
        confirm("shivering");
        var number = parseInt(prompt("How many did you check as ok?"));
        if (number>4){
            alert("Visit nearest health facilty")
        } else if(number < 4){
            alert("Get some rest")
        }
        
    } else if (Disease = "Covid-19"){
        confirm("Aches and Pain");
        confirm("Sore throat");
        confirm("Diarrhea");
        confirm("headache");
        confirm("Loss of taste or smell");
        confirm("Rush on the skin or discolouration of fingers and toes");
        var number = parseInt(prompt("How many did you check as ok?"));
        if (number>4){
            alert("Visit nearest health facilty")
        } else if(number < 4){
            alert("Get some rest")
        }
        
    }

    
} 