const Auth = (event, url, state, setState, dispatcher, actionCreator, ) => {

    const formData = new FormData(event.target);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state}`,
            }
            
        })
        .then(response => {
            response.json()
            .then(data => {
                if(response.ok){
                    dispatcher(actionCreator({email: data.user.email, isAdmin: data.user.isAdmin}))
                    setState(data.token)
                    localStorage.setItem('jwt' , data.token)
                } else {
                    console.log('err');
                }
            })
            .catch(error => {
                console.log(error)
                formData.get(error)
            })
        })
}

export default Auth;