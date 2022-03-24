const URL = "http://localhost:3100"
export const getAllImages = (pageNum,setCards, cards ,setLoading, setError) => {
    fetch(`${URL}/images?page=${pageNum}`,{method: 'GET'}).then(response=>{
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
        setError("Error al realizar la petición Http");
    })
    .finally(()=>{
        setLoading(false);
    })
    ;
}

export const likeImage = (id) => {
    fetch(`${URL}/images/${id}/likes`,{method: 'POST'})
    .catch(error=>{
        console.error("Error al realizar la petición de like:", error);
    })
    ;
}
