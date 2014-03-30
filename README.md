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
1. Download the latest release and un-archive it
2. Copy the photoupweb folder in the root of your django project (where you have your manage.py)
3. Add the following lines to your settings.py:
4. ```MEDIA_ROOT = os.path.join(BASE_DIR, 'photoupweb', 'user_uploads')

    TEMPLATE_DIRS = (
        os.path.join(BASE_DIR, 'photoupweb', 'templates')
    )
    
    STATICFILES_DIRS = (
        os.path.join(BASE_DIR, 'photoupweb', 'static'),
    )
    
    INSTALLED_APPS = (
        # everything else...
        'photoupweb',
    )```
