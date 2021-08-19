from users.models import User
import users
from django.shortcuts import render
from rest_framework.generics import (
    GenericAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework import response, status, permissions

# from us import serializers
from users.serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserDetailSerializer,
    UserListSerializer,
)
from django.contrib.auth import authenticate

## Lanjut lagi
class UserDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    lookup_field = "id"
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserDetailSerializer


class UsersListApiView(ListAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserListSerializer


class AuthUserApiView(GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserDetailSerializer(user)
        return response.Response({"user": serializer.data})


class RegisterAPIView(GenericAPIView):

    authentication_classes = []
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(GenericAPIView):
    authentication_classes = []

    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get("email", None)
        password = request.data.get("password", None)

        user = authenticate(username=email, password=password)

        if user:
            serializer = self.serializer_class(user)

            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response({"message": "Invalid credentials, try again"})
