import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { backendUrl } from '../Url/backendUrl';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState(0);
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if(!title || !subTitle || !image || !description || !rate || !price || !size || !color) {
            toast("Maydonlarni toldiring !")
        }
        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: token,
            };
            const data = {
                title: title,
                subtitle: subTitle,
                image: image,
                description: description,
                rate: rate,
                price: price,
                size: size,
                color: color
            }
            const response = await axios.post(`${backendUrl}/products`, data, {
                headers: headers
            });
            if(response.data) {
                navigate('/')
            }
        } catch(err) {
            console.log('Xatolik yuz berdi', err);
        }
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-purple-600'>
      <div className='bg-white p-4 shadow-lg hover:shadow-xl'>
        <h1 className='text-center text-xl pb-2'>Create Cart</h1>
        <div className='flex items-center gap-4'>
            <div>
                <label htmlFor="name" className='text-lg'>Cart Title</label>
                <br />
                <input type="text" id="name" className='cursor-pointer py-3 border-2' value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="Enter Cart Title" />
            </div>
            <div>
                <label htmlFor="img" className='text-lg'>Cart SubTitle</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={subTitle} onChange={(ev) => setSubTitle(ev.target.value)} placeholder="Enter Cart subTitle" />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div>
                <label htmlFor="img" className='text-lg'>Image Address</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={image} onChange={(ev) => setImage(ev.target.value)} placeholder="Enter Image Address" />
            </div>
            <div>
                <label htmlFor="img" className='text-lg'>Cart Description</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="Enter Description" />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div>
                <label htmlFor="img" className='text-lg'>Cart Rate</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={rate} onChange={(ev) => setRate(ev.target.value)} placeholder="Enter Rate" />
            </div>
            <div>
                <label htmlFor="img" className='text-lg'>Cart Price</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={price} onChange={(ev) => setPrice(ev.target.value)} placeholder="Enter Price" />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div>
                <label htmlFor="img" className='text-lg'>Cart Size</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={size} onChange={(ev) => setSize(ev.target.value)} placeholder="Enter Size" />
            </div>
            <div>
                <label htmlFor="img" className='text-lg'>Cart Color</label>
                <br />
                <input type="text" id="img" className='cursor-pointer py-3 border-2' value={color} onChange={(ev) => setColor(ev.target.value)} placeholder="Enter Color" />
            </div>
        </div>
        <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-40 mt-5' onClick={handleSubmit}>Submit</button>
            <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Admin
