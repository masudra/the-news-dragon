import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [cateagoris, setCateagoris]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5003/cateagori')
        .then(res => res.json())
        .then(data => setCateagoris(data))

    },[])

    return (
        <div>
            <h1>this is left header</h1>
            <div>
                {
                  cateagoris.map(categori => <p key={categori.id}>

                    <Link  className='text-decoration-none text-black' to={`/cateagori/${categori.id}`}>{categori.name}</Link>

                  </p>)
                }


            </div>
            
        </div>
    );
};

export default LeftNav;