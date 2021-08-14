from django.db.models import fields
from donor.models import CategoryBlood, Donor
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class CategoryBloodSerializer(ModelSerializer):
    class Meta:
        model = CategoryBlood
        fields = "__all__"


class DonorSerializer(ModelSerializer):
    class Meta:
        model = Donor
        fields = "__all__"
