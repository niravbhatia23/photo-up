from django.shortcuts import render
from django.http import HttpResponse
from photoupweb.models import PhotoUpload

def index(request):
    return render(request, 'index.html')

def upload(request):
    val = request.FILES['image']
    photo = PhotoUpload(image=val)
    photo.save()
    if photo.pk is None:
        return HttpResponse('FAIL')
    return HttpResponse('OK')

