# Generated by Django 4.1.7 on 2023-03-12 03:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionStock", "0012_alter_coutprixmat_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="coutprixmat",
            name="date",
            field=models.DateField(
                default=datetime.datetime(
                    2023, 3, 12, 3, 24, 7, 853647, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]