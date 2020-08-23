class Episode2{
    constructor(){}
    display(){
        var intro2 = createElement("h2");
                intro2.html("Season2:Episode2:Twitter and FB Hacked!");
                intro2.position(500, 400);
                
                var description2 = createElement("h3");
                description2.html("description about Episode2");
                description2.position(500, 430);
                
                var beginbutton2 = createButton("Begin>");
                    beginbutton2.mousePressed(() => {
                    intro2.hide();
                    description2.hide();
                    beginbutton2.hide();

                    var situationE2 = createElement("h2");
                    situationE2.html("Situation");

                    var OptionAE2 = createButton("Option A");
                    OptionAE2.position(100, 500);

                    var OptionBE2 = createButton("Option B");
                    OptionBE2.position(100, 600);

                    var OptionCE2 = createButton("Option C");
                    OptionCE2.position(300, 500);

                    var OptionDE2 = createButton("Option D");
                    OptionDE2.position(300, 600);

                    OptionAE2.mousePressed(() => {
                        var AdcE2 = createElement("h2");
                        AdcE2.html("A-It is correct! Looking at your account history ,you will be able to track down unusual activities.")
                        AdcE2.position(500, 500);
                    });

                    OptionBE2.mousePressed(() => {
                        var BdcE2 = createElement("h2");
                        BdcE2.html("Well, looking at your search history won’t help!                        ")
                        BdcE2.position(500, 500);
                    });

                    OptionCE2.mousePressed(() => {
                        var CdcE2 = createElement("h2");
                        CdcE2.html("Logging in again won’t help you either!                        ")
                        CdcE2.position(500, 500);
                    });

                    OptionDE2.mousePressed(() => {
                        var DdcE2 = createElement("h2");
                        DdcE2.html("Des. on answerD")
                        DdcE2.position(500, 500);

                    });

                    var Next1E2 = createButton("What's Next")
                    Next1E2.position(400, 300);
                    Next1E2.mousePressed(() => {
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();
                        situationE2.hide();
                        Next1E2.hide();

                         var situation2E2 = createElement("h2");
                        situation2E2.html("Situation2");
                        var password2 = createInput()
                        password2.input("Password2");
                        var reset2= createButton("RESET")
                        reset2.mousePressed(()=>{
                            situation2E2.hide();
                            password2.hide();
                            reset2.hide();
                            episode3 = new Episode3
                        })

    }
                    )}
                    )}
                }