import React, { Component } from 'react'

export default class TimerParent extends Component {

    constructor(){
        super()
        this.state = {
            start: false,
            seconds:0,
            hours:0,
            minutes:0,
            milli:0
        }


        
        //setinterval exécute cette fonction en cas de la fonction est vr qui est si on clique start à chaque 1000
        setInterval(() => {
            if (this.state.start)

            this.setState({

                milli: this.state.milli + 1000,
                hours: parseInt(this.state.milli / 3600000),

                minutes: parseInt((this.state.milli % 3600000) / 60000),
                seconds: parseInt(((this.state.milli % 3600000) % 60000) / 1000)})
        
        }, 1000);


    }
        starting = () => {
            this.setState( {start: !this.state.start} )
        }
        Reset = () => {
            this.setState({ start:false, mili: 0, seconds:0, hours:0, minutes:0 });
        };
        







    render() {
        return (
            <div className="time">
                <h1>Timer</h1>
                <div className="timer">
                        <span >{String(this.state.hours).padStart(2, '0')}:</span>
                        <span >{String(this.state.minutes).padStart(2, '0')}:</span>
                        <span>{String(this.state.seconds).padStart(2, '0')}</span>
                       
                    </div>
                    <div  className="full-time">
                        
                        <span className="full" >HH</span>
                        <span className="full">Min</span>
                        <span className="full">Sec</span>
                      
                    </div>
            
                     <button  className="button" onClick={this.starting} >
                     {this.state.start ? "Pause" : "Start"}
                         </button>
                     <button className="button" onClick={this.Reset}>Reset</button>
      
                    </div>
        )
    }

}