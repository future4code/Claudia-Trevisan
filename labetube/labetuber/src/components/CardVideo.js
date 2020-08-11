import React from 'react';

export function CardVideo () {
    return(
        <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
        </div>
    )
}