from django.urls import path
from donor import views

urlpatterns = [
    path("", views.DonorListAPIView.as_view(), name="donor"),
    path("<int:donor_id>", views.DonorDetailAPIView.as_view(), name="donor-detail"),
    path("create", views.DonorCreateAPIView.as_view(), name="donor-create"),
    path("category/", views.BloodListAPIView.as_view(), name="category-blood"),
    path("category/<int:id>", views.BloodDetailAPIView.as_view(), name="category-detail")
]
