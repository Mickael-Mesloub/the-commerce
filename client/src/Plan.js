/* Dans App, il y a Back (serveur) et Front (client) 
Les deux ont des routes et peuvent communiquer via ces routes, faire des échanges de data
quand on est sur backoffice, admin peut avoir acces a tout mais pas user lambda
donc, on va avoir des routes qu'on appelle "protégées" : seulement pour l'admin, seul lui peut y accéder
il faut protéger la route des 2 côtés ! Front et back 
On doit vérifier la route protégée : 
    1) d'abord sous forme de props ou state côté front (est-il admin?)     
    2) puis côté back avec base de donnée (user est-il dans la base de donnée?) 

Il faut avant tout vérifier côté backend que les routes ne sont pas crashées
Côté serveur, une route ne peut pas être acceptée s'il n'y a pas de JWT
    


auth.js:

const verifyToken = async (req, res, next) => {

    let token = req.headers('Authorization') 

}


page dashboard.js : 

export const Dashboard = () => {
    const {user} = useSelector(state => state)
    useEffect(() => {
        console.log(user)
    },[user])


    useEffect(() => {
        const token = localStorage.getItem('jwt)
        if(token && !user.isLogged) {
            getVerifyToken()
            .then(data => {
                dispatch(loginUser(data))
                navigate('/dashboard')
            })
            .catch(err) => {
                navigate('/logout')
            }
        }
    })
}



*/