import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function SearchList(props) {
    
    const mountList = () => {        
        return props.data.map( item => <ListGroup.Item className="list-item" onClick={(e) => props.onClick(item.nome)} key={item.id} >{item.nome}</ListGroup.Item>)        
    }

    return (
        <div>
            <ListGroup className="list-search">
                {mountList()}
            </ListGroup>
        </div>
    )
}
