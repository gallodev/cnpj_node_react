import React from 'react'
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search(props) {          
    
    return (
        <>
          <Form.Group>
            <Form.Control size="lg" 
                          type="text" 
                          className="input-search" 
                          value={props.value}                          
                          onChange={(e) => props.handleChange(e.target.value)}
                          placeholder="Buscar por CNPJ ou Nome (Razão Social)" />          
              <>
                {props.children}
              </>
          </Form.Group>                         
          <Form.Group>
           <Button className="btn-search" variant="primary" onClick={props.handleSearch}><FontAwesomeIcon icon={faSearch} /></Button>
          </Form.Group>  
        </>
    )
}
