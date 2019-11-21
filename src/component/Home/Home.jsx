import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <div className="img-fluid rounded slide" alt="responsive image" src={require('../../gambar/destop.jpg')}></div>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                                <p className="text-white text-center" > A simple alert-chekc it out</p>
                            </div>
                        </div>
                    </div>

                    <div className="container slide">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="carousel slide" data-ride="carouse">
                                    <div className="carrousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slide1.jpg')} alt=""/>
                                        </div>

                                        <div className="carousel-item active">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slide1.jpg')} alt=""/>
                                        </div>

                                        <div className="carousel-item active">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slide1.jpg')} alt=""/>
                                        </div>
                                        <a href="" className='carousel-control-prev'role="button" data-slide="prev "> 
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only"> Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid d-block w-100" src={require('../../gambar/slide1.jpg')} alt=""/>
                                <img className="img-fluid d-block w-100" src={require('../../gambar/slide1.jpg')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;