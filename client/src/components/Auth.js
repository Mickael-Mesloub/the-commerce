import axios from 'axios';



const Auth = (e, url, setLogState) => {
    const formData = new FormData(e.target);

    axios.post(url, {
        email: formData.get('email'),
        password: formData.get('password')
    })
        .then(response => {
            console.log(response);
            if(response) {
                setLogState(true)
            }
        })
        .catch(error => {
            console.log(error)
            formData.get(error);
            setLogState(false)
        })
}

export default Auth;