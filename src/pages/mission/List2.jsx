const list2Data = ["Un site internet offre de nombreuses opportunités pour :",
  "Faire connaître les services qu'offre l'Eglise locale et lancer de nouvelles activités;",
 "Créer des campagnes d'information, d'évangélisation et annoncer la Bonne Nouvelle;",
  "Communiquer avec les paroissiens de manière personnalisée et encourager les interactions entre membres de la communauté."]



  export default function List2(){

      const items = list2Data.map((item, index) => (
        <li key={index}>{item}</li>
      ));
   return( <ul className="list-1">{items}</ul>
   )
  
} 