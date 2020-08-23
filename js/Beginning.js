class Beginning {
    constructor() {
        this.title = createElement("h2");
        this.Seasonbutton = createButton("SEASON1");
        // this.button2 = createButton("Season2");
        //     this.beginbutton = createButton("Begin>")
    }

    display() {
        //1st screen
        
        this.title.html("Welcome to the world of cyber crime!");
        this.title.position(displayHeight/2, displayWidth/2);


        this.Seasonbutton.position(450, 300);
        // this.button2.position(450, 400);
        // this.button2.mousePressed(()=>{
        //     form2 = new Form2;
        // })
        this.Seasonbutton.mousePressed(() => {
            this.title.hide();
            this.Seasonbutton.hide();
            

            var insights = createElement("h2");
            insights.html("Some hackers are after your digital life...secure it or lose it!");
            insights.position(450, 300);
            var nextbutton = createButton(">");
            var emailnotification = createElement("h2")
            emailnotification.html("A device named Samsang Tab 101 has logged into your email.Do you recognise this activity?")
            emailnotification.position(displayHeight/2-500,displayWidth/2);
            var Yesbutton = createButton("YES")
            Yesbutton.position(400,300)
            var Nobutton = createButton("NO")
            Nobutton.position(500,300)
            
            Nobutton.mousePressed(() => {
                insights.hide();
                emailnotification.hide();
                Yesbutton.hide();
                Nobutton.hide();
                episode1 = new Episode1();
                
                })
            })
            }}