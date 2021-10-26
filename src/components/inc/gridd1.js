import React from 'react';
import Raja from '../images/Ilayaraja.jpg';
//import './gridd.css';

function Gridd1() {
    return (
        <div>
            <div>
            <section className="section  border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-left" style={{textDecoration: 'underline', textDecorationColor: 'seagreen'}}>
                            <h3 className="main-heading">Ilayaraja Playlist</h3>
                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Anando Brahma</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Chilakamma</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Chukkalu Themanna</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Hello Guru</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Jagada Jagada</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <br />

                        
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Nee Partha</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Ninnu Kori</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Oh Priya</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Raaja Raajadhi</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="card shadow">
                                <img src={Raja} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Sundari Neeve</h6>
                                    <button className="btn btn-dark">Play Now</button>
                                </div>
                            </div>

                        </div>

                        <br />

                        
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Gridd1;
