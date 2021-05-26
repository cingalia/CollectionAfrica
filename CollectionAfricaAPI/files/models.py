from django.db import models
from datetime import datetime

class File(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    size = models.IntegerField(default=0)
    path = models.CharField(max_length=200,blank=False, default='')
    type = models.CharField(max_length=200,blank=False, default='')
    timestamp = models.DateField(default=datetime.now)
