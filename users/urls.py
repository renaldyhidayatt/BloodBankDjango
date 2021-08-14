from users import views
from django.urls import path


urlpatterns = [
    path("register", views.RegisterAPIView.as_view(), name="register"),
    path("login", views.LoginAPIView.as_view(), name="login"),
    path("user", views.AuthUserApiView.as_view(), name="user"),
    path("", views.UsersListApiView.as_view(), name="userlist"),
    path("<int:id>", views.UserDetailAPIView.as_view(), name="user-detail"),
]
