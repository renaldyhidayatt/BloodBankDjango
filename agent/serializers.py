from rest_framework import fields
from agent.models import Agent, Religion
from rest_framework.serializers import ModelSerializer


class AgentSerializer(ModelSerializer):
    class Meta:
        model = Agent
        fields = "__all__"


class ReligionSerializer(ModelSerializer):
    class Meta:
        model = Religion
        fields = ("id", "name")
