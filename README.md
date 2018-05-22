# wp-admin-custom 4.9.6

Generates custom wordpress admin color palette from one up to 3 colors.

## Install
```sh
$ npm install wp-admin-custom --save
```

## Use 
`/admin-custom.scss ` or name it as you wish
```scss
// It overwrites the default primary color variable. 
// It will generate a monochromatic palette based on this color.
$wp-admin-primary:    #075FB3;

// Optional variables to create a multi color palette
$wp-admin-secondary:  #AE4450;
$wp-admin-tertiary:   #FFC008;

// Overwrite source variable
// `$link`: blue;

// @import '~wp-admin-custom/admin';
@import 'node_modules/wp-admin-custom/admin';

// Overwrite source classes
...
```
 
![Alt Text](https://raw.githubusercontent.com/german-pichardo/wp-admin-custom/master/screenshot.gif)

## Author

**German Pichardo**

* [github/german-pichardo](https://github.com/german-pichardo)
* [http://german-pichardo.com](http://german-pichardo.com)

## Enqueue your own custom stylesheet into wp-admin

* [custom-admin-stylesheet](https://github.com/german-pichardo/custom-admin-stylesheet)


## Need a simple login customizer ?

* [gp-login-customizer](https://github.com/german-pichardo/gp-login-customizer)


