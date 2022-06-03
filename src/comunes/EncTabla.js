import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class EncTabla extends Component {
    render() {
        const titul = this.props.titulo;
        const titu2 = this.props.titulo2;
        const link = this.props.link;
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-8 izqq'>
                        <div className="title-style-2"><h1>{titul}</h1></div>
                    </div>
                    <div className='col-lg-4 derechas'>
                        <NavLink className="btn1 botones1" to={link}><i className="icon ion-plus-round"></i> Agregar {titu2}</NavLink>
                    </div>
                </div><br></br>
            </React.Fragment>
        )
    }
}
export default EncTabla;




