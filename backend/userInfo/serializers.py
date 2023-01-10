from rest_framework import serializers
from .models import userInfo

class userInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = userInfo
        fields = ['id','first_name', 'last_name', 'email', 'phone_number', 'age', 'gender', 'occupation', 'risk_level', 'state_living_in', 'relationship_status', 'budget_value', 'user_ID', 'user_ID_id', 'user_assets_monthly_ID', 'user_assets_monthly_ID_id', 'user_liabilities_monthly_ID','user_liabilities_monthly_ID_id', 'user_monthly_expenses_ID','user_monthly_expenses_ID_id', 'user_monthly_income_ID', 'user_monthly_income_ID_id']
        depth = 1
    user_ID_id = serializers.IntegerField(write_only=True)
    user_assets_monthly_ID_id = serializers.IntegerField(write_only=True)
    user_liabilities_monthly_ID_id = serializers.IntegerField(write_only=True)
    user_monthly_expenses_ID_id = serializers.IntegerField(write_only=True)
    user_monthly_income_ID_id = serializers.IntegerField(write_only=True)