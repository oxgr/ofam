import * as fs from 'fs';

const start = Date.now();

console.log( 'Reading ofxaddons.com.html...' );
const ofxHTML = fs.readFileSync( './ofxaddons.com.html', { encoding: 'utf8' } );

console.log( 'Scraping Github links...' );
const tokens = ofxHTML.split( '\"' );
const urls = tokens.filter( ( e ) => e.includes( 'github.com' ) );

console.log( 'Mapping to JSON...' );
const addons = ( () => {

    const main = {};
    
    const arr = urls
        .map( ( url ) => {

            const tokens = url.split( '/' );
            const name = tokens[ tokens.length - 1 ];
            
            if ( !name.includes( 'ofx' ) ) return;
            
            const author = tokens[ tokens.length - 2 ];
            const github = author + '/' + name;
            const website = url.replace( 'http', 'https' );
            const git = website + '.git';

            return {
                name: name,
                author: author,
                github: github,
                git: git,
                website: website
            }

        })
        .filter( ( e ) => e != null )

    if ( process.argv[ 2 ] == '-a' ) {
        return arr;
    }

    arr.forEach( ( addon ) => 
            main[ addon.name ] = {
                author: addon.author,
                git: addon.git,
                // github: addon.github,
                website: addon.website
            }
        )

        return main;
})()

fs.writeFileSync( './addons.json', JSON.stringify( addons, null, 2 ) );

console.log( 'Done!' );
console.log( `Completed in ${ ( ( Date.now() - start ) * 0.001 ).toFixed( 3 ) }s`)