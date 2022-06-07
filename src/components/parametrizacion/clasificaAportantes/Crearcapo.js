import React, { Component } from 'react';
import Header from '../../../layout/Header';
import Menulat from '../../../layout/Menulat';
import Footer from '../../../layout/Footer';
import Titulo from '../../../comunes/Titulo';
import Botones from '../../../comunes/Botones';
import Fila from '../../../comunes/fila';
import { guarda } from '../../../scripts/scripts';
import { Redirect } from 'react-router-dom';
import Breadcrumb from '../../../layout/Breadcrumb';
import TituloModal from '../../../comunes/TituloModal';
import Cookies from 'universal-cookie';
const cookies = new Cookies(); 

class Crearcapo extends Component {
    state = { roles: {}, status: null };
    componentDidMount() { }
    guardar = (e) =>{
        e.preventDefault();
        const nuev = {
            cla_codigo: document.forma.Codigo.value, 
            cla_nombre: document.forma.Nombre.value
        }
        guarda(nuev, "clasificacionesaportantes", "Clasificación aportantes", "/Clasificacion-aportantes");
        this.setState({ status: 'Ok'})
    }
    render() {
        if(cookies.get("idroles")!=="1" && cookies.get("idroles")!=="8" && cookies.get("idroles")!=="26"){return <Redirect to="./"/>;}
        if(this.state.status==="Ok"){ return <Redirect to="/Clasificacion-aportantes"/>; }
        let linksBreadcrumb = [{href:"inicio", name:"Inicio"}, {href:"clasificaAportantes", name:"Clasificación de aportantes"},{href:"#", name:"Agregar clasificación de aportantes"}];
        return (
            <div>
                <Header/>
                <Menulat/>
                <Titulo titulo="Agregar Clasificación de aportantes por obligatoriedad"/>
                <div className="am-mainpanel">
                    
                    <div className="am-pagebody">

                        <div className="card pd-20 pd-sm-40">

                            <Breadcrumb links={linksBreadcrumb}></Breadcrumb>

                            <form  name="forma" onSubmit={this.guardar} className="center-div">
                                <div className="modal-content tx-size-sm" style={{width: '700px'}}>
                                    <div className="modal-body pd-20">

                                     <TituloModal titulo="Agregar Clasificación de Aportantes"/>
                                        <div className='row'>
                                            <Fila nombre="Código" refer="Codigo" tipo="1" arreglo=""  col="6"/>
                                            <Fila nombre="Clasificación" refer="Nombre" tipo="1" arreglo="" col="6"/>
                                        </div>
                                    </div>
                                    <Botones enlace='/Clasificacion-aportantes'/>
                                </div>
                                    
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Crearcapo;