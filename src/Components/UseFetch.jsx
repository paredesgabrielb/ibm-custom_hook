import {useState, useFetch} from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    useFetch(()=>{
        fetch(url)
            .then((res) => res.json())
            .then((data) => {setData(data)} )
            .catch((e) => { console.error(e)})
    },[]);

    return [data];
}

export default UseFetch
