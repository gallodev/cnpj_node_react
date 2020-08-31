import React from 'react'
import { Table } from "react-bootstrap";

export default function DataTable(props) {    
    console.log(props);
    return (
        <div>
            <Table striped bordered responsive hover>
                <thead>
                    <tr>
                    <td>CNPJ</td>
                    <td>nome</td>
                    <td>logradouro</td>
                    <td>numero</td>
                    <td>complemento</td>
                    <td>municipio</td>
                    <td>uf</td>
                    <td>cep</td>
                    <td>telefone</td>
                    <td>email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.data.cnpj}</td>
                    <td>{props.data.nome}</td>
                    <td>{props.data.logradouro}</td>
                    <td>{props.data.numero}</td>
                    <td>{props.data.complemento}</td>
                    <td>{props.data.municipio}</td>
                    <td>{props.data.uf}</td>
                    <td>{props.data.cep}</td>
                    <td>{props.data.telefone}</td>
                    <td>{props.data.email}</td>
                    </tr>            
                </tbody>
            </Table>
        </div>
    )
}
