# Generated by Django 4.1 on 2023-02-12 03:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionPersonnel", "0014_alter_employe_dateajout"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employe",
            name="dateAjout",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 2, 12, 3, 57, 42, 918102, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]