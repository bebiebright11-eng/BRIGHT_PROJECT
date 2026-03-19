from rest_framework import serializers
from .models import InternshipPlacement, WeeklyLog
from accounts.serializers import UserSerializer
from organizations.serializers import OrganizationSerializer

class WeeklyLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyLog
        fields = '__all__'

class PlacementSerializer(serializers.ModelSerializer):
    # This "nests" the details so the frontend sees names, not just IDs
    student = UserSerializer(read_only=True)
    organization = OrganizationSerializer(read_only=True)
    logs = WeeklyLogSerializer(many=True, read_only=True)

    class Meta:
        model = InternshipPlacement
        fields = ['id', 'student', 'organization', 'status', 'logs', 'academic_supervisor']