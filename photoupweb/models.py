from django.db import models

# Create your models here.

class PhotoUpload(models.Model):
    image = models.ImageField(upload_to='photoup')