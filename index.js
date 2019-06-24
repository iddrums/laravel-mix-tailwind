let mix = require('laravel-mix');

class Tailwind {

    dependencies() {
        this.requiresReload = 'Tailwind has been installed.please ensure tailwind.js configuration file (node_modules/.bin/tailwind init) has been created, and run "npm run dev" again.';

        return ['tailwindcss'];
    }
    
    register(configPath = './tailwind.js'){
        this.configPath = configPath;
    }
    boot() {
        if(Mix.components.has('sass')){

            Config.processCssUrls = false;
        }

       let tailwindcss = require('tailwindcss');

       console.log(this.configPath);
       
        Config.postCss.push(tailwindcss(this.configPath));
    }
}

mix.extend('tailwind', new Tailwind());