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
    

05/03:

    Produits: 
    - Créer produit avec possibilité d'upload plusieurs images :
        > Vérifier si files contient des images -> si non, erreur, si oui :
            > 


    Update images : 
    on récup les ancienens images qu'on filtre avec celles q'uon veut supp 
    les stocker dans tableau images [] sauf si elles se trouvent dans le field deleteImage (fields['deleteImage'].include OU fields.deleteImages.include)
    on récup les nouvelles images qu'on veut ajouter qui se trouvent dans le champ images (files.images)
    quand on a récupéré les images, on supp les images qu'on veut supp (boucle foreach)
    une fois supprimées, rajouter les images qu'on veut ajouter (images.push(...newImages))



    - Gérer affichage fiche produit + images
    - Modif / supp images quand supp produit

    Récupérer champ deletedImages[0]
    dans Postman: copier nom image à supprimer 
    les supprimer + fs unlink 
    - Form création/modification de produit

    Admin: 
    - Gérer les erreurs du register: messages différents selon l'erreur
    - Faire page admin avec affichage produits
    - "" "" "" "" form créer/modifier un produit
    - Protéger la route: accessible que si isAdmin true

    Logout: 
    - Vérifier le bon fonctionnement du logout: navigate si logged false


*/