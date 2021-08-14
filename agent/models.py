from helpers.models import TrackingModel
from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class Agent(TrackingModel):
    name = models.CharField(max_length=100, null=False)
    designation = models.CharField(max_length=255, null=False)
    organization = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    email = models.CharField(max_length=100, null=False)
    city = models.CharField(max_length=255, null=False)
    state = models.CharField(max_length=255, null=False)
    country = models.CharField(max_length=255, null=False)
    photo = models.ImageField(upload_to="agent", null=False)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name

    def delete(self, using=None, keep_parents=False):
        self.photo.storage.delete(self.photo.name)
        super().delete()


class Religion(TrackingModel):
    name = models.CharField(max_length=255, null=False)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name
