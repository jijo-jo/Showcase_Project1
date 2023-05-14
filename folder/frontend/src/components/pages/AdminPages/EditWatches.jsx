import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getwatchbyId,updateAwatch} from '../../api';
import '../UserRegSignIn.css'


export default function Editwatch() {
    const [values, setValues] = useState({});
    const {id}= useParams()
    const [file, setFile] = useState("");
    function handleChange(e) {
       setFile(e.target.value) 
    }
    useEffect(()=>{
        console.log(id);
        getwatchbyId({id:id})
        .then((response)=>{
            let initialwatchvalues = {
                name: response.data.Name,
                model:response.data.ModelInfo ,
                brand:response.data.Brand,
                description:response.data.Description,
                waranty_period:response.data.WarantyPeriod,
                colour:response.data.Color,
                forwhom:response.data.For_whom,
                price:response.data.Price,
                offer:response.data.Offer,
                stock_available:response.data.Stockavailable,
                image_url:response.data.Image
            };
            console.log(initialwatchvalues);
            setFile(response.data.Image)
            setValues(initialwatchvalues)

        }).catch((err)=>{

        })
    },[])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
  const updatewatch = async()=>{
     let watchinput = {
        name:values.name,
        model:values.model,
        brand:values.brand,
        description:values.description,
        warantyperiod:parseInt(values.waranty_period),
        color:values.colour,
        forwhom:values.forwhom,
        price:parseInt(values.price),
        offer:parseInt(values.offer),
        stock:parseInt(values.stock_available),
        image:file
     }
    await updateAwatch(watchinput)
    .then((response)=>{
        window.location = '/allproducts'

      })
      .catch((err)=>{
        console.log(err);

      })

  }
    return (
        <div className="text-center m-5-auto">
            <h2>Edit watch</h2>
            <form action="/home">
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" value={values.name}
                     onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Model</label><br />
                    <input type="text" name="model" value={values.model}
                     onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Brand</label><br />
                    <input type="text" name="brand" value={values.brand}
                     onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="description" value={values.description}
                     onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Waranty Period</label><br />
                    <input type="text" name="waranty_period" pattern="[0-9]{2}" maxlength="2" value={values.waranty_period}
                     onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Color</label><br />
                    <input type="text" name="colour" value={values.colour}
                     onChange={handleInputChange}/>
                </p>
                <p>
                    <label>For_whom</label><br />
                    <input type="text" name="forwhom" value={values.forwhom}
                     onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="price" pattern="[0-9]{5}" maxlength="5" value={values.price}
                     onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Offer %</label><br />
                    <input type="text" name="offer" pattern="[0-9]{3}" maxlength="3" value={values.offer}
                     onChange={handleInputChange}/>
                </p>
                <p>
                <label>Stock available</label><br />
                    <input type="text" name="stock_available" pattern="[0-9]{3}" maxlength="3" value={values.stock_available}
                     onChange={handleInputChange}/>
                </p>
                {/* <p>
                  <h2>Add Watch Image:</h2>
                  <input type="file" onChange={handleChange} />
                  <img src={file} />
               </p> */}
               <p>
                  <input type="text" name='image_url' value={file}
                     onChange={(e)=>handleChange(e)} />
               </p>
                
                <p>
                    <button id="sub_btn" type="button" onClick={updatewatch} >Edit Watch</button>
                </p>
            </form>
        </div>
    )

}