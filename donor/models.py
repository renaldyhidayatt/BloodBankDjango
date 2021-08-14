from helpers.models import TrackingModel
from agent.models import Religion
from django.db import models

# Create your models here.
class CategoryBlood(TrackingModel):
    name = models.CharField(max_length=10, null=False)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name


class Donor(TrackingModel):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    profession = models.TextField(null=False)
    education = models.TextField(null=False)
    religion = models.OneToOneField(Religion, on_delete=models.CASCADE)
    categoryblood = models.OneToOneField(CategoryBlood, on_delete=models.CASCADE)
    city = models.CharField(max_length=20, null=False)
    country = models.CharField(max_length=20, null=False)
    state = models.CharField(max_length=20, null=False)
    photo = models.ImageField(upload_to="donor", default="default.jpg")

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name
