import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import './UserRegSignIn.css'

export default function Addnewwatch() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Add watch</h2>
            <form action="/home">
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Model</label><br />
                    <input type="text" name="model" required />
                </p>
                <p>
                    <label>Brand</label><br />
                    <input type="text" name="brand" required />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="description" />
                </p>
                <p>
                    <label>Waranty Period</label><br />
                    <input type="text" name="waranty_period" pattern="[0-9]{2}" maxlength="2"/>
                </p>
                <p>
                    <label>Color</label><br />
                    <input type="text" name="colour"/>
                </p>
                <p>
                    <label>Category</label><br />
                    <input type="text" name="category"/>
                </p>
                <p>
                    <label>For_whom</label><br />
                    <input type="text" name="forwhom"/>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="price" pattern="[0-9]{5}" maxlength="5"/>
                </p>
                <p>
                    <label>Offer %</label><br />
                    <input type="text" name="offer" pattern="[0-9]{3}" maxlength="3"/>
                </p>
                <p>
                <label>Stock available</label><br />
                    <input type="text" name="stock available" pattern="[0-9]{3}" maxlength="3"/>
                </p>
                <p>
                  <h2>Add Watch Image:</h2>
                  <input type="file" onChange={handleChange} />
                  <img src={file} />
               </p>
                
                <p>
                    <button id="sub_btn" type="submit">Add Watch</button>
                </p>
            </form>
        </div>
    )

}