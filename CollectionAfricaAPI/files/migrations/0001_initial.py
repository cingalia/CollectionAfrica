# Generated by Django 3.2.3 on 2021-05-26 17:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tutorial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=70)),
                ('description', models.CharField(default='', max_length=200)),
                ('size', models.IntegerField(default=0)),
                ('path', models.CharField(default='', max_length=200)),
                ('type', models.CharField(default='', max_length=200)),
                ('timestamp', models.DateField(default=datetime.datetime.now)),
            ],
        ),
    ]