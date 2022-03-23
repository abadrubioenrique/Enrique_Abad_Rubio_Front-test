
export const getAllImages = (pageNum,setCards, cards ,setLoading) => {
    fetch(`http://localhost:3100/images?page=${pageNum}`,{method: 'GET'}).then(response=>{
        if(response.ok){
            return response.json();
        }
        throw response;
    })
    .then(data=>{
        let allCards= new Set([...cards,...data])
        setCards([...allCards]);
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
