class Episode3{
    constructor(){}
    display(){
        var intro3 = createElement("h2");
        intro3.html("Season1:Episode3:Online Shopping Account Hacked!");
        intro3.position(500, 400);
        
        var description3 = createElement("h3");
        description3.html("description about Episode3");
        description3.position(500, 430);
        
        var beginbutton3 = createButton("Begin>");

        beginbutton3.mousePressed(() => {
            intro3.hide();
            description3.hide();
            beginbutton3.hide();
            
            var situationE3 = createElement("h2");
            situationE3.html("Situation");
            
            var OptionAE3 = createButton("Option A");
            OptionAE3.position(100, 500);
            
            var OptionBE3 = createButton("Option B");
            OptionBE3.position(100, 600);
            
            var OptionCE3 = createButton("Option C");
            OptionCE3.position(300, 500);
            
            var OptionDE3 = createButton("Option D");
            OptionDE3.position(300, 600);
            
            OptionAE3.mousePressed(() => {
                var AdcE3 = createElement("h2");
                AdcE3.html("Des. on answerA")
                AdcE3.position(500, 500);
            });
            
            OptionBE3.mousePressed(() => {
                var BdcE3 = createElement("h2");
                BdcE3.html("Des. on answerB")
                BdcE3.position(500, 500);
            });
            
            OptionCE3.mousePressed(() => {
                var CdcE3 = createElement("h2");
                CdcE3.html("Des. on answerC")
                CdcE3.position(500, 500);
            });
            
            OptionDE3.mousePressed(() => {
                var DdcE3 = createElement("h2");
                DdcE3.html("Des. on answerD")
                DdcE3.position(500, 500);

            });
            
            var Next1E3 = createButton("What's Next")
            Next1E3.position(400, 300);
            Next1E3.mousePressed(() => {
                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                OptionDE3.hide();
                situationE3.hide();
                Next1E3.hide();
                episode4 = new Episode4();

    })
    }
        )}}
