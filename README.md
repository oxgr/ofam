# ofam
**O**pen **F**rameworks **A**ddon **M**anager

A simple command-line interface to automatically download ofx addons for an Open Frameworks project. Heavily inspired by [ofPackageManager](https://github.com/thomasgeissl/ofPackageManager) by thomasgeissl & others, but differs in that ofam aims to be the simplest CLI package manager you need to get an OF project running.

ofam is still a work-in-progress. Expect breaking changes before 1.0.0.

## Install

1. Get a binary.
   - Download a release.
   - Clone this repository and run `npm install && npm run build`.
   - (TODO: curl command)
2. Run `install.sh`.
3. `cd` to an openFrameworks project directory.
4. `ofam install`.

## The Goal (WIP)

After cloning an openFrameworks project and navigating to its root folder, running `ofam install && make` should compile most OF projects.

## What is isn't

ofam is not a full-blown package manager. There will be no namespace management nor vetting of addons. A database of addons is gathered from [ofxaddons.com](https://ofxaddons.com/) - automatically generated and manually curated by their team. This database is accessible and editable through `~/.ofam/ofxAddons.json`.

ofam does not guarantee compilation for projects requiring addons with edits that are not included in a branch of an addon's main repository.

## How it works

ofam scans an openFrameworks project's `addons.make` file to check for dependencies. Addons listed in regular OF format (`ofx<addon>`) are supported as well as formatting from ofPackageManager (`local_addons/ofx<addon> #<git>@<ref>`). This list is compared with:
- the root openFrameworks/addons/ directory;
- a <project>/local_addons/ directory
- other directories listed in an `ofam-config.json` file (useful for cross-checking other local OF version folders).

If an addon is found locally, a copy is made into a `<project>/local_addons/` directory, or in the root `addons/` directory with a `-global` flag.

If an addon isn't found locally, ofam clones the corresponding addon. The new dependency is then recorded in a format that maximises cross-compatibility with ofPackageManager.