# Generated by Django 3.2.5 on 2021-08-13 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='photo',
            field=models.ImageField(default='default.jpg', upload_to='users'),
        ),
    ]
