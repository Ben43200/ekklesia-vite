const List1 = () =>{
    const List1Data = ["Les sites Web, qui sont un type de média numérique, offrent notamment les avantages suivants :",
       " Ils encouragent l'interaction sociale.",
        "Ils peuvent générer du trafic et augmenter les ventes.",
        "Ils peuvent promouvoir la notoriété de la marque.",
        "Ils peuvent aider à se développer."]
        const items = List1Data.map((item, index) => (
            <li key={index}>{item}</li>
          ));
       return( <ul>{items}</ul>
       )
      
    } 
    export default List1