from django.db import models
from datetime import date

class File(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    document = models.FileField(default='settings.MEDIA_ROOT/logos/anonymous.jpg', blank=False)
    size = models.IntegerField(default=0)
    path = models.CharField(max_length=200,blank=False, default='')
    type = models.CharField(max_length=200,blank=False, default='')
    timestamp = models.DateField(default=date.today)
