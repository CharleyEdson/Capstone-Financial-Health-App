from rest_framework import serializers
from .models import userInfo

class userInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = userInfo
        fields = ['id','first_name', 'last_name', 'email', 'phone_number', 'age', 'gender', 'occupation', 'risk_level', 'state_living_in', 'relationship_status', 'budget_value', 'user', 'user_id', 'user_monthly_assets', 'user_monthly_assets_id' , 'user_monthly_liabilities', 'user_monthly_incomes', 'user_monthly_expenses']
        depth = 1

""" user_ID_id = serializers.IntegerField(write_only=True)
    user_assets_monthly_ID_id = serializers.IntegerField(write_only=True)
    user_liabilities_monthly_ID_id = serializers.IntegerField(write_only=True)
    user_monthly_expenses_ID_id = serializers.IntegerField(write_only=True)
    user_monthly_income_ID_id = serializers.IntegerField(write_only=True)"""