import { useState, useEffect } from 'react'
import { elon } from '../constants/elonmusk.csv'

const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(elon)
        console.log(data)
    },[]);

    return ( 
        <p>
            table
        </p>
     );
}
 
export default Table;