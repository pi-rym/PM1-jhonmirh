


    function convertAllActivities() {
        //Seleccionar el contenedor donde queremos agregar las actividades.
        
        const containerActivities = document.querySelector('#activities-container');
        containerActivities.innerHTML='';
    
       // Vaciar el contenido actual del contenedor. Se puede hacer manipulando la propiedad innerHTML.
    
        // Obtener el listado completo de actividades mediante el método correspondiente 
        //de una instancia de Repository.
        //const activities = Repository.getallActivities();
        //“Mapear” el listado de actividades para convertirlos todos en elementos HTML.
        //Para ello utilizar el método “map”, aprovechando como callback la función que hicimos en el punto anterior. Guardar el resultado del mapeo en una nueva variable.
    
        const htmlActivities=repository.getallActivities().map(createHTMLActivity);
        //“Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado.
        //Para ello puedes utilizar el método forEach.
        htmlActivities.forEach((activityHTML) => containerActivities.appendChild(activityHTML));
            
        
    }
        function createHTMLActivity({id,title,descripcion,imgUrl} ) {
            // Recibir por parámetro un objeto instancia de Activity.
                //Extraer sus propiedades en variables utilizando destructuring.
               // const {id,title,descripcion,imgUrl} = activity;
                
                // Crear los elementos HTML que formarán parte de la tarjeta.
                //Ej: <h3> para el título, <p> para la descripción, <img> para la imagen.
                const htmlTitle= document.createElement('h3');
                 
                const htmlDescription = document.createElement('p');
                
                const htmlImg = document.createElement('img');

                const htmlIcono = document.createElement('span');
            
                //Asignar los valores a las propiedades correspondientes a cada uno de los elementos.
                //Ej: a la propiedad innerHTML del elemento del título, asignar el valor correspondiente.
                //A la propiedad src del elemento de la imagen, asignar el valor correspondiente.
                htmlTitle.innerHTML = title;
                htmlDescription.innerHTML = descripcion;
                htmlImg.src = imgUrl;
                htmlIcono.innerHTML= '<img src="./img/borar.jpg" alt="Borar Actividad">';
             
                //Agregar a los elementos las clases CSS correspondientes
                //que hayas implementado para darles estilos.
                htmlTitle.classList.add('class-title');
                htmlDescription.classList.add('class-description');
                htmlIcono.id = 'icono';
                //Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.
            
                
                const containerHTML=document.createElement('div');
            
            // //“Appendear” al nuevo <div> los elementos creados anteriormente .
                
                
            containerHTML.appendChild(htmlTitle);
            containerHTML.appendChild(htmlDescription);
            containerHTML.appendChild(htmlImg);

            containerHTML.appendChild(htmlIcono);
            //Asignar al <div> la clase CSS que tengas implementada para darle estilos.
                
            //Retornar el <div> finalizado con todos los elementos correspondientes dentro
            
            containerHTML.className='celdas';
            containerHTML.id='activity-card'+id;
            
            htmlIcono.addEventListener("click", () => borrarActividad(id));

            return containerHTML;

            }
    
    function handlerButton(event) {
        event.preventDefault();
        //Seleccionar los inputs de title, description e imgUrl.
    
    
        const titleInput = document.getElementById('title-input');
        const descriptionInput = document.getElementById('description-input');
        const imgUrlInput = document.getElementById('img-url-input');
    
        //Tomar los valores ingresados en los inputs y guardarlos en variables.
        //Validar que estos valores estén completos. De lo contrario deberá cortar
        //el proceso y mostrar un mensaje avisando al usuario de que hay datos incompletos.
        const titleValue = titleInput.value
        const descriptionValue = descriptionInput.value;
        const imgUrlValue = imgUrlInput.value;
    
        //Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.
    
        //Invocar la función que implementamos en el punto anterior para “refrescar”
        //el contenedor de actividades.
        if (titleValue === '' || descriptionValue === '' || imgUrlValue === '') {
            return alert('Todos los campos son obligatorios')
        }
        
        repository.createActivity(titleValue,descriptionValue,imgUrlValue);
        
        titleInput.value = '';
        descriptionInput.value = '';
        imgUrlInput.value = '';

        convertAllActivities();
        
        
        }
    
    function borrarActividad(id) {
            repository.deleteActivity(id);
            convertAllActivities();
    } 
    
    
    
    
    //Seleccionar el botón que disparará el evento de agregar actividad y agregar un Event Listener.
    //El evento, al dispararse, debe ejecutar la función que creamos en el punto anterior.
    const button=document.getElementById('button');
    button.addEventListener('click',handlerButton);
    const repository = new Repository();

 