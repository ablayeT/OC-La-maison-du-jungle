<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte'></input>
    <button type='submit'>Entrer</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}