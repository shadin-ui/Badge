import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Images.css';

const Images = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => setImages(res.data))
            .catch(err => console.error('Error While Fetching', err));
    }, []);
    
    const imagelimit = images.slice(0, 25);

    return (
        <div className='albums'> 
            {imagelimit.map(img => (
                <div key={img.id}>
                    <h6 className='title'>{img.title}</h6>
                    <img src={img.url} alt='images' className='imagess' />
                </div>
            ))}
        </div>
    );
}

export default Images;
