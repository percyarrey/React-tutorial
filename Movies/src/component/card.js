import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import { GridLoader,BounceLoader,BeatLoader } from 'react-spinners';
export default function Card(props) {
    const [loading,setloading]=React.useState(true)  
    const [moviesdata,setmoviesdata] = React.useState({})
    let key=props.myid
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '255c233b7bmsh57f646830e62342p196947jsna52efd43ed47',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    React.useEffect(()=>{
        fetch(props.head, options)
        .then(response => response.json())
        .then(response => {
            setmoviesdata(response)
            setloading(true)
        })
        .catch(err => console.error(err));
    },[props.head])
    function getmovies(props) {
        if(moviesdata.page!=undefined && moviesdata.results[key].primaryImage==null){
            key+=1
        }
        else if(key>=9){
            key=9
        }
        if (moviesdata.page!=undefined && props=="img") {
            if (moviesdata.results[key].primaryImage!=null){
                return `${moviesdata.results[key].primaryImage.url}`
            }    
        }
        if (moviesdata.page!=undefined && props=="tit") {
            return `${moviesdata.results[key].titleText.text}`
        }
        if (moviesdata.page!=undefined && props=="date") {
            return (
                <div>
                    <div className='text-muted'><span>Release Date </span>{moviesdata.results[key].releaseDate.day}-{moviesdata.results[key].releaseDate.month}-{moviesdata.results[key].releaseDate.year}</div>
                </div>
            )
        }
    }  
    const handleloading= ()=>{
        setloading(false)
    }     
    return(
        <div className=' container-lg'>
            {
                loading ? 
                <BeatLoader color='red' loading={loading} size={10} />
                :null}
                <div className='row'>
                <div className='col-3 p-0 pt-2 rounded-3'>
                <a href={getmovies("img")} target="_blank"><img onLoad={handleloading} src={getmovies("img")} className="img-fluid h-100 rounded-3"/></a>
                </div>
                <div className='col-9'>
                    <h3 className=' text-center fw-bold'>{getmovies("tit")}</h3>
                    <p><LoremIpsum p={1} sentences={6}/></p>
                    <div>{getmovies("date")}</div>
                </div>
                </div>  
        </div>
    )
}