class Episode1{
    constructor(){}
    display(){
               var intro = createElement("h2");
                intro.html("Season1:Episode1:Gmail Hacked!");
                intro.position(500, 400);

                var description = createElement("h3");
                description.html("Your Gmail account gets hacked by some fraudsters recover & Secure it!");
                description.position(500, 430);

                var beginbutton = createButton("Begin>");
                beginbutton.mousePressed(() => {
                    intro.hide();
                    description.hide();
                    beginbutton.hide();

                    var Scene1 = createElement("h2");
                    Scene1.html("Someone has breached into your gmail account,What will you do?");
                    
                    var OptionA = createButton("Call 911");
                    OptionA.position(100, 500);
                    
                    var OptionB = createButton("go to Account Recovery page");
                    OptionB.position(100, 600);
                    
                    var OptionC = createButton("Ask for assistance");
                    OptionC.position(300, 500);
                    
                    var OptionD = createButton("Reset your phone");
                    OptionD.position(300, 600);
                    
                    OptionA.mousePressed(() => {
                        var Adc = createElement("h2");
                        Adc.html("Your report has been successfully registered under the cyber crime law, but it isn’t the correct thing to do at the moment")
                        Adc.position(100, 500);
                    });
                    
                    OptionB.mousePressed(() => {
                        var Bdc = createElement("h2");
                        Bdc.html("B-You have recoverd your account successfully.You are on the right track…keep going!")
                        Bdc.position(200, 500);
                    });
                    
                    OptionC.mousePressed(() => {
                        var Cdc = createElement("h2");
                        Cdc.html("You took assistance from a Cyber Security Personnel and he has told you to recover your email. ")
                        Cdc.position(300, 500);
                    });
                    
                    OptionD.mousePressed(() => {
                        var Ddc = createElement("h2");
                        Ddc.html("Resetting your phone doesn’t have any connection with your Gmail hacking.")
                        Ddc.position(400, 500);

                    });
                    var Next1 = createButton("What's Next")
                    Next1.position(400, 300);
                    Next1.mousePressed(() => {
                        OptionA.hide();
                        OptionB.hide();
                        OptionC.hide();
                        OptionD.hide();
                        situation.hide();
                        Next1.hide();

                        var situation2 = createElement("h2");
                        situation2.html("How will you secure?");

                        var OptionA2 = createButton("2 factor verification");
                        OptionA2.position(100, 500);
                        var OptionB2 = createButton("Reset your phone.");
                        OptionB2.position(100, 600);
                        var OptionC2 = createButton("clear cookies and cache");
                        OptionC2.position(300, 500);
                        OptionA2.mousePressed(() => {
                            var Adc2 = createElement("h2");
                            Adc2.html("Now, your email account is partly secured")
                            Adc2.position(500, 500);
                        });
                        OptionB2.mousePressed(() => {
                            var Bdc2 = createElement("h2");
                            Bdc2.html("That will not help you in securing your email account.")
                            Bdc2.position(500, 500);
                        });
                        OptionC2.mousePressed(() => {
                            var Cdc2 = createElement("h2");
                            Cdc2.html("Clearing cookies and cache will promise you smooth functioning but if will not help you in securing your Email account.");
                            Cdc2.position(500, 500);
                        });
                    var Next2 = createButton("Next>")
                    Next2.position(400, 300);
                    Next2.mousePressed(() => {
                        OptionA2.hide();
                        OptionB2.hide();
                        OptionC2.hide();
                        situation2.hide();  
                        Next2.hide();

                        var situation3 = createElement("h2");
                        situation3.html("Which device do you suspect?Eliminate it.");

                        var OptionA3 = createButton("Tablet");
                        OptionA3.position(100, 500);
                        
                        var OptionB3 = createButton("Phone");
                        OptionB3.position(100, 600);
                        
                        var OptionC3 = createButton("PC");
                        OptionC3.position(300, 500);
                        
                        var OptionD3 = createButton("Laptop");
                        OptionD3.position(300, 600);
                        
                        OptionA3.mousePressed(() => {
                            var Adc3 = createElement("h2");
                            Adc3.html("Des. on answerA2")
                            Adc3.position(500, 500);
                        });
                        
                        OptionB3.mousePressed(() => {
                            var Bdc3 = createElement("h2");
                            Bdc3.html("Des. on answerB2")
                            Bdc3.position(500, 500);
                        });
                        
                        OptionC3.mousePressed(() => {
                            var Cdc3 = createElement("h2");
                            Cdc3.html("Des. on answerC2")
                            Cdc3.position(500, 500);
                        });
                        
                        OptionD3.mousePressed(() => {
                            var Ddc3 = createElement("h2");
                            Ddc3.html("Des. on answerD2")
                            Ddc3.position(500, 500);

                        });

                    var Next3 = createButton("Next>")
                    Next3.position(400, 300);
                    Next3.mousePressed(() => {
                        OptionA3.hide();
                        OptionB3.hide();
                        OptionC3.hide();
                        OptionD3.hide();
                        situation3.hide();  
                        Next3.hide();
                        
                        var situation4 = createElement("h2");
                        situation4.html("Reset your Password.");
                        
                        var password1 = createInput()
                        password1.input("Password");

                        var Reset = createButton("RESET")
                        Reset.mousePressed(()=>{
                            situation4.hide();
                            password1.hide();
                            Reset.hide();
                             
                            var message = createElement("h2");
                            message.html("Your password has been reset successfully.")

                            var nextEpisode = createButton("Go!");
                            nextEpisode.mousePressed(()=>{
                                message.hide();
                                nextEpisode.hide();
                                episode2 = new Episode2();
                            })

                        })

                         

                 });
                

                 })



}
)}
)}
}
    