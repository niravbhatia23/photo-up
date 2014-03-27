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
    default_storage.save(os.path.join(settings.MEDIA_ROOT, val.name), ContentFile(val.read()))
    return HttpResponse("OK")

