import { exec } from 'child_process';
import * as fs from 'fs';

console.log( 'Running ofAddonManager...' );

const OFAM_PATH = __dirname;

console.log( OFAM_PATH );
const config: any = await getJSON( `${OFAM_PATH}/../json/config.json` );
const { OF_PATH } = config;
const CWD = process.cwd();

const AVAIL_ADDONS: any = await getJSON( `${OFAM_PATH}/../json/addons.json` );
console.log( AVAIL_ADDONS.length );

( async () => {


    const args = process.argv
    args.splice( 0, 2 );
    console.log( args );

    switch ( args[ 0 ] ) {

        case 'install':

                const projectAddons = await getAddonsFromMakeFile( `${CWD}/config.make` );
                const existingAddons = await checkExistingAddons( {
                    localAddons: `${CWD}/local_addons/`,
                    globalAddons: `${OF_PATH}/addons`
                } );

                installDependencies( projectAddons, existingAddons, AVAIL_ADDONS );
            
            break;

    }


})()

function installDependencies( addons, existing, AVAIL_ADDONS ) {

    const addonsToClone = addons.filter( addon => addon != existing )

    addonsToClone.forEach( ( addon ) => {

        const match = AVAIL_ADDONS.find( e => e.name == addon );

        if ( !match ) {
            
            console.log( 'Could not find a link for ', addon );
            return;

        } else {

            exec( `
            cd ${CWD}/local_addons/
            git clone ${match.name}
            `)

        }


    } )

}

async function checkExistingAddons( paths ) {

    const { localAddons, globalAddons } = paths;

    let str = '';

    try {
        str = fs.readFileSync( localAddons )
    } catch ( err ) {
        // create if none exists?
    }

}

async function getAddonsFromMakeFile( path ) {
 
    let str = '';
    
    try {
        str = fs.readFileSync( path, { encoding: 'utf8' } );
    } catch ( err ) {
        console.error( 'Could not find config.make file' );
    }

    const arr = str.split( '\n' );

    console.log( arr );

    return arr;

}

async function getJSON( path ) {

    const str = fs.readFileSync( path, { encoding: 'utf8' } );
    let json = {};

    try {
        json = await JSON.parse( str );
    } catch ( err ) {
        console.error( err );
    }

    return json;

}

export {}