import React from 'react'
import { Link } from 'react-router-dom'

export function Homepage(){
  return (
    <main className='hero'>
        <section className='hsec'>
            <div className='divmain'>
                <h1 className='maint'>Little Lemon</h1>
                <p className='mainp1'>Chicago</p>
                <p className='mainp2'>We are a family owned<br/> Mediterranean restaurant,<br/>focused on traditional<br/> recipes served with a modern<br/> twist</p>
                <Link to='/reservation' className='reserve'>Reserve a table</Link>
            </div>
            <div>
                <img src="../images/main1.jpg" alt="A picture of a waiter holding a dish" height='250px' width='200px' />
            </div>
        </section>
        <section className='specials'>
            <h1>This weeks specials!</h1>
            <Link to='/menu'>Online Menu</Link>
        </section>
        <section className='meals'>
            <section>
               <img src="../images/salad.jpg" alt="A picture of a salad" height='200px' width='300px'/>
               <div className='mealt'>
                <p>Greek Salad</p>
                <p>$12.99</p>
               </div>
               <p>The famous Greek salad of <br/> crispy lettuce, peppers, olives<br/> and our Chicago style feta<br/> cheese, garnished with<br/> crunchy garlic and rosemary<br/>croutons.</p>
               <div>
                <Link to='/order'>Order a delivery</Link>
                <img src="../images/delivery.jpg" alt="A picture of a delivery man" height='50px' width='50px'/>
               </div>
            </section>
            <section>
               <img src="../images/bruchette.jpg" alt="A picture of a bruchetta" height='200px' width='300px'/>
               <div className='mealt'>
                <p>Bruchetta</p>
                <p>$5.99</p>
               </div>
               <p>Our Bruchetta is made from <br/>grilled bread that has been<br/>smeared with garlic and<br/> seasoned with salt and olive<br/> oil.</p>
               <div>
                <Link to='/order'>Order a delivery</Link>
                <img src="../images/delivery.jpg" alt="A picture of a delivery man" height='50px' width='50px'/>
               </div>
            </section>
            <section>
               <img src="../images/dessert.jpg" alt="A picture of a lemon dessert"height='200px' width='300px' />
               <div className='mealt'>
                <p>Lemon Dessert</p>
                <p>$5.00</p>
               </div>
               <p>This comes straight from <br/>grandma's recipe book, every<br/>last ingredient has been<br/> sourced and is as authentic <br/> as can be imagined.</p>
               <div>
                <Link to='/order'>Order a delivery</Link>
                <img src="../images/delivery.jpg" alt="A picture of a delivery man" height='50px' width='50px'/>
               </div>
            </section>
        </section>
    </main>
  )
}
