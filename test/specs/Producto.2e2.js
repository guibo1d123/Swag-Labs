import { expect, browser, $ } from '@wdio/globals'
import assert from 'assert';
import AllureReporter, { step } from '@wdio/allure-reporter';



describe('Login-', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        // Inicializar el objeto "browser" antes de las pruebas
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })



    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('standard_user');

    })

    it('Hacer clic en Password ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="password"]'));
        await usuario.click();
        await usuario.setValue('secret_sauce');

    })

    it('Hacer clic en Login ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="login-button"]'));
        await usuario.click();;
        await browser.pause(3000);

    })


    

})

describe('Validar titulo SWAGLABS', () => {


    it('Validar que diga SWAGLABS ', async () => {


        // Validar que tenga titulo SWAGLABS
        const swaglabs = await $('.app_logo');
        //Valida que tiene ese texto 
        await expect(swaglabs).toHaveText('Swag Labs')

        await browser.pause(3000);
    })
    

})

describe('Validar que diga el titulo Products', () => {


    it('Validar que diga Products ', async () => {


        // Validar que tenga titulo SWAGLABS
        const swaglabs = await $('.title');
        //Valida que tiene ese texto 
        await expect(swaglabs).toHaveText('Products')

        await browser.pause(3000);
    })
    

})

describe('Validar titutlo Products', () => {


    it('Validar que diga Products ', async () => {


        // Validar que tenga titulo SWAGLABS
        const swaglabs = await $('.title');
        //Valida que tiene ese texto 
        await expect(swaglabs).toHaveText('Products')

        await browser.pause(3000);
    })



    

})

describe('Validar titulo Carrito de compras', () => {


    it('Validar la presencia del carrito de compras', async () => {
    
        const boton = await $('.shopping_cart_link');
        const estaPresente = await boton.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });
    


})

describe('Validar Listado desplegable', () => {


    it('Validar la presencia del listado desplegable', async () => {
    
        const desplegable = await $('.product_sort_container');
        const estaPresente = await desplegable.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });
    


})

describe('Validar que este presente el Bar menu', () => {


    it('Validar la presencia del Bar menu', async () => {
    
        const barmenu = await $('.header_label');
        const estaPresente = await barmenu.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });
    


})


describe('Validar icono de twitter y redireccionar la URL ', () => {


    it('Validar la presencia del icono twitter ', async () => {
    
        const enlaceTwitter = $('a[href="https://twitter.com/saucelabs"]');
        const estaPresente = await enlaceTwitter.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Hacer clic en el boton twitter  y abrir una nueva pestaña', async () => {
        
    
        // Hacer clic en el icono
        const enlaceTwitter = $('a[href="https://twitter.com/saucelabs"]');
        await enlaceTwitter.click();
    
        // Esperar a que se abra una nueva pestaña
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2, {
            timeout: 5000,
            timeoutMsg: 'No se abrió una nueva pestaña después de hacer clic en el botón.'
        });
    
        // Cambiar a la nueva pestaña
        const ventanas = await browser.getWindowHandles();
        await browser.switchToWindow(ventanas[1]);
    
        // Verificar la URL de la nueva pestaña
        const nuevaURL = await browser.getUrl();
        assert.equal(nuevaURL, 'https://twitter.com/saucelabs', 'La URL de la nueva pestaña no es la esperada.');
    
        // Cerrar la nueva pestaña
        await browser.closeWindow();
    
        // Volver a la pestaña original (si es necesario)
        await browser.switchToWindow(ventanas[0]);
    });


    


})

describe('Validar icono de Facebook y redireccionar la URL ', () => {


    it('Validar la presencia del icono Facebook ', async () => {
    
        const enlacefacebook = $('a[href="https://www.facebook.com/saucelabs"]');
        const estaPresente = await enlacefacebook.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Hacer clic en el boton facebook  y abrir una nueva pestaña', async () => {
        
    
        // Hacer clic en el icono
        const enlacefacebook = $('a[href="https://www.facebook.com/saucelabs"]');
        await enlacefacebook.click();
    
        // Esperar a que se abra una nueva pestaña
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2, {
            timeout: 5000,
            timeoutMsg: 'No se abrió una nueva pestaña después de hacer clic en el botón.'
        });
    
        // Cambiar a la nueva pestaña
        const ventanas = await browser.getWindowHandles();
        await browser.switchToWindow(ventanas[1]);
    
        // Verificar la URL de la nueva pestaña
        const nuevaURL = await browser.getUrl();
        assert.equal(nuevaURL, 'https://www.facebook.com/saucelabs', 'La URL de la nueva pestaña no es la esperada.');
    
        // Cerrar la nueva pestaña
        await browser.closeWindow();
    
        // Volver a la pestaña original (si es necesario)
        await browser.switchToWindow(ventanas[0]);
    });


    


})


