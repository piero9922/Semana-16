PREGUNTAS:

1.- ¿Que es Vuex?

    - Vuex es una libreria de gestión de estado para aplicaciones Vue.js y sirve como una tienda centralizada para todos los componentes de una aplicación, con reglas que aseguran que el estado solo pueda mutarse de manera predecible.

    - La ventaja de tener este tipo de esquema es que la lógica de la comunicación entre los distintos componentes esta separada y centralizada.

    Que esto sea así evitará tener separados los distintos métodos en cada uno de nuestros componentes, es más  facil de mantener, es más facil de escalar, evita duplicidades, evita refactorizar el código en multiples ficheros.

    -Una de las desventajas es que necesitas hacer mas codigo para llegar a tu objetivo

2.-¿Cuáles son los principales conceptos de VUEX?

    - En primer lugar están los componentes, y estos tienen la capacidad de emitir acciones.

    - Las acciones que emiten tienen cierta lógica, tanto sincrona como asíncrona, es en este punto donde existe la comunicación con las API´s externas.

    - Una vez las acciones realizan toda esta lógica emiten (commit) confirmaciones que mutan el estado de nuestra aplicación ejecutando métodos específicos para cada tipo.

    -Tras aplicar la mutación se altera el estado de la aplicación (state) y los  componentes afectados en el proceso vuelven a ser renderizados para mostrar los cambios.

3.-¿Por qué y para qué se necesitaria utilizar un administrador de estados?

    -Por que grandes aplicaciones a menudo pueden crecer en complejidad, debido a múltiples partes de estado dispersas en muchos componentes y las interacciones entre ellos. Para resolver este problema, Vue ofrece vuex, una libreria de gestión de estado.
