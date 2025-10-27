import React, { useEffect, useState } from 'react'
import client from '../utility/contentfulClient';

function useImages() {
    const [images, setImages] = useState([]);
    async function fetchImages() {
        try {
            const res = await client.getEntries({ content_type: "bicImages" });
            const fetchedImages = res.items.map(
                (item) => 'https:' + item.fields.image.fields.file.url
            )
            setImages(fetchedImages);
        }
        catch (err) {
            console.log("err in fetching images: ", err)
        }
    } 
    useEffect(()=>{
        fetchImages();
    },[])
    return { images}
}


export default useImages;