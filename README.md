(./public/neumatter-logo-blackBG-01.svg)

## Table of Contents
1. [ Download ](#download) <br />
2. [ Packages ](#packages) <br />
    a. [ @neumatter/neucss ](#neucss) <br />
        1. [ Install ](#install) <br />
        2. [ Getting Started ](#gettingstarted) <br />
        3. [ Generate Config File ](#genconfig) <br />
        4. [ Configuration Options ](#config) <br />
        5. [ Compile ](#compile) <br />

<a name="download"></a>
# Download
Download the /_lib directory

<a name="packages"></a>
# Packages
1. [ @neumatter/neucss ](#neucss) <br /><br /><br />

<a name="neucss"></a>
## @neumatter/neucss

<a name="install"></a>
### Install
    
    npm i @neumatter/neucss 

<a name="gettingstarted"></a>
### Getting Started
Edit your package.json file and in the scripts write:
    
    "neucss": "./node_modules/.bin/neucss"

<a name="genconfig"></a>
### Generate the neumatter.config file
    
    npm run neucss config

<a name="config"></a>
### Configuration Options
To compile neumatter.css to a certain directory edit the exportPath in neumatter.config.

Edit colors, system margin & padding, system border radius, and exclude css from being compiled.

<a name="compile"></a>
### Compile neumatter.css
    
    npm run neucss compile
