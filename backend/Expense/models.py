from django.db import models

# Create your models here.

class Expense(models.Model):
    type_of_expense = models.CharField(max_length=250)
    value = models.IntegerField()
    date = models.DateField()