from rest_framework import permissions, response, serializers
from rest_framework.views import APIView
from agent.models import Agent, Religion
from agent.serializers import AgentSerializer, ReligionSerializer
from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.parsers import FormParser, MultiPartParser

from rest_framework import status


class AgentListAPIView(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AgentSerializer
    queryset = Agent.objects.all()


class AgentCreateAPIView(APIView):
    parser_classes = [FormParser, MultiPartParser]
    serializers_class = AgentSerializer

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return response.Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )


class AgentDetailAPIView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer


class ReligionAPIView(ListAPIView):
    serializer_class = ReligionSerializer
    queryset = Religion.objects.all()


class ReligionCreateAPIView(APIView):
    serializers_class = ReligionSerializer

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return response.Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )


class ReligionDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReligionSerializer
    lookup_field = "id"
    queryset = Religion.objects.all()
