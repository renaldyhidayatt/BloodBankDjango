from django.urls import path
from agent import views

urlpatterns = [
    path("religion", views.ReligionAPIView.as_view(), name="religion"),
    path(
        "religion/<int:id>",
        views.ReligionDetailAPIView.as_view(),
        name="religion-detail",
    ),
    path(
        "religion/create",
        views.ReligionCreateAPIView.as_view(),
        name="religion-create",
    ),
    path("", views.AgentListAPIView.as_view(), name="agent"),
    path("create", views.AgentCreateAPIView.as_view(), name="agent-create"),
    path("<int:id>", views.AgentDetailAPIView.as_view(), name="agent-detail"),
]
