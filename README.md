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
2. An existing Django project
3. A browser that has support for FileReader, FileList, FormData objects and XHR2

Installation
======================
Download the latest release and un-archive it

In the above, copy the photoupweb folder to the root of your django project (where you have your manage.py)

Make the following changes in your settings.py:
```
TEMPLATE_DIRS = (
    # everything else...
    os.path.join(BASE_DIR, 'photoupweb', 'templates')
)

STATICFILES_DIRS = (
    # everything else...
    os.path.join(BASE_DIR, 'photoupweb', 'static'),
)

INSTALLED_APPS = (
    # everything else...
    'photoupweb',
)

# If you don't have MEDIA_URL and MEDIA_ROOT settings already

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR,...) 
```

Add this to your urls.py:
```
urlpatterns += patterns('photoupweb.views',
    url(r'^photoup/$', 'index'),
    url(r'^photoup/upload/$', 'upload'),
    url(r'^photoup/view/(?P<photo_id>\d+)/$','view_photo')
)
```

If you also want to be able to view uploaded photos in DEBUG mode, you can also add
this to urls.py
```
# Add these at the top with other import statements
from django.conf import settings
from django.conf.urls.static import static

# Add this at the end
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

Run syncdb:
```
python manage.py syncdb
```

That's it! When you run your django project, you can access the photo uploader at /photoup/

Notes
==============
* Uploaded photos are stored in a 'photoup' folder in the MEDIA_ROOT location.
* For each uploaded photo, an instance of the PhotoUpload model is created.
* To view an uploaded photo, use the url /photoup/some photo id
