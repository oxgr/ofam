oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclifTest
$ oclifTest COMMAND
running command...
$ oclifTest (--version)
oclifTest/0.0.0 darwin-x64 node-v16.16.0
$ oclifTest --help [COMMAND]
USAGE
  $ oclifTest COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclifTest hello PERSON`](#ocliftest-hello-person)
* [`oclifTest hello world`](#ocliftest-hello-world)
* [`oclifTest help [COMMAND]`](#ocliftest-help-command)
* [`oclifTest plugins`](#ocliftest-plugins)
* [`oclifTest plugins:install PLUGIN...`](#ocliftest-pluginsinstall-plugin)
* [`oclifTest plugins:inspect PLUGIN...`](#ocliftest-pluginsinspect-plugin)
* [`oclifTest plugins:install PLUGIN...`](#ocliftest-pluginsinstall-plugin-1)
* [`oclifTest plugins:link PLUGIN`](#ocliftest-pluginslink-plugin)
* [`oclifTest plugins:uninstall PLUGIN...`](#ocliftest-pluginsuninstall-plugin)
* [`oclifTest plugins:uninstall PLUGIN...`](#ocliftest-pluginsuninstall-plugin-1)
* [`oclifTest plugins:uninstall PLUGIN...`](#ocliftest-pluginsuninstall-plugin-2)
* [`oclifTest plugins update`](#ocliftest-plugins-update)

## `oclifTest hello PERSON`

Say hello

```
USAGE
  $ oclifTest hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oxgr/oclifTest/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oclifTest hello world`

Say hello world

```
USAGE
  $ oclifTest hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oclifTest help [COMMAND]`

Display help for oclifTest.

```
USAGE
  $ oclifTest help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclifTest.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `oclifTest plugins`

List installed plugins.

```
USAGE
  $ oclifTest plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclifTest plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oclifTest plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclifTest plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oclifTest plugins add

EXAMPLES
  $ oclifTest plugins:install myplugin 

  $ oclifTest plugins:install https://github.com/someuser/someplugin

  $ oclifTest plugins:install someuser/someplugin
```

## `oclifTest plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclifTest plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclifTest plugins:inspect myplugin
```

## `oclifTest plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclifTest plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oclifTest plugins add

EXAMPLES
  $ oclifTest plugins:install myplugin 

  $ oclifTest plugins:install https://github.com/someuser/someplugin

  $ oclifTest plugins:install someuser/someplugin
```

## `oclifTest plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclifTest plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oclifTest plugins:link myplugin
```

## `oclifTest plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclifTest plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclifTest plugins unlink
  $ oclifTest plugins remove
```

## `oclifTest plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclifTest plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclifTest plugins unlink
  $ oclifTest plugins remove
```

## `oclifTest plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclifTest plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclifTest plugins unlink
  $ oclifTest plugins remove
```

## `oclifTest plugins update`

Update installed plugins.

```
USAGE
  $ oclifTest plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
