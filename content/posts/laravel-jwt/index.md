---
title: "JWT authentication with laravel"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "moar"
date: "2019-11-09"
slug: "laravel-jwt-authentication"
tags:
    - laravel
    - restapi
---

For creating REST API we use jwt token for stateless authentication. In this post I will show you how to add jwt to laravel for api authentication.


#### Laravel project setup
We can install laravel simply by composer command

```no-highlight
# composer create-project --prefer-dist laravel/laravel laravel-jwt
```

After laravel installetion we then move to jwt part. We will use the package [jwt-auth](https://github.com/tymondesigns/jwt-auth) in our project. We will use develop version to avoid issue.

```no-highlight
# composer require tymon/jwt-auth:dev-develop --prefer-source
```

In config/app.php add this to providers array

```php
...
Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
```

Add the following facades to aliases array.

```php
'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class, 
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
```

Run this command to publish JWT config file

```no-highlight
$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

Then run this to generate secret key

```no-highlight
$ php artisan jwt:secret
```

