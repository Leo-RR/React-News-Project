import React, { Component } from 'react';

export default class Noticia extends Component{

    render(){
        return(
            <div className="news-iten">
                <h1>{this.props.data.title}</h1>
                <h3>{this.props.data.subtitle}</h3>
                <p>{this.props.data.body}</p>
            </div> 
        );
    }
}