
export const getAllImages = (setCards,setLoading) => {
    fetch('http://localhost:3100/images',{method: 'GET'}).then(response=>{
        if(response.ok){
            return response.json();
        }
        throw response;
    })
    .then(data=>{
        setCards(data);
    })
    .catch(error=>{
        console.error("Error al realizar la petición Http :", error);

    })
    .finally(()=>{
        setLoading(false);
    })
    ;
}

export const likedImage = (id) => {
    fetch(`http://localhost:3100/images/${id}/likes`,{method: 'POST'})
    .catch(error=>{
        console.error("Error al realizar la petición Http :", error);

    })
    ;
}
