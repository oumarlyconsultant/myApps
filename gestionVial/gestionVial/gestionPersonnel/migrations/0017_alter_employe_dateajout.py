# Generated by Django 4.1.7 on 2023-03-12 03:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionPersonnel", "0016_alter_employe_dateajout"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employe",
            name="dateAjout",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 3, 12, 3, 22, 12, 212547, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
