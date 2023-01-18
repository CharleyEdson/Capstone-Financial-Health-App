from django.db import models
from authentication.models import User

# Create your models here.

class netWorth(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    netWorth = models.IntegerField()
    date = models.DateField()