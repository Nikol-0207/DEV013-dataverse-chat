# Data Verse Chat
Este proyecto es la version con chat de [Data verse](https://github.com/Nikol-0207/DEV013-dataverse/tree/Nicol_Root) que al igual que el tema usado son las consolas nintendo, ahora ya no solo tendras tarjetas descriptivas de las Consolas Nintendo desde la 1era Genración, en esta versión podras chatear con las mismas consolas y preguntar lo que quieras. Para ello este proyecto cuenta con chat individual en el cual para tener acceso el usuario introducira una [llave Api Key](https://aws.amazon.com/es/what-is/api-key/#:~:text=Una%20clave%20de%20API%20es,entre%20dos%20m%C3%B3dulos%20de%20software.)

[![Screenshot-110.png](https://i.postimg.cc/TwMymXtp/Screenshot-110.png)](https://postimg.cc/wt2T8n8p)

------
### Contenido
* [ 1. Historias de Usuario](#historias-de-usuario)
* [ 2. Diseño de DataVerse Chat](#diseño-de-dataverse-chat)
* [ 3. Dificultades en el proceso de usabilidad](#dificultades-en-el-proceso-de-usabilidad)

------

## Historias de usuario

| Usuario    1      |
| -----------------|
| Como usuario web, quiero además de chater con cada consola, ver algo de información descriptiva |

| Usuario   2      |
| -----------------|
| Como usuario web, quisiera poder ser informado correctamente que clase de error pasa cuando voy a una vista en la url inexistente       |

| Usuario   3      |
| -----------------|
| Como usuario web, deseo visualizar el nombre del 'personaje' con quien estoy chateando. |

| Usuario   4      |
| -----------------|
| Como usuario web fan de los personajes de los videojuegos de cada consola quiero preguntarle por chat todo sobre ello a las consolas. |

## Diseño de DataVerse Chat
**1er Prototipo de baja fidelidad**

[![Screenshot-114.png](https://i.postimg.cc/9FnyMsHq/Screenshot-114.png)](https://postimg.cc/RNwWpsFM)

**Prototipo Final de Alta fidelidad**

[Prototipo en Figma](https://www.figma.com/proto/EASeUQNi9dV6EKLwhCb05b/Wendy-Nicol's-team-library?page-id=0%3A1&type=design&node-id=2313-2&viewport=-4527%2C6797%2C0.52&t=ZEhIV6VZJZbFTfCx-1&scaling=min-zoom&starting-point-node-id=2313%3A2&mode=design)

[![Screenshot-109.png](https://i.postimg.cc/ZnY5FYpK/Screenshot-109.png)](https://postimg.cc/N9VtQcdW)

[![Screenshot-111.png](https://i.postimg.cc/Zn0h5W63/Screenshot-111.png)](https://postimg.cc/dZMfWtHt)

Diseño del prototipo del chat individual

[![Screenshot-113.png](https://i.postimg.cc/Mp1JH2fs/Screenshot-113.png)](https://postimg.cc/HrWhvN25)

Diseño de la página de error


## Dificultades en el proceso de usabilidad

* Las dificultades fueron en mayor parte cuando se navegaba por la url, a menudo en los chats mandaba a la página de error.
* En la url no indicaba el nombre de la consola con la que estaba chateando, por ello podria confundir al usuario.

## Funciones reutilizadas de [Data verse](https://github.com/Nikol-0207/DEV013-dataverse/tree/Nicol_Root)

#### Javascript　

**Ordenar :** Esta función de tres parametros ordena la data por nombre, ya sea ascendente o descendente, el primer parametro manda la data, el segundo indica por cual campo vamos a ordenar asc o desc, en este caso por nombre, tercer parametro indica el valor del selector que vas a seleccionar, si ascendente o descendente.

    export const sortData = (data,sortBy, sortOrder) => {
    if (sortOrder==="asc"){  //verificacion de ordenanza
    return data.sort((a, b) => {
      const nameA = a[sortBy].toUpperCase();  //convierte a mayuscula para no cometer errores al momento de ordenar
      const nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) {   //esta comparacion es para verificar si nameA ira antes de nameB
        return -1;
      }
      if (nameA > nameB) {  //aqui devolvera 1 si nameA debe ir delante
        return 1;
      }
      return 0;  // caso contrario si son iguales
    });
    }else if (sortOrder ==="desc"){  //en caso descendente sera al reves
    return data.sort((a, b) => {
      const nameA = a[sortBy].toUpperCase(); //sortBy indicara por que campo se ordenara asc o desd
      const nameB = b[sortBy].toUpperCase(); //en este caso se ordenara por nombre
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    }
    };

**Filtraciones:** Hay tres filtros, por nombre, tipo y generación. Esta función tiene tres parametros al igual que la anterior. En 1er lugar esta data, en 2do el nombre del selector para poder retornar según el filtro seleccionado, y el 3ero es el valor de dicho selector, si es que tomaste el filtro por tipo, que tipo es el valor como se Consolas de sobremesa o portatil.

    export const filterData = (dataToFilter, filter, value) => {   //filter tiene el         nombre del filtro
    const data = [...dataToFilter];

     if (filter==="select"){   //verifica el nombre, si llega a ser este se filtrara por generacion
    return data.filter((item)=>  //filtra los elementos del data, dependiendo de V o F filtrara aquellos que si pasen
      item.numberGeneration === parseInt(value));  //se compara numero de generacion con el valor del selector
    }
    if (filter==="type-order"){
    return data.filter((item) =>
      item.numberType === parseInt(value)); //se compara numero de tipo
    }

    if (filter==="searchName"){
    return data.filter((item) =>  //filtrara nuevo array con las datas encontradas
      item.name.replaceAll(" ", "").toLowerCase().includes(value.replaceAll(" ", "").toLowerCase())
      //reemplaza todo espacio dentro, convierte a minuscula y compara si el valor esta dentro de lo buscado
    );
    }
    return [];
    };

**Datos de la estadistica:** Se realiza una operación de suma para sacar el total de precios por cada generación.

    export const computeStats = (data) => {
     return data.reduce((sumaPorGeneracion, item) => {
    const { precioDeLanzamiento, generation } = item;
    const generacionNormalizada = generation.toLowerCase().replace(/\s+/g, "");
    sumaPorGeneracion[generacionNormalizada] = (sumaPorGeneracion[generacionNormalizada] || 0) + (typeof precioDeLanzamiento === "number" ? precioDeLanzamiento : parseFloat(precioDeLanzamiento.split(".")[0].replace(/\D/g, "")));

    return sumaPorGeneracion;
    }, {});

    }
