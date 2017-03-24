/**
 * Created by dmitricercel on 21.02.17.
 */
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'moment': 'node_modules/moment',
            'ng2-slim-loading-bar': 'node_modules/ng2-slim-loading-bar/bundles/index.umd.js',
            'ng2-dnd': 'node_modules/ng2-dnd/bundles/index.umd.js',
            'ng2-toasty': 'node_modules/ng2-toasty/bundles/index.umd.js',
            'ng2-pagination': 'node_modules/ng2-pagination',


            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

            'ng2-fullpage':               'npm:ng2-fullpage',
            'jquery':                     'npm:jquery/dist/jquery.js',
            'typed':                      'npm:typed.js/dist/typed.min.js',
            'countup':                    'npm:countup.js/dist/countUp.min.js',
            'wow':                        'npm:wowjs/dist/wow.min.js',
            'fullpage.js':                'npm:fullpage.js/dist/jquery.fullpage.js',

            'ts':                         'npm:plugin-typescript@4.0.10/lib/plugin.js',
            'typescript':                 'npm:typescript@2.0.2/lib/typescript.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'moment': {
                defaultExtension: 'js'
            },
            'ng2-pagination':  {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-fullpage': { main: 'ng2-fullpage.js', defaultExtension: 'js' },

        }
    });
})(this);
