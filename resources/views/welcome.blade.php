<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="base_url" content="{{ url('') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>laravel-react-admin-lte</title>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div id="root" class="wrapper"></div>
</body>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

</html>
