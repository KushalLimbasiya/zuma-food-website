import React from 'react';
import * as ig from '../img/img';
import '../style/main.css'

function Speciality() {
    return (
        <>
            <section class="speciality" id="Speciality">
                <h1 class="heading">our <span>speciality</span>  </h1>
                
                <div class="box-container">
                    
                    <div class="box">
                        
                        <img class="image" src={ig.simg1} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s1} alt=""/>
                            <h3>testy burger</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                    </div> 
                    
                    <div class="box">
                        
                        <img class="image" src={ig.simg2} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s2} alt=""/>
                            <h3>testy pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                        
                    </div> 
                    <div class="box">
                        
                        <img class="image" src={ig.simg3} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s3} alt=""/>
                            <h3>cold ice-cream</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                    </div> 
                    <div class="box">
                        
                        <img class="image" src={ig.simg4} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s4} alt=""/>
                            <h3>cold drinks</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                    </div> 
                    
                    <div class="box">
                        
                        <img class="image" src={ig.simg5} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s5} alt=""/>
                            <h3>cold ice-cream</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                    </div> 
                    
                    <div class="box">
                        
                        <img class="image" src={ig.simg6} alt=""/>
                        
                        <div class="content">
                            <img src={ig.s6} alt=""/>
                            <h3>healty  breakfast</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti nesciunt repudiandae aut officia iusto</p>
                        </div>
                    </div> 
                </div>  
            </section>

        </>
    )
};

export default Speciality;