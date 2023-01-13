from rest_framework import serializers
from .models import userInfo

class userInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = userInfo
        fields = ['id','first_name', 'last_name', 'email', 'phone_number', 'age', 'gender', 'occupation', 'risk_level', 'state_living_in', 'relationship_status', 'budget_value', 'budget_timeframe', 'verified_facts', 'user', 'user_id']
        depth = 1

    """user_id = serializers.IntegerField(write_only=True)"""
