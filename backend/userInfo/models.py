from django.db import models
from authentication.models import User


# Create your models here.

class userInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50)
    age = models.IntegerField()
    gender = models.CharField(max_length=50)
    occupation = models.CharField(max_length=50)
    risk_level = models.IntegerField()
    state_living_in = models.CharField(max_length=50)
    relationship_status = models.CharField(max_length=50)
    budget_value = models.IntegerField()




", on_delete=models.CASCADE, null=True, blank=True"