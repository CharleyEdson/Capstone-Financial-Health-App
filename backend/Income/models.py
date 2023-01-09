from django.db import models

# Create your models here.
class Income(models.Model):
    income_type = models.CharField(max_length=255)
    value = models.IntegerField()
    date = models.DateField()