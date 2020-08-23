class Episode4{
    constructor(){}
    display(){
                var intro4 = createElement("h2");
                intro4.html("Season1:Episode4:Credit Card Hacked!");
                intro4.position(500, 400);
                
                var description4 = createElement("h3");
                description4.html("description about Episod43");
                description4.position(500, 430);
                
                var beginbutton4 = createButton("Begin>");

                beginbutton4.mousePressed(() => {
                    intro4.hide();
                    description4.hide();
                    beginbutton4.hide();
                    
                    var situationE4 = createElement("h2");
                    situationE4.html("Situation");
                    
                    var OptionAE4 = createButton("Option A");
                    OptionAE4.position(100, 500);
                    
                    var OptionBE4 = createButton("Option B");
                    OptionBE4.position(100, 600);
                    
                    var OptionCE4 = createButton("Option C");
                    OptionCE4.position(300, 500);
                   
                    var OptionDE4 = createButton("Option D");
                    OptionDE4.position(300, 600);
                    
                    OptionAE4.mousePressed(() => {
                        var AdcE4 = createElement("h2");
                        AdcE4.html("Des. on answerA")
                        AdcE4.position(500, 500);
                    });
                    
                    OptionBE4.mousePressed(() => {
                        var BdcE4 = createElement("h2");
                        BdcE4.html("Des. on answerB")
                        BdcE4.position(500, 500);
                    });
                    
                    OptionCE4.mousePressed(() => {
                        var CdcE4 = createElement("h2");
                        CdcE4.html("Des. on answerC")
                        CdcE4.position(500, 500);
                    });
                    
                    OptionDE4.mousePressed(() => {
                        var DdcE4 = createElement("h2");
                        DdcE4.html("Des. on answerD")
                        DdcE4.position(500, 500);

                    })
                    var finishbutton= createButton("Go!")
                    finishbutton.mousePressed(()=>{
                    finishbutton.hide();
                    end = new End
                    })
 

                }
                )}
            }