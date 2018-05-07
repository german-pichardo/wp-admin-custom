# wp-admin-custom

Build custom wordpress admin panel based on 2 color variables

## Install
```sh
$ npm install wp-admin-custom --save
```

## Use 
`/admin-custom.scss `
or name it as you wish
```scss
// Overwrite variables
$wp-admin-primary:    #090C06;
$wp-admin-secondary:  #F9C13D;

// @import '~wp-admin-custom/admin';
@import 'node_modules/wp-admin-custom/admin';
```

## Use 
```scss
// why not a simple monochromatic palette?
$wp-admin-primary:    #AE2420;
$wp-admin-secondary:  mix(mix($wp-admin-primary,invert($wp-admin-primary),90%),complement($wp-admin-primary),80%) ;
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


