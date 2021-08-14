from agent import serializers
from rest_framework import response
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.views import APIView
from donor.models import Donor, CategoryBlood
from donor.serializers import CategoryBloodSerializer, DonorSerializer
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status


class DonorListAPIView(ListAPIView):
    serializer_class = DonorSerializer
    queryset = Donor.objects.all()


class DonorCreateAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    serializers_class = DonorSerializer

    def post(self, request, format=None):
        serializers = self.serializers_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return response.Response(serializers.data, status=status.HTTP_200_OK)
        else:
            return response.Response(
                serializers.errors, status=status.HTTP_400_BAD_REQUEST
            )


class DonorDetailAPIView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer
