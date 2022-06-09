import { Component } from "react";

class Exerciciosegundaaula extends Component {
    constructor(props){
        super(props)
        this.state = {
            imagem: '',
            nome: '',
            telefone: ''
        }
    } 
    render () {
        // async - assincrono - não precisa esperar determinado retorno 
        const loadUser = async () => {
            // abaixo o link da API
            let json = await fetch('https://randomuser.me/api/').then(resp => resp.json())
            this.setState({['imagem']:json.results[0].picture.large,
                            ['nome']:json.results[0].name.first + ' ' +json.results[0].name.last,
                            ['telefone']:json.results[0].phone})
            }
            return(
                <div className='col-md-6'>
                    <img src={this.state.imagem}/>
                    <br/>
                    <label>Nome</label>
                    <input className='form-control' value={this.state.nome} disabled/>
                    <label>Telefone</label>
                    <input className='form-control' value={this.state.telefone} disabled/>
                    <button className="btn btn-info btn-sm" onClick={()=> loadUser()}>Refresh</button>
                </div>
            )
        }
    }


export default  Exerciciosegundaaula;