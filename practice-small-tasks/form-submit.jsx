export default function SimpleForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return <form onSubmit={handleSubmit}><button>Save</button></form>;
}
