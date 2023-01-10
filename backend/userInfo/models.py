from django.db import models
from authentication.models import User
from Asset.models import Asset
from Liability.models import Liability
from Expense.models import Expense
from Income.models import Income

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
    user_monthly_assets = models.ForeignKey(Asset, on_delete=models.CASCADE, null=True, blank=True)
    user_monthly_liabilities = models.ForeignKey(Liability, on_delete=models.CASCADE, null=True, blank=True)
    user_monthly_incomes = models.ForeignKey(Income, on_delete=models.CASCADE, null=True, blank=True)
    user_monthly_expenses = models.ForeignKey(Expense, on_delete=models.CASCADE, null=True, blank=True)

 