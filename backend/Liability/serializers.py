from rest_framework import serializers
from .models import Liability

class LiabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Liability
        fields = ['type_of_liability', 'value', 'date']