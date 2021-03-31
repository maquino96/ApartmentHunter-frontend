import {useState} from "react";
import { Form } from "semantic-ui-react";

const Filter = ({filterObj, setFilterObj, setZipcode, lightMode}) => {

    const [zipValue, setZipValue] = useState('')
    
   
    const handleFilter = (e) => {
        const key = e.target.name
        const value = e.target.value
        setFilterObj({
            ...filterObj,
            [key]: value
        })
    }

    const handleZipcode = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setZipcode(zipValue)
        setZipValue('')
    }
    return(
        <>
        <Form onSubmit={handleZipcode}>
            
            <div>
                <Form.Input
                    width={15}
                    placeholder="Search by zipcode" 
                    name='zipcode'
                    value={zipValue} 
                    onChange={(e)=>setZipValue(e.target.value)}   
                    action='Search' 
                />
                {/* <Form.Button type='submit'> Search </Form.Button> */}
            </div>
            
            
        </Form>
        
        <div className='grid-filter' style={{marginTop: '20px'}}>
            <h3 style={{color: lightMode ? 'black' : 'white'}}>Filter Results</h3>

            <select onChange={handleFilter} name="priceMax" className="ui dropdown" style={{marginRight: '1em'}}>
                <option value="">Price</option>
                <option value="0">Low to High</option>
                <option value="1">High to Low</option>
            </select>
            <select onChange={handleFilter} name="beds" className="ui dropdown" style={{marginRight: '1em'}}>
                <option value="">Number of Bedrooms</option>
                <option value="0">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
            </select>
            <select onChange={handleFilter} name="baths" className="ui dropdown" style={{marginRight: '1em'}}>
                <option value="">Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
            </select>
            <div className="ui input" onChange={handleFilter}>
                <input type="text" name="squareFeet" placeholder="Set Min Sq. Footage..." value={filterObj.squareFeet} style={{marginRight: '1em'}}></input>
            </div>  
            <div className="ui input" onChange={handleFilter}>
                <input type="text" name="location" placeholder="Search by Location..." value={filterObj.location} style={{marginRight: '1em'}}></input>
            </div>     
        </div>
        </>
    )


}

export default Filter;