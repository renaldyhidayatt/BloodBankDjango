from rest_framework import response, permissions
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.views import APIView
from donor.models import Donor, CategoryBlood
from donor.serializers import CategoryBloodSerializer, DonorSerializer
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status


class BloodListAPIView(ListAPIView):
    serializer_class = CategoryBloodSerializer
    queryset = CategoryBlood.objects.all()


class BloodDetailAPIView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = CategoryBlood.objects.all()
    serializer_class = CategoryBloodSerializer


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


class DonorDetailAPIView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializers_class = DonorSerializer
    parser_classes = [FormParser, MultiPartParser]

    def get_object(self, donor_id):

        try:
            return Donor.objects.get(id=donor_id)
        except Donor.DoesNotExist:
            return None

    def get(self, request, donor_id, *args, **kwargs):

        donor_instance = self.get_object(donor_id)
        if not donor_instance:
            return response.Response(
                {"res": "Object with donor id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = DonorSerializer(donor_instance)
        return response.Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, donor_id, *args, **kwargs):
        donor_instance = self.get_object(donor_id)
        if not donor_instance:
            return response.Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = DonorSerializer(
            instance=donor_instance, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, donor_id, *args, **kwargs):
        donor_instance = self.get_object(donor_id)
        if not donor_instance:
            return response.Response(
                {"res": "Object with donor id does not exists"},
                status.HTTP_400_BAD_REQUEST,
            )
        donor_instance.delete()

        return response.Response({"res": "Object deleted"}, status=status.HTTP_200_OK)


# class DonorDetailAPIView(RetrieveUpdateDestroyAPIView):
#     lookup_field = "id"
#     queryset = Donor.objects.all()
#     serializer_class = DonorSerializer
