<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Venah partners with businesses to create engaging digital experiences that drive user satisfaction and business growth. Discover how we can bring your vision to life." />
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Favicon Links -->
    <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" sizes="192x192" href="/favicon/android-chrome-192x192.png">
    <link rel="icon" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="manifest" href="/favicon/site.webmanifest">


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
