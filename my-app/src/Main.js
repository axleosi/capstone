function Main(){
    return(
        <main class="hero">
            <section class="hsec">
                <div class="divmain">
                    <h1 class="maint">Little Lemon</h1>
                    <p class="mainp1">Chicago</p>
                    <p class="mainp2">We are a family owned <br/>Mediterranean restaurant, <br/>focused on traditional <br/>recipes served with a modern<br/> twist</p>
                    <a href="#" class="reserve">Reserve a table</a>
                </div>
                <div class="imgmain">
                    <img src="./images/main1.jpg" height="250px" width="200px" class="main1"></img>
                </div>
            </section>
            <section class="specials">
            <h1>This weeks specials!</h1>
            <a href="#">Online Menu</a>
            </section>
            <section class="meals">
                <section>
                   <img src="./images/salad.jpg" height="200px" width="300px"></img>
                   <div>
                    <p>Greek Salad</p>
                    <p>$12.99</p>
                   </div>
                   <p>The famous Greek salad of <br/>crispy lettuce, peppers, olives <br/>and our Chicago style feta <br/>cheese, garnished with <br/>crunchy garlic and rosemary <br/>croutons.</p>
                   <div>
                    <p>Order a delivery</p>
                    <img src="./images/delivery.jpg"></img>
                   </div>
                </section>
                <section>
                    <div>
                <img src="./images/bruchette.jpg"  height="200px" width="300px"></img>
                </div>
                   <div>
                    <p>Greek Salad</p>
                    <p>$12.99</p>
                   </div>
                   <p>Our bruchetta is made from <br/>grilled bread that has been <br/>smeared with garlic and <br/>seasoned with salt and olive <br/>oil.</p>
                   <div>
                    <p>Order a delivery</p>
                    <img src="./images/delivery.jpg"></img>
                   </div>
                </section>
                <section>
                <img src="./images/dessert.jpg"  height="200px" width="300px"></img>
                   <div>
                    <p>Greek Salad</p>
                    <p>$12.99</p>
                   </div>
                   <p>This comes straight from <br/>grandma's recipe book, every <br/>last ingredient has been <br/>sourced and is as authentic <br/>as can be imagined</p>
                   <div>
                    <p>Order a delivery</p>
                    <img src="./images/delivery.jpg"></img>
                   </div>
                </section>
            </section>
        </main>
    )
}

export default Main