describe('Validar Producto 1 -image', () => {


    it('Validar la presencia de la imagen del producto 1', async () => {
    
        const imagen = await $('.inventory_item_img');
        const estaPresente = await imagen.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Validar que diga Sauce Labs Backpack ', async () => {


        // Validar que tenga titulo Sauce Labs Backpack
        const tituloproducto1 = await $('.inventory_item_name ');
        //Valida que tiene ese texto 
        await expect(tituloproducto1).toHaveText('Sauce Labs Backpack')

        await browser.pause(3000);
    })

    it('Validar La descripcion ', async () => {


        // Validar que tenga titulo Sauce Labs Backpack
        const descripcion1 = await $('.inventory_item_desc');
        //Valida que tiene ese texto 
        await expect(descripcion1).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')

        await browser.pause(3000);
    })

    it('Validar precio ', async () => {


        // Validar que tenga precio
        const precio1 = await $('.inventory_item_price');
        //Valida que tiene ese texto 
        await expect(precio1).toHaveText('$29.99')

        await browser.pause(3000);
    })


    it('Validar la presencia del  boton add to cart ', async () => {
    
        const agregaralcarro = $('[data-test="add-to-cart-sauce-labs-backpack"]');
        const estaPresente = await agregaralcarro.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    


})


describe('Validar el Producto 2 conteng la imagen', () => {


    it('Validar la presencia de la imagen del producto 2', async () => {
    
        const imagen2 = await $('.inventory_item_img');
        const estaPresente = await imagen2.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Validar que diga Sauce Labs Backpack ', async () => {


        // Validar que tenga titulo Sauce Labs Backpack
        const tituloproducto2 = await $('//div[normalize-space()="Sauce Labs Bike Light"]');
        //Valida que tiene ese texto 
        await expect(tituloproducto2).toHaveText('Sauce Labs Bike Light')

        await browser.pause(3000);
    })

    
    it('Validar precio ', async () => {


        // Validar que tenga precio
        const precio2 = await $('//div[@id="inventory_container"]//div[2]//div[2]//div[2]//div[1]');
        //Valida que tiene ese texto 
        await expect(precio2).toHaveText('$9.99')

        await browser.pause(3000);
    })


    it('Validar la presencia del  boton add to cart ', async () => {
    
        const agregaralcarro = $('[data-test="add-to-cart-sauce-labs-bike-light"]');
        const estaPresente = await agregaralcarro.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    


})

describe('Prueba de carrito de compras', () => {


  it('Hacer clic en agregar en el carrito producto 1  ', async () => {

        // Hacer clic 
       const usuario = (await $('[data-test="add-to-cart-sauce-labs-backpack"]'));
       await usuario.click();;
       await browser.pause(3000);

    })

    it('Hacer clic en agregar en el carrito producto 2  ', async () => {

        // Hacer clic 
        const usuario = (await $('[data-test="add-to-cart-sauce-labs-bike-light"]'));
        await usuario.click();;
        await browser.pause(3000);

})

    it('verificar que se agregaron dos productos ', async () => {

        // Hacer clic 
       const compras = (await $('.shopping_cart_badge'));
        //Valida que tiene ese texto 
       await expect(compras).toHaveText('2');
       await browser.pause(3000);

    })

    it('Hacer clic al carrito', async () => {

        // Hacer clic 
        const carrito = (await $('.shopping_cart_link'));
        //Valida que tiene ese texto 
        await carrito.click();
        await browser.pause(3000);

    })

    it('Validar los dos productos ', async () => {
    
        const producto1 = $('//div[@id="cart_contents_container"]//div[3]');
        const estaPresente = await producto1.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Validar los dos productos ', async () => {
    
        const producto2 = $('(//div[@class="cart_item"])[2]');
        const estaPresente = await producto2.isExisting();
    
        // Validar que el botón o icono esté presente.
        if (!estaPresente) {
            throw new Error('El botón o icono no está presente en la página.');
        }
    });

    it('Eliminar los productos', async () => {
        const remover1 = $('[data-test="remove-sauce-labs-backpack"]');
        await remover1.click();
    
    });

    it('Eliminar los productos2', async () => {
        const remover2 = $('[data-test="remove-sauce-labs-bike-light"]');
        await remover2.click();
    
    });

    it('Regresar', async () => {
        const regresar = $('[data-test="continue-shopping"]');
        await regresar.click();
    
    });

    it('Hacer clic en agregar en el carrito producto 1 ', async () => {

        // Hacer clic 
       const usuario = (await $('[data-test="add-to-cart-sauce-labs-backpack"]'));
       await usuario.click();;
       await browser.pause(3000);

    })

    

    it('Hacer clic al carrito', async () => {

        // Hacer clic 
        const carrito = (await $('.shopping_cart_link'));
        //Valida que tiene ese texto 
        await carrito.click();
        await browser.pause(3000);

    })

    it('Checkout', async () => {

        // Hacer clic 
        const checkout = (await $('[data-test="checkout"]'));
        //Valida que tiene ese texto 
        await checkout.click();
        await browser.pause(3000);

    })


    it('Checkout Your information-Name ', async () => {

        // Hacer clic para colocar el nombre
        const usuario = (await $('[data-test="firstName"]'));
        await usuario.click();
        await usuario.setValue('Grecia');

    })

    it('Checkout Your information-Last Name ', async () => {

        // Hacer clic para colocar el nombre
        const usuario = (await $('[data-test="lastName"]'));
        await usuario.click();
        await usuario.setValue('Grecia');

    })

    it('Checkout Your information-Hacer clic en continuar sin completar los campos ', async () => {

        // Hacer clic para colocar el nombre
        const usuario = (await $('[data-test="continue"]'));
        await usuario.click();

    })

    it('Checkout Your information-Codigo postal', async () => {

        // Hacer clic para colocar el nombre
        const usuario = (await $('[data-test="postalCode"]'));
        await usuario.click();
        await usuario.setValue('1607');

    })

    it('Hacer clic en continuar ', async () => {

        // Hacer clic
        const usuario = (await $('[data-test="continue"]'));
        await usuario.click();
        await browser.pause(3000);

    })

    it('Hacer clic en Finish ', async () => {

        // Hacer clic
        const usuario = (await $('[data-test="finish"]'));
        await usuario.click();
        await browser.pause(3000);

    })

    it('Validar  Thank you for your order!', async () => {

        // Validar que tenga titulo 
        const orden = await $('.complete-header');
        //Valida que tiene ese texto 
        await expect(orden).toHaveText('Thank you for your order!')

        await browser.pause(3000);

    })

    it('Back home', async () => {

        
        const home = await $('[data-test="back-to-products"]');
        await home.click();

        await browser.pause(3000);

    })


})

describe('Validaciones del bar menu con cada items', () => {

    it('Hacer clic en el menu bar', async () => {
        const barmenu = await $('#react-burger-menu-btn');
        await barmenu.click();

        await browser.pause(3000);

    })

    it('Hacer clic en el menu bar', async () => {
        const barmenu = await $('#react-burger-menu-btn');
        await barmenu.click();

        await browser.pause(3000);

    })

    it('Hacer clic en el item *all item  y abrir una nueva pestaña', async () => {
        
    
        // Hacer clic en el icono
        const item1 = $('a[href="https://www.saucedemo.com/inventory.html"]');
        await item1.click();
    
        // Verificar la URL de la nueva pestaña
        const nuevaURL = await browser.getUrl();
        assert.equal(nuevaURL, 'https://www.saucedemo.com/inventory.html', 'La URL de la nueva pestaña no es la esperada.');
  
   
    });

    it('Hacer clic en el item *about  y abrir una nueva pestaña', async () => {
        
    
        // Hacer clic en el icono
        const item2 = $('a[href="https://saucelabs.com/"]');
        await item2.click();
    
       // Verificar la URL de la nueva pestaña
       const nuevaURL = await browser.getUrl();
       assert.equal(nuevaURL, 'https://saucelabs.com/', 'La URL de la nueva pestaña no es la esperada.');
       browser.switchToWindow(0);
       await browser.pause(3000);

    });

    it('Hacer clic cerrar sesion', async () => {
        
    
        const cerrarsesion= await $('//a[@id="logout_sidebar_link"]');
        await cerrarsesion.click();

        await browser.pause(3000);
    });

    


})