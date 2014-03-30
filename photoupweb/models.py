from django.db import models

# Create your models here.

class Photo(models.Model):
    filename = models.CharField(max_length=500)