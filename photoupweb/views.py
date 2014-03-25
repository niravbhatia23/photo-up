from django.shortcuts import render
from django.http import HttpResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
import os

def index(request):
    return render(request, 'index.html')

def upload(request):
    val = request.FILES['image']
    handle_uploaded_file(val)
    return HttpResponse("OK")

def handle_uploaded_file(f):
    default_storage.save(os.path.join(settings.MEDIA_ROOT, f.name), ContentFile(f.read()))

