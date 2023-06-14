const storeUser =(user) =>{
    const currentUser ={
        image:user.photoURL,
        email:user.email,
        name:user.displayName,
        status:"student"
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)

    })
    .then(res =>res.json())
    .then(data => {
        console.log(data)
    })

}
export default storeUser;