# Generated by Django 4.1.7 on 2023-03-11 05:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionPersonnel", "0010_alter_employe_dateajout"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employe",
            name="dateAjout",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 3, 11, 5, 37, 23, 998539, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
