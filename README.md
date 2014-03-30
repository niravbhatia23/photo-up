photo-up
========
A simple HTML5 based photo uploading app for django projects

> ## Features
>
> 1. Select multiple photos to upload
> 2. See a preview of the selected photos
> 3. Remove selected photos
> 4. Upload photos via AJAX
> 5. View upload progress

Prerequisites
==============
1. Python + Django installation
2. A browser that has support for FileReader, FileList, FormData objects and XHR2

Installation Details
======================
Download the latest release and un-archive it

In the above, copy the photoupweb folder to the root of your django project (where you have your manage.py)

Add the following lines to your settings.py:
```
MEDIA_ROOT = os.path.join(BASE_DIR, 'photoupweb', 'user_uploads')

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'photoupweb', 'templates')
)

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'photoupweb', 'static'),
)

INSTALLED_APPS = (
    # everything else...
    'photoupweb',
)
```

Add these lines to your urls.py:
```
urlpatterns += patterns('photoupweb.views',
    url(r'^photoup/$', 'index'),
    url(r'^photoup/upload/$', 'upload'),
)
```

Run syncdb:
```
python manage.py syncdb
```

That's it! When you run the app, you can access the photo uploader at /photoup/
