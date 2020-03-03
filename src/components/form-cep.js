import React, { Component } from 'react';
import InputMask from 'react-input-mask'


class FormCep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cep: '',
        }

    }

    updateCep = () => {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <InputMask mask="99999-999" maskChar=" " className="form-control" type="text" name="cep" id="cep" onChange={this.updateCep}/>
                        <br/>
                        <button className="btn btn-outline-primary">Pegar endereço</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormCep;