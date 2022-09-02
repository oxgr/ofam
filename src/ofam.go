package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func check( e error ) {
	if e != nil {
		panic( e )
	}
}

type Addon struct {
	Name string
	Author string
	Git string
	Github string
	Website string
}

func main() {

	colorRed := "\033[31m"

	OFAM_ROOT, CWD := getPaths();
	fmt.Printf( "OFAM_ROOT: %s%s\nCWD: %s\n", colorRed, OFAM_ROOT, CWD )

	dat, err := os.ReadFile( OFAM_ROOT + "/../../json/ofxAddonsArr.json" )
	check( err )
	
	var addons []Addon
	json.Unmarshal( dat, &addons )
	fmt.Println( "Name:", addons[ 0 ].Name )

	args := os.Args[ 1: ]
	fmt.Println( "Args:", args );
	

	printColors();
}

func getPaths() (string, string) {

	execPath, err := os.Executable()
	check( err ) 
	OFAM_ROOT := filepath.Dir( execPath )

	CWD, err := os.Getwd()
	check( err )

	return OFAM_ROOT, CWD

}

func printColors() {

	colorReset := "\033[0m"

    colorRed := "\033[31m"
    colorGreen := "\033[32m"
    colorYellow := "\033[33m"
    colorBlue := "\033[34m"
    colorPurple := "\033[35m"
    colorCyan := "\033[36m"
    colorWhite := "\033[37m"
    
    fmt.Println(colorRed, "test")
    fmt.Println(string(colorGreen), "test")
    fmt.Println(string(colorYellow), "test")
    fmt.Println(string(colorBlue), "test")
    fmt.Println(string(colorPurple), "test")
    fmt.Println(string(colorWhite), "test")
    fmt.Println(string(colorCyan), "test", string(colorReset))
    fmt.Println("next")

}