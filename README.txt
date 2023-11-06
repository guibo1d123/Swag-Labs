1- Al abrir la carpeta en el visual Studio code realizar la instalacion de las dependencias:
NPM INSTALL 
2-Se realizaron dos archivos para test : Login , Producto( valida el proceso del inventario , elementos y procesos del carrito, checkout)
3-Estos archivos se ejecutan de manera individual, en el documento wdio.conf.js en la seccion de :

specs: [
        './test/specs/Producto.2e2.js' (Podes cambiar el nombre del archivo a ejecutar, tambien se pueden añadir todas las pruebas )
    ],

POR EJEMPLO:

specs: [
        './test/specs/Producto.2e2.js',
	'./test/specs/Login.2e2.js'
    ],

4- Una vez se ejecuten las prueba con:  npm run wdio y se termine la prueba se aparecera de manera automatica una carpeta de allure-results
5- Ejecutar en la terminal: allure generate allure-results
6- Luego ejecutar el : allure open ( Se generara otra carpeta allure-report) Se abrira una pestaña con un reporte HTML de allure 
7- En el lado izquierdo del html  podras elegir cada validacion que se realizo de la prueba, al hacer clic en cada una de ellas podras verificar inclusive la API con el get, response y en cada accion un screenshot de cada step.
*Programe el reporte para que en cada accion termine con un screenshot pero se pueden cambiar la configuracion para  cuando hay un bug :

Ingresa en wdio.conf.js al final :

 afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error, result, passed) {
            await browser.takeScreenshot();
        }
    },

DEJAR SOLO EN ERROR.

9- Es importante que cada vez que se corran alguna prueba y que te carge el reporte se tienen que eliminar las dos carpetas: ALLURE-REPORT Y ALLURE-RESULTS  para que genere otro reporte nuevamente :

-npm run wdio
-allure generate allure-result
-allure open 

10- Para correr las pruebas en el el browser de microsoft edge , se configuro en el archivo de wdio.conf.js y para correr los test es necesario correr el npx wdio .... Se abrira el browser. 