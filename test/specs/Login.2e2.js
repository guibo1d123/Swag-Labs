import { expect, browser, $ } from '@wdio/globals'
import AllureReporter, { step } from '@wdio/allure-reporter';

describe('Validar titulo SWAGLABS', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    
    it('Validar que diga SWAGLABS ', async () => {


        // Validar que tenga titulo SWAGLABS
        const swaglabs = await $('.login_logo');
        //Valida que tiene ese texto 
        await expect(swaglabs).toHaveText('Swag Labs')

        await browser.pause(5000);
    })
    

    

})


// Login - Camino Feliz
describe('Login- Ingresar con el usuario standard_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {

        //AllureReporter.addDescription("Abre la pantalla");
        //AllureReporter.addSeverity('blocker');
        
        //step('Maximizar la pantalla', async () => {
            await browser.url(`https://www.saucedemo.com/`)
            await browser.maximizeWindow();
        //})

        
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

describe('Login- ingresar  con el usuario  locked_out_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('slocked_out_user');

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

describe('Login - Ingresar con el usuario  problem_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('problem_user');

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

describe('Login - Ingresar con el usuario  performance_glitch_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('performance_glitch_user');

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

describe('Login - Ingresar con el usuario  error_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('error_user');

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

describe('Login - Ingresar con el usuario  visual_user', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await browser.maximizeWindow();

    })

    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario = (await $('[data-test="username"]'));
        await usuario.click();
        await usuario.setValue('visual_user');

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


