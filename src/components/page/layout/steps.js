import React from 'react';
import '../../style/main.css';
import * as ig from '../../img/img';

const Step = () => {
    return (
        <section class="steps">
        
            <div class="box">
                <img src={ig.step1} alt=""/>
                <h3>choose your favorite food</h3>
            </div>
            <div class="box">
                <img src={ig.step2} alt=""/>
                <h3>free and fast delivery</h3>
            </div>
            <div class="box">
                <img src={ig.step3} alt=""/>
                <h3>easy payments method</h3>
            </div>
            <div class="box">
                <img src={ig.step4} alt=""/>
                <h3>and finally, enjoy your food</h3>
            </div>
        
        </section>
    );
};

export default Step;