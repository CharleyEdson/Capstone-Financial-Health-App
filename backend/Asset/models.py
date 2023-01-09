from django.db import models

# Create your models here.

class Asset(models.Model):
    asset_type = models.CharField(max_length=255)
    value = models.IntegerField()
    date = models.DateField()