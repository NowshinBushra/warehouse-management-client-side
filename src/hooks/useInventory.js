import { useEffect, useState } from 'react';

const useInventory = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://glacial-temple-62836.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])


    return [inventories, setInventories];
};

export default useInventory;