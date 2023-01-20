from rest_framework import serializers
from .models import Currentincexp

class CurrentincexpflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Currentincexp
        fields = ['current_income','current_expense', 'year', 'month', 'date','id','user_id']
        depth = 1