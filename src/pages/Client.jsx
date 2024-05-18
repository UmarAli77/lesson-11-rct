import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl';


function Client() {
    const navigate = useNavigate();
    const [ cart, setCart ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login')
        }
    }, [])
    useEffect(() => {
        async function getCategory() {
            try {
                const response = await axios.get(`${backendUrl}/products`);
                setCart(response.data);
            }catch(eer) {
                console.log('Xatolik yuz berdi', eer);
            }
        }
        getCategory()
    }, [])
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: token,
            }
            const response = await axios.delete(`${backendUrl}/products/${id}`, {
                headers: headers
            })
            if(response.data) {
                navigate(0)
            }
        } catch(err) {
            console.log('Xatolik yuz berdi ', err);
        }
    }
    return (
    <div className='grid grid-cols-3 justify-evenly'>
        {
            cart.map(el => 
                <div className='w-[230px] shadow-lg p-4 hover:shadow-xl'>
                    <img src={el.image} alt="" />
                    <div className='p-4'>
                        <h2 className='text-xl font-extrabold'>{el.title}</h2>
                        <h3 className='text-base text-gray-500'>{el.subtitle}</h3>
                        <p>{el.description}</p>
                        <p className='font-normal'>{el.rate}</p>
                        <p className='font-medium'>{el.price}</p>
                        <p className='font-medium'>{el.size}</p>
                        <p className='font-semibold'>{el.color}</p>
                    </div>
                    <button onClick={() => handleDelete(el._id)} className='bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>
            )
        }
    </div>
  )
}

export default Client
