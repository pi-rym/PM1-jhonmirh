class Activity{
    constructor(id,title,descripcion,imgUrl){
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
}
}

class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;
    }

    getallActivities(){
        return this.activities;
}

    createActivity(title,descripcion,imgUrl){
        const id = this.id++;
        const activity = new Activity(id,title,descripcion,imgUrl);
        this.activities.push(activity);
    }
}

deleteActivity(id) (   this.activities = this.activities.filter(activity => activity.id !== id)
)

function createHTMLActivity(activity) {
// Recibir por parámetro un objeto instancia de Activity.
    //Extraer sus propiedades en variables utilizando destructuring.
    const {id,title,descripcion,imgUrl} = activity;

    // Crear los elementos HTML que formarán parte de la tarjeta.
    //Ej: <h3> para el título, <p> para la descripción, <img> para la imagen.
    const htmlTitle= document.createElement('h3');
     
    const htmlDescription = document.createElement('p');
    
    const htmlImg = document.createElement('img');

    //Asignar los valores a las propiedades correspondientes a cada uno de los elementos.
    //Ej: a la propiedad innerHTML del elemento del título, asignar el valor correspondiente.
    //A la propiedad src del elemento de la imagen, asignar el valor correspondiente.
    htmlTitle.innerHTML = title;
    htmlDescription.innerHTML = descripcion;
    htmlImg.src = imgUrl;

    //Agregar a los elementos las clases CSS correspondientes
    //que hayas implementado para darles estilos.
    htmlTitle.classList.add('class-title');
    htmlDescription.classList.add('class-description');

    //Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.

    
    const containerHTML=document.createElement('div');

// //“Appendear” al nuevo <div> los elementos creados anteriormente .
    
    
containerHTML.appendChild(htmlTitle);
containerHTML.appendChild(htmlDescription);
containerHTML.appendChild(htmlImg);
//Asignar al <div> la clase CSS que tengas implementada para darle estilos.
    
//Retornar el <div> finalizado con todos los elementos correspondientes dentro
containerHTML.className='card';
containerHTML.id='activity-card'+id;

}
function createAllActivities() {
    //Seleccionar el contenedor donde queremos agregar las actividades.
    
    const containerActivities = document.getElementById('activities-container');
    containerActivities.innerHTML='';

   // Vaciar el contenido actual del contenedor. Se puede hacer manipulando la propiedad innerHTML.

    // Obtener el listado completo de actividades mediante el método correspondiente 
    //de una instancia de Repository.
    const repository = repository.getallActivities();
    //“Mapear” el listado de actividades para convertirlos todos en elementos HTML.
    //Para ello utilizar el método “map”, aprovechando como callback la función que hicimos en el punto anterior. Guardar el resultado del mapeo en una nueva variable.

    const htmlActivities= activities.map((activity) => createHTMLActivity(activity));
    //“Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado.
    //Para ello puedes utilizar el método forEach.
    htmlActivities.forEach(activityHTML => {
        containerActivities.appendChild(activityHTML);
        
    });
}

function handlerButton() {
    event.preventDefault();
    //Seleccionar los inputs de title, description e imgUrl.


    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const imgUrlInput = document.getElementById('img-url-input');

    //Tomar los valores ingresados en los inputs y guardarlos en variables.

    //Validar que estos valores estén completos. De lo contrario deberá cortar
    //el proceso y mostrar un mensaje avisando al usuario de que hay datos incompletos.
    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;
    const imgUrlValue = imgUrlInput.value;

    //Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.

    //Invocar la función que implementamos en el punto anterior para “refrescar”
    //el contenedor de actividades.
    if (titleValue === '' || descriptionValue === '' || imgUrlValue === '') {
        return alert('Todos los campos son obligatorios');

    Repository.createActivity(titleValue,descriptionValue,imgUrlValue);

    convertAllActivities();
      
}
}


//Seleccionar el botón que disparará el evento de agregar actividad y agregar un Event Listener.
//El evento, al dispararse, debe ejecutar la función que creamos en el punto anterior.
const button=document.getElementById('button');
button.addEventListener('click',handlerButton);

