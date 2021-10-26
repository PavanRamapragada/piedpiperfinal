import React from 'react';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Componay Information</h6>
                    <hr/>
                    <p className="text-white mb-1">
                        We are a bunch of music lovers whose daily routine is to 'Eat, Listen to Music, Sleep and Repeat'.
                        We generally are agnostics but listening to the music of Raja and ARR make us believe that they are the GODs'.
                    </p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className="text-white mb-1">#69, Hyderabad, Telangana, India</p></div>
                    <div><p className="text-white mb-1">+91-9876543210</p></div>
                    <div><p className="text-white mb-1">040-2345675</p></div>
                    <div><p className="text-white mb-1">boku@doku.com</p></div>
                </div>
            </div>
            
        </div>
        </section>
    );
}

export default Footer
