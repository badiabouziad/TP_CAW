export default function Mycontacts({ contacts }) {
  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <div className="contact" key={contact.numero}>
          <h2>Nom : {contact.nom}</h2>
          <br></br>
          <br></br>
          <h3>Numéro : {contact.numero}</h3>
          <br></br>
          <br></br>
          <h3>Adress email : {contact.email}</h3>
        </div>
      ))}
    </div>
  );
}
