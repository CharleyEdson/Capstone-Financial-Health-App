from rest_framework import serializers
from .models import netWorth

class netWorthSerializer(serializers.ModelSerializer):
    class Meta:
        model = netWorth
        fields = ['id','netWorth', 'date','user_id']
        depth = 1