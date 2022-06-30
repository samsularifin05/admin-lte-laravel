<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Iventory</title>
</head>

<body>
    <div id="root"></div>
</body>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
<script type="text/javascript" src="{{ mix('plugins/jquery/jquery.min.js') }}"></script>
<script src="{{ mix('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ mix('dist/js/adminlte.min.js') }}"></script>
<script src="{{ mix('plugins/overlayScrollbars/jquery.overlayScrollbars.min.js') }}"></script>
</html>
