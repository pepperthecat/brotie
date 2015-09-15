// brotie.js

(function () {
    'use strict';
    var broNames = {
        'Bromise': 'Bromise',
        'butWhenIdo': 'butWhenIdo',
        'hereComeTheErrors': 'hereComeTheErrors',
        'errorsAreComing': 'errorsAreComing',
        'Bro': 'Bro',
        'bro': 'bro',
        'TOTALLY': 'TOTALLY',
        'NOWAY': 'NOWAY',
        'isThatEvenAThing': 'isThatEvenAThing',
        'doYouEven': 'doYouEven',
        'iCanHaz': 'iCanHaz',
        'comeAtMe': 'comeAtMe',
        'giveMeProps': 'giveMeProps',
        'hasRespect': 'hasRespect',
        'iDontAlways': 'iDontAlways',
        'braceYourself': 'braceYourself'
    };

    (function nameInput () {
        var form = document.getElementById( 'brotie-form' ),
        submit = document.getElementById( 'start-brotie' );

        Object.keys( broNames ).forEach( function ( broName ) {
            var p = document.createElement( 'p' ),
            input = document.createElement( 'input' ),

            text = document.createTextNode( broName );
            p.appendChild( text );

            input.setAttribute( 'placeholder', 'Rename me, bro' );
            input.setAttribute( 'name', broName );

            form.insertBefore( p, submit );
            form.insertBefore( input, submit );
        });

        submit.addEventListener( 'click', setProNames );
    })();

    function setProNames () {
        Object.keys( broNames ).forEach( function ( broName ) {
            var proName = document.getElementsByName( broName )[0].value || broNames[broName];
            proName = proName.toString().replace( /[^a-z\_]/gmi, '');
            broNames[broName] = proName || broNames[broName];
        });
        brotie();
    }

    function brotie () {
        var brototypeLatest = new XMLHttpRequest();
        brototypeLatest.open( 'GET', 'https://rawgit.com/letsgetrandy/brototype/master/brototype.js', false );
        brototypeLatest.send( null );
        brototypeLatest = brototypeLatest.responseText.toString();

        Object.keys( broNames ).forEach( function ( broName ) {
            var proName = broNames[broName];
            brofessional( broName, proName );
        });

        function brofessional ( broName, proName ) {
            while ( true ) {
                if ( broName === proName || brototypeLatest.search( broName ) < 0 ) break;
                brototypeLatest = brototypeLatest.replace( broName, proName );
            }
            return;
        }

        var brotied = document.getElementById( 'source-code' );
        brotied.innerHTML = brototypeLatest;

        //document.body.appendChild( brotied );

    }
})();