import React from 'react';
import '../../style/main.css';
import { Start } from './Start';

const Review = () => {
  return (
    <section class="review" id="review">
        <h1 class="heading"> What your client says</h1>
        <div class="box-container">
            
            <div class="box">
                <img src="#" alt=""/>
                <h3>John Smith</h3>
                <Start />
                <p>The pizza was delicious! The crust was crispy and the toppings were fresh. Definitely ordering from here again.
                </p>
            </div>
            <div class="box">
                <img src="#" alt=""/>
                <h3>Emily Johnson</h3>
                <Start />
                <p>Amazing pizza, speedy delivery, and friendly service. My new go-to pizza spot!
                </p>
            </div>
            <div class="box">
                <img src="#" alt=""/>
                <h3>David Lee</h3>
                <Start />
                <p>The quality of the ingredients really shines through in every bite. This pizza is a must-try for any pizza lover.
                </p>
            </div>
            
        </div>
    
    </section>
  );
}

export default Review;
