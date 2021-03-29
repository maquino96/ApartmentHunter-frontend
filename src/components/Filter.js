import React from "react";

const Filter = ({filterObj, setFilterObj}) => {
   
    const handleFilter = (e) => {
        const key = e.target.name
        const value = e.target.value
        setFilterObj({
            ...filterObj,
            [key]: value
        })
    }
    return(
        <div className='grid-filter'>
            <h1>Filter Results</h1>

            <select onChange={handleFilter} name="priceMax" className="ui dropdown">
                <option value="">Price</option>
                <option value="0">Low to High</option>
                <option value="1">High to Low</option>
            </select>
            <select onChange={handleFilter} name="beds" className="ui dropdown">
                <option value="">Number of Bedrooms</option>
                <option value="Studio">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
            </select>
            <select onChange={handleFilter} name="baths" className="ui dropdown">
                <option value="">Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
            </select>
            <div className="ui input" onChange={handleFilter}>
                <input type="text" name="squareFeet" placeholder="Set Minimum Square Footage..." value={filterObj.squareFeet}></input>
            </div>  
            <div className="ui input" onChange={handleFilter}>
                <input type="text" name="location" placeholder="Search by Location..." value={filterObj.location}></input>
            </div>     
        </div>
    )


}

export default Filter;