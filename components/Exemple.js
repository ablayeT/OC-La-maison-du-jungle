import React, { useState } from "react";

function Exemple() {
  const [count, setcount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  return isEmpty ? (
    <>
      <div>{count ? <p>Vous avez cliqué {count}fois </p> : null}</div>
      <button onClick={() => setcount(count + 1)}>Cliquez ici</button>
      <button onClick={() => setcount(0)}>vider le compte</button>
      <button onClick={() => setIsEmpty(false)}>Fermer le count</button>
    </>
  ) : (
    <>
      <button onClick={() => setIsEmpty(true)}>Ouvrir le compte</button>

      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}

export default Exemple;
