from rest_framework import serializers
from .models import Cashflow

class CashflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cashflow
        fields = ['net_cash_flow','year', 'month', 'date', 'id','user_id']
        depth = 1