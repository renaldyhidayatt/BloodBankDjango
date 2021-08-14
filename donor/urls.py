from django.urls import path
from donor import views

urlpatterns = [
    path("", views.DonorListAPIView.as_view(), name="donor"),
    path("<int:id>", views.DonorDetailAPIView.as_view(), name="donor-detail"),
    path("create", views.DonorCreateAPIView.as_view(), name="donor-create"),
]
