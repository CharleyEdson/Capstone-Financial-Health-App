from django.db import models

# Create your models here.

class Liability(models.Model):
    type_of_liability = models.CharField(max_length=250)
    value = models.IntegerField()
    date = models.DateField()