import React,{Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        //console.log(3,"el componente ha sido eliminado del DOM");
    }

    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{

    constructor(props){
        super(props);
        //console.log(0,"el componente se inicializa,aun NO esta en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false
        }

        this.temporizador = null;
        
    }

    componentDidMount(){
        //console.log(1,"Elcomponente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps,prevState){
        //console.log(2,"El estado o las props del componente han cambiado");
        //console.log(prevProps,prevState);
    }

    tictac = ()=>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    };

    iniciar = ()=>{
        this.tictac();
        this.setState({
            visible:true
        })
    };

    detener = ()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    };

    render(){
        //console.log(4,"El componente se dibuja por algun cambio en el DOM");
        return(
            <>
                <h3>Ciclo de vida de componentes de clase</h3>
                {this.state.visible&&<Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}